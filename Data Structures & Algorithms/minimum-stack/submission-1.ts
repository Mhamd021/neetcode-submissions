class MinStack {
   minStack : number[];
   stack:number[];
   constructor()
   {
    this.minStack = [];
    this.stack = [];
   }
   push(x:number) : void
   {

      this.stack.push(x);
    if( this.minStack.length === 0 || this.minStack[this.minStack.length -1 ] >= x)
    {
        this.minStack.push(x)
    }
   }
   pop() : void 
   {
    const poped = this.stack.pop();
        if( this.minStack[this.minStack.length -1 ] === poped ) {this.minStack.pop()}
   }
   top() : number 
   {
    return this.stack[this.stack.length -1] ; 
   }
   getMin() : number
   {
        return this.minStack[this.minStack.length -1];
   }
}