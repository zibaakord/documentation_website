function toggleSubmenu(button) {
  const parent = button.parentElement;
  const allItems = document.querySelectorAll('.menu-item');

  allItems.forEach(item => {
    if (item !== parent) {
      item.classList.remove('open');
    }
  });

  parent.classList.toggle('open');
}

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', 'inactive');
}

let darkMode = localStorage.getItem('darkmode');

if (darkMode === "active") {
  enableDarkMode();
}

const modeSwitchBtn = document.querySelector('.mode-switcher-button');

modeSwitchBtn.addEventListener("click", () => {
  darkMode = localStorage.getItem('darkmode');
  darkMode !== "active" ? enableDarkMode() : disableDarkMode();
});
