import React from "react";


export function VideoFrame1(props: any) {
    console.log(props);
    
    return (
      <div>
        <video className="video" controls>
          <source
            src={props.url}
            type="video/mp4"
          />
        </video>
      </div>
    );
}



