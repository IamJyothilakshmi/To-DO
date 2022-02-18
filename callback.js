var list=["https://jsonplaceholder.typicode.com/todos"];
    list.forEach(myFunction);
    console.log(list);
   function myFunction(i){
        list +=i+"\n";
    }