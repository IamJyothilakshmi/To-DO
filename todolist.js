function ajax(){
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
    )
    .append("<label id='todo'>" + note + "</label>")
    .append("<br>");
}
             
         }
         $("#tot").html("Total number of tasks: " +t);
         $("#ctot").html("Total number of tasks completed: " +ct);
         $("#nctot").html("Total number of tasks to be completed: " +nct);
     });
 });
}