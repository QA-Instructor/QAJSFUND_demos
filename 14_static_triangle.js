class Triangle {
    constructor (base, height) {
        this.base = base;
        this.height = height;
    }
    
    // STATIC method
    static area(triangle) {
          return (triangle.base * triangle.height) / 2;
    }
}
export default Triangle;