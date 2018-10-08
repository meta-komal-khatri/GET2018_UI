function Node(element,next){
    this.element=element;
    this.next = next;
}

function Queue(head,size){
    this.head=null;
    this.size=0;
}
Queue.prototype.enqueue=function(element){
    var node = new Node(element);
    var current;

    if(this.head==null){
        this.head= node;
    }
    else{
        current = this.head;
        while(current.next){
            current = current.next;
        }   

        current.next = node;
    }
    this.size++;
};

Queue.prototype.dequeue=function(){
    if(this.head == null){
        console.log("nothing to dequeue");
    }
    else{
        this.head= this.head.next;
    }
    this.size--;
}

Queue.prototype.printList=function(){
    var current = this.head;
    var llString = "";
    while(current){
        llString += current.element + " ";
        current=current.next;
    }
    console.log(llString);
};