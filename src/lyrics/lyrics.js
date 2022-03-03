
document.querySelector(".input-form").addEventListener("submit", function(e){
    e.preventDefault();
    const artist = document.querySelector(".text-1").value;
    const title = document.querySelector(".text-2").value;
    const finalURL = "https://api.lyrics.ovh/v1/" + artist + "/" + title;
    let xhr = new XMLHttpRequest();
    xhr.open('get', finalURL);
    xhr.send();

    xhr.onload = function() {
      if(this.status == 200){
        let data = JSON.parse(this.response);
        var lyrics = data.lyrics;
      };
      document.querySelector(".lyrics-wrapper").classList.add("lyrics-wrapper-hidden");
      document.querySelector(".name").innerHTML = title;
      document.querySelector(".lyrics").innerHTML = lyrics;
  };
});

document.querySelector(".chords-input-form").addEventListener("submit", function(e){
    e.preventDefault();
    const artist = document.querySelector(".text-3").value;
    const title = document.querySelector(".text-4").value;
    const finalURL = "http://www.songsterr.com/a/wa/bestMatchForQueryString?s=" + title + "&a=" + artist;

    window.open(finalURL, '_blank');

});

document.querySelector(".burger").addEventListener("click", function(){
  document.querySelector(".nav-list").classList.toggle("nav-active");
  document.querySelector(".line-1").classList.toggle("line-1-active");
  document.querySelector(".line-2").classList.toggle("line-2-active");
  document.querySelector(".line-3").classList.toggle("line-3-active");
  document.querySelector(".container-wrapper").classList.toggle("container-wrapper-active");
  document.querySelector(".nav-list").classList.toggle("nav-list-active");
});
