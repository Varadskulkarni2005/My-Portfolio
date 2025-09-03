// Set year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Dark/light toggle
   const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
    });

    // Load first 2 GitHub projects
    async function loadProjects() {
      try {
        const res = await fetch("https://api.github.com/users/Varadskulkarni2005/repos");
        const repos = await res.json();
        const container = document.getElementById("repo-list");

        repos.slice(0, 2).forEach(({ name, description, html_url }) => {
          const card = document.createElement("div");
          card.className = "card";
          const title = document.createElement("h4");
          title.className = "text-lg font-semibold mb-1";
          title.textContent = name;
          const desc = document.createElement("p");
          desc.textContent = description || "No description available.";
          const link = document.createElement("a");
          link.href = html_url;
          link.target = "_blank";
          link.className = "underline text-blue-600";
          link.textContent = "View on GitHub";

          card.append(title, desc, link);
          container.appendChild(card);
        });
      } catch (err) {
        console.error("Error loading projects:", err);
      }
    }

    loadProjects();