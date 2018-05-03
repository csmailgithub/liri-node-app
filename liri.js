// enviroment variables can be set with the dotenv package
require("dotenv").config();

var fs = require("fs");
var Twitter = require('twitter'); 
var Spotify = require('node-spotify-api');
var request = require('request');
var keys = require('./keys.js');    
// From the instructions
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var command = process.argv[2];
// onyl the second time I have attempted to use switch for node cli arguments might be buggy
switch (command) {
    case 'my-tweets':
        myTweets();
        break;
    case 'spotify-this-song':
        spotifyThis();
        break;
    case 'movie-this':
        omdb(value);
        break;
    case 'do-what-it-says':
        doWhatItSays();
        break;
}

function myTweets() {

}