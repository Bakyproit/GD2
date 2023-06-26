
// click navigation
export function clickNavigation() {
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