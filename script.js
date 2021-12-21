
// let buttonTitle = document.createElement ('buttonTitle')
// buttonTitle.classList.add ('btn' , 'btn-outline-primary' , 'btn-lg' )
// buttonTitle.innerHTML = "Cambiami il colore"

// let wrapperDue = document.querySelector ('.btn2-wrapper')
// wrapperDue.appendChild (buttonTitle)

// let title = document.querySelector ('h1')

// let changeTitleColor = document.querySelector ('#changeTitleColor')
// changeTitleColor.addEventListener ('mouseover' , () => {

// title.classList.toggle ('text-danger')

// })

//////////////

let buttonPrg = document.querySelectorAll ("button")[0];
buttonPrg.addEventListener('click', () => {
    let allMyChildren=document.querySelectorAll('p');
    allMyChildren.forEach((thisChild) => {
        thisChild.style.color = "#FFFFFF";
    })
    
})


