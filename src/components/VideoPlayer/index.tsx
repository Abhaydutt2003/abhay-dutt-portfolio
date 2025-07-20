//i can make a declaration file to tell typescript that there will be a cloudinary object , but that is too much of a pain (maybe i should have used javascript...).
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useEffect, useRef } from "react";

const VideoPlayer = ({
  width,
  height,
  videoId,
}: {
  width: number;
  height: number;
  videoId: string;
}) => {
  const cloudinaryRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (cloudinaryRef.current) return;
    cloudinaryRef.current = window.cloudinary; //i could go ahead and make a declaration file, but that is too much of a pain
    cloudinaryRef.current.videoPlayer(videoRef.current, {
      cloud_name: "dsihfpv6p",
    });
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.loop = true;
      video.muted = true;
      video.autoplay = true;
    }
  }, []);

  return (
    <video
      ref={videoRef}
      width={width}
      height={height}
      loop
      muted
      autoPlay
      data-cld-public-id={videoId}
    />
  );
};

export default VideoPlayer;
