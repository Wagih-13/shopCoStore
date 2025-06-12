import './style.scss'

const VideoSection = () => {
  return (
    <div  className="videoContainer">
      <video autoPlay loop muted width={"100%"}>
        <source src="fashonVideo.mp4" />
      </video>
    </div>
  );
};

export default VideoSection;
