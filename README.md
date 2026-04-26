# Pehroam Website

A 5-page ethnic wear showcase site built with plain HTML + CSS (mobile responsive).

## Files

| File | What it is |
|---|---|
| `index.html` | Home page — hero, categories, new arrivals, brand story, "as seen on" |
| `collection.html` | Collection / category page — filters + product grid + pagination |
| `product.html` | Product detail page — gallery, sizes, "Order on WhatsApp" + marketplace buttons |
| `about.html` | About / brand story page |
| `size-guide.html` | Size chart + how to measure |
| `contact.html` | Contact info + message form |
| `styles.css` | All shared styling |
| `script.js` | Mobile menu, tabs, size/color selectors |

## How to use

1. Double-click `index.html` to preview in browser
2. All pages link to each other via the top nav
3. Floating WhatsApp button on every page (links to `wa.me/919876543210`)
4. On Product page, "Order on WhatsApp" prefills a message with the product name

## Things to replace later

- WhatsApp number: search `919876543210` in all files and replace
- Logo: I used a text logo for now — drop your HD logo image inside the `.logo` div (replace the two text divs with `<img src="logo.png">`)
- Product images: currently using stock photos from Unsplash — replace `src=` URLs with your own product photos
- Marketplace links: in `product.html`, the Flipkart/Meesho/Amazon/Shopsy buttons currently link to `#` — replace with actual product URLs on each platform
- Contact email/phone: search `pehroam.com` and `98765 43210` to replace

## Design notes

- Color palette: maroon (#6b1f2e) + cream (#fbf6ef) + terracotta (#c4663a) accents + gold (#b08d4a) details
- Fonts: Cormorant Garamond (serif headings) + Inter (body)
- Mobile breakpoint: 900px (tablet) and 480px (phone)

© 2026 Pehroam
