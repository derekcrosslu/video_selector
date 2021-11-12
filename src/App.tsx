import { useState, useEffect, memo } from "react";
import "./App.css";
import { Screens, PlayerElements } from "./screens.model";
import Player from "./components/Player";
import response from './response'
import axios from "axios";

function App() {
  const [screens, setScreens] = useState<Screens>({
    Selector: [],
    BrandWrapper: [],
  });

  const [PlayerElements, SetPlayerElements] = useState({});

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

  const brandDetailsHandler = (ev: any) => {

    // console.log(ev);
    
    const selectedVideo = screens.BrandWrapper.filter(
      (video) => video.id === ev.id
    )[0];
    const selectedView = screens.Selector.filter((view) => view.id === ev.id)[0];
    // console.log(selectedView, selectedVideo);

      SetPlayerElements({
        header_image_base_url: selectedVideo && selectedVideo.config.assetPath,
        header_image_url: selectedVideo && selectedVideo.config.views[0].url,
        video_title: selectedView && selectedView.title,
        video_description: selectedView && selectedView.description,
        video_duration: selectedView && selectedView.info,
        video_thumbail: selectedView && selectedView.thumbnail,
        video_file_url:
          selectedVideo &&
          selectedVideo.config.views.filter(
            (view) => view.type === "smPlayerIframe"
          )[0].files[0].url,
        video_id: selectedVideo.id,
      });
  };

  return (
    <div className="container">hola
      <Player
        screens={screens}
        brandDetailsHandler={brandDetailsHandler}
        PlayerElements={PlayerElements}
      />
    </div>
  );
}

export default App;
