import React, { Component } from "react";
import ReactVrPlayer from "react-vr-player/react-vr-player";

export default class video extends Component {
  render() {
    const sources = [
      // Declare an array of video sources
      { url: "/videos/video.webm", type: "video/webm" },
      { url: "/videos/video.mp4", type: "video/mp4" },
    ];
    const keys = {
      // If you want to re-define the keys, here are the defaults
      left: "A",
      right: "D",
      up: "W",
      down: "S",
      rotateLeft: "Q",
      rotateRight: "E",
      fullScreen: "F",
      zeroSensor: "Z",
      playPause: " ",
    };
    return (
      <ReactVrPlayer
        sources={sources}
        brand="Some Brand Name"
        title="Some Video Title"
        keys={keys}
      />
    );
  }
}
