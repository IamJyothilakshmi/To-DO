
            
              
                 
          //
          function ajax(){
            var xhttp=new XMLHttpRequest();
            xhttp .onreadystatechange= function() {
                if(this.readyState==4&&this.status==200){
                  var response=JSON.parse(this.responseText);
                  
                    var output = "";
                
              
                for(var i=0;i<response.length;i++){
                output  += '<li>'+ '<input  type="checkbox" name="settings" >' + response[i].title +'</li>';
            };
            document.getElementById("head").innerHTML=output;
          }
        }
        
            xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
            xhttp.send();
            } 
         
                 
     
            var a =0;
            var b=200;
            var c=90;
            var d=110;
            function checkfn(v){
                if (v.checked){
                    a++;
                    c++;
                    d--;
                }
                else{
                    a--;
                    b--;
                    d++;
                } 
              }
            var p = new Promise(function(resolve,reject){
                     if(a==5){
                         resolve();
                    }
                    else{
                         reject(a);
                     }
                 });
                p.then(function(){
                    alert("Congratulations You have completed five Tasks!!")
                }).catch(function(a){
                     alert("Complete your daily tasks")
                 });
                     
                   
                
                             
                 
                  
  
                 
    
                
           
     
        
        

          
      