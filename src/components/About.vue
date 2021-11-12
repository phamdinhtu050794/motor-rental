<template>
    <div class="about-container">
        <h1>{{$t('H1About')}} </h1>
        <hr>
        <div class="about-content">
            <div>
                <img src="@/assets/us.jpeg" >
            </div>
            <div class="check">
                <div class="cell">
                    <i style="font-size:32px" class="fa">&#xf00c;</i>
                    <p>{{$t('P1About')}} </p>
                    
                </div>
                <div class="cell">
                     <i style="font-size:32px" class="fa">&#xf00c;</i>
                     <p>{{$t('P2About')}} </p>
                </div>
                <div class="cell">
                     <i style="font-size:32px" class="fa">&#xf00c;</i>
                     <p>{{$t('P3About')}} </p>
                </div>
                <div class="cell">
                     <i style="font-size:32px" class="fa">&#xf00c;</i>
                     <p>{{$t('P4About')}} </p>
                </div>
                <div class="cell">
                     <i style="font-size:32px" class="fa">&#xf00c;</i>
                     <p>{{$t('P5About')}} </p>
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
    export default {
        name: 'About',
        
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about-container{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 3%;
}
h1{
    color: rgb(0, 87, 128);
}
hr{
    width: 5%;
    height: 5px;
    background-color: rgb(0, 87, 128);
}

img{
    width: 50%;
}

.about-content{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-top: 3%;
    /* border: 1px solid black; */
}

.check{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    
    width: 40%;
    /* border: 1px solid black; */

}

.cell{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
}

i{
    color: rgb(0, 87, 128);
}
p{
    font-size: 18px;
}
@media only screen and  (max-width: 640px){
    .about-container{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 90%;
    }
    .about-content{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    /* padding-top: 3%; */
    /* border: 1px solid black; */
}
.check{
    width: 90%;
}
img{
    width: 70%;
}

}

@media only screen and (min-width: 641px) and  (max-width: 1024px){
img{
    width: 40vw;
}
.check{
    width: 40vw;
}
}
</style>