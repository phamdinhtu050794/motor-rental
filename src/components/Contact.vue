<template>
    <div class="contact-container">
        <h1>{{$t('H1Contact')}} </h1>
        <h3>{{$t('H3Contact')}} </h3>
        <i style="font-size:324px" class="fa">&#xf0e6;</i>
       <p>Hotline : 0943.696.818 - 0827.659.829</p>
       
    </div>
</template>

<script>
    export default {
        name: 'Contact',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact-container{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: rgb(71, 123, 165);
}
h1{
    color: white;
}
h3{
    color: white;
}

i{
    color: white;
}

p{
    color: white;
    font-size: 48px;
}
</style>