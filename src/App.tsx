import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageGalleryContainer from'./contatiners/ImageGalleryContainer';

class App extends Component {
  render(): JSX.Element {
    const imagesURLs: string[] = [];
    return (
      <div className="App">
        <header className="App-header">
          <ImageGalleryContainer />
        </header>
      </div>
    );
  }
}

export default App;
