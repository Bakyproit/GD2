// function click Modal
export function clickModal() {
  const addModal = document.querySelector('.maincontent__add');
  const updateModals = document.querySelectorAll('.act__fix');
  const btnSearch = document.querySelector('.btn__search');
  const modal = document.querySelector('.modal');
  const popupFilter = document.querySelector('.popup__filter');
  const addEmulation = document.querySelector('.addemulation');
  const updateEmulation = document.querySelector('.updateemulation');
  const iconClosePopups = document.querySelectorAll('.popup__close');
  const btnClosePopups = document.querySelectorAll('.btn__cancel-add');
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
