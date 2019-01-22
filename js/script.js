/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ['Blue Bird','Again','K/DA','' ];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var artists = ['Ikimono-gakari','Luffy',': Riot Music Team and Harloe']
var links = ['https://www.youtube.com/watch?v=Dp8EuP_0gWI','https://www.youtube.com/watch?v=2DYYVp4QXew','https://www.youtube.com/watch?v=UOxkGD8qRB4']
var pictures=['https://c-sf.smule.com/sf/s69/arr/23/c8/b28dd95b-16e1-44fe-985b-7d22c7990a97.jpg','https://vignette.wikia.nocookie.net/fma/images/0/07/Fullmetal-alchemist-brotherhood-opening-01-again.jpg/revision/latest?cb=20110823000213','https://m.media-amazon.com/images/I/61JMvZ0+GVL._SS500_.jpg']
var times=['3:38','4:11','3:22']

 





function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
 songs.forEach(function(song){
     $("#songs").append("<p>" + song + "</p>");
     
 })
 artists.forEach(function(artist){
    $("#artists").append("<p>" + artist + "</p>");
 })
pictures.forEach(function(picture){
    $("#images").append("<img src='" + picture  + "' ></img>");
})
times.forEach(function(time){
    $("#lengths").append("<p>" + time + "</p>");
})
links.forEach(function(link){
    $("#links").append("<a href = '" + link + "'> youtube </a>");
})
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
var newArtists = $("#artist").val();
var newImages = $("#image").val();
var newLengths = $("#length").val();
var newLinks = $("#link").val();
var newname = $("#song").val();
    
    
    
    artists.push(newArtists);
    songs.push(newname);
    links.push(newLinks);
    pictures.push(newImages);
    times.push(newLengths);
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
