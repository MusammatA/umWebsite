const DEFAULT_PROFILE_URL = "https://www.instagram.com/columbia.ums/";
const DEFAULT_API_VERSION = "v23.0";
const PAGE_LIMIT = 100;
const MAX_PAGES = 10;

function mediaTypeLabel(type) {
  const labels = {
    IMAGE: "Photo",
    VIDEO: "Video",
    CAROUSEL_ALBUM: "Carousel"
  };

  return labels[type] || "Post";
}

async function fetchPagedMedia(initialUrl) {
  const items = [];
  let pageCount = 0;
  let nextUrl = initialUrl.toString();

  while (nextUrl && pageCount < MAX_PAGES) {
    const response = await fetch(nextUrl);
    const payload = await response.json();

    if (!response.ok) {
      const message = payload?.error?.message || "Instagram API request failed.";
      throw new Error(message);
    }

    if (Array.isArray(payload.data)) {
      items.push(...payload.data);
    }

    nextUrl = payload?.paging?.next || null;
    pageCount += 1;
  }

  return items;
}

async function fetchAllMediaWithFacebookLogin(userId, accessToken, apiVersion) {
  const initialUrl = new URL(`https://graph.facebook.com/${apiVersion}/${userId}/media`);
  initialUrl.searchParams.set("fields", "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp");
  initialUrl.searchParams.set("limit", String(PAGE_LIMIT));
  initialUrl.searchParams.set("access_token", accessToken);
  return fetchPagedMedia(initialUrl);
}

async function fetchAllMediaWithInstagramLogin(accessToken, apiVersion) {
  const initialUrl = new URL(`https://graph.instagram.com/${apiVersion}/me/media`);
  initialUrl.searchParams.set("fields", "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp");
  initialUrl.searchParams.set("limit", String(PAGE_LIMIT));
  initialUrl.searchParams.set("access_token", accessToken);
  return fetchPagedMedia(initialUrl);
}

module.exports = async function handler(req, res) {
  const profile = process.env.INSTAGRAM_PROFILE_URL || DEFAULT_PROFILE_URL;
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;
  const apiVersion = process.env.INSTAGRAM_API_VERSION || DEFAULT_API_VERSION;

  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=86400");

  if (!accessToken) {
    res.status(200).json({
      configured: false,
      profile,
      message: "Add INSTAGRAM_ACCESS_TOKEN in Vercel to enable automatic Instagram gallery updates. INSTAGRAM_USER_ID is optional if you use Instagram Login."
    });
    return;
  }

  try {
    const media = userId
      ? await fetchAllMediaWithFacebookLogin(userId, accessToken, apiVersion)
      : await fetchAllMediaWithInstagramLogin(accessToken, apiVersion);
    const normalized = media
      .filter((item) => item?.permalink && item?.timestamp)
      .map((item) => ({
        id: item.id,
        caption: item.caption || "",
        mediaType: item.media_type || "POST",
        mediaTypeLabel: mediaTypeLabel(item.media_type),
        mediaUrl: item.media_url || "",
        thumbnailUrl: item.thumbnail_url || "",
        permalink: item.permalink,
        timestamp: item.timestamp,
        year: new Date(item.timestamp).getFullYear()
      }))
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    res.status(200).json({
      configured: true,
      profile,
      media: normalized
    });
  } catch (error) {
    res.status(502).json({
      configured: true,
      profile,
      error: error.message || "Unable to load Instagram media."
    });
  }
};
