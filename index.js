const rockList = document.querySelector(".rock-list");
const folkList = document.querySelector(".folk-list");
const metalList = document.querySelector(".metal-list");
const rockLink = document.querySelector(".rock-link");
const folkLink = document.querySelector(".folk-link");
const metalLink = document.querySelector(".metal-link");

rockLink.addEventListener("click", function(){
  rockList.classList.remove("music-toggle");
  folkList.classList.add("music-toggle");
  metalList.classList.add("music-toggle");
  rockLink.classList.add("link-clicked");
  folkLink.classList.remove("link-clicked");
  metalLink.classList.remove("link-clicked");
});

folkLink.addEventListener("click", function(){
  rockList.classList.add("music-toggle");
  folkList.classList.remove("music-toggle");
  metalList.classList.add("music-toggle");
  rockLink.classList.remove("link-clicked");
  folkLink.classList.add("link-clicked");
  metalLink.classList.remove("link-clicked");
});

metalLink.addEventListener("click", function(){
  rockList.classList.add("music-toggle");
  folkList.classList.add("music-toggle");
  metalList.classList.remove("music-toggle");
  rockLink.classList.remove("link-clicked");
  folkLink.classList.remove("link-clicked");
  metalLink.classList.add("link-clicked");
});

document.querySelector(".genre-btn").addEventListener("click", function(){

    let xhr = new XMLHttpRequest();

    xhr.open('get', "https://binaryjazz.us/wp-json/genrenator/v1/genre/");
    xhr.send();

    xhr.onload = function() {
      if(this.status == 200){
        let data = JSON.parse(this.response);
        var genre = data;
      };
      document.querySelector(".genre-name").classList.add("genre-name-hidden");
      document.querySelector(".genre-name").innerHTML = genre;

  };
});

document.querySelector(".idea-btn").addEventListener("click", function(){

    let xhr = new XMLHttpRequest();

    xhr.open('get', "https://binaryjazz.us/wp-json/genrenator/v1/story/1");
    xhr.send();

    xhr.onload = function() {
      if(this.status == 200){
        let data = JSON.parse(this.response);
        var idea = data;
      };
      document.querySelector(".idea-name").classList.add("idea-name-hidden");
      document.querySelector(".idea-name").innerHTML = idea;

  };
});

document.querySelector(".burger").addEventListener("click", function(){
  document.querySelector(".nav-list").classList.toggle("nav-active");
  document.querySelector(".line-1").classList.toggle("line-1-active");
  document.querySelector(".line-2").classList.toggle("line-2-active");
  document.querySelector(".line-3").classList.toggle("line-3-active");
  document.querySelector(".container-wrapper").classList.toggle("container-wrapper-active");
  document.querySelector(".nav-list").classList.toggle("nav-list-active");
});
