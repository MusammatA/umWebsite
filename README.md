# Columbia Undergraduate Math Society Website

This project is a redesigned website for the Columbia Undergraduate Math Society.

What I changed:

- Built separate pages for `Home`, `Lectures`, `Proof Writing Workshop`, `Leadership`, `Community`, and `Contact`.
- Added a searchable lectures page with filters by year and semester.
- Organized proof workshop handouts by year.
- Added current leadership bios and previous leadership history.
- Added a community page with Instagram reels.
- Added a gallery page that can auto-load Instagram posts and organize them by year.
- Added clear contact links for email, Instagram, and the mailing list.
- Updated the homepage with the club logo, club photos, a mailing list section, an upcoming event section, and a quick help section.

Project cleanup:

- Moved the website photos into one organized folder: `assets/photos/`
- Grouped images into:
  - `assets/photos/branding`
  - `assets/photos/home`
  - `assets/photos/leadership`

Main files:

- `index.html` - homepage
- `lectures.html` - lecture archive
- `workshop.html` - proof writing workshop
- `leadership.html` - current and previous leadership
- `community.html` - community reels
- `gallery.html` - Instagram gallery grouped by year
- `contact.html` - contact links
- `styles.css` - shared site styling
- `site.js` - shared page behavior
- `lectures.js` and `lectures-data.js` - lecture archive behavior and data

Instagram gallery setup:

- The site includes `api/instagram-feed.js` for automatic Instagram syncing on Vercel.
- To turn it on, add these environment variables in Vercel:
  - `INSTAGRAM_USER_ID`
  - `INSTAGRAM_ACCESS_TOKEN`
- Optional:
  - `INSTAGRAM_API_VERSION`
  - `INSTAGRAM_PROFILE_URL`
