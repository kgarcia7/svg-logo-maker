class Shape{
    constructor(){
        this.color = "";
    }
    setColor(colorVar){
        this.color = colorVar;
    }
}

class circle extends Shape {
    render(){
        return `<circle <circle cx="150" cy="125" r="80" fill="${this.color} />`;
    }
}

class triangle extends Shape {
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color} />`;
    }
}

class square extends Shape {
    render(){
        return `<rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="${this.color} />`;
    }
}

module.exports = { circle, triangle, square }