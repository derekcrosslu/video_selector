import React, { useRef, useState, useEffect } from "react";
import styles from "./VideoFrame.module.css";
import VideoPlayer from "react-video-js-player";
// this is the only component that I tested besides the app component
// because jest runner needs additional logic to do the "end to end" test and without it
// some components will break for not being render below their parent component's and thus props appear as 


function VideoFrame(props: any) {
// custom video player
function onPlayerReady(player:any) {
  console.log("Player is ready: ", player);
}

function onVideoPlay(duration:any) {
  console.log("Video played at: ", duration);
}

function onVideoPause(duration:any) {
  console.log("Video paused at: ", duration);
}

function onVideoTimeUpdate(duration:any) {
  console.log("Time updated: ", duration);
}

function onVideoSeeking(duration:any) {
  console.log("Video seeking: ", duration);
}

function onVideoSeeked(from:any, to:any) {
  console.log(`Video seeked from ${from} to ${to}`);
}

function onVideoEnd() {
  console.log("Video ended");
}
  
    return (
      <main className={styles.main}>
        <VideoPlayer
          className={styles.video}
          bigPlayButton={true}
          autoplay={true}
          controls={true}
          src={props.url}
          onReady={onPlayerReady}
          onPlay={onVideoPlay}
          onPause={onVideoPause}
          onTimeUpdate={onVideoTimeUpdate}
          onSeeking={onVideoSeeking}
          onSeeked={onVideoSeeked}
          onEnd={onVideoEnd}
          data-testid="video-frame-component"
        />
      </main>
    );
}



export default VideoFrame;


