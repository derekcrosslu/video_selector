import React from "react";
import styles from "./VideoFrame.module.css";

function VideoFrame(props: any) {
    return (
      <main className={styles.main}>
        <video className={styles.video} controls>
          <source
            src={props.url}
            type="video/mp4"
            data-testid="video-frame-component"
          />
        </video>
      </main>
    );
}

export default VideoFrame;


