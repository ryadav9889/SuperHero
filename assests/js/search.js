
let searchBar = document.getElementById("search-bar");
let searchResults = document.getElementById("search-results");

// Adding eventListener to search bar
searchBar.addEventListener("input", () => searchHeros(searchBar.value));


function searchHeros(textSearched) {
//     console.log(textSearched);


    if (textSearched.length == 0) {
        searchResults.innerHTML = ``;
        return;
   }

   fetch(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${textSearched}&apikey=9ab871748d83ae2eb5527ffd69e034de&hash=d35377547e551cd64a60657d2517bb7f?ts=1`)
   .then(res => res.json()) //Converting the data into JSON format
   .then(data => showSearchedResults(data.data.results)) //sending the searched results characters to show in HTML
}

// Function for displaying the searched results in DOM
// An array is accepted as argument 
// SearchedHero is the array of objects which matches the string entered in the searched bar
function showSearchedResults(searchedHero) {
//     console.log(searchedHero);

let favouritesCharacterIDs = localStorage.getItem("favouritesCharacterIDs");

 if(favouritesCharacterIDs == null){
      // If we did't got the favouritesCharacterIDs then we iniitalize it with empty map
      favouritesCharacterIDs = new Map();
     
 }
 else if(favouritesCharacterIDs != null){
      // If the we got the favouritesCharacterIDs in localStorage then parsing it and converting it to map
      favouritesCharacterIDs = new Map(JSON.parse(localStorage.getItem("favouritesCharacterIDs")));

 }

   

     // // count is used to count the result displayed in DOM
     let count = 1;

     for (const key in searchedHero) {

          if (count <= 10) {
               // getting the single hero 
               // hero is the object that we get from API
               let hero = searchedHero[key];
     
               // Appending the element into DOM
               searchResults.innerHTML +=
                    
               `<li class="flex-row single-search-result">
                    <div class="flex-row img-info">
                           <img src="${hero.thumbnail.path+'/portrait_medium.' + hero.thumbnail.extension}" alt="">
                    </div>
                     
                    
                    <div class="hero-info flex-col">
                           <a class="character-info" href="moreInfo.html" >
                            <span class="hero-name">${hero.name}</span>
                           </a>
                            <span id="hero-id">${hero.id}</span>
                     </div>
   
                    <div class="flex-col buttons">
                       <button class="btn add-to-fav-btn">${favouritesCharacterIDs.has(`${hero.id}`) ? "<i class=\"fa-solid fa-heart-circle-minus\"></i> &nbsp; Remove from Favourites" :"<i class=\"fa-solid fa-heart fav-icon\"></i> &nbsp; Add to Favourites</button>"}
                    </div>

               
                    <div style="display:none;">
                    <span>${hero.name}</span>
                    <span>${hero.description}</span>
                    <span>${hero.comics.available}</span>
                    <span>${hero.series.available}</span>
                    <span>${hero.stories.available}</span>
                    <span>${hero.thumbnail.path+'/portrait_uncanny.' + hero.thumbnail.extension}</span>
                    <span>${hero.id}</span>
                    <span>${hero.thumbnail.path+'/landscape_incredible.' + hero.thumbnail.extension}</span>
                    <span>${hero.thumbnail.path+'/standard_fantastic.' + hero.thumbnail.extension}</span>
               </div>
               
               
           </li>
     `
          }
          count++;
      }

          events();
}

// Function for attacthing eventListener to buttons
function events() {

     let favouriteButton = document.querySelectorAll(".add-to-fav-btn");
     favouriteButton.forEach((btn) => btn.addEventListener("click", addToFavourites));

     let characterInfo = document.querySelectorAll(".character-info");
     characterInfo.forEach((character) => character.addEventListener("click", addInfoInLocalStorage))
}


// Function invoked when "Add to Favourites" button or "Remvove from favourites" button is click appropriate action is taken accoring to the button clicked
function addToFavourites() {

     // If add to favourites button is cliked then
     if (this.innerHTML == '<i class="fa-solid fa-heart fav-icon"></i> &nbsp; Add to Favourites') {
           
          // We cretate a new object containg revelent info of hero and push it into favouritesArray
               // console.log(this.parentElement.parentElement.children["0"].children["0"].src)

            let fav = {
               img:this.parentElement.parentElement.children["0"].children["0"].src,
               name:this.parentElement.parentElement.children[1].children[0].children[0].innerHTML,
               id:  this.parentElement.parentElement.children[1].children[1].innerHTML,
               description: this.parentElement.parentElement.children[3].children[1].innerHTML,
               comics:this.parentElement.parentElement.children[3].children[2].innerHTML,
               series:this.parentElement.parentElement.children[3].children[3].innerHTML,
               stories:this.parentElement.parentElement.children[3].children[4].innerHTML,
           }

           console.log(fav);

              
                
             if(arr.length!=0){
               for(let i of arr){
                   if(fav.name==i.name )
                   {
                   alert('already in fav');
                    return;
                   }
                   
               }
               arr[a++]=fav;
             }
             else{
                arr[a]=fav;
                a++;
             }
             console.log(a);
               
          localStorage.setItem("fav", JSON.stringify(arr));
          localStorage.setItem("a",a);
          


     }
}



// Function which stores the info object of character for which user want to see the info 
function addInfoInLocalStorage() {

        
     let heroInfo = {
          img:this.parentElement.parentElement.children["0"].children["0"].src,
          name:this.parentElement.parentElement.children[1].children[0].children[0].innerHTML,
          id:  this.parentElement.parentElement.children[1].children[1].innerHTML,
          description: this.parentElement.parentElement.children[3].children[1].innerHTML,
          comics:this.parentElement.parentElement.children[3].children[2].innerHTML,
          series:this.parentElement.parentElement.children[3].children[3].innerHTML,
          stories:this.parentElement.parentElement.children[3].children[4].innerHTML,
      }

     // console.log(localStorage.setItem("moreDetail",heroInfo));
     localStorage.setItem("heroInfo", JSON.stringify(heroInfo));

}
