document.getElementById('userForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const data = {
    personal: {
      name: document.getElementById('name').value,
      title: document.getElementById('title').value,
      tagline: document.getElementById('tagline').value,
      bio: document.getElementById('bio').value,
      contact: {
        email: document.getElementById('email').value,
        linkedin: document.getElementById('linkedin').value,
        github: document.getElementById('github').value,
        phone: document.getElementById('phone').value,
      },
    },
    projects: [],
    skills: {},
    experience: [],
    education: [],
  };

  try {
    const response = await fetch('/generate-json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      document.getElementById('status').textContent = 'JSON file generated successfully!';
    } else {
      document.getElementById('status').textContent = 'Error generating JSON file.';
    }
  } catch (error) {
    document.getElementById('status').textContent = 'Error connecting to the server.';
  }
});
