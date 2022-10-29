class List{
    constructor(){
        this.collection=[];
    }
    add(element){
        this.collection.push(element);
        this.collection.sort((a, b) => a - b);
    }
    remove(index){
        if(index<0 || index>=this.collection.length){
            return;
        }
        this.collection.splice(index,1);
        this.collection.sort((a, b) => a - b);
    }
    get(index){
        if(index<0 || index>=this.collection.length){
            return;
        }
        return this.collection[index];
    }
    size(){
        return this.collection.length;
    }
}

let myList=new List();
myList.add(5);
console.log(myList.get(0));
myList.add(3);
console.log(myList.get(0));
myList.remove(0);
console.log(myList.size);