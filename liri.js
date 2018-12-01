const keys = require("./keys.js");

const Spotify = require("node-spotify-api");
 
const spotify = new Spotify(keys.spotify);
 
const getSpotify = function(songName) {

    spotify.search({ type: "track", query: songName }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }

        let songs = data.tracks.items;

        let getArtists = function(artist) {
            return artist.name;
        }

        for(var i = 0; i < songs.length; i++) {
            console.log(i);
            console.log("Artist(s): "+songs[i].album.artists.map(getArtists));
            console.log("Song Title: "+songs[i].name);
            console.log("Preview link: "+songs[i].preview_url);
            console.log("Album Name: "+songs[i].album.name);
            console.log("-------------------------");
        }
      //console.log(data.tracks.items[0]); 
      });

}

const getConcert = function(eventName) {
    if (err) {
        return console.log('Error occurred: ' + err);
      }

    console.log(data);
}

const getMovie = function(movieName) {
    if (err) {
        return console.log('Error occurred: ' + err);
      }

    console.log(data);
}

const action = function(caseData, functionData) {
    switch(caseData) {
        case "spotify-this-song":
        getSpotify(functionData);
        break;

        case "concert-this":
        getConcert(functionData);
        break;

        case "movie-this":
        getMovie(functionData);
        break;

        default:
        console.log("LIRI does not know that");
    }
}

const runThis = function(argOne, argTwo) {
    action(argOne, argTwo);
}

runThis(process.argv[2], process.argv[3]);