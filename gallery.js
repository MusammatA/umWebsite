document.addEventListener("DOMContentLoaded", () => {
  const statusCard = document.querySelector("#gallery-status");
  const galleryRoot = document.querySelector("#gallery-root");

  if (!galleryRoot) {
    return;
  }

  if (galleryRoot.querySelector(".gallery-year-section")) {
    return;
  }

  function escapeHtml(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function formatDate(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return "";
    }
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(date);
  }

  function captionSnippet(caption) {
    const source = (caption || "").trim();
    if (!source) {
      return "Open this post on Instagram.";
    }
    return source.length > 170 ? `${source.slice(0, 167).trim()}...` : source;
  }

  function mediaPreview(item) {
    const imageUrl = item.thumbnailUrl || item.mediaUrl || "";
    if (!imageUrl) {
      return '<div class="gallery-fallback">Instagram post</div>';
    }

    return `
      <img
        class="gallery-thumb"
        src="${escapeHtml(imageUrl)}"
        alt="${escapeHtml(item.alt || item.caption || "Instagram post from Columbia Undergraduate Math Society")}"
        loading="lazy"
      >
    `;
  }

  function renderYears(media) {
    const years = [...new Set(media.map((item) => String(item.year)))].sort((a, b) => Number(b) - Number(a));

    const yearNav = `
      <nav class="gallery-year-nav" aria-label="Gallery years">
        ${years.map((year) => `<a href="#gallery-year-${escapeHtml(year)}">${escapeHtml(year)}</a>`).join("")}
      </nav>
    `;

    const sections = years.map((year) => {
      const items = media.filter((item) => String(item.year) === year);
      return `
        <section class="gallery-year-section" id="gallery-year-${escapeHtml(year)}">
          <h2>${escapeHtml(year)}</h2>
          <div class="gallery-media-grid">
            ${items.map((item) => `
              <article class="gallery-card">
                <a class="gallery-media-link" href="${escapeHtml(item.permalink)}" target="_blank" rel="noreferrer">
                  <div class="gallery-media-frame">
                    ${mediaPreview(item)}
                    <span class="gallery-type-pill">${escapeHtml(item.mediaTypeLabel)}</span>
                  </div>
                </a>
                <div class="gallery-card-body">
                  <div class="gallery-meta">
                    <span>${escapeHtml(formatDate(item.timestamp))}</span>
                  </div>
                  <p class="gallery-caption">${escapeHtml(captionSnippet(item.caption))}</p>
                  <a class="button" href="${escapeHtml(item.permalink)}" target="_blank" rel="noreferrer">Open on Instagram</a>
                </div>
              </article>
            `).join("")}
          </div>
        </section>
      `;
    }).join("");

    galleryRoot.innerHTML = yearNav + sections;
  }

  function renderMessage(title, body, buttonHref) {
    if (!statusCard) {
      return;
    }
    statusCard.innerHTML = `
      <h2 class="contact-title">${escapeHtml(title)}</h2>
      <p class="card-copy">${escapeHtml(body)}</p>
      ${buttonHref ? `<a class="button" href="${escapeHtml(buttonHref)}" target="_blank" rel="noreferrer">Open Instagram</a>` : ""}
    `;
    statusCard.classList.add("visible");
  }

  async function loadGallery() {
    try {
      const response = await fetch("/api/instagram-feed");
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "Unable to load Instagram posts right now.");
      }

      if (!payload.configured) {
        renderMessage(
          "Instagram connection not finished yet",
          payload.message || "The gallery page is ready, but the Instagram API token still needs to be added in Vercel.",
          payload.profile || "https://www.instagram.com/columbia.ums/"
        );
        return;
      }

      const media = Array.isArray(payload.media) ? payload.media : [];
      if (!media.length) {
        renderMessage(
          "No Instagram posts found",
          "The gallery is connected, but there are no posts available to show yet.",
          payload.profile || "https://www.instagram.com/columbia.ums/"
        );
        return;
      }

      statusCard.remove();
      renderYears(media);
    } catch (error) {
      renderMessage(
        "Instagram gallery unavailable",
        error.message || "The site could not load Instagram posts right now.",
        "https://www.instagram.com/columbia.ums/"
      );
    }
  }

  loadGallery();
});
