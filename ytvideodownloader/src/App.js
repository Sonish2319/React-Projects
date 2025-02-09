import React, { useState } from "react";
import axios from "axios";

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [downloadLink, setDownloadLink] = useState("");

  const handleDownload = async (e) => {
    e.preventDefault();
    if (!videoUrl) {
      alert("Please enter a valid YouTube URL.");
      return;
    }
  
    try {
      const response = await axios.post(
        "http://localhost:4000/api/download",
        { url: videoUrl },
        { responseType: "blob" }
      );
  
      // Create a download link
      const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", "video.mp4");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to download video. Please try again.");
    }
  };
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>YouTube Video Downloader</h1>
      <form onSubmit={handleDownload}>
        <input
          type="text"
          placeholder="Enter YouTube video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          style={{ width: "300px", padding: "10px", margin: "10px 0" }}
        />
        <br />
        <button type="submit" style={{ padding: "10px 20px", fontSize: "16px" }}>
          Download
        </button>
      </form>
      {downloadLink && (
        <div style={{ marginTop: "20px" }}>
          <a href={downloadLink} download="video.mp4" style={{ color: "blue", fontSize: "18px" }}>
            Click here to download your video
          </a>
        </div>
      )}
    </div>
  );

}

export default App;
