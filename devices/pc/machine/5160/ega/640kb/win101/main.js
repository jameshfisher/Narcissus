(function () {
  var waitFor = function (pred, cb) {
    var result = pred();
    if (result != null) {
      cb(result);
    } else {
      setTimeout(waitFor, 100, pred, cb);
    }
  };
  waitFor(
    function () {
      // Seriously, who puts a period in a CSS id?
      return document.querySelector("div#ibm5160\\.videoEGA canvas.pcjs-canvas");
    },
    function (canvasElement) {
      console.log(canvasElement);
      var videoStream = canvasElement.captureStream(25);
      var videoElement = document.querySelector("video#canvas_stream");
      videoElement.src = window.URL.createObjectURL(videoStream);
      videoElement.play();
    }
  );
})();