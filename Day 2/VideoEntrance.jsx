import { useEffect, useRef } from 'react';
import video from '../assets/video.mp4';
import './VideoEntrance.css'; // Import the CSS file for styling

const VideoEntrance = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Auto-play the video when the component mounts
    videoRef.current.play().catch(error => {
      // Autoplay may be blocked by browsers, handle the error here
      console.error('Autoplay failed:', error);
    });
  }, []);

  const handlePlayPause = () => {
    const videoElement = videoRef.current;

    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  };

  const handleUserClick = () => {
    // Handle user login logic here
    console.log('User button clicked');
    // You can add your logic for handling the user login
    // For example, navigate to the user page
    window.location.href = '/user-page';
  };

  

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        width="100%"  // Set the width to 100% for full screen
        autoPlay
        onClick={handlePlayPause} // Pause/play on click
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="button-container">
        <button className="dash" onClick={handleUserClick}>
          Dashboard
        </button>
        
      </div>
    </div>
  );
};

export default VideoEntrance;
