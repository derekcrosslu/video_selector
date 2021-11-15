import { useState, useEffect } from "react";
import { Screens } from "./screens.model";
import Player from "./../components/Player";
import axios from "axios";

function App() {
  const [screens, setScreens] = useState<Screens>({
    Selector: [],
    BrandWrapper: [],
  });
  const [VideoId, SetVideoId] = useState("bbb");
  // Separating informative or Selector data and resource files (mp4 and png) or Branding data
  // before saving it to state after receiving it from the api
  // look into the interface for model criteria
  const screenFilterHandler = (ApiResponse: any) => {
    const Selector = ApiResponse.screens.filter(
      (screen: any) => screen.type === "Selector"
    )[0].config.views;
    const BrandWrapper = ApiResponse.screens.filter(
      (screen: any) => screen.type === "BrandWrapper"
    );
    setScreens({
      Selector: Selector,
      BrandWrapper: BrandWrapper,
    });
  };
  useEffect(() => {
    axios
      .get("http://localhost:9000")
      .then((res) => {
        screenFilterHandler(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  const [PlayerElements, SetPlayerElements] = useState({});
  // saving brand id or "video id"
  const videoIdHandler = (ev: any) => {
    SetVideoId(ev.id);
  };
  //filtering data related to thumbnail selected
  const selectedVideo = screens.BrandWrapper.filter(
    (video: any) => video.id === VideoId
  )[0];
  const selectedView = screens.Selector.filter(
    (view: any) => view.id === VideoId
  )[0];
  // saving elements selected by clicking the thumbnail to render video player
  useEffect(() => {
    SetPlayerElements({
      header_image_url: selectedVideo && selectedVideo.config.views[0].url,
      video_title: selectedView && selectedView.title,
      video_description: selectedView && selectedView.description,
      video_duration: selectedView && selectedView.info,
      video_thumbnail: selectedView && selectedView.thumbnail,
      video_file_url:
        selectedVideo &&
        selectedVideo.config.views.filter(
          (view: any) => view.type === "smPlayerIframe"
        )[0].files[0].url,
      video_id: VideoId,
    });
  }, [selectedVideo]);

  return (
    <div className="container">
      <Player
        screens={screens}
        PlayerElements={PlayerElements}
        videoIdHandler={videoIdHandler}
        VideoId={VideoId}
        data-testid="video-player"
      />
    </div>
  );
}

export default App;
