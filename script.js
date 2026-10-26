const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

const chatbotButton = document.querySelector('.chatbot-button');
const chatWindow = document.querySelector('.chat-window');

if (chatbotButton && chatWindow) {
  chatbotButton.addEventListener('click', () => {
    chatWindow.style.display = chatWindow.style.display === 'none' ? 'block' : 'none';
  });
}
