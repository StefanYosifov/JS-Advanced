class Hex{
    constructor(value){
        this.value=value;
    }

    valueOf(){
        return this.value;
    }
    toString(){
        let hexString='0x'+this.value.toString(16).toUpperCase();
        return hexString;
    }
    plus(number){
        let newResult=(this.value+Number(number.valueOf()));
        return new Hex(newResult);
    }
    minus(number){
        let newResult=(this.value-Number(number.valueOf()));
        return new Hex(newResult);
    }
    parse(string){
        return parseInt(string,16);
    }
}


let FF = new Hex(255);

console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));