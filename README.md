# Static Portfolio Website Generator

This project generates a static personal portfolio type website from a `config.json` file, creating an `index.html`, `styles.css`, and individual project pages for each project defined in the configuration.  The resulting static page can be used behind a personalized domain name (https://your-name.com for example) to present an effective and professional internet presense

## Requirements
- [Node.js](https://nodejs.org/) (version 14 or later)

---

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/static-site-generator.git
   cd static-site-generator
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

---

## Usage
1. **Prepare Configuration:**
   - Update the `config.json` file with your personal information, projects, skills, experience, and education.

2. **Run the Generator:**
   ```bash
   npm start
   ```

3. **View the Output:**
   - The generated website will be available in the `dist/` directory.
   - Open `dist/index.html` in your browser to view the website.

---

## File Structure
- `config.json`: Configuration file containing personal information, projects, and other data.
- `index.html`: Template file with placeholders for dynamic content.
- `styles.css`: Template stylesheet for the website.
- `generate-website.js`: Script to generate the website.
- `dist/`: Output directory containing the generated static site.

---

## Customization
- **Modify Templates:**
  - Edit `index.html` or `styles.css` to customize the design of your website.
- **Add/Update Projects:**
  - Add new projects or update existing ones in the `projects` section of `config.json`.

---

## Example
Here’s how to add a project in `config.json`:
```json
{
  "title": "New Project",
  "description": "A brief description of the project",
  "image": "images/new-project.jpg",
  "tags": ["JavaScript", "Node.js"],
  "link": "project-new.html"
}
```

After running the generator, a `project-new.html` page will be created in the `dist/` directory.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Troubleshooting
- **Error: Missing `config.json` or Template Files:**
  Ensure all required files (`config.json`, `index.html`, `styles.css`) are present in the project directory.
- **Styles Missing in Output:**
  Confirm that `styles.css` is correctly copied to the `dist/` folder.

For additional help, feel free to raise an issue on GitHub.
