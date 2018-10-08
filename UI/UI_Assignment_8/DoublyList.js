function Node(data){
    this.data=data;
    this.prev=null;
    this.next=null;
}
function doublyList(){
    this.head=null;
    this.length=0;
}
doublyList.prototype.add=function(value){
    var node=new Node(value);
    var currentNode=this.head;
    if(!currentNode){
        this.head=node;
        node.prev=this.head;
        this.length++;
        return node;
    }
    while(currentNode.next){
        currentNode=currentNode.next;
    }
    node.prev=currentNode;
    currentNode.next=node;
    this.length++;
    return node;

};

doublyList.prototype.addAtIndex=function(value,index){
    var node=new Node(value);
    var currentNode=this.head;
    // var previous=currentNode;
    if(index>this.length+1 || index<=0){
        console.log("index is not present");
        return null;
    }
    else{
        if(index===1){
            node.next=this.head;
            this.head=node;
            node.prev=this.head;
            
        }
        else{
            for(var i=0;i<index-1;i++){
                // previous=currentNode;
                currentNode=currentNode.next;
                console.log(currentNode.data);
            }
            node.prev=currentNode.prev;
            node.next=currentNode.prev.next;
            currentNode.prev.next=node;
            currentNode.prev=node;
        }
       this.length++;
        return node;
    }
};

doublyList.prototype.delete=function(index){
    var currentNode=this.head;
    var previous=currentNode;
    if(index>this.length || index<=0){
        console.log("index is not present");
        return null; 
    }
    else{
        if(index===1){
            this.head=currentNode.next; 
            currentNode.prev=this.head;  
            this.length--;                                                                                                                                                            
        }
        for(var i=0;i<index-1;i++){
            // previous=currentNode;
            currentNode=currentNode.next;
        }
        currentNode.prev.next=currentNode.next;
        currentNode.next.prev=currentNode.prev;
        this.length--;
    }
};
doublyList.prototype.printList=function(){
    var currentNode=this.head;
    while(currentNode){
        console.log(currentNode.data)
        currentNode=currentNode.next;
       
    }
};