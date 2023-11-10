
const {triangle, circle, square}= require('./shapes.js')

describe ("test for triangles", () => {
    it("can render a polygon shape", () =>{
        const shape = new triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
})

describe("test for circles", () => {
    it("can render a circle shape", () =>{
        const shape = new circle();
        shape.setColor("pink");
        expect(shape.render()).toEqual('<circle <circle cx="150" cy="125" r="60" fill="pink" />');
    })
})

describe("test for squares", () => {
    it("can render a square shape", () =>{
        const shape = new square();
        shape.setColor("purple");
        expect(shape.render()).toEqual('<rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="purple" />');
    })
})