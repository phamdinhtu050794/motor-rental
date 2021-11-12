<template>
  <div class="slide-container">
    <div class="slide">
      <transition mode="out-in" :duration="3000" name="fade">
        <img class="img" v-if="loaded" :src="getImg(showImage)" width="50%" height="800px" />
      </transition>

      <!-- <transition mode="out-in" :duration="3000" name="fade">
        <img v-if="!loaded" :src="getImg(showImage)" width="400" height="300" />
      </transition> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Slide",
  mounted() {
    setInterval(this.switchImage, 3000);
  },
  data: () => {
    return {
      loaded: false,
      showImage: 0,
    };
  },
  watch: {
    showImage: {
      handler() {
        // this.loaded = !this.loaded;
        this.loaded = false;
        setInterval(() => {
          this.loaded = true;
        }, 500);
      },
      immediate: true,
    },
  },
  methods: {
    getImg(img) {
      var url = require("@/assets/" + img + ".jpeg");
      return url;
    },
    switchImage() {
      if ((this.showImage + 1) % 6 == 0) {
        this.showImage = 0;
      } else {
        this.showImage = this.showImage + 1;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide-container{
  padding: 2%;
    /* border: 1px solid black; */
    /* background-color: rgb(252, 252, 151); */
 background: rgb(30,176,238);
background: radial-gradient(circle, rgba(30,176,238,1) 0%, rgba(207,225,227,1) 47%, rgba(26,144,218,1) 100%);
}

.img{
  border-radius: 15px;
}

@media only screen and  (max-width: 640px){
.img{
  width: 100%;
  height: 90vh;
}

}
</style>