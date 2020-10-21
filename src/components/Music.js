import React, { useState, useEffect } from "react";

const useAudio = url => {
  const [audio] = useState(new Audio());
  audio.src = "https://www.mboxdrive.com/TetrisTheme.mp3"
  audio.loop = true
  const [playing, setPlaying] = useState(false);

  /// https://www.mailboxdrive.com/home/
  const toggle = () => setPlaying(!playing);
  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

export default Player;