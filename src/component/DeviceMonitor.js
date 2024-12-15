import React, { useState } from "react";

const DeviceMonitor = () => {
  const [devices, setDevices] = useState([
    { id: 1, name: "Device 1", status: "Online" },
    { id: 2, name: "Device 2", status: "Offline" },
  ]);

  return (
    <div>
      <h3>Device Status</h3>
      <ul>
        {devices.map((device) => (
          <li key={device.id}>
            {device.name} - <span>{device.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeviceMonitor;