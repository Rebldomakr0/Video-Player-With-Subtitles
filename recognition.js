const recognition = new webkitSpeechRecognition();

recognition.onresult = function (event) {
  const command = event.results[0][0].transcript.toLowerCase();

  if (command.includes('play')) {
    videoPlayer.play();
  } else if (command.includes('pause')) {
    videoPlayer.pause();
  } else if (command.includes('stop')) {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  } else if (command.includes('next')) {
    playNextVideo();
  }
};

recognition.start();
