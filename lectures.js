document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("#lecture-search");
  const yearSelect = document.querySelector("#year-filter");
  const semesterSelect = document.querySelector("#semester-filter");
  const resetButton = document.querySelector("#reset-filters");
  const resultsContainer = document.querySelector("#lecture-results");
  const summary = document.querySelector("#lecture-summary");

  if (!searchInput || !yearSelect || !semesterSelect || !resultsContainer || !summary) {
    return;
  }

  const archive = Array.isArray(window.lectureArchive) ? window.lectureArchive.slice() : [];
  const semesterOrder = { Fall: 3, Summer: 2, Spring: 1 };

  archive.sort((a, b) => {
    const yearDiff = Number(b.year) - Number(a.year);
    if (yearDiff !== 0) {
      return yearDiff;
    }

    const semesterDiff = (semesterOrder[b.semester] || 0) - (semesterOrder[a.semester] || 0);
    if (semesterDiff !== 0) {
      return semesterDiff;
    }

    return new Date(b.date) - new Date(a.date);
  });

  const years = [...new Set(archive.map((entry) => entry.year))].sort((a, b) => Number(b) - Number(a));
  const semesters = ["Spring", "Summer", "Fall"].filter((term) => archive.some((entry) => entry.semester === term));

  yearSelect.innerHTML = '<option value="">All years</option>' + years.map((year) => `<option value="${year}">${year}</option>`).join("");
  semesterSelect.innerHTML = '<option value="">All semesters</option>' + semesters.map((semester) => `<option value="${semester}">${semester}</option>`).join("");

  const params = new URLSearchParams(window.location.search);
  if (params.has("q")) {
    searchInput.value = params.get("q");
  }
  if (params.has("year")) {
    yearSelect.value = params.get("year");
  }
  if (params.has("semester")) {
    semesterSelect.value = params.get("semester");
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function visualMarkup(type, title) {
    const label = escapeHtml(type);
    const visuals = {
      Algebra: `
        <svg viewBox="0 0 320 220" aria-hidden="true">
          <g fill="none" stroke="rgba(39,141,231,0.72)" stroke-width="2">
            <rect x="48" y="56" width="74" height="74" rx="8"></rect>
            <rect x="138" y="56" width="74" height="74" rx="8"></rect>
            <rect x="228" y="56" width="44" height="74" rx="8"></rect>
            <path d="M58 84h54M58 102h54M148 84h54M148 102h54M238 84h24M238 102h24"></path>
            <path d="M40 170c26-12 48-18 68-18 28 0 48 12 72 12 18 0 38-7 60-20"></path>
          </g>
        </svg>
      `,
      Analysis: `
        <svg viewBox="0 0 320 220" aria-hidden="true">
          <g fill="none" stroke="rgba(39,141,231,0.72)" stroke-width="2">
            <path d="M36 168h248M62 188V42"></path>
            <path d="M72 148c22-84 58-84 82 0s58 84 92 0"></path>
            <path d="M72 118c16-22 34-34 56-34 18 0 34 6 46 20"></path>
          </g>
        </svg>
      `,
      Geometry: `
        <svg viewBox="0 0 320 220" aria-hidden="true">
          <g fill="none" stroke="rgba(39,141,231,0.72)" stroke-width="2">
            <circle cx="112" cy="112" r="68"></circle>
            <path d="M112 44 196 156 50 156Z"></path>
            <path d="M112 44v112M50 156 196 156"></path>
            <circle cx="224" cy="78" r="24"></circle>
          </g>
        </svg>
      `,
      Number: `
        <svg viewBox="0 0 320 220" aria-hidden="true">
          <g fill="none" stroke="rgba(39,141,231,0.72)" stroke-width="2">
            <path d="M52 168h216"></path>
            <path d="M80 52v116M160 52v116M240 52v116"></path>
            <path d="M80 80h160M80 112h160M80 144h160"></path>
            <path d="M100 64 220 160"></path>
          </g>
        </svg>
      `,
      Topology: `
        <svg viewBox="0 0 320 220" aria-hidden="true">
          <g fill="none" stroke="rgba(39,141,231,0.72)" stroke-width="2">
            <path d="M58 112c0-34 28-62 62-62 44 0 48 38 74 38 18 0 34-14 50-14 24 0 44 18 44 40 0 30-26 54-58 54-24 0-34-14-62-14-28 0-42 20-72 20-22 0-38-16-38-36 0-18 12-30 28-30"></path>
            <circle cx="110" cy="112" r="18"></circle>
            <circle cx="218" cy="112" r="18"></circle>
          </g>
        </svg>
      `,
      Combinatorics: `
        <svg viewBox="0 0 320 220" aria-hidden="true">
          <g fill="none" stroke="rgba(39,141,231,0.72)" stroke-width="2">
            <circle cx="84" cy="70" r="12"></circle>
            <circle cx="160" cy="54" r="12"></circle>
            <circle cx="232" cy="86" r="12"></circle>
            <circle cx="104" cy="156" r="12"></circle>
            <circle cx="198" cy="160" r="12"></circle>
            <path d="M96 70 148 54M172 58 220 82M92 80 108 144M224 98 202 148M116 154 186 160M96 74 222 86M160 66 198 148"></path>
          </g>
        </svg>
      `,
      Community: `
        <svg viewBox="0 0 320 220" aria-hidden="true">
          <g fill="none" stroke="rgba(39,141,231,0.72)" stroke-width="2">
            <circle cx="92" cy="88" r="24"></circle>
            <circle cx="160" cy="72" r="26"></circle>
            <circle cx="228" cy="94" r="22"></circle>
            <path d="M58 164c6-24 24-38 46-38 24 0 40 14 48 38"></path>
            <path d="M116 170c8-34 28-52 54-52 28 0 48 18 56 52"></path>
            <path d="M190 164c6-24 20-36 40-36 20 0 34 12 40 36"></path>
          </g>
        </svg>
      `,
      Seminar: `
        <svg viewBox="0 0 320 220" aria-hidden="true">
          <g fill="none" stroke="rgba(39,141,231,0.72)" stroke-width="2">
            <rect x="54" y="52" width="212" height="116" rx="16"></rect>
            <path d="M84 86h152M84 112h96M84 138h128"></path>
            <path d="M118 168v20M202 168v20M140 188h40"></path>
          </g>
        </svg>
      `,
      "Algebraic Geometry": `
        <svg viewBox="0 0 320 220" aria-hidden="true">
          <g fill="none" stroke="rgba(39,141,231,0.72)" stroke-width="2">
            <path d="M54 150c18-46 42-70 72-70 32 0 44 24 64 24 22 0 32-18 74-18"></path>
            <path d="M58 160c20-16 36-24 58-24 26 0 36 16 62 16 22 0 38-8 78-30"></path>
            <circle cx="100" cy="98" r="22"></circle>
            <circle cx="214" cy="120" r="26"></circle>
          </g>
        </svg>
      `,
      "Group Theory": `
        <svg viewBox="0 0 320 220" aria-hidden="true">
          <g fill="none" stroke="rgba(39,141,231,0.72)" stroke-width="2">
            <polygon points="160,44 240,90 240,178 160,220 80,178 80,90"></polygon>
            <path d="M160 44v176M80 90l160 88M240 90 80 178"></path>
          </g>
        </svg>
      `,
      "Symplectic Geometry": `
        <svg viewBox="0 0 320 220" aria-hidden="true">
          <g fill="none" stroke="rgba(39,141,231,0.72)" stroke-width="2">
            <path d="M56 110c44-70 88-70 132 0s88 70 76-6"></path>
            <path d="M56 136c44 70 88 70 132 0s88-70 76 6"></path>
            <circle cx="160" cy="124" r="24"></circle>
          </g>
        </svg>
      `,
      "Mathematical Physics": `
        <svg viewBox="0 0 320 220" aria-hidden="true">
          <g fill="none" stroke="rgba(39,141,231,0.72)" stroke-width="2">
            <path d="M60 170 110 56 160 170 210 56 260 170"></path>
            <circle cx="110" cy="56" r="10"></circle>
            <circle cx="210" cy="56" r="10"></circle>
            <path d="M70 144h180"></path>
          </g>
        </svg>
      `,
      "Research Showcase": `
        <svg viewBox="0 0 320 220" aria-hidden="true">
          <g fill="none" stroke="rgba(39,141,231,0.72)" stroke-width="2">
            <rect x="48" y="58" width="78" height="102" rx="10"></rect>
            <rect x="140" y="42" width="62" height="118" rx="10"></rect>
            <rect x="216" y="80" width="56" height="80" rx="10"></rect>
            <path d="M62 88h50M62 108h50M154 70h34M154 90h34M154 110h34M228 110h32"></path>
          </g>
        </svg>
      `,
      Archive: `
        <svg viewBox="0 0 320 220" aria-hidden="true">
          <g fill="none" stroke="rgba(39,141,231,0.72)" stroke-width="2">
            <rect x="64" y="48" width="160" height="124" rx="14"></rect>
            <path d="M100 80h88M100 108h88M100 136h64"></path>
            <path d="M224 92h32M224 116h32M224 140h32"></path>
          </g>
        </svg>
      `
    };

    return `
      <div class="art-label">${label}</div>
      ${visuals[type] || visuals.Archive}
      <div class="microcopy" style="position:absolute;left:18px;right:18px;bottom:18px;z-index:1;">
        <strong style="display:block;color:var(--heading);font-size:1rem;">${escapeHtml(title)}</strong>
      </div>
    `;
  }

  function termName(entry) {
    return `${entry.semester} ${entry.year}`;
  }

  function updateSearchParams() {
    const next = new URLSearchParams();
    if (searchInput.value.trim()) {
      next.set("q", searchInput.value.trim());
    }
    if (yearSelect.value) {
      next.set("year", yearSelect.value);
    }
    if (semesterSelect.value) {
      next.set("semester", semesterSelect.value);
    }
    const query = next.toString();
    const nextUrl = query ? `${window.location.pathname}?${query}` : window.location.pathname;
    window.history.replaceState({}, "", nextUrl);
  }

  function getFilteredArchive() {
    const query = searchInput.value.trim().toLowerCase();
    const selectedYear = yearSelect.value;
    const selectedSemester = semesterSelect.value;

    return archive.filter((entry) => {
      const matchesYear = !selectedYear || entry.year === selectedYear;
      const matchesSemester = !selectedSemester || entry.semester === selectedSemester;
      const haystack = [
        entry.title,
        entry.speaker,
        entry.topic,
        entry.year,
        entry.semester,
        entry.location,
        entry.blurb,
        entry.description
      ].join(" ").toLowerCase();
      const matchesQuery = !query || haystack.includes(query);
      return matchesYear && matchesSemester && matchesQuery;
    });
  }

  function render() {
    updateSearchParams();
    const filtered = getFilteredArchive();
    const grouped = new Map();

    filtered.forEach((entry) => {
      const key = termName(entry);
      if (!grouped.has(key)) {
        grouped.set(key, []);
      }
      grouped.get(key).push(entry);
    });

    const resultsText = filtered.length === 1 ? "1 lecture" : `${filtered.length} lectures`;
    const activeFilters = [yearSelect.value, semesterSelect.value, searchInput.value.trim()].filter(Boolean).length;
    summary.textContent = activeFilters ? `${resultsText} match your current filters.` : `${resultsText} in the current archive.`;

    if (!filtered.length) {
      resultsContainer.innerHTML = '<div class="empty-state">No lectures match that search yet. Try a different year, semester, speaker, or topic.</div>';
      return;
    }

    resultsContainer.innerHTML = [...grouped.entries()].map(([groupName, entries]) => `
      <section class="term-group" data-reveal>
        <div class="term-heading">
          <h2>${escapeHtml(groupName)}</h2>
          <span class="meta-pill">${entries.length} item${entries.length === 1 ? "" : "s"}</span>
        </div>
        <div class="lecture-list">
          ${entries.map((entry) => `
            <article class="lecture-card" data-lecture-id="${escapeHtml(entry.id)}">
              <div class="lecture-art">
                ${visualMarkup(entry.topic, entry.semester)}
              </div>
              <div class="lecture-body">
                <div class="lecture-meta">
                  <span class="meta-pill">${escapeHtml(entry.date)}</span>
                  <span class="meta-pill">${escapeHtml(entry.topic)}</span>
                  <span class="meta-pill">${escapeHtml(entry.location)}</span>
                </div>
                <h3 class="lecture-title">${escapeHtml(entry.title)}</h3>
                <div class="lecture-subtitle">${escapeHtml(entry.speaker)}</div>
                <div class="lecture-actions">
                  <button class="lecture-toggle" type="button" data-toggle-detail aria-expanded="false">Read more</button>
                  <span class="microcopy">${escapeHtml(entry.semester)} ${escapeHtml(entry.year)}</span>
                </div>
                <div class="lecture-detail">
                  <div class="lecture-detail-inner">
                    <p>${escapeHtml(entry.description)}</p>
                  </div>
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `).join("");

    const revealNodes = Array.from(resultsContainer.querySelectorAll("[data-reveal]"));
    revealNodes.forEach((node) => node.classList.add("visible"));
  }

  resultsContainer.addEventListener("click", (event) => {
    const toggle = event.target.closest("[data-toggle-detail]");
    if (!toggle) {
      return;
    }
    const card = toggle.closest(".lecture-card");
    const expanded = card.classList.toggle("expanded");
    toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    toggle.textContent = expanded ? "Hide details" : "Read more";
  });

  [searchInput, yearSelect, semesterSelect].forEach((field) => {
    field.addEventListener("input", render);
    field.addEventListener("change", render);
  });

  resetButton.addEventListener("click", () => {
    searchInput.value = "";
    yearSelect.value = "";
    semesterSelect.value = "";
    render();
  });

  render();
});
