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
        <video class="webcam" ref="videoRef" @click="this.removeWebCamera"></video>
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
  width: 600px;
  height: 600px;
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

  methods: {
    useWebCamera(e) {
      e.preventDefault();
      const webcam = this.$refs.videoRef;
      navigator.getUserMedia =
        navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

      if (navigator.getUserMedia) {
        this.videoToggle = true;
        navigator.getUserMedia(
          { audio: false, video: true },
          (stream) => {
            this.videoStream = stream;
            webcam.srcObject = stream;
            webcam.onloadedmetadata = () => webcam.play();
          },
          (err) => {
            return console.log(err);
          }
        );
      }
    },

    removeWebCamera(e) {
      e.preventDefault();
      const webcam = this.$refs.videoRef;
      const videoSrcObject = webcam.srcObject;

      if (e.target.tagName === 'VIDEO') {
        this.videoToggle = false;
        webcam.pause();
        webcam.src = '';
        this.videoStream.getTracks()[0].stop();
      }
    },
  },
};
</script>
