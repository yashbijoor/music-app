document.querySelector(".burger").addEventListener("click", function(){
  document.querySelector(".nav-list").classList.toggle("nav-active");
  document.querySelector(".line-1").classList.toggle("line-1-active");
  document.querySelector(".line-2").classList.toggle("line-2-active");
  document.querySelector(".line-3").classList.toggle("line-3-active");
  document.querySelector(".about-wrapper").classList.toggle("about-wrapper-active");
  document.querySelector(".nav-list").classList.toggle("nav-list-active");
});
