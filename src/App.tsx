import { useState, useEffect } from "react";
import "./App.css";
import { Screens, PlayerElements } from "./screens.model";
import Player from "./components/Player";
import axios from "axios";

function App() {
  const [screens, setScreens] = useState<Screens>({
    Selector: [],
    BrandWrapper: [],
  });
  const [VideoId, SetVideoId] = useState("bbb");

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
    // screenFilterHandler(response);
    axios
      .get("http://localhost:9000")
      .then((res) => {
        // console.log(res.data.screens[1].config.views[1].files[0].url);
        screenFilterHandler(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  const [PlayerElements, SetPlayerElements] = useState({});
  console.log(VideoId, screens);

  const videoIdHandler = (ev: any) => {
    SetVideoId(ev.id);
    // brandDetailsHandler();
  };

  const selectedVideo = screens.BrandWrapper.filter(
    (video) => video.id === VideoId
  )[0];
  const selectedView = screens.Selector.filter(
    (view) => view.id === VideoId
  )[0];

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
          (view) => view.type === "smPlayerIframe"
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
      />
    </div>
  );
}

export default App;
