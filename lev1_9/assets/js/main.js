const button = document.querySelector('#button');
let farbeAuswahlen = document.querySelector('#farbeAuswahlen');

button.addEventListener('click',(event)=>{
    event.preventDefault();

    //save the selected options
    let selected = [];
    for (let i = 0; i < farbeAuswahlen.length; i++){
        selected[i] = farbeAuswahlen.options[i].selected;
    }

    //remove the selected option
    let index = farbeAuswahlen.options.length;
    while (index--) {
        if (selected[index]) {
        farbeAuswahlen.remove(index);
        }
    }
})