import React from "react";
import  VideoFrame  from "./VideoFrame";
import styles from "./Player.module.css";
import Selector from "./Selector"

function Player(props: any) {

  const VideoFrameSelector = (props: any) => {

    if (props.video.video_id === "sintel")
      return <VideoFrame url={props.video.video_file_url} />;
    if (props.video.video_id === "bbb")
      return <VideoFrame url={props.video.video_file_url} />;
    if (props.video.video_id === "walle")
      return <VideoFrame url={props.video.video_file_url} />;
    else return <VideoFrame url={props.video.video_file_url} />;
  };

function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{props.PlayerElements.video_title}</h1>

        <p className={styles.description}>
          <code className={styles.text}>
            {props.PlayerElements.video_description}
          </code>
        </p>
        <div>
          <VideoFrameSelector
            video={props.PlayerElements}
            data-testid="video-frame-selector"
          />
        </div>

        <div>
          <button
            onClick={(e) => props.videoIdHandler(e.target)}
            className={styles.selectorContainer}
          >
            {props.screens.Selector.map((view: any, index: number) => {
               const player_key = uuid();
              return (
                <div>
                  <img
                    src={view.thumbnail}
                    alt={view.description}
                    key={player_key}
                    id={view.id}
                    className={styles.thumbnail}
                  />
                  <div className={styles.duration}>
                    <h3>{view.info} min</h3>
                  </div>
                </div>
              );
            })}
          </button>
        </div>
      </main>
    </div>
  );
}
export default Player;
