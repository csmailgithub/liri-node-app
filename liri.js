// enviroment variables can be set with the dotenv package
require("dotenv").config();
// for writing to appFiles
var fs = require("fs");
var Twitter = require('twitter'); 
// var Spotify = require('node-spotify-api');
var request = require('request');
var keys = require('./keys.js');    
// From the instructions
// var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var command = process.argv[2];
// only the second time I have attempted to use switch for node cli arguments might be buggy
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
var movieName = process.argv[3];

function myTweets() {

    var params = {
        screen_name: 'ColinS08565530',
        count: 20
    }
    console.log("myTweets fxn running")

    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {

            for (i = 0; i < tweets.length; i++) {
                var tweetText = tweets[i].text;
                var tweetDate = tweets[i].created_at;

                console.log(
                    "----------------------------------------" +
                    "\n @ColinS08565530: " + tweetText +
                    "\n Post Date: " + tweetDate
                );

                fs.appendFile("appFiles/tweets.txt",
                    "----------------------------------------" +
                    "\r\n @ColinS08565530: " + tweetText +
                    "\r\n Post Date: " + tweetDate +
                    "\r\n----------------------------------------",
                    function (error) {
                        if (error) {
                            console.log(error);
                        }
                    });

            }
        } else {
            console.log(error);
        }
    });
}