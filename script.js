/* modal, sposób nr 1, wg 'Mata' ale po mojemu*/

const addToBasket = document.querySelector('.action-btn');
// const secondAction = document.querySelector('')
// const default =


const funktionAddContainer = (romek) => {    
    let newElement = document.createElement('div');
    newElement.classList.add('modal-container', 'remove-modul')
    
    newElement.innerHTML = `
        <div class="modal">
            <p class="modal-title">
                <i class="model-title-icon" data-feather=${romek.iconName}></i>
                ${romek.title || 'to nie ten tytul'}</p>
            <p class="modal-description">${romek.description  || 'BRAK DESCRIPTION'}                
            </p>
            <div class="modal-buttons">
                <button class="${romek.Button1class} remove-modul">${romek.button1}</button>
                <button class="${romek.Button2class} remove-modul">${romek.button2}</button>
            </div>
            <button class="modal-close-icon remove-modul"><i data-feather="x"></i></button>
        </div>`;
    document.body.appendChild(newElement)   
    
    feather.replace();
    
    let removeModul = (tt) => {           
        // newElement.classList.add('hidden')
        let dddd = tt.target.classList                      
        console.log(tt)        
        if (dddd.contains('remove-modul') || dddd.contains('feather')) {                           
            newElement.remove(); 
        }      
    }    

    let greenButton=document.querySelectorAll('.remove-modul');      
    greenButton.forEach((btn) =>                 
            btn.addEventListener('click', removeModul)
        )  
}

let funktionAddToBasket = () => {
    funktionAddContainer({
        iconName: 'info' ,
        titlee: 'Add To Basket'  ,   
        descriptioNn: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem libero sit eligendi labore, expedita iure ab nam obcaecati numquam, qui reprehenderit perspiciatis ipsa ea! Facere?',   
        button1: 'ACCEPT',
        button2: 'CANCEL',
        Button1class: 'modal-accept',
        Button2class: 'modal-decline',
    })}

addToBasket.addEventListener('click', funktionAddToBasket);
// secondAction.addEventListener('click', funktionsecondAction);
// default.addEventListener('click', funktionDefault);




