<template>
    <h3>MODIFIER COMMANDE</h3>
    <form>
          <label>CLIENT</label>
        <div  class="ddown-client-mod">
        <div class="ddown-select-client-mod">
      <span class="slct-client-mod">HAMID EL ASRI</span>
      <img @click="openModalClientMod()" class="ddown-icon-client-mod" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkRvd25fQXJyb3dfM18iIGQ9Im02NCA4OGMtMS4wMjMgMC0yLjA0Ny0uMzkxLTIuODI4LTEuMTcybC00MC00MGMtMS41NjMtMS41NjMtMS41NjMtNC4wOTQgMC01LjY1NnM0LjA5NC0xLjU2MyA1LjY1NiAwbDM3LjE3MiAzNy4xNzIgMzcuMTcyLTM3LjE3MmMxLjU2My0xLjU2MyA0LjA5NC0xLjU2MyA1LjY1NiAwczEuNTYzIDQuMDk0IDAgNS42NTZsLTQwIDQwYy0uNzgxLjc4MS0xLjgwNSAxLjE3Mi0yLjgyOCAxLjE3MnoiIGZpbGw9IiMwMDZkNzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
    </div>
      <ul id="blcksClient" class="blc-link-client-mod">
        <li>
          <a @click="filterClient($event)" >AMINE KOUZMANE</a>
        </li>
        <li>
          <a @click="filterClient($event)">HAMID EL ASRI</a>
        </li>
        <li>
          <a @click="filterClient($event)">FOUAD KOUZMANE</a>
        </li>
      </ul>
  </div>
        <div class="date-mod">
        <label>DATE</label>
        <input type="date" placeholder="22/02/2021" required v-model="date">
        </div>

        <div class="title-PQ-mod">
          <h2>PRODUIT</h2>
          <h3>QUANTITÉ</h3>
        </div>
   

        <div class="line-mod">
        <div  class="ddown-mod">
          <div class="ddown-select-mod">
            <span class="slct-mod">LAVABO DURAL</span>
          </div>
      
      </div>
  
       <div class="qt1-mod">
             <input type="text" placeholder="2000" required>
        </div>
    </div>

    <div class="line-mod">
        <div  class="ddown-mod">
        <div class="ddown-select-mod">
      <span class="slct-mod">MIROIR DE WC SUSPENDUE</span>
    </div>
      
  </div>
  
       <div class="qt1-mod">
             <input type="text" placeholder="2000" required>
        </div>
    </div>
    
    
    
    
      <button class="btin-mod" @click="goToVentes()"> VALIDER 
    <img class="img-vad-mod" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xMiAwYy02LjYxNyAwLTEyIDUuMzgzLTEyIDEyczUuMzgzIDEyIDEyIDEyIDEyLTUuMzgzIDEyLTEyLTUuMzgzLTEyLTEyLTEyem02LjA4MiA5LjQ1Ny02LjUgNi41Yy0uMTk1LjE5NS0uNDUxLjI5My0uNzA3LjI5M3MtLjUxMi0uMDk4LS43MDctLjI5M2wtMy4yNS0zLjI1Yy0uMzkxLS4zOTEtLjM5MS0xLjAyMyAwLTEuNDE0czEuMDIzLS4zOTEgMS40MTQgMGwyLjU0MyAyLjU0MyA1Ljc5My01Ljc5M2MuMzkxLS4zOTEgMS4wMjMtLjM5MSAxLjQxNCAwcy4zOTEgMS4wMjMgMCAxLjQxNHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
  </button>
    
    </form>
    <!--<div class="but-NV">
    <button class="btin" @click="goToVentes()"> VALIDER 
    <img class="img-vad" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xMiAwYy02LjYxNyAwLTEyIDUuMzgzLTEyIDEyczUuMzgzIDEyIDEyIDEyIDEyLTUuMzgzIDEyLTEyLTUuMzgzLTEyLTEyLTEyem02LjA4MiA5LjQ1Ny02LjUgNi41Yy0uMTk1LjE5NS0uNDUxLjI5My0uNzA3LjI5M3MtLjUxMi0uMDk4LS43MDctLjI5M2wtMy4yNS0zLjI1Yy0uMzkxLS4zOTEtLjM5MS0xLjAyMyAwLTEuNDE0czEuMDIzLS4zOTEgMS40MTQgMGwyLjU0MyAyLjU0MyA1Ljc5My01Ljc5M2MuMzkxLS4zOTEgMS4wMjMtLjM5MSAxLjQxNCAwcy4zOTEgMS4wMjMgMCAxLjQxNHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
  </button>
  </div>-->
  
   <!--<p>CLIENT: {{client}}</p>
    <p>DATE: {{date}}</p>
    <p>QUANTITÉ: {{quantite1}}</p>
    <p>QUANTITÉ: {{quantite2}}</p>
    <p>QUANTITÉ: {{quantite3}}</p>-->
</template>

<script>
export default {
    data() {
        return {
            client: '',
            date: '',
            quantite1: '',
            quantite2: '',
            quantite3: '',
            toggle: false,
            moggle: false,
            moggle: false
        }
    },
    methods: {
        openModal1(){
       
       this.toggle = !this.toggle
       console.log(this.toggle)
       var bloc = document.getElementById('blcks')
       
       if (this.toggle === true) {
           bloc.style.display  = 'block'
           console.log("this is if")
           
       }
       else {
           bloc.style.display  = 'none'
           console.log("this is else")
           
       }
   },
   openModal2(){
       
       this.boggle = !this.boggle
       console.log(this.boggle)
       var liss = document.getElementById('blcks2')
       
       if (this.boggle === true) {
           liss.style.display  = 'block'
           console.log("this is if")
           
       }
       else {
           liss.style.display  = 'none'
           console.log("this is else")
           
       }
    },
    openModal3(){
       
       this.moggle = !this.moggle
       console.log(this.moggle)
       var liss = document.getElementById('blcks3')
       
       if (this.moggle === true) {
           liss.style.display  = 'block'
           console.log("this is if")
           
       }
       else {
           liss.style.display  = 'none'
           console.log("this is else")
           
       }
    },
    openModalClientMod(){
       
       this.toggle = !this.toggle
       console.log(this.toggle)
       var bloc = document.getElementById('blcksClient')
       
       if (this.toggle === true) {
           bloc.style.display  = 'block'
           console.log("this is if")
           
       }
       else {
           bloc.style.display  = 'none'
           console.log("this is else")
           
       }
   }

    }
}
</script>

<style scoped>
.line-mod {
  margin-bottom: -115px;
}
h3 {
    margin-top: 130px;
    margin-left: 52px;
    margin-bottom: -141px;
    float: left;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 800;
    letter-spacing: 1px;
    color: #006D77;
}
form {
    background-color: white;
    margin-top: 200px;
    position: absolute;
    margin-left: 69px;
    padding-left: 1015px;
    padding-bottom: 97px;
    padding-top: 54px;
    border-radius: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    color: #006D77;
    font-size: 14px;
    box-shadow: 2px 5px 8px #0000003d;
}
.ddown-client-mod {
    width: 22rem;
    position: absolute;
    margin-left: -921px;
    margin-top: 10px;
 }
 .ddown-select-client-mod {
   padding: 8px 15px 30.5px 2px;
    border-radius: 10px;
    background-color: #ffffff;
    border: 1px solid #006D77;
    font-weight: 700;
    cursor: pointer;
    margin-left: -46px;
   
 }
 .slct-client-mod{
    letter-spacing: 1px;
    margin-left: 11px;
    color: #006D77;
    float: left;
    /* position: absolute; */
    margin-top: 2px;
    
}
 
.ddown-icon-client-mod  {
    float: right;
    width: 25px;
}
.blc-link-client-mod {
    padding: 0 22px;
    list-style-type: none;
    background-color: rgb(255, 255, 255);
    /* margin-right: 0px; */
    margin-left: -46px;
    border-radius: 10px;
    margin-top: 7px;
    display: none;
    box-shadow: 2px 5px 8px #0000003d;
    border: 1px solid #006D77;
    z-index: 100;
    position: absolute;

 }

 .blc-link-client-mod li  {
   padding: 5px 0;
   text-align: left;
   padding-top: 13px;
    padding-bottom: 13px;
    
 }
 .blc-link-client-mod a {
   font-size: 16px;
   color: #006D77;
   margin-right: 185px;
   text-decoration: none;
   cursor: pointer;
   letter-spacing: 1px;
   font-weight: 700;
 }
 .blc-link-client-mod a:hover {
      color: #E29578;
 }
label {
    margin-left: -942px;
    float: left;
    margin-top: -25px;
    letter-spacing: 1px;
}

.date-mod input {
    margin-left: -470px;
    width: 39.1%;
    position: absolute;
    margin-top: 10px;
    border-radius: 10px;
    padding-top: 9px;
    padding-left: 11px;
    padding-right: 11px;
    padding-bottom: 9px;
    border: 1px solid #006D77;
    background-color: #F0F0F0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    color: #006D77;
    font-weight: 700;
    letter-spacing: 1px;
    justify-content: right;
    
    
    
}
.date-mod label {
    margin-left: -443px;
    float: left;
    margin-top: -25px;
    position: absolute;
    letter-spacing: 1px;
}
.title-PQ-mod h2 {
    margin-top: 124px;
    margin-left: -1812px;
    /* position: absolute; */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
    color: #006D77;
    margin-bottom: -135px;
    font-size: 14px;
}
.title-PQ-mod h3 {
        margin-top: 119px;
    margin-left: -318px;
    /* position: absolute; */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
    color: #006D77;
    font-size: 14px;
}
.ddown-mod {
    width: 32rem;
    /* position: absolute; */
    margin-left: -921px;
    margin-top: 153px;
 }
 .ddown-select-mod {
   padding: 8px 15px 30.5px 2px;
    border-radius: 10px;
    background-color: #ffffff;
    border: 1px solid #006D77;
    font-weight: 700;
    cursor: pointer;
    margin-left: -46px;
   
 }
 .slct-mod{
    letter-spacing: 1px;
    margin-left: 11px;
    color: #006D77;
    float: left;
    /* position: absolute; */
    margin-top: 2px;
    
}
 



 .qt1-mod input {
    margin-left: -351px;
    /* width: 98.15%; */
    /* position: absolute; */
    margin-top: -40px;
    border-radius: 10px;
    padding-top: 11px;
    padding-bottom: 10px;
    border: 1px solid #006D77;
    background-color: #F0F0F0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    color: #006D77;
    font-weight: 700;
    letter-spacing: 1px;
    padding-left: 11px;
    display: block;
    
    
}
.qt1-mod label {
    margin-left: -323px;
    float: left;
    margin-top: 119px;
    position: absolute;
    letter-spacing: 1px;
}

.btin-mod{
  margin-top: 136px;
    margin-left: -282px;
    padding: 13px 125px 13px 12px;
    background-color: #006D77;
    border: none;
    color: white;
    text-align: left;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    cursor: pointer;
    font-weight: 700;
    border-radius: 10px;
    position: inherit;
    letter-spacing: 1px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.img-vad-mod{
  width: 25px;
  height: 25px;
  padding-left: 10px; 
  position: absolute;
  display: inline-block;
  margin-top: -1.8%;
  margin-left: 79px;
}
.but-NV-mod{
  margin-top: 2px;
}
</style>