const fs = require('fs');
const path = require('path');

// Define the JSON structure
const jsonData = {
  personal: {
    name: "Your Name",
    title: "Your Professional Title",
    tagline: "Systems thinker, team builder, and lifelong learner",
    bio: "A brief professional bio highlighting your key strengths and approach",
    contact: {
      email: "your.email@example.com",
      linkedin: "https://www.linkedin.com/in/yourprofile",
      github: "https://github.com/yourusername",
      phone: "+1234567890",
    },
    profileImage: "images/profilepic.jpg",
  },
  projects: [
    {
      title: "Project Name",
      description: "Brief project description",
      image: "images/project.jpg",
      tags: ["Tag1", "Tag2", "Tag3"],
      link: "project-detail.html",
    },
  ],
  skills: {
    "Programming Languages": [
      { name: "Language1", rating: 4 },
      { name: "Language2", rating: 3 },
    ],
    "Cloud & Infrastructure": [
      { name: "Skill1", rating: 4 },
      { name: "Skill2", rating: 3 },
    ],
  },
  experience: [
    {
      title: "Job Title",
      company: "Company Name",
      period: "Start Date - End Date",
      responsibilities: ["Key responsibility 1", "Key responsibility 2"],
    },
  ],
  education: [
    {
      degree: "Degree Name",
      institution: "Institution Name",
      period: "Start Year - End Year",
    },
  ],
};

// Define the output path
const outputPath = path.join(__dirname, 'output', 'config.json');

// Ensure the output directory exists
fs.mkdirSync(path.dirname(outputPath), { recursive: true });

// Write the JSON data to a file
fs.writeFileSync(outputPath, JSON.stringify(jsonData, null, 2), 'utf8');

console.log('JSON file has been generated:', outputPath);
