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

        const preferredGenre = guardians["Star-Lord"];

        // Use map to transform songs into song elements, filtering out non-matching songs by returning null
        const songElements = songs.map(song => {
            if (song.genre === preferredGenre) {
                const songArtist = document.createElement("p"); // Create paragraph for each song
                songArtist.innerHTML = `<span class="song-title">${song.title}</span> by ${song.artist}`;
                return songArtist; // Return the created element
            }
            return null; // Return null for non-matching songs
        }).filter(song => song !== null); // Filter out null values

        // Get the playlist container element
        const playlistElement = document.getElementById("playlistStarLord");
        playlistElement.innerHTML = ""; // Clear previous content

        // Create and append the heading
        const heading = document.createElement("h3");
        heading.textContent = "Star-Lord's Playlist";
        playlistElement.appendChild(heading);

        // Append each song element to the playlist
        songElements.forEach(songElement => {
            playlistElement.appendChild(songElement);
        });

        console.log("Star-Lord's playlist", songElements);
    }

    // Call the function to test
    console.log(generateStarLordPlaylist(guardians, songs));

    function generateGamoraPlaylist(guardians, songs) {

        const preferredGenre = guardians["Gamora"];

        // Use map to transform songs into song elements, filtering out non-matching songs by returning null
        const songElements = songs.map(song => {
            if (song.genre === preferredGenre) {
                const songArtist = document.createElement("p"); // Create paragraph for each song
                songArtist.innerHTML = `<span class="song-title">${song.title}</span> by ${song.artist}`;
                return songArtist; // Return the created element
            }
            return null; // Return null for non-matching songs
        }).filter(song => song !== null); // Filter out null values

        // Get the playlist container element
        const playlistElement = document.getElementById("playlistGamora");
        playlistElement.innerHTML = ""; // Clear previous content

        // Create and append the heading
        const heading = document.createElement("h3");
        heading.textContent = "Gamora's Playlist";
        playlistElement.appendChild(heading);

        // Append each song element to the playlist
        songElements.forEach(songElement => {
            playlistElement.appendChild(songElement);
        });

        console.log("Gamora's playlist", songElements);
    }

function generateDraxPlayList(guardians,songs){
    const preferredGenre = guardians["Drax"];

    // Use map to transform songs into song elements, filtering out non-matching songs by returning null
    const songElements = songs.map(song => {
        if (song.genre === preferredGenre) {
            const songArtist = document.createElement("p"); // Create paragraph for each song
            songArtist.innerHTML = `<span class="song-title">${song.title}</span> by ${song.artist}`;
            return songArtist; // Return the created element
        }
        return null; // Return null for non-matching songs
    }).filter(song => song !== null); // Filter out null values

    // Get the playlist container element
    const playlistElement = document.getElementById("playlistDrax");
    playlistElement.innerHTML = ""; // Clear previous content

    // Create and append the heading
    const heading = document.createElement("h3");
    heading.textContent = "Drax's Playlist";
    playlistElement.appendChild(heading);

    // Append each song element to the playlist
    songElements.forEach(songElement => {
        playlistElement.appendChild(songElement);
    });

    console.log("Drax's playlist", songElements);
    }

function generateRocketPlayList(guardians,songs){
    const preferredGenre = guardians["Rocket"];

    // Use map to transform songs into song elements, filtering out non-matching songs by returning null
    const songElements = songs.map(song => {
        if (song.genre === preferredGenre) {
            const songArtist = document.createElement("p"); // Create paragraph for each song
            songArtist.innerHTML = `<span class="song-title">${song.title}</span> by ${song.artist}`;
            return songArtist; // Return the created element
        }
        return null; // Return null for non-matching songs
    }).filter(song => song !== null); // Filter out null values

    // Get the playlist container element
    const playlistElement = document.getElementById("playlistRocket");
    playlistElement.innerHTML = ""; // Clear previous content

    // Create and append the heading
    const heading = document.createElement("h3");
    heading.textContent = "Rocket's Playlist";
    playlistElement.appendChild(heading);

    // Append each song element to the playlist
    songElements.forEach(songElement => {
        playlistElement.appendChild(songElement);
    });

    console.log("Rocket's playlist", songElements);
    }


function generateGrootPlayList(guardians,songs){
    const preferredGenre = guardians["Groot"];

    // Use map to transform songs into song elements, filtering out non-matching songs by returning null
    const songElements = songs.map(song => {
        if (song.genre === preferredGenre) {
            const songArtist = document.createElement("p"); // Create paragraph for each song
            songArtist.innerHTML = `<span class="song-title">${song.title}</span> by ${song.artist}`;
            return songArtist; // Return the created element
        }
        return null; // Return null for non-matching songs
    }).filter(song => song !== null); // Filter out null values

    // Get the playlist container element
    const playlistElement = document.getElementById("playlistGroot");
    playlistElement.innerHTML = ""; // Clear previous content

    // Create and append the heading
    const heading = document.createElement("h3");
    heading.textContent = "Groot's Playlist";
    playlistElement.appendChild(heading);

    // Append each song element to the playlist
    songElements.forEach(songElement => {
        playlistElement.appendChild(songElement);
    });

    console.log("Groot's playlist", songElements);
    }
    

// I need to figure out why it deletes the name playlist on top , add css styling
//made alotta work for my self but at least each is displaying seperately , not efficient but helped to compartmentalize
//will admit i struggled with this one , will need to go over content again



// Call generatePlaylist and display the playlists for each Guardian
generateStarLordPlaylist(guardians, songs);
generateGamoraPlaylist(guardians,songs);
generateDraxPlayList(guardians,songs);
generateRocketPlayList(guardians,songs);
generateGrootPlayList(guardians,songs);


