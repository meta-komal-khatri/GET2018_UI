function stringPattern(patternString){
    this.patternString=patternString;
    this.delete=function(){
        var index=0;
        var subStringLength=1;
        for(var i=0;i<patternString.length-1;i++){
            console.log(patternString);
            if(patternString.charAt(i)==patternString.charAt(i+1)){
                subStringLength++;
                continue;
            }
            if(subStringLength>1){
                patternString=patternString.substr(0,index).concat(patternString.substr(index+subStringLength,patternString.length-(index+subStringLength)));
                 subStringLength=1;
                 i=0;
                 index=0;
            }
            index=i+1;
        }
        if(subStringLength>1){
            patternString=patternString.substr(0,index).concat(patternString.substr(index+subStringLength,patternString.length-(index+subStringLength)));
             subStringLength=1;
             i=0;
             index=0;
             console.log(patternString);
        }
    };
    this.print=function(){
        patternString=patternString.substr(0,4).concat(patternString.substr(4+3,patternString.length-(7)));
        // if(patternString.charAt(0)==patternString.charAt(1)){
        //     console.log("112");
        // }
        console.log(patternString);
    };
}