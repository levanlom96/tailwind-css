# Tailwind CSS Boilerplate

A minimal boilerplate for learning and experimenting with Tailwind CSS.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server (recommended):**
   ```bash
   npm run dev
   ```
   This will:
   - Watch for changes and rebuild CSS automatically
   - Start a live server on http://localhost:3000
   - Auto-refresh your browser when files change

3. **Alternative commands:**
   - **Build CSS once:** `npm run build`
   - **Watch CSS only:** `npm run build-css`
   - **Serve without CSS watching:** `npm run serve`

## Project Structure

```
tailwind-css/
├── src/
│   └── input.css          # Tailwind directives
├── dist/
│   └── output.css         # Generated CSS (auto-created)
├── index.html             # Your HTML file
├── tailwind.config.js     # Tailwind configuration
└── package.json           # Dependencies and scripts
```

## Development Workflow

1. Run `npm run dev` to start the development server
2. Edit `index.html` to add your HTML content with Tailwind classes
3. Save your changes and watch your browser auto-refresh instantly! 🔥

**No manual refreshing or build commands needed!**

## Customization

- Edit `tailwind.config.js` to customize Tailwind's default theme
- Add custom CSS in `src/input.css` below the Tailwind directives
- Update the `content` array in `tailwind.config.js` if you add more HTML/JS files

Happy coding with Tailwind CSS! 🎨
