import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import File from './File';
import AddFile from './AddFile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [
        {
          name: 'src/App1.js',
          size: 12,
          owner: 'Bob'
        },
        {
          name: 'src/App2.js',
          size: 140,
          owner: 'Pete'
        }
      ]
    };
    // bind this so that it can be called as 'this.addFile' from the onClick in <button>
    this.addFile = this.addFile.bind(this);
  }

  addFile(file) {
    this.setState({
      files: this.state.files.concat([file])
    });
  }

  render() {
    let files = this.state.files.map( (file, idx) => <li key={idx}><File file={file} /></li> );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <AddFile addFile={this.addFile} />
        <p className="App-intro">
          To get started, edit the following files and save to reload the site:
        </p>
        <ul>
          {files}
        </ul>
      </div>
    );
  }
}

export default App;
