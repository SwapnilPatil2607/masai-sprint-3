window.addEventListener("load",function(){
    var characters=document.getElementById("Characters");
    characters.addEventListener("click",getchars);
    var episodes=document.getElementById("Episodes");
    episodes.addEventListener("click",getepis);
    localStorage.clear();
});
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
const getepis=()=>{
    location.assign("episodes.html");
}
