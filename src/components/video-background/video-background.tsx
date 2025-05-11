'use client';

import { useEffect } from 'react';
import styles from './video-background.module.scss';

interface VideoBackgroundProps {
  videoId: string;
}

const VideoBackground = ({ videoId }: VideoBackgroundProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.videoWrapper}>
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?background=1&autopause=0&autoplay=1&loop=1&byline=0&title=0&muted=1&quality=1080p&dnt=1&transparent=0&background=1&playsinline=1&controls=0`}
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        className={styles.video}
      />
    </div>
  );
};

export default VideoBackground; 