function StringExtension(){

    let message='Hello nice to meet you';
    message=String(message);

    String.prototype.ensureStart=function(str){
        for(let i=0;i<str.length;i++){
            if(this[i]!==str[i]){
                return str+this;
            }
        }
        return str;
    }
    String.prototype.ensureEnd=function(str){

    }
    String.prototype.isEmpty=function(){
        if(this===''){
            return true;
        }
        return false;
    }
    String.prototype.truncate=function(n){

    }

    console.log(message.ensureStart('Hello'));
    console.log(message);
    console.log(message.isEmpty());

}



