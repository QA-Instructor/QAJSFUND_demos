// Constructor method is called when the class is instantiated through the “new” keyword.

// Methods can be created inside the class definition without using the function keyword or assigning to “this”.


class Car {
    constructor (wheels, power) {
    this._wheels = wheels;
    this._power = power;
    this._speed = 0;
    }

    // getters
    get wheels() {
        return this._wheels;
    }

    get power() {
        return this._power;
    }

    get speed() {
        return this._speed;
    }

    // setters
    set wheels(wheel_number) {
        if (wheel_number >= 3 && wheel_number <=4){
            this._wheels = wheel_number;
        }
    }

    accelerate(time) {
    this._speed = this._speed + 0.5*this._power*time;
    }
}


export default Car;