const toggleTheme = (btn, selector) => {
  const toggleCheckbox = document.querySelector(btn),
        body = document.querySelector(selector);

  toggleCheckbox.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    }
    
  });
};

export default toggleTheme;