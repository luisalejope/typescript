interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "mess",
    details: {
        author: "ed sheeran",
        year: 2015
    }
}

const { song: anotherSong, songDuration: duration, details: moreDetails } = audioPlayer
const {author, year} = moreDetails

console.log(anotherSong, duration, author, year);

const [,, vegeta = 'NotFound']: string[] = ['Goku', 'trunks']

console.log(vegeta);

export { }