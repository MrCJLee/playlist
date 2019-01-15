/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ['Blue Bird','Again','K/DA','' ];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var artists = ['Ikimono-gakari','Luffy',': Riot Music Team and Harloe']
var links = ['https://www.youtube.com/watch?v=Dp8EuP_0gWI','https://www.youtube.com/watch?v=2DYYVp4QXew','https://www.youtube.com/watch?v=UOxkGD8qRB4']
var picture=['']
var times=['3:38','4:11','3:22']

 songs.forEach(function(song){
     $("#songs").append("<li>" + song + "</li>");
     
 
     
 })
 artists.forEach(function(artist){
    $("#artists").append("<p>" + artist + "</p>");
 })
times.forEach(function(time){
    $("#lengths").append("<p>" + time + "</p>");
})
links.forEach(function(link){
    $("#links").append('<a href = ' + link + '> </a>');
})





function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
