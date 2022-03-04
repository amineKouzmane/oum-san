<template>
  
    <h3>NOUVELLE COMMANDE</h3>
    <form>
        <div class="client">
        <label>CLIENT</label>
        <div  class="dropdown">
    <div class="dropdown-select">
      <span class="select">{{filter_client_value}}</span>
      <img @click="openModal()" class="dropdown-icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkRvd25fQXJyb3dfM18iIGQ9Im02NCA4OGMtMS4wMjMgMC0yLjA0Ny0uMzkxLTIuODI4LTEuMTcybC00MC00MGMtMS41NjMtMS41NjMtMS41NjMtNC4wOTQgMC01LjY1NnM0LjA5NC0xLjU2MyA1LjY1NiAwbDM3LjE3MiAzNy4xNzIgMzcuMTcyLTM3LjE3MmMxLjU2My0xLjU2MyA0LjA5NC0xLjU2MyA1LjY1NiAwczEuNTYzIDQuMDk0IDAgNS42NTZsLTQwIDQwYy0uNzgxLjc4MS0xLjgwNSAxLjE3Mi0yLjgyOCAxLjE3MnoiIGZpbGw9IiMwMDZkNzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
    </div>
      <ul  id="blocks" class="bloc-links">
        <li v-for="(value, name) in client_commande_noms" :key=name >
          <a @click="filterClient($event)">{{value}}</a>
        </li>
      </ul>
  </div>
        </div>
        <div class="date">
        <label>DATE</label>
        <input type="date" placeholder="22/02/2021" required v-model="date">
        </div>
        <h2>PRODUIT</h2>
        <div  class="ddown">
        <div class="ddown-select">
      <span class="slct">CUVETTE DE WC SUSPENDUE</span>
      <img @click="openModal1()" class="ddown-icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkRvd25fQXJyb3dfM18iIGQ9Im02NCA4OGMtMS4wMjMgMC0yLjA0Ny0uMzkxLTIuODI4LTEuMTcybC00MC00MGMtMS41NjMtMS41NjMtMS41NjMtNC4wOTQgMC01LjY1NnM0LjA5NC0xLjU2MyA1LjY1NiAwbDM3LjE3MiAzNy4xNzIgMzcuMTcyLTM3LjE3MmMxLjU2My0xLjU2MyA0LjA5NC0xLjU2MyA1LjY1NiAwczEuNTYzIDQuMDk0IDAgNS42NTZsLTQwIDQwYy0uNzgxLjc4MS0xLjgwNSAxLjE3Mi0yLjgyOCAxLjE3MnoiIGZpbGw9IiMwMDZkNzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
    </div>
      <ul id="blcks" class="blc-link">
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
  
  <div class="qt1">
        <label>QUANTITÉ</label>
        <input type="text" placeholder="2000" required v-model="quantite1">
        </div>
        <div  class="ddown2">
        <div class="ddown-select2">
      <span class="slct2">LAVABO MURAL</span>
      <img @click="openModal2()" class="ddown-icon2" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkRvd25fQXJyb3dfM18iIGQ9Im02NCA4OGMtMS4wMjMgMC0yLjA0Ny0uMzkxLTIuODI4LTEuMTcybC00MC00MGMtMS41NjMtMS41NjMtMS41NjMtNC4wOTQgMC01LjY1NnM0LjA5NC0xLjU2MyA1LjY1NiAwbDM3LjE3MiAzNy4xNzIgMzcuMTcyLTM3LjE3MmMxLjU2My0xLjU2MyA0LjA5NC0xLjU2MyA1LjY1NiAwczEuNTYzIDQuMDk0IDAgNS42NTZsLTQwIDQwYy0uNzgxLjc4MS0xLjgwNSAxLjE3Mi0yLjgyOCAxLjE3MnoiIGZpbGw9IiMwMDZkNzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
    </div>
      <ul id="blcks2" class="blc-link2">
        <li>
          <a @click="filterClient($event)">AMINE KOUZMANE</a>
        </li>
        <li>
          <a @click="filterClient($event)">HAMID EL ASRI</a>
        </li>
        <li>
          <a @click="filterClient($event)">FOUAD KOUZMANE</a>
        </li>
      </ul>
  </div>
  <div class="qt2">
        <input type="text" placeholder="2000" required v-model="quantite2">
        </div>
        <div  class="ddown3">
        <div class="ddown-select3">
      <span class="slct3">LAVE MAIN ETNA</span>
      <img @click="openModal3()" class="ddown-icon3" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkRvd25fQXJyb3dfM18iIGQ9Im02NCA4OGMtMS4wMjMgMC0yLjA0Ny0uMzkxLTIuODI4LTEuMTcybC00MC00MGMtMS41NjMtMS41NjMtMS41NjMtNC4wOTQgMC01LjY1NnM0LjA5NC0xLjU2MyA1LjY1NiAwbDM3LjE3MiAzNy4xNzIgMzcuMTcyLTM3LjE3MmMxLjU2My0xLjU2MyA0LjA5NC0xLjU2MyA1LjY1NiAwczEuNTYzIDQuMDk0IDAgNS42NTZsLTQwIDQwYy0uNzgxLjc4MS0xLjgwNSAxLjE3Mi0yLjgyOCAxLjE3MnoiIGZpbGw9IiMwMDZkNzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
    </div>
      <ul id="blcks3" class="blc-link3">
        <li>
          <a @click="filterClient($event)">AMINE KOUZMANE</a>
        </li>
        <li>
          <a @click="filterClient($event)">HAMID EL ASRI</a>
        </li>
        <li>
          <a @click="filterClient($event)">FOUAD KOUZMANE</a>
        </li>
      </ul>
  </div>
  <div class="qt3">
        <input type="text" placeholder="2000" required v-model="quantite3">
        </div>
    </form>
    <button class="btin" @click="goToVentes()"> VALIDER 
    <img class="img-vad" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xMiAwYy02LjYxNyAwLTEyIDUuMzgzLTEyIDEyczUuMzgzIDEyIDEyIDEyIDEyLTUuMzgzIDEyLTEyLTUuMzgzLTEyLTEyLTEyem02LjA4MiA5LjQ1Ny02LjUgNi41Yy0uMTk1LjE5NS0uNDUxLjI5My0uNzA3LjI5M3MtLjUxMi0uMDk4LS43MDctLjI5M2wtMy4yNS0zLjI1Yy0uMzkxLS4zOTEtLjM5MS0xLjAyMyAwLTEuNDE0czEuMDIzLS4zOTEgMS40MTQgMGwyLjU0MyAyLjU0MyA1Ljc5My01Ljc5M2MuMzkxLS4zOTEgMS4wMjMtLjM5MSAxLjQxNCAwcy4zOTEgMS4wMjMgMCAxLjQxNHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
  </button>
  
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
    }

    }
}
</script>

<style scoped>
h3 {
    margin-top: 119px;
    margin-left: 52px;
    position: absolute;
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
    padding-bottom: 390px;
    padding-top: 54px;
    border-radius: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    color: #006D77;
    font-size: 14px;
    box-shadow: 2px 5px 8px #0000003d;
} 

img{
  width: 25px;
  height: 25px;
  padding-left: 10px; 
  position: absolute;
  display: inline-block;
  margin-top: -0.2%;
}

.dropdown {
    width: 15rem;
    position: absolute;
    margin-left: 96px;
    margin-top: 110px;
 }
 .dropdown-select {
   padding: 8px 38px 30px 2px;
    border-radius: 10px;
    background-color: #ffffff;
    border: 1px solid #006D77;
    font-weight: 700;
    cursor: pointer;
    margin-left: -46px;
   
 }
 .select{
    letter-spacing: 1px;
    margin-left: -112px;
    color: #006D77;
    float: left;
    position: absolute;
}
 
.dropdown-icon  {
    margin-left: 117px;
    position: absolute;
}
.client input {
    margin-left: -967px;
    width: 40%;
    position: absolute;
    margin-top: 10px;
    border-radius: 10px;
    padding-top: 11px;
    padding-left: 11px;
    padding-bottom: 11px;
    border: 1px solid #006D77;
    background-color: #F0F0F0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    color: #006D77;
    font-weight: 700;
    letter-spacing: 1px;
    
    
}
.client label {
    margin-left: -942px;
    float: left;
    margin-top: -25px;
    position: absolute;
    letter-spacing: 1px;
}

.date input {
    margin-left: -470px;
    width: 26.66%;
    position: fixed;
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
.date label {
    margin-left: -443px;
    float: left;
    margin-top: -25px;
    position: absolute;
    letter-spacing: 1px;
}
h2 {
    margin-top: 119px;
    margin-left: -942px;
    position: absolute;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
    color: #006D77;
    font-size: 14px;
}
 .ddown {
    width: 33rem;
    position: absolute;
    margin-left: -921px;
    margin-top: 153px;
 }
 .ddown-select {
   padding: 8px 38px 30px 2px;
    border-radius: 10px;
    background-color: #ffffff;
    border: 1px solid #006D77;
    font-weight: 700;
    cursor: pointer;
    margin-left: -46px;
   
 }
 .slct{
    letter-spacing: 1px;
    margin-left: -256px;
    color: #006D77;
    float: left;
    position: absolute;
    margin-top: 2px;
    
}
 
.ddown-icon  {
    margin-left: 262px;
    position: absolute;
    width: 25px;
}
.blc-link {
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

 .blc-link li  {
   padding: 5px 0;
   text-align: left;
   padding-top: 13px;
    padding-bottom: 13px;
    
 }
 .blc-link a {
   font-size: 16px;
   color: #006D77;
   margin-right: 361px;
   text-decoration: none;
   cursor: pointer;
   letter-spacing: 1px;
   font-weight: 700;
 }
 .blc-link a:hover {
      color: #E29578;
 }

 .qt1 input {
    margin-left: -349px;
    width: 28.15%;
    position: absolute;
    margin-top: 153px;
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
    
    
}
.qt1 label {
    margin-left: -323px;
    float: left;
    margin-top: 119px;
    position: absolute;
    letter-spacing: 1px;
}
.ddown2 {
    width: 33rem;
    position: absolute;
    margin-left: -921px;
    margin-top: 229px;
 }
 .ddown-select2 {
   padding: 8px 38px 30px 2px;
    border-radius: 10px;
    background-color: #ffffff;
    border: 1px solid #006D77;
    font-weight: 700;
    cursor: pointer;
    margin-left: -46px;
   
 }
 .slct2{
    letter-spacing: 1px;
    margin-left: -256px;
    color: #006D77;
    float: left;
    position: absolute;
    margin-top: 2px;
}
 
.ddown-icon2  {
    margin-left: 262px;
    position: absolute;
    width: 25px;
}
.blc-link2 {
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
  z-index: 2;
  position: absolute;
  
 }

 .blc-link2 li  {
   padding: 5px 0;
   text-align: left;
   padding-top: 13px;
    padding-bottom: 13px;
 }
 .blc-link2 a {
   font-size: 16px;
   color: #006D77;
   margin-right: 361px;
   text-decoration: none;
   cursor: pointer;
   letter-spacing: 1px;
   font-weight: 700;
 }
 .blc-link2 a:hover {
      color: #E29578;
 }

 
 .qt2 input {
    margin-left: -349px;
    width: 28.15%;
    position: absolute;
    margin-top: 229px;
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
}
.ddown3 {
    width: 33rem;
    position: absolute;
    margin-left: -921px;
    margin-top: 303px;
 }
 .ddown-select3 {
   padding: 8px 38px 30px 2px;
    border-radius: 10px;
    background-color: #ffffff;
    border: 1px solid #006D77;
    font-weight: 700;
    cursor: pointer;
    margin-left: -46px;
   
 }
 .slct3{
    letter-spacing: 1px;
    margin-left: -256px;
    color: #006D77;
    float: left;
    position: absolute;
    margin-top: 2px;
}
 
.ddown-icon3  {
    margin-left: 262px;
    position: absolute;
    width: 25px;
}
.blc-link3 {
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
  
 }

 .blc-link3 li  {
   padding: 5px 0;
   text-align: left;
   padding-top: 13px;
    padding-bottom: 13px;
 }
 .blc-link3 a {
   font-size: 16px;
   color: #006D77;
   margin-right: 5px;
   text-decoration: none;
   cursor: pointer;
   letter-spacing: 1px;
   font-weight: 700;
 }
 .blc-link3 a:hover {
      color: #E29578;
 }

 .qt3 input {
    margin-left: -349px;
    width: 28.15%;
    position: absolute;
    margin-top: 303px;
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
}
.btin{
  margin-top: 720px;
  margin-left: 830px;
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
  letter-spacing: 1px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.img-vad{
  width: 25px;
  height: 25px;
  padding-left: 10px; 
  position: absolute;
  display: inline-block;
  margin-top: -0.2%;
  margin-left: 79px;
}
</style>