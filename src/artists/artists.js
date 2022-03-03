document.querySelector(".input-form").addEventListener("submit", function(e){
    e.preventDefault();
    const artist = document.querySelector(".input-text").value;
    const finalURL = "https://www.theaudiodb.com/api/v1/json/2/search.php?s=" + artist;
    let xhr = new XMLHttpRequest();
    xhr.open('get', finalURL);
    xhr.send();

    xhr.onload = function() {
      if(this.status == 200){
        let data = JSON.parse(this.response);
        var artistName = data.artists[0].strArtist;
        var recordLabel = data.artists[0].strLabel;
        var genre = data.artists[0].strStyle;
        var birthPlace = data.artists[0].strCountry;
        var pictureURL = data.artists[0].strArtistThumb;
        var biography = data.artists[0].strBiographyEN;
        var birthYear = data.artists[0].intBornYear;
        var formedYear = data.artists[0].intFormedYear;
      };
      document.querySelector(".name").innerHTML = artistName;
      document.querySelector(".picture").src = pictureURL;
      document.querySelector(".picture").classList.remove("picture-hidden");
      document.querySelector(".content").classList.add("content-hidden");
      document.querySelector(".birth-year").innerHTML = "Birth year: " + birthYear;
      document.querySelector(".birth-place").innerHTML = "Birth place: " + birthPlace;
      document.querySelector(".genre").innerHTML = "Genre: " + genre;
      document.querySelector(".formed-year").innerHTML = "The year he/she became popular: " + formedYear;
      document.querySelector(".record-label").innerHTML = "Record label: " + recordLabel;
      document.querySelector(".biography").innerHTML = biography;
  };
});

document.querySelector(".burger").addEventListener("click", function(){
  document.querySelector(".nav-list").classList.toggle("nav-active");
  document.querySelector(".line-1").classList.toggle("line-1-active");
  document.querySelector(".line-2").classList.toggle("line-2-active");
  document.querySelector(".line-3").classList.toggle("line-3-active");
  document.querySelector(".input-form-wrapper").classList.toggle("input-form-wrapper-active");
  document.querySelector(".body-wrapper").classList.toggle("body-wrapper-active");
  document.querySelector(".nav-list").classList.toggle("nav-list-active");
});
