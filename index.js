// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
];
console.log(songs);


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "R&B",
    "Groot": "Pop",
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generateStarLordPlaylist(guardians, songs) {

    const preferedGenre = guardians["Star-Lord"];
    const filteredStarLordSongs = songs.filter(song => song.genre === preferedGenre);// map creates a new array with the filtered song and artist

    const playlistElement = document.getElementById("playlistStarLord");
    playlistElement.innerHTML="";
    const heading = document.createElement("h3"); // creates h2 for guardian playlist
    heading.textContent = "Star-Lord's Playlist";
    playlistElement.appendChild(heading);

   filteredStarLordSongs.forEach(song => {
    const songArtist = document.createElement("p"); //i want the songs to be in a paragraph instead of list form
    songArtist.textContent = `${song.title} by ${song.artist}, `;
    songArtist.innerHTML = `<span class="song-title">${song.title}</span> by ${song.artist}`; // will admit i used Chat, couldnt figure out the css incorporation
    playlistElement.appendChild(songArtist);
   });
    console.log(" Star-Lord's playlist",filteredStarLordSongs);

}

function generateGamoraPlayList(guardians,songs){
    const preferedGenre = guardians["Gamora"];
    const songsGamora = songs.filter(song => song.genre === preferedGenre);// map creates a new array with the filtered song and artist

    const playlistElement = document.getElementById("playlistGamora");
    playlistElement.innerHTML="";
    const heading = document.createElement("h3"); // creates h2 for guardian playlist
    heading.textContent = "Gamora's Playlist";
    playlistElement.appendChild(heading);

   songsGamora.forEach(song => {
    const songArtist = document.createElement("p"); //i want the songs to be in a paragrap instead of list form
    songArtist.textContent = `${song.title} by ${song.artist}, `;
    songArtist.innerHTML = `<span class="song-title">${song.title}</span> by ${song.artist}`; 
        playlistElement.appendChild(songArtist);
   });
    console.log(" Gamora's playlist",songsGamora);
}

function generateDraxPlayList(guardians,songs){
    const preferedGenre = guardians["Drax"];
    const songsDrax = songs.filter(song => song.genre === preferedGenre);// map creates a new array with the filtered song and artist

    const playlistElement = document.getElementById("playlistDrax");
    playlistElement.innerHTML="";
    const heading = document.createElement("h3"); // creates h2 for guardian playlist
    heading.textContent = "Drax's Playlist";
    playlistElement.appendChild(heading);

   songsDrax.forEach(song => {
    const songArtist = document.createElement("p"); //i want the songs to be in a paragrap instead of list form
    songArtist.textContent = `${song.title} by ${song.artist}, `;
    songArtist.innerHTML = `<span class="song-title">${song.title}</span> by ${song.artist}`; 
        playlistElement.appendChild(songArtist);
   });
    console.log(" Drax's playlist",songsDrax);
    }

function generateRocketPlayList(guardians,songs){
    const preferedGenre = guardians["Rocket"];
    const songsRocket = songs.filter(song => song.genre === preferedGenre);// map creates a new array with the filtered song and artist

    const playlistElement = document.getElementById("playlistRocket");
    playlistElement.innerHTML="";
    const heading = document.createElement("h3"); // creates h2 for guardian playlist
    heading.textContent = "Rocket's Playlist";
    playlistElement.appendChild(heading);

   songsRocket.forEach(song => {
    const songArtist = document.createElement("p"); //i want the songs to be in a paragrap instead of list form
    songArtist.textContent = `${song.title} by ${song.artist}, `;
    songArtist.innerHTML = `<span class="song-title">${song.title}</span> by ${song.artist}`; 
        playlistElement.appendChild(songArtist);
   });
    console.log(" Rocket's playlist",songsRocket);
    }


function generateGrootPlayList(guardians,songs){
    const preferedGenre = guardians["Groot"];
    const songsGroot = songs.filter(song => song.genre === preferedGenre);// map creates a new array with the filtered song and artist

    const playlistElement = document.getElementById("playlistGroot");
    playlistElement.innerHTML="";
    const heading = document.createElement("h3"); // creates h2 for guardian playlist
    heading.textContent = "Groot's Playlist";
    playlistElement.appendChild(heading);

   songsGroot.forEach(song => {
    const songArtist = document.createElement("p"); //i want the songs to be in a paragrap instead of list form
    songArtist.textContent = `${song.title} by ${song.artist}, `;
    songArtist.innerHTML = `<span class="song-title">${song.title}</span> by ${song.artist}`; 
        playlistElement.appendChild(songArtist);
   });
    console.log(" Groot's playlist",songsGroot);
    }

// I need to figure out why it deletes the name playlist on top , add css styling
//made alotta work for my self but at least each is displaying seperately , not efficient but helped to compartmentalize
//will admit i struggled with this one , will need to go over content again



// Call generatePlaylist and display the playlists for each Guardian
generateStarLordPlaylist(guardians, songs);
generateGamoraPlayList(guardians,songs);
generateDraxPlayList(guardians,songs);
generateRocketPlayList(guardians,songs);
generateGrootPlayList(guardians,songs);


