// click sidebar menu
 export function clickSideBarMenu() {
  const sideBarCategory = document.querySelector('.sidebar__expand-item-categary');
  const sideBarMenu = document.querySelector('.sidebar__menu');
  const sideBarListItems = document.querySelectorAll('.sidebar__expand-item');
  const sideBarMenuItems = document.querySelectorAll('.sidebar__menu-item');
  // sidebar
  const btnToggle = document.querySelector('.sidebar__expand-btn-icon');
  const sideBarExpand = document.querySelector('.sidebar__expand');
  const mainContent = document.querySelector('.maincontent');
  //sidebar
  btnToggle.addEventListener('click', () => {
    sideBarExpand.classList.toggle('sidebar__less');
    mainContent.classList.toggle('sidebar__less');
  });

  // click sidebar categary
  sideBarCategory.addEventListener('click', () => {
    sideBarMenu.classList.toggle('block');
  });
  //click item side bar
  for (const sideBarListItem of sideBarListItems) {
    sideBarListItem.addEventListener('click', () => {
      sideBarListItem.classList.toggle('active');
    });
  }
  //click item side bar menu
  for (const sideBarMenuItem of sideBarMenuItems) {
    sideBarMenuItem.addEventListener('click', () => {
      sideBarMenuItem.classList.toggle('active');
    });
  }
}
