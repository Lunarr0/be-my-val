# Valentine's Day Interactive Card 💌

A delightful and interactive Valentine's Day card featuring an animated envelope that reveals a special message with a playful response system and a cute celebrating bear!

## Features ✨

- 💝 Animated envelope with smooth opening/closing effect
- 🎯 Interactive "Yes" and "No" response buttons
- 🔄 Dynamic "No" button with playful changing responses
- 📈 Growing "Yes" button that gets bigger with each "No"
- 🐻 Adorable celebratory bear animation on acceptance
- 💖 "YAYYY!!" celebration message

## How It Works 🛠️

1. **Initial View**
   - Presents a closed red envelope
   - Single "Open Letter" button

2. **Interaction Flow**
   - Click "Open Letter" to reveal the Valentine's message
   - Choose between "Yes" and "No" responses
   - Each "No" click:
     - Makes the "Yes" button larger
     - Changes "No" button text to encourage a positive response
   - "Yes" click reveals a dancing bear celebration

## Project Structure 📁 

## Setup 🚀

1. Clone the repository:

```bash
git clone https://github.com/your-username/valentine-card.git
```

2. Open `index.html` in your web browser

## Customization 🎨

### Change the Message
In `index.html`, modify the letter content:
```html
<div class="letter">
    <p>Will you be my valentine?</p>
</div>
```

### Modify No Button Responses
In `script.js`, edit the responses array:
```javascript
noOptionList = [
    "No",
    "Is that your final answer?",
    "think again",
    "last chance",
    "Really?",
];
```

### Change Bear Animation
Replace the GIF URL in `index.html`:
```html
<img src="your-new-gif-url" alt="bear" class="bear center-bear">
```

### Customize Colors
In `style.css`, modify the envelope colors:
```css
.env {
    background: #ff4444;
}
```

## Features Breakdown 🔍

- **Animated Envelope**: CSS transitions for smooth opening animation
- **Interactive Buttons**: JavaScript event listeners for button interactions
- **Dynamic Sizing**: CSS transform scale for growing animation
- **Bear Animation**: Centered GIF reveal with CSS animations
- **Responsive Design**: Flexbox layout for proper centering

## License 📝

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

- Bear GIF from [Tenor](https://tenor.com/)
- Inspiration from Valentine's Day cards
- [MIT License](LICENSE)
- mewtru
---

Made with ❤️ for spreading love and joy 