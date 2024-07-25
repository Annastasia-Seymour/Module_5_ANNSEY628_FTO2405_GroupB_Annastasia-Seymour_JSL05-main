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
starLordSongs = document.getElementById("playlistStarLord").textContent = filteredStarLordSongs.map(song=> `${song.title} by ${song.artist}`).join(", ");

console.log(" Star-Lord's playlist",starLordSongs);

}

function generateGamoraPlayList(guardians,songs){
const preferedGenre = guardians["Gamora"];
const filteredGamoraSongs = songs.filter(song => song.genre === preferedGenre);
document.getElementById("playlistGamora").textContent = filteredGamoraSongs.map(song=> `${song.title} by ${song.artist}`).join(", ");
console.log("Gamora's playlist" ,filteredGamoraSongs);
}

function generateDraxPlayList(guardians,songs){
    const preferedGenre = guardians["Drax"];
    const filteredDraxSongs = songs.filter(song => song.genre === preferedGenre);
    document.getElementById("playlistDrax").innerText="Drax's Playlist"
    document.getElementById("playlistDrax").textContent = filteredDraxSongs.map(song=> `${song.title} by ${song.artist}`).join(", ");
    
    console.log("Drax's playlist" ,filteredDraxSongs);
    }

function generateRocketPlayList(guardians,songs){
    const preferedGenre = guardians["Rocket"];
    const filteredRocketSongs = songs.filter(song => song.genre === preferedGenre);
    document.getElementById("playlistRocket").textContent = filteredRocketSongs.map(song=> `${song.title} by ${song.artist}`).join(", ");
    console.log("Rocket's playlist" ,filteredRocketSongs);
    }


function generateGrootPlayList(guardians,songs){
    const preferedGenre = guardians["Groot"];
    const filteredGrootSongs = songs.filter(song => song.genre === preferedGenre);
    document.getElementById("playlistGroot").textContent = filteredGrootSongs.map(song=> `${song.title} by ${song.artist}`).join(", ");
    console.log("Groot's playlist" ,filteredGrootSongs);
    }

// I need to figure out why it deletes the name playlist on top , add css styling




// Call generatePlaylist and display the playlists for each Guardian
generateStarLordPlaylist(guardians, songs);
generateGamoraPlayList(guardians,songs);
generateDraxPlayList(guardians,songs);
generateRocketPlayList(guardians,songs);
generateGrootPlayList(guardians,songs);


