import React from "react";
import { VideoFrame1 } from "./VideoFrame";
import styles from "./Player.module.css";


function Player(props: any) {

    const default_url =
      "http://test-cdn.selectablemedia.com/test/a/bbb/assets/video/bbb_trailer_1080p.mp4";

    const VideoFrame = (props: any) => {
        console.log(props);
        
        if (props.video.video_id === "sintel") return <VideoFrame1 url= { props.video.video_file_url }/>;
        if (props.video.video_id === "bbb") return <VideoFrame1 url={props.video.video_file_url} />;
        if (props.video.video_id === "walle") return <VideoFrame1 url={props.video.video_file_url} />;
        else return <VideoFrame1 url={default_url} />;
    };
  // console.log(props.PlayerElements, Object.keys(props.PlayerElements).length);

  return (
       <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Video Player</h1>

        <p className={styles.description}>
          <code className={styles.code}>
            Select thumbnails below to play video
          </code>
        </p>
      <div>
        <VideoFrame video={props.PlayerElements} />
      </div>

      <button onClick={(e) => props.brandDetailsHandler(e.target)}>
        {props.screens.Selector.map((view: any, index: any) => {
          return (
            <img
              src={view.thumbnail}
              alt={view.description}
              key={index}
              id={view.id}
            />
          );
        })}
      </button>
      </main >
    </div>
  );
}
export default Player;
