# HTML and CSS Projects
Welcome to my HTML and CSS learning repository!
This repository contains coursework, practice exercises,
and web development projects completed as part of my
Software and Web Developer program at Academy of Learning.

The projects focus on HTML structure, CSS styling,
responsive design, and building web pages.

New projects will be added as I progress through the course.

I study that program at AOLCC Scarborough in Toronto. Tiby Design Studio is my design practice there. The portfolio below introduces that work and links to the course pages already in this repository.

## Portfolio

`Portfolio-Website/index.html` is the final CSS and Bootstrap course portfolio for Tibor Bari. It is a single page with Home, About, Work, GitHub, and Contact sections, a sticky navigation bar, and a footer. Styling is custom CSS. A short vanilla JavaScript file closes the mobile menu and checks the contact form in the browser.

The contact form does not send email. There is no form service, address, or secret in the repository. After the fields pass, the page shows the note so it can be copied and continued on GitHub.

Project links use relative paths such as `../Academy-Cinemas/index.html`, so they keep working when the site is opened from this folder or published on GitHub Pages under the repository path.

## Course projects

### Academy Cinemas — `Academy-Cinemas/index.html`

A cinema page built with Bootstrap 5.2, loaded from a CDN, plus `css/custom.css`. The page has a collapsing navigation bar, a Now Playing dropdown, cards for Ben-Hur, The Day the Earth Stood Still, and Vertigo, ticket selectors, and a contact form that stays on the page. Custom CSS sets the red and gold theme, the curtain background, and the card layout. `movies.txt` holds the film descriptions used on the page. The images folder includes the logo, three posters, the theater-curtain background, and star graphics that the current page does not show.

### Simple Recipes — `Simple-Recipes/index.html`

A recipe page styled with `css/style.css`. It has a sticky navigation bar, a CSS dropdown, a featured deep-dish skillet pizza, and flip cards for pasta, chicken, pork, biscuits, fish, and dessert. The stylesheet uses Josefin Slab and Sacramento, hover states, card flips, and breakpoints from narrow phones through wide screens. About and contact sections follow the recipes. `recipes-text.TXT` keeps recipe notes beside the page, and `README.md` is a short note that the folder is for tutorial videos. Recipe photographs are in `images/`.

### CSS Effects Challenge — `Creating-CSS-Effects/index.html`

A short page linked to `style.css`. It loads Poppins from Google Fonts and scales a photograph on hover. The photograph is a remote image from picsum.photos, so it appears when that address is available.

### The Pet Shop — `The-Pet-Shop-Website/index.html`

A two-page semantic HTML site. `index.html` introduces cats, dogs, rabbits, guinea pigs, fish, and reptiles, with a quote and a link to the ASPCA pet-care guide. `contact.html` has a message form and a newsletter checkbox. There is no separate stylesheet. `IMAGE-CREDITS.md` credits the Pexels photographs in `images/`.

### Luxury Cars Gallery — `One-Page Website/one_page_website.html`

A single HTML page. The folder name contains a space. In-page links move between the introduction, a gallery, a contact form, and an embedded video. The gallery uses `images/porsche.jpg`, `images/ferrari.jpg`, and `images/lamborghini.jpg`. Styling is left to the browser.

## Preview locally

From the repository root:

```bash
python3 -m http.server 8765
```

Then open [http://127.0.0.1:8765/Portfolio-Website/](http://127.0.0.1:8765/Portfolio-Website/).

Opening `Portfolio-Website/index.html` directly in a browser also works, because the portfolio uses relative paths. Academy Cinemas and the CSS Effects page request fonts or a photograph from the network. The Pet Shop, Simple Recipes, and Luxury Cars Gallery can be reviewed from their own HTML files.

## Deployment readiness

GitHub Pages is not turned on for this repository. Nothing here has been deployed. If Pages is later enabled from the `main` branch and the root folder, the portfolio address would be:

`https://tibibari84-coder.github.io/HTML-and-CSS-Projects/Portfolio-Website/`

Relative links are already written for that repository subpath. The repository does not contain credentials, API keys, or a paid hosting setup.
