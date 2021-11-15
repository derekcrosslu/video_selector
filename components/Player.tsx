import React from "react";
import  VideoFrame  from "./VideoFrame";
import styles from "./Player.module.css";


function Player(props: any) {
 // dirty functional component for selecting video...its actually faster than pulling it from state
  // I can think of a better strategy for sure but this was the quickest for now
  const VideoFrameSelector = (props: any) => {

    if (props.video.video_id === "sintel")
      return <VideoFrame url={props.video.video_file_url} />;
    if (props.video.video_id === "bbb")
      return <VideoFrame url={props.video.video_file_url} />;
    if (props.video.video_id === "walle")
      return <VideoFrame url={props.video.video_file_url} />;
    else return <VideoFrame url={props.video.video_file_url} />;
  };
  //little snippets to generate component key
function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
  // I created a component Selector to grouping and testing the thumbnail selector code but decided
  // to put it back into the player component for complications with app state
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

        <div className={styles.selectorContainer}>
          {props.screens.Selector.map((view: any, index: number) => {
            const player_key = uuid();
            return (
              <div key={player_key}>
                // fix linking bug: moved button wrapper to avoid covering the minutes
                <button onClick={(e) => props.videoIdHandler(e.target)}>
                  <img
                    src={view.thumbnail}
                    alt={view.description}
                    id={view.id}
                    className={styles.thumbnail}
                  />
                </button>
                <div className={styles.duration}>
                  <h3>{view.info} min</h3>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
export default Player;
