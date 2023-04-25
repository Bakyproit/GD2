// function click Modal
function clickModal() {
  const addModal = document.querySelector('.maincontent__add');
  const updateModals = document.querySelectorAll('.act__fix');
  const btnSearch = document.querySelector('.btn__search');
  const modal = document.querySelector('.modal');
  const popupFilter = document.querySelector('.popup__filter');
  const addEmulation = document.querySelector('.addemulation');
  const updateEmulation = document.querySelector('.updateemulation');
  const iconClosePopups = document.querySelectorAll('.popup__close');
  const btnClosePopups = document.querySelectorAll('.btn__cancel-add');
  
//   console.log(addModal) ;
  // click popup filter
  btnSearch.addEventListener('click', () => {
    popupFilter.classList.toggle('block');
  });
  // click modal them danh hieu
  addModal.addEventListener('click', () => {
    modal.classList.add('open');
  });
  // click modal sua danh hieu
  for (const updateModal of updateModals) {
    updateModal.addEventListener('click', () => {
      modal.classList.add('open');
      updateEmulation.classList.add('block');
      addEmulation.classList.add('close');
    });
  }

  // delete modal and popup filter
  for (const iconClosePopup of iconClosePopups) {
    iconClosePopup.addEventListener('click', () => {
      modal.classList.remove('open');
      updateEmulation.classList.remove('block');
      addEmulation.classList.remove('close');
      popupFilter.classList.remove('block');
    });
  }
  for (const btnClosePopup of btnClosePopups) {
    btnClosePopup.addEventListener('click', () => {
      modal.classList.remove('open');
      updateEmulation.classList.remove('block');
      addEmulation.classList.remove('close');
      popupFilter.classList.remove('block');
    });
  }
}

// click sidebar menu
function clickSideBarMenu() {
  const sideBarCategory = document.querySelector('.sidebar__expand-item-categary');
  const sideBarMenu = document.querySelector('.sidebar__menu');
  const sideBarListItems = document.querySelectorAll('.sidebar__expand-item');
  const sideBarMenuItems = document.querySelectorAll('.sidebar__menu-item');
  // sidebar
  const btnToggle = document.querySelector('.sidebar__expand-btn-icon');
  const sideBarExpand = document.querySelector('.sidebar__expand');
  const mainContent = document.querySelector('.maincontent');

  console.log(btnToggle);
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

// click table
function clickTable() {
  const tableTrs = document.querySelectorAll('.table__tr');
  const boxTables = document.querySelectorAll('.check__table');
  const btnAdd = document.querySelector('.maincontent__add');
  const btnAct = document.querySelector('.maincontent__act');
  // click active tr
  for (const tableTr of tableTrs) {
    tableTr.addEventListener('click', () => {
      tableTr.classList.toggle('active');
    });
  }
  // click input checkbox hien thi
  for (const boxTable of boxTables) {
    boxTable.addEventListener('click', () => {
      btnAdd.classList.toggle('close');
      btnAct.classList.toggle('open');
    });
  }
}

// click navigation
function clickNavigation() {
  const clickAvatar = document.querySelector('.navigation__right-avatar');
  const clickNotifi = document.querySelector('.navigation__right-notification');
  const notifi = document.querySelector('.navigation__right-notification-list');
  const clickSetting = document.querySelector('.navigation__right-setting');
  const setting = document.querySelector('.navigation__right-setting-list');
  const clickFilterNoti = document.querySelector('.navigation__right-notification-all-icon');
  const filterNoti = document.querySelector('.navigation__right-notification-all-list');
  const userMenu = document.querySelector('.navigation__right-avatar-menu');

  // click menu avatar
  clickAvatar.addEventListener('click', () => {
    userMenu.classList.toggle('block');
  });
  //click notification
  clickNotifi.addEventListener('click', () => {
    notifi.classList.toggle('block');
  });
  // cllick filterNoti
  clickFilterNoti.addEventListener('click', () => {
    filterNoti.classList.toggle('block');
  });
  // click setting
  clickSetting.addEventListener('click', () => {
    setting.classList.toggle('block');
  });
}

// main
(() => {
  clickModal();
  clickSideBarMenu();
  clickNavigation() ;
  clickTable();
})();
