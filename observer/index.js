import {MusicBox, Playlist, PlaySong} from './songs';

import { Observable, Observer } from './observer';

MusicBox();

let playlist = [];

let observableSongs = new Observable();
let observablePlaylist = new Observable();
let observable = new Observable();

let addToPlayList = new Observer((id) => {
  if (!playlist.includes(id)) playlist.push(id);
  Playlist(playlist);
});
let removeFromPlaylist = new Observer((id) => {
  let index = playlist.indexOf(id);
  playlist.splice(index, 1);
  Playlist(playlist);
});
let playSong = new Observer((id) => {
  PlaySong(id);
})

observableSongs.addObserver(addToPlayList);
observablePlaylist.addObserver(removeFromPlaylist);
observable.addObserver(playSong);

let songs = document.getElementById('MusicBox');
let playlistBox = document.getElementById('playlist');

songs.addEventListener('click',  event => {
  event.preventDefault();
  let id = event.target.getAttribute('data-id');
  if (event.target.matches('.toPlaylistBtn')) observableSongs.sendMessage(id);
  if (event.target.matches('.toPlayerBtn')) observable.sendMessage(id);
});
playlistBox.addEventListener('click',  event => {
  event.preventDefault();
  let id = event.target.getAttribute('data-id');
  if (event.target.matches('.deleteBtn')) observablePlaylist.sendMessage(id);
  if (event.target.matches('.toPlayerBtn')) observable.sendMessage(id);
});
