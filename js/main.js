import {
  clickModal,
  clickNavigation,
  clickSideBarMenu,
  clickTable,
  renderTodoTable,
  getTodoListTable,
  setItemLocalstorage,
  recordAll,
} from './base/index.js';

// main
(() => {
  const todoListTables = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
    {
      id: 11,
    },
    {
      id: 12,
    },
  ];
  setItemLocalstorage('todotable_list', todoListTables);
  const todoListTable = getTodoListTable('todotable_list');
  renderTodoTable(todoListTable, 'table__list');

  clickModal();
  clickSideBarMenu();
  clickNavigation();
  clickTable();
  recordAll();
})();
