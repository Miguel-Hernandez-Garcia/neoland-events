/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click*/

const buttonClickEvent = document.querySelector("#btnToClick");
buttonClickEvent.addEventListener("click",(e) =>console.log(e));

/*1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.*/

const FocusEvent = document.querySelector(".focus");
FocusEvent.addEventListener("focus", (e)=> console.log(e.target.value));

/*1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.*/

const InputEvent = document.querySelector(".value");
InputEvent.addEventListener("input", (e)=>console.log(e.target.value));