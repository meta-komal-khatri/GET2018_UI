function Node(data){
    this.data=data;
    this.next=null;
}
function Stack(){
    this.head=null;
    this.length=0;
}
Stack.prototype.push=function(element){
    var node = new Node(element);
    node.next = this.head;
    this.head = node;
    this.length++;
};
    
Stack.prototype.pop=function(){
    
    if(this.head == null){
        console.log("nothing to pop");
    }
    else{
        this.head= this.head.next;
    }
    this.length--;
    }
Stack.prototype.print=function(){
    var currentNode=this.head;
    while(currentNode){
        console.log(currentNode.data);
        currentNode=currentNode.next;
    }
}