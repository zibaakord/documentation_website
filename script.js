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
