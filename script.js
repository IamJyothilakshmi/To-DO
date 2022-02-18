





    function ajax(){
       var xhttp = new XMLHttpRequest();
       xhttp.onreadystatechange = function(){
          if(this.readyState==4&&this.status==200){
         
            // )
             var response = JSON.parse(this.responseText);
             var Jlist=response.list;
             console.log(Jlist);
             var output = "";
                for(var i=0;i<response.length;i++){
                //  for(var i=0;i<Jlist.length;i++){
                    //  output += '<li>'+ '<input  type="checkbox"   >' + response[i].title +'</li>';
                  // output += "<li>"+ "<input type=checkbox>" + Jlist[i].title + "</li>" ;
                 if(response[i].completed==false){
                  
                  output += '<li>'+ '<input  type="checkbox"   >' + response[i].title +'</li>';
                }
                    else (response[i].completed==true);{
                    output += '<li>'+ '<input checked type="checkbox"   >' + response[i].title +'</li>';
                   
                   }
               }
           
             console.log("output");
   document.getElementById("head").innerHTML=output;
  
          }
      };
     
  

      xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
       xhttp.send();
    }
    
  

 



            
       
  


  
 
  
  
  
  
  