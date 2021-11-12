<template>
    <div class="product-container">
        <h1>{{$t('H1Product')}} </h1> <br>
        <p class="more">Click to see details</p>

       <div class="list-container">
      <div v-for="item in picture" :key="item.key" class="list-item">
        <Card
          v-if="item.avaliable"
          @click.native="showPictureModal(item.key)"
          :src="item.src"
        ></Card>
      
      </div>
      <transition name="fade">
        <CardModal
          v-if="showingPictureModal"
          v-on:close="closePictureModal"
          :picture="this.curPicture"
        ></CardModal>
      </transition>
    </div>
    </div>
</template>

<script>
import Card from './Card.vue'
import CardModal from './CardModal.vue'
import store from "@/store/index";
    export default {
        name: 'Product',
        components:{
            Card,
            CardModal
        },
         data() {
    return {
      showPictureCard: 2,
      showingPictureModal: false,
      curPicture: null 
    };
  },
  computed: {
    picture() {
      console.log("getting picture");
      return store.state.Picture;
    },
    
  },
  methods: {
    showPictureModal(picKey) {
      console.log("picKey: " + picKey);
      this.showPictureCard = picKey;
      this.curPicture = this.picture[picKey];
      this.showingPictureModal = true;
    },
    closePictureModal() {
      this.showingPictureModal = false;
    },
    close() {
      console.log("closingggg");
      this.$emit("close");
    },},
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-container{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.list-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 3%;
}
.more{
  display: none;
}

@media only screen and  (max-width: 640px){
  .list-container{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    
    /* width: 100vw; */
}
/* .list-item{
  width: 100%;

} */

}
   
</style>