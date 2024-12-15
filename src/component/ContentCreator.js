import React, { useEffect } from "react";
import { Canvas, Rect, IText } from 'fabric'

const ContentCreator = ({canvasRef }) => {
    const canvasElementId = "canvas"; // ID for the canvas element
  
    useEffect(() => {
  
      if (canvasRef.current) {
          canvasRef.current.dispose();
        }
  
      const canvas = new Canvas(canvasElementId);
      canvasRef.current = canvas;
  
      // Example: Add text and shapes
      canvas.add(new IText("Hello, World!", { left: 50, top: 50 }));
      canvas.add(new Rect({ width: 100, height: 100, fill: "blue", left: 200, top: 50 }));
  
  
      return () => {
          // Clean up the canvas instance on component unmount
          if (canvasRef.current) {
            canvasRef.current.dispose();
            canvasRef.current = null;
          }
        };
  
    }, []);
  
    return <canvas id="canvas" width={800} height={400} style={{ border: "1px solid #ccc" }}></canvas>;
  };

export default ContentCreator;