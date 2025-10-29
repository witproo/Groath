Groath_Site_ContactRedesign - README

This package is built from your master base and includes a redesigned Contact section.
Files modified/added:
- index.html  : Contact section replaced; Font Awesome CDN link added in <head>.
- style.css   : Contact section styling appended.
- app.js      : Contact form -> WhatsApp integration (opens chat to +91 97112 06218).
- README.txt  : (this file)

How to update contact numbers or message:
- WhatsApp number used for the form: +91 97112 06218
  To change: open app.js, find the wa variable in the contact block and replace the number in the wa link (format: https://wa.me/<countrycode><number>).
- Phone (tel:) link: edit index.html contact-item with tel:+919211230750
- Email (mailto:) link: edit index.html contact-item with mailto:witpro369@gmail.com

Notes:
- Font Awesome is loaded via CDN. If you prefer local hosting, download the assets and update the <link> in index.html.
- Contact section keeps the same id="contact" so your header nav works unchanged.
