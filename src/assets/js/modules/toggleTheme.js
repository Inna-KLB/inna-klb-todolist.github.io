const toggleTheme = (btn, selector, icons) => {
  const body = document.querySelector(selector),
        toggleCheckbox = body.querySelector(btn),
        icon = toggleCheckbox.querySelector(icons);

  const toDarkTheme = () => {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    icon.classList.remove('icon-sun-filled');
    icon.classList.add('icon-moon');
  };

  const toLightTheme = () => {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    icon.classList.remove('icon-moon');
    icon.classList.add('icon-sun-filled');
  };

  if(localStorage.getItem('theme') === 'light') {
    toLightTheme();
  }

  toggleCheckbox.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
      toDarkTheme();
      localStorage.removeItem('theme');
    } else {
      toLightTheme();
      localStorage.setItem('theme', 'light');
    }
    
  });
};

export default toggleTheme;