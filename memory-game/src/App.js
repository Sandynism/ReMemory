import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
// import ScoreBar from "./components/ScoreBar";
import images from "./images.json";
// import "./App.css";

class App extends Component {
    // sets this.state.images to the images json array
    state = {
        images
    };

    // selectImage = id => {
    // };

    // maps over this.state.images and renders an ImageCard component for each image object, in random order
    render() {
        return (
            <Wrapper>
                {this.state.images.map(image => (
                    <ImageCard 
                        // selectImage = {this.selectImage}
                        id={image.id}
                        key={image.id}
                        image={image.imageURL}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;