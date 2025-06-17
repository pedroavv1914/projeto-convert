# Currency Converter

A simple web application that converts between major currencies (USD, EUR, GBP) to Brazilian Reais (BRL).

## Features

- 💻 Clean, responsive interface with modern design
- 🔄 Real-time currency conversion
- 🔢 Input validation (numbers only)
- 💰 Formatted output in Brazilian currency format
- 🌍 Supports three major currencies:
  - 💵 US Dollar (USD)
  - 💶 Euro (EUR)
  - 💷 British Pound (GBP)

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Google Fonts (IBM Plex Mono, Roboto)

## How It Works

1. Enter an amount to convert
2. Select the source currency from the dropdown
3. Click "Converter em reais" (Convert to Reais)
4. View the converted amount in Brazilian Reais

The conversion uses fixed exchange rates:
- 1 USD = 5.54 BRL
- 1 EUR = 6.42 BRL
- 1 GBP = 7.54 BRL

## Project Structure

```
projeto-convert-main/
├── img/               # Contains all image assets
├── index.html         # Main HTML file
├── scripts.js         # JavaScript functionality
├── styles.css         # CSS styling
└── README.md          # This documentation file
```

## Setup

No installation required! Simply open `index.html` in any modern web browser.

## Customization

To update exchange rates, modify the constants at the top of `scripts.js`:
```javascript
const USD = 5.54
const EUR = 6.42
const GBP = 7.54
```

## Screenshot

![Currency Converter Screenshot](./img/screenshot.png)

## License

This project is open source and available for anyone to use or modify.
