import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: 'salhi amira',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imgSrc: 'img.Png',
        profession: 'Software Engineer'
      },
      shows: false,
      mountedAt: new Date()
    };
  }

  toggleShow = () => {
    this.setState(prevState => ({ shows: !prevState.shows }));
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { person, shows, mountedAt } = this.state;
    const styleImage = { width: 200, heigh: 200 };
    
    return (
      <div className="App-header">
        <button onClick={this.toggleShow}>Toggle Show</button>
        {shows && (
          <div>
            <img src={person.imgSrc} alt={person.fullName}  style={styleImage}/>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <p>{person.profession}</p>
          </div>
        )}
        <p>Component mounted at: {mountedAt.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default App;