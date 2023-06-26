/* 
  click checkbox table
   Author : Ninh Ba Ky 23/4/2023
*/
export function clickTable() {
  const tableTrs = document.querySelectorAll('.table__item');
  const checkList =  document.querySelector('.check__list') ;
  const checkTables = document.querySelectorAll('.check__table');
  const checkBox = document.querySelector('.checkbox') ;
  const btnAdd = document.querySelector('.maincontent__add');
  const btnAct = document.querySelector('.maincontent__act');
  // click tr cua table o dang active
  for (const tableTr of tableTrs) {
    tableTr.addEventListener('click', () => {
      tableTr.classList.toggle('active');
    });
  }
  // click input checkbox hien thi button header
  for (const checkTable of checkTables) {
    checkTable.addEventListener('click', () => {
      btnAdd.classList.toggle('close');
      btnAct.classList.toggle('open');
      if(checkBox.checked == true){
        checkList.innerHTML = '<input type="checkbox"/><span class="checkmark"></span>' ;
      }
      else { 
      checkList.innerHTML = '<input type="checkbox"/>' ;
      }
    });
  }
 
}
/*
   clone tr của table template
    Author : Ninh Ba Ky 23/4/2023
 */
export function createTodoElement(todoTable) {
  if (!todoTable) return null;
  //find template
  const tableTemplate = document.getElementById('table__template');
  if (!tableTemplate) return null;
  // clone
  const tableElement = tableTemplate.content.firstElementChild.cloneNode(true);
  tableElement.dataset.id = todoTable.id;
  //update

  return tableElement;
}

/*
   render ra cac tr cua tbody
   Author : Ninh Ba Ky 23/4/2023
*/
export function renderTodoTable(todoListTable, tbodyElementId) {
  if (!Array.isArray(todoListTable) || todoListTable.length === 0) return;

  // find tbody
  const tbodyElement = document.getElementById(tbodyElementId);
  if (!tbodyElement) return;
  for (const todoTable of todoListTable) {
    const trElement = createTodoElement(todoTable);
    tbodyElement.appendChild(trElement);
  }
}
