# The Aydin Lab website — deployment & editing guide

This is a plain HTML/CSS/JS site (no build step). It's free to host and comes with a
simple web-based editor (no code) for the two things you'll update most often:
**People** and **Publications**.

## 1. Put it on GitHub (free)

1. Go to github.com, sign in (or create a free account).
2. Create a new repository, e.g. `aydin-lab-website`. Keep it Public.
3. Upload every file/folder in this package to that repository (drag-and-drop
   works fine on GitHub's "Add file → Upload files" screen). Keep the folder
   structure exactly as-is (`data/`, `images/`, `js/`, `admin/` all need to stay
   where they are).

## 2. Host it on Netlify (free)

1. Go to netlify.com and sign up — easiest is "Sign up with GitHub."
2. "Add new site" → "Import an existing project" → pick your GitHub repo.
3. Leave the build command blank and publish directory as `/` (root). Deploy.
4. Netlify gives you a random URL like `verdant-choux-123.netlify.app` — confirm
   the site loads there before moving on.

## 3. Point theaydinlab.com at it

1. In Netlify: Site settings → Domain management → "Add a domain" →
   `theaydinlab.com`.
2. Netlify will show you either an "A record" IP address or a "nameserver"
   option. Simplest: use the A record + CNAME it shows you, and add those to
   your domain's DNS settings whichever registrar you bought the domain
   through. (If you tell me who you registered the domain with, e.g.
   Squarespace Domains, GoDaddy, Namecheap, I can give exact click-by-click
   steps for that registrar.)
3. DNS changes can take anywhere from a few minutes to ~24 hours to fully
   propagate.

## 4. Turn on the content editor (Decap CMS) — no code needed after this

This lets you log in at `theaydinlab.com/admin` and add/edit People and
Publications through a web form, similar to Squarespace's editor, for free.

1. In Netlify: Site settings → Identity → "Enable Identity."
2. Under Identity → Registration, set it to **Invite only** (so random people
   can't sign up).
3. Under Identity → Services, enable **Git Gateway**. This lets the editor save
   changes back to your GitHub repo automatically.
4. Go to the Identity tab (top-level, not settings) → "Invite users" → enter
   your own email (ba2855@cumc.columbia.edu). You'll get an email — click it,
   set a password.
5. Visit `theaydinlab.com/admin` (or the netlify.app URL + `/admin` before your
   domain is connected), log in with that password.
6. You'll see two collections: **People** and **Publications**. Click "New" or
   click an existing entry to edit it, fill in the fields, hit "Publish." The
   site rebuilds automatically in under a minute.

To add a new lab member: People → the "Lab Members" file → add a new item to
the list → fill in Name, Role/Title, upload a Photo, write a Bio → Publish.

## Previewing on your own computer

If you just double-click `people.html` or `publications.html` to open them
straight from a folder, the page still loads — it falls back to a copy of the
data baked into the page itself. Once the site is actually hosted (step 2
above), it always loads People/Publications live from `data/people.json` and
`data/publications.json` instead, so any edit you make through the `/admin`
editor shows up right away. The only time the baked-in copy can go stale is if
you hand-edit the JSON files directly and then preview locally before
deploying — if that happens, just tell me and I'll resync it, or simply upload
to Netlify where it isn't an issue.

## What's NOT in the editor

Home, Research, Contact (which also covers joining the lab and giving),
Funding, and Lab Values page text is plain HTML, since it changes rarely. If
you want to update it, just send me the new wording any time and I'll edit
the files directly — or open `index.html`, `research.html`, `contact.html`,
`funding.html`, or `lab-values.html` in any text editor and edit the text
between the HTML tags directly (it's plain English inside `<p>...</p>` tags).

## Files in this package

- `index.html`, `research.html`, `people.html`, `publications.html`,
  `contact.html`, `funding.html`, `lab-values.html` — the seven pages
  (Funding and Lab Values live under the "More" tab in the navigation)
- `styles.css` — all site styling
- `data/people.json`, `data/publications.json` — the content the editor
  reads/writes for People and Publications
- `js/render-people.js`, `js/render-publications.js` — small scripts that
  turn the JSON into the page content you see
- `admin/` — the Decap CMS editor (`theaydinlab.com/admin`)
- `images/begum-aydin.jpg` — your headshot
