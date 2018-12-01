const keys = require("./keys.js");
const Spotify = require("node-spotify-api");
const request = require('request');
const fs = require("fs");
const moment = require("moment");

const spotify = new Spotify(keys.spotify);

const getSpotify = function (songName) {

    spotify.search({ type: "track", query: songName }, function (err, data) {
        if (err) {
            return console.log("Error: " + err);
        }

        let songs = data.tracks.items;

        let getArtists = function (artist) {
            return artist.name;
        }

        for (var i = 0; i < songs.length; i++) {
            console.log(i);
            console.log("Artist(s): " + songs[i].album.artists.map(getArtists));
            console.log("Song Title: " + songs[i].name);
            console.log("Preview link: " + songs[i].preview_url);
            console.log("Album Name: " + songs[i].album.name);
            console.log("-------------------------------");
        }
    });

};

const getConcert = function (artistName) {

    request("https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp", function (err, response, data) {
        if (err) {
            return console.log("Error: " + err);
        }
        else if (response.statusCode !== 200) {
            console.log("Status code: " + response && response.statusCode);
        }

        let eventsObject = JSON.parse(data);
        

        //let eventDate = moment(eventsObject[i].datetime).format("MM/DD/YYYY");

        for (var i = 0; i < eventsObject.length; i++) {
            console.log(i);
            console.log("Venue: " + eventsObject[i].venue.name);
            console.log("Location: " + eventsObject[i].venue.city + ", " + eventsObject[i].venue.country);

            let date = eventsObject[i].datetime;
            let substr = date.substring(0,10);
            let formatedDate = moment(substr, "YYYY-MM-DD").format("MM/DD/YYYY");

            console.log("Event Date: " + formatedDate);
            console.log("-------------------------------");

        }
    });
};

const getMovie = function (movieName) {

    request("http://www.omdbapi.com/?apikey=trilogy&t=" + movieName, function (err, response, data) {

        if (err) {
            return console.log("Error: " + err);
        }

        else if (response.statusCode !== 200) {
            console.log("Status code: " + response && response.statusCode);
        }

        let movObject = JSON.parse(data);

        console.log("Title: " + movObject.Title);
        console.log("Year Released: " + movObject.Year);
        console.log("IMBD Rating: " + movObject.Rated);
        console.log("Rotten Tomatoes Rating: " + movObject.Ratings[1].Value);
        console.log("Produced in: " + movObject.Country);
        console.log("Language: " + movObject.Language);
        console.log("Plot: " + movObject.Plot);
        console.log("Actors: " + movObject.Actors);
    });

};

const getRandom = function (err, data) {
    fs.readFile("random.txt", "utf-8", function (err, data) {

        if (err) {
            return console.log("Error: " + err);
        }

        let dataArr = data.split(",");
        ///console.log(dataArr);

        action(dataArr[0], dataArr[1]);

    });
};

const action = function (caseData, functionData) {
    switch (caseData) {
        case "spotify-this-song":
            getSpotify(functionData);
            break;

        case "concert-this":
            getConcert(functionData);
            break;

        case "movie-this":
            getMovie(functionData);
            break;

        case "do-what-it-says":
            getRandom();
            break;

        default:
            console.log("LIRI does not know that");
    }
};

const runThis = function (argOne, argTwo) {
    action(argOne, argTwo);
};

runThis(process.argv[2], process.argv[3]);