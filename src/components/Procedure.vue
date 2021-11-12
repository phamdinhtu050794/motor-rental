<template>
  <div class="procedure-container">
    <h1>{{$t('H1Process')}} </h1>
    <hr>
    <div class="procedure-detail">
      <div class="procedure-content">
        <div>
          <h1>1</h1>
        </div>
        <div class="img-call">
          <img src="@/assets/call.jpeg" alt="" />
        </div>
        <div>
          <h3>{{$t('H3Process1')}} </h3>
          <p>
           {{$t('PProcess1')}}
          </p>
        </div>
      </div>
      <div class="procedure-content">
        <div>
          <h1>2</h1>
        </div>
        <div>
          <img src="@/assets/lock.jpeg" alt="" />
        </div>
        <div>
          <h3>{{$t('H3Process2')}} </h3>
          <p>
          {{$t('PProcess2')}}
          </p>
        </div>
      </div>
      <div class="procedure-content">
        <div>
          <h1>3</h1>
        </div>
        <div>
          <img src="@/assets/run-motor.jpeg" alt="" />
        </div>
        <div>
          <h3>{{$t('H3Process3')}} </h3>
          <p>
           {{$t('PProcess3')}}
          </p>
        </div>
      </div>
      <div class="procedure-content">
        <div>
          <h1>4</h1>
        </div>
        <div>
          <img src="@/assets/return-lock.jpeg" alt="" />
        </div>
        <div>
          <h3>{{$t('H3Process4')}} </h3>
          <p>
           {{$t('PProcess4')}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Procedure",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.procedure-container{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: rgb(83, 122, 167);
}
hr{
    background-color: whitesmoke;
    width: 5%;
    height: 5px;
}
h1{
    color: whitesmoke;
}
h3{
    color: whitesmoke;
}
p{
    color: whitesmoke;
}
img{
    width: 200px;
    height: 200px;
    /* padding: 5%; */
    /* height: 20%; */
     border: 10px #d4d4d4 solid;
    /* padding: 10px; */
    border-radius:50%;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
}
.procedure-detail{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: baseline;
    
}
.procedure-content{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 20%;
}

@media only screen and  (max-width: 640px){
  .procedure-container{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    background-color: rgb(83, 122, 167);
}
 .procedure-detail{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* align-items: baseline; */
    text-align: center;
    width: 100%;
    
}

.procedure-content{
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    width: 100%;
    
}

img{
    width: 200px;
    height: 200px;
    /* padding: 5%; */
    /* height: 20%; */
     border: 10px #d4d4d4 solid;
    /* padding: 10px; */
    border-radius:50%;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
}
}


</style>