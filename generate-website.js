const fs = require('fs');
const path = require('path');

const config = require('./config.json');

// Directories
const outputDir = path.join(__dirname, 'dist');
const imagesDir = path.join(outputDir, 'images');

// Ensure output directories exist
fs.mkdirSync(outputDir, { recursive: true });
fs.mkdirSync(imagesDir, { recursive: true });

// Copy the stylesheet
const styles = fs.readFileSync('./styles.css', 'utf8');
fs.writeFileSync(path.join(outputDir, 'styles.css'), styles);

// Generate index.html
const indexTemplate = fs.readFileSync('./index.html', 'utf8');
const indexHtml = indexTemplate
  .replace(/\{\{PERSON_NAME\}\}/g, config.personal.name)
  .replace(/\{\{PERSON_TAGLINE\}\}/g, config.personal.tagline)
  .replace(/\{\{PERSON_BIO\}\}/g, config.personal.bio)
  .replace(/\{\{PERSON_QUOTE\}\}/g, config.personal.quote)
  .replace(/\{\{CONTACT_EMAIL\}\}/g, config.personal.contact.email)
  .replace(/\{\{CONTACT_LINKEDIN\}\}/g, config.personal.contact.linkedin)
  .replace(/\{\{CONTACT_GITHUB\}\}/g, config.personal.contact.github)
  .replace(/\{\{CONTACT_PHONE\}\}/g, config.personal.contact.phone)
  .replace(/\{\{PROFILE_IMAGE\}\}/g, config.personal.profileImage);

// Insert projects dynamically
const projectHtml = config.projects
  .map(project => `
    <a href="${project.link}" class="project-card">
      <img src="${project.image}" alt="${project.title}">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tag-container">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </a>
  `)
  .join('\n');

const indexWithProjects = indexHtml.replace(
  /<!-- PROJECTS_PLACEHOLDER -->/,
  projectHtml
);

fs.writeFileSync(path.join(outputDir, 'index.html'), indexWithProjects);

// Generate empty project detail pages
config.projects.forEach(project => {
  const projectPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${project.title}</title>
    <link href="styles.css" rel="stylesheet">
</head>
<body>
    <div class="project-hero">
        <img src="${project.image}" alt="${project.title}" class="project-banner">
        <div class="project-title-container">
            <h1 class="project-title">${project.title}</h1>
        </div>
    </div>
    <div class="container">
        <p>This is a placeholder for the "${project.title}" project page.</p>
    </div>
</body>
</html>
  `;

  fs.writeFileSync(path.join(outputDir, project.link), projectPage);
});

console.log('Website generated successfully!');
