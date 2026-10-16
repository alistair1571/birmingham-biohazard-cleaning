# Birmingham Biohazard Cleaning

Static rank-and-rent lead-gen site targeting biohazard cleaning in Birmingham and the West Midlands. Plain HTML, CSS and JS with no build step. Hosted from GitHub on Cloudflare.

## Structure

- `index.html` is the homepage
- Each page lives in its own folder as `index.html` (for example `hoarders-clean-up/index.html`)
- `areas/<town>/index.html` are the town spoke pages
- `blog/<post>/index.html` are the guides
- `style.css` and `script.js` are shared by every page
- `wrangler.jsonc`, `.assetsignore` and `CNAME` are deployment config

## Before going live

Search the whole project for these placeholders and replace them:

| Placeholder | Where | Replace with |
| --- | --- | --- |
| `0121 000 0000` / `01210000000` | every page | the tracked phone number |
| `birminghambiohazardcleaning.co.uk` | canonical tags, schema, `sitemap.xml`, `robots.txt`, `CNAME`, email | the real domain |
| `https://formspree.io/f/YOUR_FORM_ID` | `contact-us/index.html` | the real form endpoint |
| `[Add registered business name and address here.]` | `privacy-policy/index.html` | the business details |

## Check the copy matches the operator

The copy describes the teams you refer leads to as insured, trained, registered waste carriers who work discreetly, and says the phone line is open 24 hours. Only keep those lines if the operator you rent to can honestly stand behind them. The site does not claim any reviews, accreditations, response times or job volumes.

## Not included yet

- No `og:image` (add one if you want rich link previews)
- No analytics or call tracking script
