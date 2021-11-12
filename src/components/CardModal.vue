<template>
  <div class="card-modal">
    <div v-if="showPictureModal" class="modal-container">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <div class="contents">
        <img  v-if="loaded" :src="getImg(picture.src)" @load="load()" />
        <!-- </div> -->
        <div class="name-price">
          <div class="name">
            <h2>{{$t('H2Name')}} : {{ picture.name }}</h2>
            
          </div>
          <div class="price">
            <h2>{{$t('Price')}} :</h2>
            <h4> {{$t('H4Day')}} : {{ picture.price1 }}</h4>
            <h4> {{$t('H4Week')}} : {{ picture.price2 }}</h4>
            <h4> {{$t('H4Month')}} : {{ picture.price3 }}</h4>
          </div>
        </div>
      </div>

      <button @click="close"><i class="btn material-icons">&#xe14c;</i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardModal",

  data() {
    return {
      showPictureModal: true,
      loaded: true,
    };
  },
  props: {
    picture: Object,
   
  },
  methods: {
    showAlert() {
      this.showPictureModal = !this.showPictureModal;
    },
    close() {
      console.log("closing");
      this.$emit("close");
    },
    getImg(img) {
      // console.log("getting images: " + img)
      var url = require("@/assets/" + img + ".jpeg");
      return url;
    },
    load() {
      console.log("loading!!!!!!");
      this.loaded = true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: fixed;
  z-index: 101;
  top: 0;
  padding-top: 2vh;
  
  left: 0;
  width: 100%;
  height: 100%;
  

  border: 1px solid white;
  align-items: center;
  
  text-align: center;
  overflow: hidden;
  background-color: white;
 
}
img {
  display: flex;
  align-self: center;
  width: auto;
  height: 50vh;
  /* border: 2px solid gray; */
  border-radius: 25px;
  padding: 5%;
  /* background-color: black; */
}
.contents {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: start;
  /* margin-left: 30%; */
  width: 70%;
}
.price {
  margin-right: 5%;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  border: 1px solid black;
  background-color:rgb(3, 73, 119);
  border-radius: 50%;
  position: absolute;
  right: 3%;
  top: 13%;
}
/* .name-price {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 60px;
} */
@media only screen and  (max-width: 640px){
  img{
    width: 90vw;
    /* height: 90vh; */
  }
  .btn {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  border: 1px solid black;
  background-color:rgb(3, 73, 119);
  border-radius: 50%;
  position: absolute;
  right: 3%;
  top: 2%;
}
  
}
</style>