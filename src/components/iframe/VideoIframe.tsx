interface Props{
  link: string;
  title: string;
}

const VideoIframe = ({link, title}: Props) => {
  return (
    <iframe
      className="video-player"
      src={`https://www.youtube.com/embed/${link}?wmode=opaque&amp;rel=0&amp;enablejsapi=1&amp;version=3&amp;origin=https://www.samsung.com&amp;autoplay=0&amp;mute=0`}
      frameBorder="0"
      allow="autoplay"
      sandbox="allow-scripts allow-same-origin allow-presentation"
      id="eu5JpVI586s0"
      title={title}
      style={{ width: "100%", height: "100%" }}
    />
  );
};
export default VideoIframe;
