import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import imagecards from "./image-cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.imagecards to the image-cards json array
  state = {
    imagecards,
    score: 0,
    highscore: 0
  };

  gameEnd = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.imagecards.forEach(imagecard => {
      imagecard.count = 0;
    });
    alert(`You've already chosen that card.  Game Over. \nYour score: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.imagecards.find((imCard, i) => {
      if (imCard.id === id) {
        if(imagecards[i].count === 0){
          imagecards[i].count = imagecards[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.imagecards.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameEnd();
        }
      }
    });
  }
  
  // Map over this.state.imagecards and render an ImageCard component for each image
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>ClickyGame - Code Editor Edition</Header>
        {this.state.imagecards.map(imagecard => (
          <ImageCard
            clickCount={this.clickCount}
            id={imagecard.id}
            key={imagecard.id}
            image={imagecard.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
