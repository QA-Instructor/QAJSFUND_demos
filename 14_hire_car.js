import Car from './14_car.js';

// a HireCar "is a kind of" Car
class HireCar extends Car {
    constructor (wheels, power, leaseDuration = 3) { //3 days as standard
        super(wheels, power); //call parent constructor
        this._leaseDuration = leaseDuration; 	  
    }

     // getter
    get leaseDuration() {
        return this._leaseDuration;
    }
    
    // setter
    set leaseDuration(days) {
        if (days >= 1 && days <= 14){
            this._leaseDuration = days;
        }
    }
}

export default HireCar;