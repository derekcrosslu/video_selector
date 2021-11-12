import React from "react";
import { VideoFrame1 } from "./VideoFrame";
import styles from "./Player.module.css";

function Player(props: any) {
  console.log(props);

  const VideoFrame = (props: any) => {

    if (props.video.video_id === "sintel")
      return <VideoFrame1 url={props.video.video_file_url} />;
    if (props.video.video_id === "bbb")
      return <VideoFrame1 url={props.video.video_file_url} />;
    if (props.video.video_id === "walle")
      return <VideoFrame1 url={props.video.video_file_url} />;
    else return <VideoFrame1 url={props.video.video_file_url} />;
  };

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
          <VideoFrame video={props.PlayerElements} />
        </div>

        <div>
          <button
            onClick={(e) => props.videoIdHandler(e.target)}
            className={styles.selectorContainer}
          >
            {props.screens.Selector.map((view: any, index: any) => {
              return (
                <div>
                  <img
                    src={view.thumbnail}
                    alt={view.description}
                    key={index}
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
