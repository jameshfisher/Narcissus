(function() {
    window.pcjs(function(canvasElement) {
      console.log(canvasElement);
      var videoStream = canvasElement.captureStream(25);
      var videoElement = document.querySelector("video#canvas_stream");
      videoElement.src = window.URL.createObjectURL(videoStream);
      videoElement.play();
    });
})();
