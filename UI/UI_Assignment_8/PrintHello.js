String.prototype.repeatify=function(num){
    var result="";
    for(var i=0;i<num;i++){
        result+=this;
    }
    return result;
}