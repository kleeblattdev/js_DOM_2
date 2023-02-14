const userInput = document.querySelector('#userinput');
const button = document.querySelector('#enter');

const list = document.querySelector('ul');

button.addEventListener('click',(event) => {
    event.preventDefault();

    let newItem = document.createElement('li');
    newItem.textContent = userInput.value;
    console.log(newItem);
    
    list.appendChild(newItem);

})

userInput.addEventListener('keyup',(event) =>{
    event.preventDefault();
    if(event.keyCode === 13) {
        button.click();
    }
})