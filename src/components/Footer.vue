<template>
  <div class="footer-container">
    <h2>{{ $t('Shop') }}
            QUANG NGA</h2>
    <hr />
    <div class="body-footer">
      <div>
        <div class="cell">
          <p>
            <i style="font-size: 24px" class="fa">&#xf041;</i> 1b Vu Dinh Long -
            Tho Quang - Son Tra - Da Nang
          </p>
        </div>
        <div class="cell">
          <p>
            <i style="font-size: 24px" class="fa">&#xf095;</i> Hotline
            :0943.696.818 - 0827.659.829
          </p>
        </div>
        <div class="cell">
          <p>
            <i style="font-size: 24px" class="fa">&#xf0e0;</i> Email :
            maithithanhnga909 @gmail.com
          </p>
        </div>
      </div>

      <div class="footer">
        <a href="https://www.facebook.com/thanhnga.mai.5621" class="cell">
          <p>
            <i class="fa fa-facebook-official" aria-hidden="true"></i> Facebook
          </p>
        </a>
        <a href="#" class="cell">
          <p><i class="fa fa-twitter-square" aria-hidden="true"></i> Twitter</p>
        </a>
        <a href="#" class="cell">
          <p><i class="fa fa-instagram" aria-hidden="true"></i> Instagram</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgb(52, 54, 68);
}
hr {
  width: 5%;
  height: 5px;
  background-color: whitesmoke;
}

h2 {
  color: whitesmoke;
}

.body-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.cell {
  display: flex;
  flex-direction: row;
  /* justify-content: flex-start; */
  align-items: baseline;
  /* width: 50%; */
  /* padding-left: 35%; */
}
/* .body-footer{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.body-footer i{
    font-size: 24px;
} */

.cell {
  text-decoration: none;
  color: whitesmoke;
}
@media only screen and  (max-width: 640px){
  .footer-container{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .body-footer{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* padding: 5%; */
    padding-left: 3%;
  }
  .footer{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
}
</style>