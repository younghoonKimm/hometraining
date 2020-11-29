<template>
  <main id="main" role="main">
    <section>
      <div class="card_wrapper">
        <div>{{ this.$route.params.id }}</div>
      </div>
      <button @click="this.useWebCamera">비디오</button>
      <div class="videos" :class="{ on: videoToggle }">
        <video
          class="normal"
          autoplay
          muted
          src="https://images.samsung.com/kdp/cms_contents/104652/9d5d136f-2302-4b9f-9e90-3202f57348a6.jpg"
        >
          <source
            src="https://images.samsung.com/kdp/cms_contents/104652/9d5d136f-2302-4b9f-9e90-3202f57348a6.jpg"
          />
        </video>
        <video
          class="normals"
          muted
          playsinline
          autoplay
          src="https://images.samsung.com/kdp/cms_contents/100109/6c26d85e-30c2-43a4-b382-3c88bf878c4a.mp4"
        >
          <source
            src="https://images.samsung.com/kdp/cms_contents/100109/6c26d85e-30c2-43a4-b382-3c88bf878c4a.mp4"
          />
        </video>
        <video
          autoplay
          playsinline
          muted
          class="webcam"
          ref="videoRef"
          @click="this.removeWebCamera"
        ></video>
      </div>
    </section>
  </main>
</template>

<style>
.card_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card {
  margin-top: 20px;
}
.videos {
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  width: 100vw;
  height: 100vh;
}
.videos .normal {
  width: 600px;
  height: 600px;
}
.videos.on {
  display: block;
}
.normals {
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 500px;
}
.webcam {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 640px;
  height: 480px;
}
</style>
<script>
export default {
  created() {},

  data() {
    return {
      videoToggle: false,
      videoStream: null,
    };
  },

  computed: {
    onVideo: () => {
      return {
        on: this.videoToggle,
      };
    },
  },
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm('Do you really want to leave? you have unsaved changes!');
    if (answer) {
      next();
    } else {
      next(false);
    }
  },
  methods: {
    useWebCamera(e) {
      e.preventDefault();
      // const webcam = this.$refs.videoRef;

      // if (navigator.getUserMedia) {
      //   this.videoToggle = true;
      //   navigator.getUserMedia(
      //     { audio: false, video: true },
      //     (stream) => {
      //       this.videoStream = stream;
      //       webcam.srcObject = stream;
      //       webcam.onloadedmetadata = () => webcam.play();
      //       webcam.requestFullscreen();
      //     },
      //     (err) => {
      //       return console.log(err);
      //     }
      //   );
      // }
      const getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;
      const userMedia = navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          width: 600,
          height: 480,
          facingMode: 'user',
        },
      });
      const webcam = this.$refs.videoRef;
      if (navigator.mediaDevices.getUserMedia) {
        this.videoToggle = true;
        userMedia
          .then(function(stream) {
            const videoTracks = stream.getVideoTracks()[0];
            console.log('카메라 이름 : ' + videoTracks.label);
            console.log(stream);

            webcam.srcObject = stream;
          })
          .catch(function(error) {
            console.error(error.message);
          });
      }
    },

    removeWebCamera(e) {
      // e.preventDefault();
      // const webcam = this.$refs.videoRef;
      // const videoSrcObject = webcam.srcObject;

      // if (e.target.tagName === 'VIDEO') {
      //   this.videoToggle = false;
      //   webcam.pause();
      //   webcam.src = '';
      //   this.videoStream.getTracks()[0].stop();
      // }
      this.$refs.videoRef.requestFullscreen();
    },
  },
};
</script>
