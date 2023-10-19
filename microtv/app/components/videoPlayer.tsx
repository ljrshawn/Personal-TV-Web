"use client";

import React from "react";
import ReactPlayer from "react-player";

interface VideoProps {
  id: number;
  url: string;
}

export default class VideoPlayer extends React.Component<VideoProps> {
  render() {
    return (
      <div
        className="
          container
          flex
          items-center
          justify-center
          z-10
        "
      >
        <ReactPlayer
          url={this.props.url}
          controls={true}
          width="100%"
          height="100%"
        />
      </div>
    );
  }
}
