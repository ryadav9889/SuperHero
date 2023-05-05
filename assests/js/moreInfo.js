let obj = JSON.parse(localStorage.getItem("heroInfo"));
let hername=document.getElementById('hero-name');
hername.innerHTML=obj.name;
document.getElementById('description').innerHTML=obj.description;
document.getElementById('Comics').innerHTML=obj.comics;
document.getElementById('Stories').innerHTML=obj.stories;
document.getElementById('id').innerHTML=obj.id;
document.getElementById('series').innerHTML=obj.series;
document.getElementById('imgfor').src=obj.img;
document.getElementById('favorite').addEventListener('click',function(){
    console.log(a);
 });





