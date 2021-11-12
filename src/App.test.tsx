import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import Selector from "./components/Selector";
import Player from "./components/Player";
import VideoFrame from "./components/VideoFrame";
import { createRenderer } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import TestRenderer from 'react-test-renderer';


describe("Comparing snapshots for App component", () => {
  test("matches snapshot", () => {
    const tree = TestRenderer.create(<App  />).toJSON();
    expect(tree).toMatchSnapshot()
  });
});

describe("VideoFrame component renders correctly", () => {
  test("Test video source type from VideoFrame component", () => {
    const { queryByTestId } = render(<VideoFrame />);
    expect(queryByTestId("video-frame-component")).toBeTruthy();
  });
})