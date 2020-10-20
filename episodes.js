window.addEventListener("load",function(){
    getepis();
    const logo=document.getElementById("logo");
    logo.addEventListener("click",home);
    var characters=document.getElementById("Characters");
    characters.addEventListener("click",getchars);
    var search=document.getElementById("srch-btn");
    search.addEventListener("click",result);
});
const result=()=>{
    var input=document.getElementById("search_episode");
    var episodes=JSON.parse(localStorage.getItem("episodes"));
    var cont=document.getElementById("container");
    for(var i=0;i<episodes.length;i++){
            if(episodes[i].episode==input.value){
                cont.innerHTML="";
                var card=document.createElement("div");
                card.setAttribute("class","card");
                var poster=document.createElement("img");
                poster.setAttribute("src","rmepisode.jpg");
                poster.setAttribute("class","poster");
                var epno=document.createElement("h3");
                epno.textContent="Episode: "+episodes[i].episode;
                var epname=document.createElement("h3");
                epname.textContent="Episode Name: "+episodes[i].name;
                var date=document.createElement("h3");
                date.textContent="Air Date: "+episodes[i].air_date;
                var details=document.createElement("div");
                details.append(epno,epname,date)
                card.append(poster,details);
                cont.append(card);
        }
    }
    var exist=document.createElement("img");
                exist.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/799px-Rick_and_Morty.svg.png");
                exist.setAttribute("id","meeseek");
                cont.append(exist);
}
const home=()=>{
    location.assign("rick&morty.html");
    localStorage.clear();
}
const getepis=()=>{
    localStorage.removeItem("characters");
    var xhr=new XMLHttpRequest();
    xhr.open("GET","https://rickandmortyapi.com/api/episode/");
    xhr.send();
    xhr.onload=()=>{
    var res=JSON.parse(xhr.response);
    localStorage.setItem("episodes",JSON.stringify(res.results));
    episodes=res.results;
    showepisode(episodes);
    }
}
const getchars=()=>{
    var xhr=new XMLHttpRequest();
    xhr.open("GET","https://rickandmortyapi.com/api/character/");
    xhr.send();
    xhr.onload=()=>{
        var res=JSON.parse(xhr.response);
        localStorage.setItem("characters",JSON.stringify(res.results));
    }
location.assign("characters.html");
}
const showepisode=(episodes)=>{
    var episodes=episodes;
    var cont=document.getElementById("container");
    for(var i=0;i<episodes.length;i++){
        var card=document.createElement("div");
        card.setAttribute("class","card");
        var poster=document.createElement("img");
        poster.setAttribute("src","rmepisode.jpg");
        poster.setAttribute("class","poster");
        var epno=document.createElement("h3");
        epno.textContent="Episode: "+episodes[i].episode;
        var epname=document.createElement("h3");
        epname.textContent="Episode Name: "+episodes[i].name;
        var date=document.createElement("h3");
        date.textContent="Air Date: "+episodes[i].air_date;
        var details=document.createElement("div");
        details.append(epno,epname,date)
        card.append(poster,details);
        cont.append(card);
    }

}