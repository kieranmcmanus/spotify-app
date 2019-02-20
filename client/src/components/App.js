import React, { Component } from 'react';
import Search from './Search';
import Artist from './Artist';
import Tracks from './Tracks';
import reactlogo from '../assets/reactlogo.png';
import spotify from '../assets/spotify.png';

const API_ADDRESS = 'http://localhost:3000';

class App extends Component {
  state = { artist: null, tracks: [] };

  searchArtist = artistQuery => {
    fetch(`${document.location.origin}/artist/${artistQuery}`)
      .then(response => response.json())
      .then(json => {
        if (json.artists.total > 0) {
          const artist = json.artists.items[0];

          this.setState({ artist });

          fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
            .then(response => response.json())
            .then(json => this.setState({ tracks: json.tracks }))
            .catch(error => alert(error.message));
        }
      })
      .catch(error => alert(error.message));
  }

  render() {
    return (
      <div>
        <div className="App-title">
          <img className="react-logo" src={reactlogo} alt="react-logo"/>  with
          <img className ="spotify-logo" src={spotify} alt ="spotify-logo"/>
        </div>
        <Search searchArtist={this.searchArtist} />
        <Artist artist={this.state.artist} />
        <Tracks tracks={this.state.tracks} />
      </div>
    );
  }
}

export default App;
