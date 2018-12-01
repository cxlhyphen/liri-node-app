# LIRI

Liri stands for "Language Interpretation and Recognition Interface". It is a command line node app.

Use LIRI to find events for a certain artist, information about a movie, information about a music track, or run its random.txt file.

## How to Install

* Download the app onto your computer.
* Run `npm install`
* Register for a Spotify API key at: https://developer.spotify.com/my-applications/#!/
* Generate a **client id** and a **client secret id**
* Create a `.env` file and add the following to it:
```
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret
```
* Add in your client id and client secret id

## How to Use

### Find events featuring a certain artist:

Run the following code:

`node liri.js concert-this artists-name`

Here's what it would look like:

![Preview](/images/concert-this.png)

### Find information about a movie:

`node liri.js movie-this movie-title`

Here's what it would look like:

![Preview](/images/movie-this.png)

### Find information about a song:

`node liri.js spotify-this-song track-title`

Here's what it would look like:

![Preview](/images/spotify-this-song.png)

### Run the random.txt file:

`node liri.js do-what-it-says`

Here's what it would look like:

![Preview](/images/do-what-it-says.png)

You can edit the file to run any of the three types of commands above to get information about a movie, artist's events, or song.
