class Stinger{
    constructor(initialString,initialLength){
        this.initialString=initialString;
        this.initialLength=initialLength;
        this.innerString=initialString;
        this.innerLength=initialString.length;
    }

    increasing(length){
        if(length<0){
            this.innerLength=0;
        }
        else{
            this.innerLength=length;
        }
    }

    decreasing(length){
        if(length<0){
            this.innerLength=0;
        }
        else{
            this.innerLength=length;
        }
    }

    toString(){
        if(this.innerLength>this.initialLength){
            let word='';
            for(let ch of this.innerString){
                word+=ch;
            }
            this.innerString=word;
            return this.innerString;
        }
        else if(this.initialLength)
    }

}