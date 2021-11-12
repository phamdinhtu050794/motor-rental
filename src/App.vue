<template>
  <div id="app">
    <div class="ui">
      <div class="logo">
        <div>
          <h3>
            {{ $t('Shop') }} <br>
            QUANG NGA
          </h3>
        </div>
        <div>
          <i class="fa fa-motorcycle" style="font-size: 48px; color: white"></i>
        </div>
      </div>

      <div class="catelogy">
        <div>
          <a class="section" href="#app"><h5>  {{ $t('Home') }}</h5></a>
        </div>
        <div>
          <a class="section" href="#go_about"><h5>{{ $t('About') }}</h5></a>
        </div>
        <div>
          <a class="section" href="#go_car"><h5>{{ $t('Rental') }}</h5></a>
        </div>
        <div>
          <a class="section" href="#go_contact"><h5>{{ $t('Contact') }}</h5></a>
        </div>
      
      </div>
      <div>
        <button
          class="btn"
          v-for="entry in languages"
          :key="entry.title"
          @click="changeLocale(entry.language)"
        >
          <flag :iso="entry.flag" v-bind:squared="false" /> {{ entry.title }}
        </button>
      </div>
    </div>

    <Slide></Slide>
    <br>
    <Poster></Poster>
    <br>
    <Product id="go_car"></Product>
    <br>
    <Procedure></Procedure>
    <br>
    <WhyChoose></WhyChoose>
    <br>
    <Contact id="go_contact"></Contact>
    <br>
    <About id="go_about"></About>
    <br>
    <Footer></Footer>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  </div>
</template>

<script>
import Slide from "./components/Slide.vue";
import Poster from "./components/Poster.vue";
import Product from "./components/Product.vue";
import Procedure from "./components/Procedure.vue";
import WhyChoose from "./components/WhyChoose.vue";
import Contact from "./components/Contact.vue";
import About from "./components/About.vue";
import Footer from "./components/Footer.vue";
import i18n from "@/plugins/i18n";
export default {
  name: "app",
  components: {
    Slide,
    Poster,
    Product,
    Procedure,
    WhyChoose,
    Contact,
    About,
    Footer
  },
  data() {
    return {
      languages: [
        { flag: "us", language: "en", title: "US" },
        { flag: "vn", language: "vi", title: "VN" },
      ],
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* margin-top: 60px; */
}
body {
  padding: 0;
  margin: 0;
}
button {
  border: 1px solid green;
  font-size: 18px;
}
.ui {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: baseline;
  position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 100;
  width: 100%;
  background-color: rgb(52, 54, 68);
}

h3{
  color: whitesmoke;
}


.logo {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
}
.catelogy {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 50%;
}
.btn {
}

.section {
  text-decoration: none;
  color: whitesmoke;
}
#go_car{
  padding-top: 10vh;
}
#go_about{
  padding-top: 10vh;
}
#go_contact{
  padding-top: 10vh;
}

@media only screen and  (max-width: 640px){
  .ui{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
.catelogy{
  display: none;
}
.fa-motorcycle{
  display: none;
}

}



</style>