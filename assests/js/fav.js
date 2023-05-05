// Selecting the card container from the DOM
let cardContainer = document.getElementById('container');

// Event listener attached to dom which is executed when the page is loaded
window.addEventListener("load", function () {
let favourites = localStorage.getItem("fav");

if (favourites == null) {
    cardContainer.innerHTML = "<p class=\"no-characters\">No characters present in Favourites</p>"
    return;
}

else {
    favourites = JSON.parse(this.localStorage.getItem("fav"));
}

console.log(favourites);

  // if all the characters are deleted from favourites and not character left for displaying
  if (favourites.length == 0) {
    cardContainer.innerHTML = "<p class=\"no-characters\">No characters present in Favourites</p>";
    return;
}

favourites.forEach(character => {
    //    console.log(element.img); 
    cardContainer.innerHTML +=`
    <div class="flex-col card">

      <img src="${character.img}" alt="">
      <span class="name">${character.name}</span>
      <span class="id">Id : ${character.id}</span>
      <span class="comics">Comics : ${character.comics}</span>
      <span class="series">Series : ${character.series}</span>
      <span class="stories">Stories : ${character.stories}</span>
      
           <button class="btn"><i class="fa-solid fa-circle-info"></i> &nbsp; Remove</button>
      

    </div>
    
    
    `
       
});



})