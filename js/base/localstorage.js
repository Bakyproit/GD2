
/*
  lay du lieu tu localstorage
  author : Ninh Ba Ky 23/4/2023

*/
export function getTodoListTable(tableList){
    try {
      return JSON.parse(localStorage.getItem(tableList));
      
    } catch (error) {
      return [] ;
    }
}

export function setItemLocalstorage(tableList , todoList){
    localStorage.setItem(tableList , JSON.stringify(todoList)) ;
}