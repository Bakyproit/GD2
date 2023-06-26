
import {getTodoListTable} from './localstorage.js' ;

export function recordAll(){
    const recordNumber = document.querySelector('.record') ;
    const todoListTable = getTodoListTable('todotable_list');

    recordNumber.textContent = `0${todoListTable.length}` ;
}

