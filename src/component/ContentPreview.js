import React, { useState } from "react";
import Modal from "react-modal";

const ContentPreview = ({ canvasRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPreview = () => setIsOpen(true);
  const closePreview = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openPreview}>Preview</button>
      <Modal isOpen={isOpen} onRequestClose={closePreview}>
        <h2>Content Preview</h2>
        <div>
          {/* Render the canvas image */}
          <img src={canvasRef.current?.toDataURL()} alt="Preview" />
        </div>
        <button onClick={closePreview}>Close</button>
      </Modal>
    </div>
  );
};

export default ContentPreview;