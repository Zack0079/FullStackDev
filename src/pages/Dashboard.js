import {React, useRef} from "react";
import ContentCreator from "../component/ContentCreator";
import ContentPreview from "../component/ContentPreview";
import ContentScheduler from "../component/ContentScheduler";
import ContentList from "../component/ContentList";
import ContentOrganizer from "../component/ContentOrganizer";
import DeviceMonitor from "../component/DeviceMonitor";

const Dashboard = () => {
  const canvasRef = useRef(null); // Shared reference for the canvas

  return (
    <div>
      <h1>Web Dashboard</h1>
      <ContentCreator canvasRef={canvasRef}/>
      <ContentPreview canvasRef={canvasRef}/>
      <ContentScheduler />
      <ContentList />
      <ContentOrganizer />
      <DeviceMonitor />
    </div>
  );
};

export default Dashboard;