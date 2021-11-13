import React from "react";
import styles from "./VideoFrame.module.css";
// this is the only component that I tested besides the app component
// because jest runner needs additional logic to do the "end to end" test and without it
// some components will break for not being render below their parent component's and thus props appear as 
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


