<template>
   
<div class="laixe">
   <div id="pos1" class="poster">
       <i class="fa fa-support" style="font-size:32px;color:white"></i>
     <h2> {{ $t('H2Post1') }}</h2>
     <br>
     <p>{{$t('PPost1')}}</p>
   </div>
   <div id="pos2" class="poster">
       <i class="fa fa-support" style="font-size:32px;color:white"></i>
      <h2> {{ $t('H2Post2') }}</h2>
      <br>
      <p>{{$t('PPost2')}}</p>
   </div>
   <div id="pos3" class="poster">
       <i class="fa fa-support" style="font-size:32px;color:white"></i>
      <h2> {{ $t('H2Post3') }}</h2>
      <br>
      <p>{{$t('PPost3')}}</p>
   </div>
    <div id="pos4" class="poster">
        <i class="fa fa-support" style="font-size:32px;color:white"></i>
      <h2> {{ $t('H2Post4') }}</h2>
      <br>
      <p>{{$t('PPost4')}}</p>
   </div>
</div>
</template>

<script>
    export default {
        name: 'Poster',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
.poster {
  width: 500px;
  height: 300px;
  padding-top: 8%;
  padding-left: 3%;
  position: relative;
  text-align: start;
  box-sizing: border-box;
  background-color: greenyellow;
  box-shadow: 0 3px 12px rgba(0,0,0,0.2);
  -webkit-filter: saturate(70%) contrast(85%);
          filter: saturate(70%) contrast(85%);
}
.poster p{
    color: whitesmoke;
}
.poster h2{
    color: whitesmoke;
}
#pos1{
    background-color:rgb(4, 62, 110);
}
#pos2{
    background-color: rgb(9, 113, 145);
}
#pos3{
    background-color: rgb(57, 110, 141);
}
#pos4{
    background-color: rgb(67, 162, 224);
}

.poster:before,
.poster:after {
  content: '';
  width: 100%;
  left: 0;
  position: absolute;
}
.poster:before {
  height: 4%;
  bottom: -4%;
  background-repeat: no-repeat;
  background-image: linear-gradient(177deg, rgba(0,0,0,0.22) 10%, transparent 50%), linear-gradient(-177deg, rgba(0,0,0,0.22) 10%, transparent 50%);
  background-size: 49% 100%;
  background-position: 2% 0, 98% 0;
}
.poster:after {
  height: 100%;
  top: 0;
  z-index: 2;
  background-repeat: no-repeat;
  background-image: linear-gradient(to right, rgba(255,255,255,0.1) 0.5%, rgba(0,0,0,0.15) 1.2%, transparent 1.2%), linear-gradient(to bottom, rgba(255,255,255,0.1) 0.5%, rgba(0,0,0,0.15) 1.2%, transparent 1.2%), linear-gradient(to bottom, rgba(255,255,255,0.1) 0.5%, rgba(0,0,0,0.15) 1.2%, transparent 1.2%), linear-gradient(265deg, rgba(0,0,0,0.2), transparent 10%), linear-gradient(5deg, rgba(0,0,0,0.2), transparent 15%), linear-gradient(-5deg, rgba(0,0,0,0.1), transparent 10%), linear-gradient(5deg, rgba(0,0,0,0.1), transparent 10%), linear-gradient(-265deg, rgba(0,0,0,0.2), transparent 10%), linear-gradient(-5deg, rgba(0,0,0,0.2), transparent 15%), linear-gradient(266deg, rgba(0,0,0,0.2), transparent 10%);
  background-size: 50% 100%, 100% 33.3333%, 100% 33.3333%, 50% 33.3333%, 50% 33.3333%, 50% 33.3333%, 50% 33.3333%, 50% 33.3333%, 50% 33.3333%, 50% 33.3333%;
  background-position: right top, left center, left bottom, left top, left top, right top, left center, right center, right center, left bottom;
}
body{
  background-color: #c8cac9;
  padding: 60px 20px;
}
.laixe{
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  -webkit-box-align: center;
          align-items: center;
  justify-items: center;
  gap: 60px 30px;
  
  
}
@media only screen and  (max-width: 640px){
  .laixe{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .poster{
    width: 90vw;
  }
}

@media only screen and (min-width: 641px) and  (max-width: 1024px){
  .poster{
    width: 45vw;
  }
}

</style>