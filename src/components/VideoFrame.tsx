import React from "react";
import styles from "./VideoFrame.module.css";

export function VideoFrame1(props: any) {
    return (
      <main className={styles.main}>
        <video className={styles.video} controls>
          <source src={props.url} type="video/mp4" />
        </video>
      </main>
    );
}



