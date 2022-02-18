let username= document.getElementById("username");
let password= document.getElementById("password");
let error = document.getElementById("error");

// function valid(a,b,callback){
// username.innerHTML=a.value;

//     password.innerHTML=b.value;
//     callback();
// }
//  callback();{
//     username.input.value === admin
    
//         }
        


// validate(admin,12345,callback);

function validation(){
    let eregexp = /^([a])([d])([m])([i])([n])$/;
    if(eregexp.test(username.value)){
        
     
        return true;
    }
  
    else{
      alert("Username  should be admin.");
      
    
        return false;
    }
}

function validate(){
    
    let regexp=/^([1])([2])([3])([4])([5])$/;
    if(regexp.test(password.value)){
     return true;
     
}
 else {
     alert("Invalid:Password should be 12345");
     return false;
 }

}

    function submitter(){
        if (!validate())return false;
   //    if (!valid())return false;
         if (!validation())return false;
      
         return true;
       }