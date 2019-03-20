const MusicList = [
    {
        title: 'Rammstain',
        songs: [
            {
                id: 1,
                name: 'Du Hast',
                time: [3, 12]
            },
            {
                id: 2,
                name: 'Ich Will',
                time: [5, 1]
            },
            {
                id: 3,
                name: 'Mutter',
                time: [4, 15]
            },
            {
                id: 4,
                name: 'Ich tu dir weh',
                time: [5, 13]
            },
            {
                id: 5,
                name: 'Rammstain',
                time: [3, 64]
            }
        ]
    },
    {
        title: 'System of a Down',
        songs: [
            {
                id: 6,
                name: 'Toxicity',
                time: [4, 22]
            },
            {
                id: 7,
                name: 'Sugar',
                time: [2, 44]
            },
            {
                id: 8,
                name: 'Lonely Day',
                time: [3, 19]
            },
            {
                id: 9,
                name: 'Lost in Hollywood',
                time: [5, 9]
            },
            {
                id: 10,
                name: 'Chop Suey!',
                time: [2, 57]
            }
        ]
    },
    {
        title: 'Green Day',
        songs: [
            {
                id: 11,
                name: '21 Guns',
                time: [4, 16]
            },
            {
                id: 12,
                name: 'Boulevard of broken dreams!',
                time: [6, 37]
            },
            {
                id: 13,
                name: 'Basket Case!',
                time: [3, 21]
            },
            {
                id: 14,
                name: 'Know Your Enemy',
                time: [4, 11]
            }
        ]
    },
    {
        title: 'Linkin Park',
        songs: [
            {
                id: 15,
                name: 'Numb',
                time: [3, 11]
            },
            {
                id: 16,
                name: 'New Divide',
                time: [4, 41]
            },
            {
                id: 17,
                name: 'Breaking the Habit',
                time: [4, 1]
            },
            {
                id: 18,
                name: 'Faint',
                time: [3, 29]
            }
        ]
    }
]

const MusicBox = () => {
    const MusicBox = document.getElementById('MusicBox');
    MusicList.map( Artist => {
        MusicBox.innerHTML += `<div><h4>${Artist.title}</h4><ul>`;
        Artist.songs.map( song => {
            MusicBox.innerHTML += `<li class="songItem"><p>${song.name} </p>
<a data-id="${song.id}" href="#" class="toPlayerBtn">play</a>
<a data-id="${song.id}" href="#" class="toPlaylistBtn">add to playlist</a></li>`
        });
        MusicBox.innerHTML += '</ul></div>';

    });
}

const Playlist = (playlist) => {
  const playlistNode = document.getElementById('playlist');
  playlistNode.innerHTML = "";
  let duration = 0;
  MusicList.map ( Artist => {
      Artist.songs.map( song => {
          if (playlist.includes(String(song.id))) {
            playlistNode.innerHTML += `<li class="playlistItem"><p>${song.name}/${Artist.title}</p>
    <a data-id="${song.id}"  href="#" class="toPlayerBtn">play</a>
    <a data-id="${song.id}"  href="#" class="deleteBtn">delete</a></li>`;
            duration += (song.time[0] * 60 + song.time[1]);
          }
      } );
  });
  let minutes = Math.floor(duration/60);
  let seconds = duration - minutes*60;
  playlistNode.innerHTML += `<strong>Total time: ${minutes} min ${seconds} sec</strong>`
 }
 const PlaySong = id => {
    const player = document.getElementById('player');
    MusicList.map ( artist => {
        let chosenSong = artist.songs.find(item => item.id === Number(id));
        if (chosenSong) {
          player.innerHTML += `<strong>${artist.title} - ${chosenSong.name}</strong>
          <p>time: ${chosenSong.time[0]}:${chosenSong.time[1]}</p>
          `
        }
    });
 }

export { MusicBox, Playlist, PlaySong };
