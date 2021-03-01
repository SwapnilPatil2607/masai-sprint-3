window.addEventListener("load",function(){
   const logo=document.getElementById("logo");
   logo.addEventListener("click",home);
   chardetails();
   var episodes=document.getElementById("Episodes");
    episodes.addEventListener("click",getepis);
  
})
const home=()=>{
    location.assign("rick&morty.html");
    localStorage.clear();
}
const getepis=()=>{
    localStorage.removeItem("characters");
    location.assign("episodes.html");
}
const chardetails=()=>{
    var xhr=new XMLHttpRequest();
    xhr.open("GET","https://rickandmortyapi.com/api/character/");
    xhr.send();
    xhr.onload=()=>{
        var res=JSON.parse(xhr.response);
        localStorage.setItem("characters",JSON.stringify(res.results));
    }

    localStorage.removeItem("episodes");
    var storage=localStorage.getItem("characters")
var characters=JSON.parse(storage);
console.log(characters)
    var div=document.getElementById("char_details");
             for(var i=0;i<characters.length;i++){
                        var card=document.createElement("div");
                        card.setAttribute("class","card");
                        var propic=document.createElement("img");
                        propic.setAttribute("src",characters[i].image);
                        propic.setAttribute("class","chrs");
                        var name=document.createElement("p");
                        name.textContent="Name: "+characters[i].name;
                        var species=document.createElement("p");
                        species.textContent="Species: "+characters[i].species;
                        var Gender=document.createElement("p");
                        Gender.textContent="Gender: "+characters[i].gender;
                        var status=document.createElement("p");
                        status.textContent="Status: "+characters[i].status;
                        var details=document.createElement("div");
                        details.setAttribute("class","details");
                      details.append(name,Gender,status,species);
                    card.append(propic,details);
                div.append(card);
                 }
}