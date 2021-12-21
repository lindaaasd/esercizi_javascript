let garage = {
    cars : [ {brand: 'Tesla' , model:'S'},
             {brand: 'Tesla' , model:'3'},
             {brand: 'Tesla' , model:'X'},
             {brand: 'Tesla' , model:'Y'},
             {brand: 'Mazda' , model:'CX-30'},
             {brand: 'Mazda' , model:'CX-5'},
             {brand: 'Audi' , model:'A5'},
             {brand: 'Audi' , model:'A6'},
             {brand: 'Volkswagen' , model:'T-Rock'},
             {brand: 'Volkswagen' , model:'Polo'},

    ],

    showMyCars : function (cars = this.cars){

        let carsWrapper = document.querySelector('#carsWrapper')

        if (carsWrapper.children.length){
            carsWrapper.innerHTML = ''
        } else {     cars.forEach((car) => {
            let card = document.createElement('div')

            card.classList.add('col-12' , 'my-2')

            card.innerHTML = 
            `
             <div class="card">
                <div class="card-body d-flex justify-content-between">
                    <h5 class="card-title">${car.brand}</h5>
                    <h5 class="card-title">${car.model}</h5>
                </div>
            </div>

            `
            carsWrapper.appendChild(card)
        });}
    },

    addCars : function (brand, model) {
        let newCar = {brand : brand , model : model }

        this.cars.push(newCar)
    },

    deleteCar : function (brand, model){

        let deletedCar = {brand: brand , model: model }

        let filteredCars = this.cars.filter(function (car) {
        return car.brand !== deletedCar.brand || car.model !== deletedCar.model

       
    })

    this.cars = filteredCars
    console.log(filteredCars)
    }
    
}



let btnShowCars = document.querySelector('#btnShowCars')
let btnAddCars = document.querySelector('#btnAddCars') 
let inputAddBrand= document.querySelector('#inputAddBrand')
let inputAddModel= document.querySelector('#inputAddModel')
let btnDeleteCars = document.querySelector('#btnDeleteCars') 
let deleteBrand= document.querySelector('#deleteBrand')
let deleteModel= document.querySelector('#deleteModel')

btnShowCars.addEventListener('click', () => {
    garage.showMyCars()
})

btnAddCars.addEventListener('click', () => {
    garage.addCars(inputAddBrand.value , inputAddModel.value)
})

btnDeleteCars.addEventListener('click', () => {
    garage.deleteCar(deleteBrand.value , deleteModel.value)
})

garage.showMyCars()