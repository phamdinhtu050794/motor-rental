<template>
  <div>
      <div class="card-container">
    <img v-if="loaded" :src="getImg(src)" @load="load()" />
    <!-- <div>{{ name }}</div>
    <div>{{ price }}</div> -->
  </div>
  <div class="eye">
      <!-- <i style="font-size:48px" class="fa">&#xf06e;</i> -->
      <h5>{{$t('H5Card')}} </h5>

  </div>
  </div>
</template>

<script>
export default {
  name: "Card",
 props: {
    // name: String,
    // price : String,
    src: String
  },
  data: () => {
      return {
          loaded: true,
          img: 0
      }
  },
  methods: {
    getImg(img){
        // console.log("getting images: " + img)
      var url = require('@/assets/' + img + '.jpeg');
       
      return url; 
    },
    load(){
        console.log('loading!!!!!!')
        this.loaded = true; 
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-container{
  display: flex;
  /* border: 1px solid black; */
  

}
.card-container img{
   border-radius: 25px;
  padding: 5px;
  width: 30vw;
  
}
.eye{
    display: none;
    /* position: relative; */
    /* margin-top: -50%; */
    color:green;
    
    
}
.card-container:hover + .eye {
    display: block;
}

@media only screen and  (max-width: 640px){
  .card-container img{
   /* border-radius: 25px; */
  padding: 5px;
  width: 100%;
  
}
}
</style>