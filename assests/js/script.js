   let a=0;
   let arr=[];
//    arr.length=0;
((()=>{
// var conn = new XMLHttpRequest();
function handler(responseJSON){
    // var responseJSON = JSON.parse(conn.response);
        
            var imageURL = responseJSON.data.results["1"].thumbnail.path;
            var obj=responseJSON.data.results;
          //   console.log(obj);
            
            document.getElementById('character-img1').setAttribute('src',imageURL+".jpg");
            document.getElementById('name1').innerText=responseJSON.data.results["1"].name;
            document.getElementById('character-img1').addEventListener('click',function(){
               let heroInfo = {
                    img:responseJSON.data.results["1"].thumbnail.path+'.jpg',
                    name:responseJSON.data.results["1"].name,
                    id: responseJSON.data.results["1"].id ,
                    description:responseJSON.data.results["1"].description,
                    comics:responseJSON.data.results["1"].comics.available,
                    series:responseJSON.data.results["1"].series.available,
                    stories:responseJSON.data.results["1"].stories.available,
                }

                localStorage.setItem("heroInfo", JSON.stringify(heroInfo));
                window.open('moreInfo.html');
             
            })

          

            document.getElementById('character-img2').setAttribute('src',responseJSON.data.results["2"].thumbnail.path+'.jpg');
            document.getElementById('name2').innerText=responseJSON.data.results["2"].name;
            document.getElementById('character-img2').addEventListener('click',function(){
               let heroInfo = {
                    img:responseJSON.data.results["2"].thumbnail.path+'.jpg',
                    name:responseJSON.data.results["2"].name,
                    id: responseJSON.data.results["2"].id ,
                    description:responseJSON.data.results["2"].description,
                    comics:responseJSON.data.results["2"].comics.available,
                    series:responseJSON.data.results["2"].series.available,
                    stories:responseJSON.data.results["2"].stories.available,
                }

                localStorage.setItem("heroInfo", JSON.stringify(heroInfo));
                window.open('moreInfo.html');
             
            })

            document.getElementById('character-img3').setAttribute('src',responseJSON.data.results["6"].thumbnail.path+'.jpg');
            document.getElementById('name3').innerText=responseJSON.data.results["6"].name;

            document.getElementById('character-img3').addEventListener('click',function(){
               let heroInfo = {
                    img:responseJSON.data.results["6"].thumbnail.path+'.jpg',
                    name:responseJSON.data.results["6"].name,
                    id: responseJSON.data.results["6"].id ,
                    description:responseJSON.data.results["6"].description,
                    comics:responseJSON.data.results["6"].comics.available,
                    series:responseJSON.data.results["6"].series.available,
                    stories:responseJSON.data.results["6"].stories.available,
                }

                localStorage.setItem("heroInfo", JSON.stringify(heroInfo));
                window.open('moreInfo.html');
             
            })

            document.getElementById('character-img4').setAttribute('src',responseJSON.data.results["4"].thumbnail.path+'.jpg');
            document.getElementById('name4').innerText=responseJSON.data.results["4"].name;

            document.getElementById('character-img4').addEventListener('click',function(){
               let heroInfo = {
                    img:responseJSON.data.results["4"].thumbnail.path+'.jpg',
                    name:responseJSON.data.results["4"].name,
                    id: responseJSON.data.results["4"].id ,
                    description:responseJSON.data.results["4"].description,
                    comics:responseJSON.data.results["4"].comics.available,
                    series:responseJSON.data.results["4"].series.available,
                    stories:responseJSON.data.results["4"].stories.available,
                }

                localStorage.setItem("heroInfo", JSON.stringify(heroInfo));
                window.open('moreInfo.html');
             
            })

            document.getElementById('character-img5').setAttribute('src',responseJSON.data.results["10"].thumbnail.path+'.jpg');
            document.getElementById('name5').innerText=responseJSON.data.results["10"].name;
            document.getElementById('character-img5').addEventListener('click',function(){
               let heroInfo = {
                    img:responseJSON.data.results["10"].thumbnail.path+'.jpg',
                    name:responseJSON.data.results["10"].name,
                    id: responseJSON.data.results["10"].id ,
                    description:responseJSON.data.results["10"].description,
                    comics:responseJSON.data.results["10"].comics.available,
                    series:responseJSON.data.results["10"].series.available,
                    stories:responseJSON.data.results["10"].stories.available,
                }

                localStorage.setItem("heroInfo", JSON.stringify(heroInfo));
                window.open('moreInfo.html');
             
            })

            document.getElementById('character-img6').setAttribute('src',responseJSON.data.results["14"].thumbnail.path+'.jpg');
            document.getElementById('name6').innerText=responseJSON.data.results["14"].name;
            document.getElementById('character-img6').addEventListener('click',function(){
               let heroInfo = {
                    img:responseJSON.data.results["14"].thumbnail.path+'.jpg',
                    name:responseJSON.data.results["14"].name,
                    id: responseJSON.data.results["14"].id ,
                    description:responseJSON.data.results["14"].description,
                    comics:responseJSON.data.results["14"].comics.available,
                    series:responseJSON.data.results["14"].series.available,
                    stories:responseJSON.data.results["14"].stories.available,
                }

                localStorage.setItem("heroInfo", JSON.stringify(heroInfo));
                window.open('moreInfo.html');
             
            })
           
            document.getElementById('character-img7').setAttribute('src',responseJSON.data.results["16"].thumbnail.path+'.jpg');
            document.getElementById('name7').innerText=responseJSON.data.results["16"].name;
            document.getElementById('character-img7').addEventListener('click',function(){
               let heroInfo = {
                    img:responseJSON.data.results["16"].thumbnail.path+'.jpg',
                    name:responseJSON.data.results["16"].name,
                    id: responseJSON.data.results["16"].id ,
                    description:responseJSON.data.results["16"].description,
                    comics:responseJSON.data.results["16"].comics.available,
                    series:responseJSON.data.results["16"].series.available,
                    stories:responseJSON.data.results["16"].stories.available,
                }

                localStorage.setItem("heroInfo", JSON.stringify(heroInfo));
                window.open('moreInfo.html');
             
            });

            document.getElementById('character-img8').setAttribute('src',responseJSON.data.results["8"].thumbnail.path+'.jpg');
            document.getElementById('name8').innerText=responseJSON.data.results["8"].name;
            document.getElementById('character-img8').addEventListener('click',function(){
               let heroInfo = {
                    img:responseJSON.data.results["8"].thumbnail.path+'.jpg',
                    name:responseJSON.data.results["8"].name,
                    id: responseJSON.data.results["8"].id ,
                    description:responseJSON.data.results["8"].description,
                    comics:responseJSON.data.results["8"].comics.available,
                    series:responseJSON.data.results["8"].series.available,
                    stories:responseJSON.data.results["8"].stories.available,
                }

                localStorage.setItem("heroInfo", JSON.stringify(heroInfo));
                window.open('moreInfo.html');
             
            })


            document.getElementById('footer').innerText=responseJSON.attributionText;            ;
}
// conn.open('get','http://gateway.marvel.com/v1/public/characters?ts=2&apikey=494ed1eb931aff37808083dfe4f0d43f&hash=4999b6e62f85dd61c3aebc2b702c351b',true);
// conn.send();
// console.log('hii');

fetch(`http://gateway.marvel.com/v1/public/characters?ts=2&apikey=494ed1eb931aff37808083dfe4f0d43f&hash=4999b6e62f85dd61c3aebc2b702c351b`)
.then(res => res.json())
.then(data => handler(data));
})());






