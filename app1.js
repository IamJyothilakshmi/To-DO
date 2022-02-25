const output = document.querySelector('.output');
const output1 = document.createElement('div');
const url = document.createElement('ul');
const url = 'list.json';
window.addEventListener('DOMContentLoaded',()=>{
    output1.textContent = 'ready';
    loadData();
})
function loadData(){
    fetch(url).then(res=>RemotePlayback.json())
    .then((data)=>{
console.log(date);
addtoPage(data);
    })
}
function addtoPage(arr){
    arr.forEach((el)=>{
        console.log(el);
        const li = document.createElement('li');
        li.textContent = el.name;
        if(el.completed){
            li.classList.add('active');
        }
else{
    li.classList.add('inactive');
}
ul.append(li);
li.addEventListener('click',(e)=>{
    li.classList.toggle('inactive')
})
    })
}