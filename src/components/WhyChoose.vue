<template>
    <div class="why-container">
        <h1>{{$t('H1Why')}} </h1>
        <hr>
       <div class="why-content">
           <div class="cell">
               <i style="font-size:75px" class="fa">&#xf155;</i>
               <p>{{$t('P1Why')}} </p>
           </div>
           <div class="cell">
               <i style="font-size:75px" class="fa">&#xf017;</i>
               <p>{{$t('P2Why')}} </p>
           </div>
           <div class="cell">
               <i style="font-size:75px" class="fa">&#xf00c;</i>
                <p>{{$t('P3Why')}} </p>
           </div>
           <div class="cell">
              <i style="font-size:75px" class="fa">&#xf118;</i>
              <p>{{$t('P4Why')}} </p>
           </div>
           <div class="cell">
               <i style="font-size:75px" class="fa">&#xf006;</i>
               <p>{{$t('P5Why')}} </p>
           </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: 'WhyChoose',
      
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.why-container{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
h1{
    color: rgb(0, 87, 128);
}
hr{
    width: 5%;
    height: 5px;
    background-color: rgb(0, 87, 128);
}

.why-content{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 5%;
    align-items: baseline;
}

.cell{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 15%;
}
.cell i{
    color: rgb(6, 104, 170);
}
   @media only screen and  (max-width: 640px){
       .why-container{
           display: flex;
           flex-direction: column;
           justify-content: space-around;
       }
       .why-content{
           display: flex;
           flex-direction: column;
           justify-content: space-around;
        
       }
       .cell{
           width: 90%;
       }
   }
</style>