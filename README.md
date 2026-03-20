# Mantel Product Label Printer

A label printing tool built for Mantel's retail shops, enabling staff to generate and print product labels with smart validation for QR codes and product URLs.

## Features

- Add products to a print queue
- Automatic validation: warns when a product without a URL is paired with a QR label
- Visual warning indicators per product row
- Print button disables when invalid combinations are detected
- Popover tooltips for user guidance
- Built to integrate with Mantel's backoffice system

## Tech Stack

![PHP](https://img.shields.io/badge/-PHP-777BB4?style=flat-square&logo=php&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/-Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white)

- **PHP** for server-side rendering and session management
- **JavaScript** for client-side validation and UI interactions
- **Bootstrap** for responsive layout and utility classes
- **Font Awesome** for icons

## Project Structure

```
├── php-html          # PHP template with HTML structure
├── javaScript.js     # Client-side validation logic
└── README.md
```

## Context

This is a sample of code I wrote while working at Mantel, a bicycle retailer in The Netherlands. The tool was used by shop staff to print product labels, with built-in safeguards to prevent printing QR labels for products that don't have a valid URL.
