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
