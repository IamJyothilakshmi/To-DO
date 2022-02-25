
var element, note, done;
var copy = [];
var t=0,
    ct=0,
    nct=0;
    
 $("document").ready(function(){
     $.get("https://jsonplaceholder.typicode.com/todos",(r)=>{
         t=r.length;
         for (let i=0;i<r.length;i++){
             element=r[i];
             note=element.title;
             done=element.completed;
             if (done){
                 ct++;
                 $("#list").append($('<div/>',{
                     class:"colour"
                 })
                 .append(
                     $(document.createElement("input")).attr({
                         id:"done",
                         checked:"true",
                         name:"myCheckbox",
                         type:"ckeckbox"
                     })
                 )
                 .append("<label id='noAction'>"+ note + "</label>")
                 .append("<br>"));
                 console.log(getJSON);
                }
else{
    nct++;
    $("#list").append($('<div/>',{
        class:"colour"
    })
    .append(
        $(document.createElement("input")).attr({
            id:"notDone",
            name:"myCheckbox",
            type:"checkbox",
            onchange:"checkfn(this);"
        })
    )
    
    .append("<label id='todo'>" + note + "</label>")
    .append("<br>"));
}
             
         }
         $("#tot").html("Total number of tasks: ${t}");
         $("#ctot").html("Total number of tasks completed: ${ct}");
         $("#nctot").html("Total number of tasks to be completed: ${nct}");
     });
 });
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
    //  }).catch(function(a){
    //     //  alert("Complete your daily tasks")
    //  });
 })
}
