import React, { Component } from 'react';
import axios from 'axios';

export default class Playlist extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <h1>Your Playlists</h1>
        <div className='playlist-wrapper'>
          <div className='image-container'>
            <i className='fas fa-redo'></i>
            <i className='fas fa-random'></i>
          </div>

          <div className='fade'></div>

          <div className='fav-wrapper'>
            <div className='fav-songs-box'>
              <div className='text'>
                <p className='fav-songs'>My favorite songs</p>
                <p className='genre light'>trance/dance/pop/rock</p>
              </div>
              <i className='fas fa-search'></i>
            </div>
          </div>

          <div className='song-wrapper' id='scroll'>
            <div className='song-box'>
              <i className='fas fa-pause'></i>
              <div className='text'>
                <p className='song-title'>Rock'N'roll</p>
                <p className='artist light'>David Bowie</p>
              </div>
              <p className='duration'>3:25</p>
            </div>
            <div className='song-box'>
              <i className='fas fa-play'></i>
              <div className='text'>
                <p className='song-title'>Soul</p>
                <p className='artist light'>David Bowie</p>
              </div>
              <p className='duration'>3:30</p>
            </div>
            <div className='song-box'>
              <i className='fas fa-play'></i>
              <div className='text'>
                <p className='song-title'>Sta</p>
                <p className='artist light'>David Bowie</p>
              </div>
              <p className='duration'>3:30</p>
            </div>
            <div className='song-box'>
              <i className='fas fa-play'></i>
              <div className='text'>
                <p className='song-title'>Starma</p>
                <p className='artist light'>David Bowie</p>
              </div>
              <p className='duration'>3:30</p>
            </div>
            <div className='song-box'>
              <i className='fas fa-play'></i>
              <div className='text'>
                <p className='song-title'>Suffagette</p>
                <p className='artist light'>David Bowie</p>
              </div>
              <p className='duration'>3:30</p>
            </div>
            <div className='song-box'>
              <i className='fas fa-play'></i>
              <div className='text'>
                <p className='song-title'>Ziggy</p>
                <p className='artist light'>David Bowie</p>
              </div>
              <p className='duration'>3:30</p>
            </div>
            <div className='song-box'>
              <i className='fas fa-play'></i>
              <div className='text'>
                <p className='song-title'>Just</p>
                <p className='artist light'>David Bowie</p>
              </div>
              <p className='duration'>3:30</p>
            </div>
            <div className='song-box'>
              <i className='fas fa-play'></i>
              <div className='text'>
                <p className='song-title'>Trust</p>
                <p className='artist light'>David Bowie</p>
              </div>
              <p className='duration'>3:30</p>
            </div>
            <div className='song-box'>
              <i className='fas fa-play'></i>
              <div className='text'>
                <p className='song-title'>Bust</p>
                <p className='artist light'>David Bowie</p>
              </div>
              <p className='duration'>3:30</p>
            </div>
            <div className='song-box'>
              <i className='fas fa-play'></i>
              <div className='text'>
                <p className='song-title'>Dust</p>
                <p className='artist light'>David Bowie</p>
              </div>
              <p className='duration'>3:30</p>
            </div>
            <div className='song-box'>
              <i className='fas fa-play'></i>
              <div className='text'>
                <p className='song-title'>Woah</p>
                <p className='artist light'>David Bowie</p>
              </div>
              <p className='duration'>3:30</p>
            </div>
            <div className='song-box'>
              <i className='fas fa-play'></i>
              <div className='text'>
                <p className='song-title'>Must</p>
                <p className='artist light'>David Bowie</p>
              </div>
              <p className='duration'>3:30</p>
            </div>
            <div className='song-box'>
              <i className='fas fa-play'></i>
              <div className='text'>
                <p className='song-title'>Louie</p>
                <p className='artist light'>David Bowie</p>
              </div>
              <p className='duration'>3:30</p>
            </div>
            <div className='song-box'>
              <i className='fas fa-play'></i>
              <div className='text'>
                <p className='song-title'>Teenie</p>
                <p className='artist light'>David Bowie</p>
              </div>
              <p className='duration'>3:30</p>
            </div>
            <div className='song-box last-song'>
              <i className='fas fa-play'></i>
              <div className='text'>
                <p className='song-title'>Wake me up when</p>
                <p className='artist light'>David Bowie</p>
              </div>
              <p className='duration'>3:30</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}