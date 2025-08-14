document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menuButton');
  const menu = document.getElementById('menu');

  menuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const feature = card.getAttribute('data-feature');
      displayFeatureInfo(feature);
    });
  });

  function displayFeatureInfo(feature) {
    const featureInfo = {
      chatgpt: {
        title: "ChatGPT",
        description: "ChatGPT is an advanced AI chatbot by OpenAI. Use it for answering questions, writing, and more.",
        link: "https://chat.openai.com/"
      },
      deepseek: {
        title: "DeepSeek",
        description: "DeepSeek is an AI assistant for research and knowledge discovery. Try it for deep search and insights.",
        link: "https://www.deepseek.com/"
      },
      gemini: {
        title: "Gemini",
        description: "Gemini is Google's AI for creative and productive tasks. Use it for writing, coding, and more.",
        link: "https://gemini.google.com/"
      },
      facebook: {
        title: "Facebook Page",
        description: "Connect with us on Facebook for updates and support.",
        link: "https://www.facebook.com/"
      },
      other: {
        title: "Other Functionalities",
        description: "Discover more features and functionalities we offer.",
        link: "https://www.google.com/"
      }
    };

    const info = featureInfo[feature] || featureInfo.other;
    document.getElementById('modalTitle').textContent = info.title;
    document.getElementById('modalDescription').textContent = info.description;
    document.getElementById('modalLink').href = info.link;
    document.getElementById('featureModal').style.display = 'flex';
  }

  document.getElementById('closeModal').onclick = function() {
    document.getElementById('featureModal').style.display = 'none';
  };
});