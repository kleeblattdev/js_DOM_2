const button = document.querySelector('button');
let counter = 0;
const divParent = document.querySelector('.umwickeln')


function counterUp(){
    for(let i = 0; i <= counter; i++) {
        counter++;
    break;
    }
}

button.addEventListener('click',(event)=>{
    event.preventDefault();

    counterUp();
    //bei jedem click ein neues Element erstellen
    const div = document.createElement('div');
    div.innerHTML = `${counter.toString()}`;
    divParent.appendChild(div);

    //Jedes 10. Element soll die Klasse rechteck bekommen
    if (counter%10 === 0){
    div.classList.add('weiss');
    return
    }else{
    div.classList.add('rechteck');
    }

})