const videoElement = document.querySelector('.video-bg');
    const fileInput = document.getElementById('videoUpload');
    const fileNameDisplay = document.getElementById('fileName');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');

    fileInput.addEventListener('change', function(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith('video/')) {
        const fileURL = URL.createObjectURL(file);
        videoElement.src = fileURL;
        videoElement.play();
        fileNameDisplay.textContent = `🎥 Now playing: ${file.name}`;
      } else {
        alert('Please select a valid video file.');
      }
    });

    playBtn.addEventListener('click', () => {
      if (videoElement.src) {
        videoElement.play();
      } else {
        alert('Please upload a video first.');
      }
    });

    pauseBtn.addEventListener('click', () => {
      if (videoElement.src) {
        videoElement.pause();
      } else {
        alert('Please upload a video first.');
      }
    });