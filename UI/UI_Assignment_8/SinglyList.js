function Node(data){
    this.data=data;
    this.next=null;
}
function singlyList(){
    this.length=0;
    this.head=null;
}

singlyList.prototype.add=function(value){
    var node=new Node(value);
    var currentNode=this.head;
    
    if(!currentNode){
        this.head=node;
        this.length++;
        return node;
    }
    while(currentNode.next){
        currentNode=currentNode.next;
    }
    this.length++;
    currentNode.next=node;
    return node;

};
singlyList.prototype.addAtIndex=function(value,index){
    var node=new Node(value);
    var currentNode=this.head;
    var previous=currentNode;
    if(index>this.length || index<=0){
        console.log("index is not present");
        return null;
    }
    else{
        if(index===1){
            node.next=this.head;
            this.head=node;
        }
        else{
            for(var i=0;i<index-1;i++){
                previous=currentNode;
                currentNode=currentNode.next;
                console.log(currentNode.data);
            }
            node.next=currentNode;
            previous.next=node;
        }
       
        return node;
    }
};


singlyList.prototype.delete=function(index){
    var currentNode=this.head;
    var previous=currentNode;
    if(index>this.length || index<=0){
        console.log("index is not present");
        return null; 
    }
    else{
        
        for(var i=0;i<index;i++){
            previous=currentNode;
            currentNode=currentNode.next;
        }
        previous.next=currentNode.next;
    }
};
singlyList.prototype.printList=function(){
    var currentNode=this.head;
    while(currentNode){
       console.log(currentNode.data)
        currentNode=currentNode.next;
    }
};
function add(){
    var value=document.getElementsByName("value");
    var s=new singlyList();
    document.write(value);
    s.add(value);
}