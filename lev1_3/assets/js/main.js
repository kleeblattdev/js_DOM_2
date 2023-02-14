const myList = document.querySelector('#myList');
const buttons = document.querySelector('.unten');

const output = document.querySelector('output');

console.log(myList);
console.log(buttons);
console.log(output);

// Button #firstElementChild
buttons.firstElementChild.addEventListener('click',()=>{
    output.innerHTML = myList.firstElementChild.innerHTML;
})

// Iterable der buttons, um auf alle Elemente im div zuzugreifen
const buttonElements = buttons.children;
console.log(buttonElements);

//Button #lastElementChild
console.log(buttonElements[2]);
buttonElements[2].addEventListener('click',()=>{
    output.innerHTML = myList.lastElementChild.innerHTML;
})

//button firstElementChild nextElementSibling
console.log(buttonElements[4]);
buttonElements[4].addEventListener('click', ()=>{
    output.innerHTML = myList.firstElementChild.nextElementSibling.innerHTML;
})

//button lastElementChild previousElementSibling
buttons.lastElementChild.addEventListener('click',()=>{
    output.innerHTML = myList.lastElementChild.previousElementSibling.innerHTML;
})