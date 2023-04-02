const letterReplacer={
"@":"а",
"1"	:	"ъ",
"0"	:	"о",
"u"	:	"у",
"€"	:	"е",
"i"	:	"и",
}



function replaceCharacters(){
    let promptString=prompt().toString();
    for(let i=0;i<promptString.length;i++){
        let currentChar=promptString.charAt(i);
        for(const key in letterReplacer){
            if(key==currentChar){
                promptString=promptString.replace(key,letterReplacer[key]);
            }
        }
    }

    console.log(promptString);
    reverseWrite(promptString);
}

function reverseWrite(string){
   let stringArr=string.split(' ');
   let result='';
    for(let i=stringArr.length-1;i>=0;i--){
        result+=stringArr[i]+' ';
    }
    console.log(result);
}

replaceCharacters();