import { useState, useEffect } from "react";
import "./App.css";
import { Screens } from "./screens.model";
import response from "./response";

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
    screenFilterHandler(response);
  }, []);

  const brandDetailsHandler = (id: string) => {
    const selectedVideo = screens.BrandWrapper.filter(
      (video) => video.id === id
    )[0];
    const selectedView = screens.Selector.filter((view) => view.id === id)[0];
    // console.log(selectedView, selectedVideo);

    SetPlayerElements({
      header_image_base_url: selectedVideo && selectedVideo.config.assetPath,
      header_image_url: selectedVideo && selectedVideo.config.views[0].url,
      video_title: selectedView && selectedView.title,
      video_description: selectedView && selectedView.description,
      video_duration: selectedView && selectedView.info,
      video_thumbail: selectedView && selectedView.thumbnail,
      video_file_url:
        selectedVideo && selectedVideo.config.views[1].files[0].url,
    });
    console.log(PlayerElements);
  };
  return <div className="App"></div>;
}

export default App;
