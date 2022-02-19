<template>
    <h3>MATIERES PREMIERS</h3>
    
    <button class="btnn-prd-1" @click="goToNewBatch()"> NOUVEAU
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1NiAwYy0xNDEuMTY0MDYyIDAtMjU2IDExNC44MzU5MzgtMjU2IDI1NnMxMTQuODM1OTM4IDI1NiAyNTYgMjU2IDI1Ni0xMTQuODM1OTM4IDI1Ni0yNTYtMTE0LjgzNTkzOC0yNTYtMjU2LTI1NnptMTEyIDI3Ny4zMzIwMzFoLTkwLjY2Nzk2OXY5MC42Njc5NjljMCAxMS43NzczNDQtOS41NTQ2ODcgMjEuMzMyMDMxLTIxLjMzMjAzMSAyMS4zMzIwMzFzLTIxLjMzMjAzMS05LjU1NDY4Ny0yMS4zMzIwMzEtMjEuMzMyMDMxdi05MC42Njc5NjloLTkwLjY2Nzk2OWMtMTEuNzc3MzQ0IDAtMjEuMzMyMDMxLTkuNTU0Njg3LTIxLjMzMjAzMS0yMS4zMzIwMzFzOS41NTQ2ODctMjEuMzMyMDMxIDIxLjMzMjAzMS0yMS4zMzIwMzFoOTAuNjY3OTY5di05MC42Njc5NjljMC0xMS43NzczNDQgOS41NTQ2ODctMjEuMzMyMDMxIDIxLjMzMjAzMS0yMS4zMzIwMzFzMjEuMzMyMDMxIDkuNTU0Njg3IDIxLjMzMjAzMSAyMS4zMzIwMzF2OTAuNjY3OTY5aDkwLjY2Nzk2OWMxMS43NzczNDQgMCAyMS4zMzIwMzEgOS41NTQ2ODcgMjEuMzMyMDMxIDIxLjMzMjAzMXMtOS41NTQ2ODcgMjEuMzMyMDMxLTIxLjMzMjAzMSAyMS4zMzIwMzF6bTAgMCIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4=" />
  </button>
  <button class="btnn-prd-2" @click="goToNewBatch()"> SORTIE
    <img class="img-2" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1NiAwYy0xNDEuMTY0MDYyIDAtMjU2IDExNC44MzU5MzgtMjU2IDI1NnMxMTQuODM1OTM4IDI1NiAyNTYgMjU2IDI1Ni0xMTQuODM1OTM4IDI1Ni0yNTYtMTE0LjgzNTkzOC0yNTYtMjU2LTI1NnptMTEyIDI3Ny4zMzIwMzFoLTkwLjY2Nzk2OXY5MC42Njc5NjljMCAxMS43NzczNDQtOS41NTQ2ODcgMjEuMzMyMDMxLTIxLjMzMjAzMSAyMS4zMzIwMzFzLTIxLjMzMjAzMS05LjU1NDY4Ny0yMS4zMzIwMzEtMjEuMzMyMDMxdi05MC42Njc5NjloLTkwLjY2Nzk2OWMtMTEuNzc3MzQ0IDAtMjEuMzMyMDMxLTkuNTU0Njg3LTIxLjMzMjAzMS0yMS4zMzIwMzFzOS41NTQ2ODctMjEuMzMyMDMxIDIxLjMzMjAzMS0yMS4zMzIwMzFoOTAuNjY3OTY5di05MC42Njc5NjljMC0xMS43NzczNDQgOS41NTQ2ODctMjEuMzMyMDMxIDIxLjMzMjAzMS0yMS4zMzIwMzFzMjEuMzMyMDMxIDkuNTU0Njg3IDIxLjMzMjAzMSAyMS4zMzIwMzF2OTAuNjY3OTY5aDkwLjY2Nzk2OWMxMS43NzczNDQgMCAyMS4zMzIwMzEgOS41NTQ2ODcgMjEuMzMyMDMxIDIxLjMzMjAzMXMtOS41NTQ2ODcgMjEuMzMyMDMxLTIxLjMzMjAzMSAyMS4zMzIwMzF6bTAgMCIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4=" />
  </button>
  <button class="btnn-prd-3" @click="PopupLettrage()"> ENTRÉE
    <img class="img-3" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1NiAwYy0xNDEuMTY0MDYyIDAtMjU2IDExNC44MzU5MzgtMjU2IDI1NnMxMTQuODM1OTM4IDI1NiAyNTYgMjU2IDI1Ni0xMTQuODM1OTM4IDI1Ni0yNTYtMTE0LjgzNTkzOC0yNTYtMjU2LTI1NnptMTEyIDI3Ny4zMzIwMzFoLTkwLjY2Nzk2OXY5MC42Njc5NjljMCAxMS43NzczNDQtOS41NTQ2ODcgMjEuMzMyMDMxLTIxLjMzMjAzMSAyMS4zMzIwMzFzLTIxLjMzMjAzMS05LjU1NDY4Ny0yMS4zMzIwMzEtMjEuMzMyMDMxdi05MC42Njc5NjloLTkwLjY2Nzk2OWMtMTEuNzc3MzQ0IDAtMjEuMzMyMDMxLTkuNTU0Njg3LTIxLjMzMjAzMS0yMS4zMzIwMzFzOS41NTQ2ODctMjEuMzMyMDMxIDIxLjMzMjAzMS0yMS4zMzIwMzFoOTAuNjY3OTY5di05MC42Njc5NjljMC0xMS43NzczNDQgOS41NTQ2ODctMjEuMzMyMDMxIDIxLjMzMjAzMS0yMS4zMzIwMzFzMjEuMzMyMDMxIDkuNTU0Njg3IDIxLjMzMjAzMSAyMS4zMzIwMzF2OTAuNjY3OTY5aDkwLjY2Nzk2OWMxMS43NzczNDQgMCAyMS4zMzIwMzEgOS41NTQ2ODcgMjEuMzMyMDMxIDIxLjMzMjAzMXMtOS41NTQ2ODcgMjEuMzMyMDMxLTIxLjMzMjAzMSAyMS4zMzIwMzF6bTAgMCIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4=" />
  </button>
  <div class="mp">
  <div class="box">
        <h1>MATIERE 1</h1>
        <h2>D1</h2>
        <h3>3,209</h3>
  </div>
  <div class="box">
        <h1>MATIERE 2</h1>
        <h2>B1</h2>
        <h3>2,400</h3>
  </div>
   <div class="box">
        <h1>MATIERE 3</h1>
        <h2>B1</h2>
        <h3>2,400</h3>
  </div>
   <div class="box">
        <h1>MATIERE 4</h1>
        <h2>B1</h2>
        <h3>2,400</h3>
  </div>
  <div class="box">
        <h1>MATIERE 5</h1>
        <h2>B1</h2>
        <h3>2,400</h3>
  </div>
  <div class="box">
        <h1>MATIERE 6</h1>
        <h2>B1</h2>
        <h3>2,400</h3>
  </div>
  <div class="box">
        <h1>MATIERE 7</h1>
        <h2>B1</h2>
        <h3>2,400</h3>
  </div>
  <div class="box">
        <h1>MATIERE 8</h1>
        <h2>B1</h2>
        <h3>2,400</h3>
  </div>
  <div class="box">
        <h1>MATIERE 9</h1>
        <h2>B1</h2>
        <h3>2,400</h3>
  </div>
  <div class="box">
        <h1>MATIERE 10</h1>
        <h2>B1</h2>
        <h3>2,400</h3>
  </div>
  <div class="box">
        <h1>MATIERE 11</h1>
        <h2>B1</h2>
        <h3>2,400</h3>
  </div>
  </div>
  <h2>PRODUITS FINAUX</h2>
    <div class="mp">
  <div class="box">
        <h1>PRODUIT 1</h1>
        <h2>D1</h2>
        <h3>3,209</h3>
  </div>
  <div class="box">
        <h1>PRODUIT 2</h1>
        <h2>B1</h2>
        <h3>2,400</h3>
  </div>
   <div class="box">
        <h1>PRODUIT 3</h1>
        <h2>B1</h2>
        <h3>2,400</h3>
  </div>
   <div class="box">
        <h1>PRODUIT 4</h1>
        <h2>B1</h2>
        <h3>2,400</h3>
  </div>
  <div class="box">
        <h1>PRODUIT 5</h1>
        <h2>B1</h2>
        <h3>2,400</h3>
  </div>
  <div class="box">
        <h1>PRODUIT 6</h1>
        <h2>B1</h2>
        <h3>2,400</h3>
  </div>
  <div class="box">
        <h1>PRODUIT 7</h1>
        <h2>B1</h2>
        <h3>2,400</h3>
  </div>
  <div class="box">
        <h1>PRODUIT 8</h1>
        <h2>B1</h2>
        <h3>2,400</h3>
  </div>
  <div class="box">
        <h1>PRODUIT 9</h1>
        <h2>B1</h2>
        <h3>2,400</h3>
  </div>
  <div class="box">
        <h1>PRODUIT 10</h1>
        <h2>B1</h2>
        <h3>2,400</h3>
  </div>
  <div class="box">
        <h1>PRODUIT 11</h1>
        <h2>B1</h2>
        <h3>2,400</h3>
  </div>
  </div>
  <div id="overlay" class="overlay">
        <div id="popup" class="popup">
            <h2> 
                NOUVEAU DANS LE STOCK
               <span @click="PopupLettrageClose()" id="btnClose" class="btnClose">&times;</span>
            </h2>
  <button class="btn-mp" @click="PopupMatPrem()"> 
        MATIERE PREMIERE 
  </button>
  <button class="btn-pf" @click="PopupLettrage()"> 
        PRODUIT FINAL 
  </button>
    
         </div>
     </div>
     <div id="overlay2" class="overlay">
        <div id="popup2" class="popup">
            <h2> 
                NOUVEAU MATIERE PREMIERE
               <span @click="PopupMatPremClose()" id="btnClose" class="btnClose">&times;</span>
            </h2>
  <button class="btn-mp" @click="PopupLettrage()"> 
        MATIERE PREMIERE 
  </button>
  <button class="btn-pf" @click="PopupLettrage()"> 
        PRODUIT FINAL 
  </button>
    
         </div>
     </div>
</template>

<script>
export default {
    name: 'Stock',
    data(){
        return  {
            toggle: false,
            boggle: false,
            coggle: false
        }
    },
    methods: {
          PopupLettrage(){
       
       this.boggle = !this.boggle
       console.log(this.boggle)
       var over = document.getElementById('overlay')
       
       
           over.style.display  = 'block'
           console.log("this is if")
           
       
   },
        PopupLettrageClose(){
       
       this.coggle = !this.coggle
       console.log(this.coggle)
       var cover = document.getElementById('overlay')
       
       
           cover.style.display  = 'none'
           console.log("this is if")
           
       

   },
        PopupMatPremClose(){
       
       this.toggle = !this.toggle
       console.log(this.toggle)
       var mover = document.getElementById('overlay2')
       
       
           mover.style.display  = 'none'
           console.log("this is if")
           
       

   },
        PopupMatPrem(){
       
       this.boggle = !this.boggle
       console.log(this.boggle)
       var dover = document.getElementById('overlay2')
       
       
           dover.style.display  = 'block'
           console.log("this is if")
           
       
   }
    }

}
</script>

<style scoped>
h3 {
    margin-top: 119px;
    margin-left: 52px;
    
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 800;
    letter-spacing: 1px;
    color: #006D77;
}
h2 {
    margin-top: 119px;
    margin-left: 52px;
    
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 800;
    letter-spacing: 1px;
    color: #006D77;
}
.btnn-prd-1{
  margin-top: 110px;
  margin-left: 865px;
  padding: 13px 97px 13px 12px;
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
.btnn-prd-2{
  margin-top: 110px;
  margin-left: -431px;
  padding: 13px 124px 13px 12px;
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
  position: absolute;
}
.btnn-prd-3{
  margin-top: 110px;
  margin-left: -665px;
  padding: 13px 114px 13px 12px;
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
  position: absolute;
}
img{
  width: 25px;
  height: 25px;
  padding-left: 10px; 
  position: absolute;
  display: inline-block;
  margin-top: -0.2%;
  margin-left: 50px;
}
.img-2{
  width: 25px;
  height: 25px;
  padding-left: 10px; 
  position: absolute;
  display: inline-block;
  margin-top: -1.6%;
  margin-left: 77px;
}
.img-3{
  width: 25px;
  height: 25px;
  padding-left: 10px; 
  position: absolute;
  display: inline-block;
  margin-top: -1.6%;
  margin-left: 67px;
}
.box {
    background-color: #ffffff;
    padding-left: 222px;
    padding-top: 126px;
    margin-left: 52px;
    border-radius: 10px;
    float: left;
    margin-top: 28px;
    box-shadow: 2px 5px 8px #0000003d;
    display: block;
}
.box h1 {
    margin-top: -103px;
    margin-left: -191px;
    position: absolute;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    letter-spacing: 1px;
    color: #3D3C3C;
    font-size: 18px;
}
.box h2 {
    margin-top: -42px;
    margin-left: -191px;
    position: absolute;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    letter-spacing: 1px;
    color: #3D3C3C;
    font-size: 18px;
}
.box h3 {
    margin-top: -42px;
    margin-left: -82px;
    position: absolute;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 800;
    letter-spacing: 1px;
    color: #006D77;
    font-size: 18px;
}

.mp {
    white-space: nowrap;
    float: left;
    position: fixed;
    display: contents;
    
}
.overlay{
    position: fixed;
    left: 0px;
    top: 0px;
    background-color: rgba( 0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: none;
    z-index: 1000;
}
.popup h2{
    font-size: 20px;
    margin-left: 3px;
    margin-top: -300px;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    color: #006D77;
    letter-spacing: 1px;
    
}
.popup{
    margin-top: 202px;
    margin-left: 399px;
    width: 50%;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
    padding-top: 350px;
    padding-bottom: 80px;
    padding-right: -20px;
    
}
.btnClose{
    float: right;
    cursor: pointer;
    margin-top: -60px;
    margin-right: 10px;
    font-size: 50px;
    color: #006D77;
    
}
.btn-mp {
    margin-top: 74px;
    margin-left: -268px;
    padding: 51px 23px 51px 27px;
    background-color: #006D77;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    cursor: pointer;
    position: absolute;
    font-weight: 700;
    border-radius: 10px;
    letter-spacing: 1px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.btn-pf {
    margin-top: 74px;
    margin-left: 49px;
    padding: 51px 35px 51px 40px;
    background-color: #006D77;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    cursor: pointer;
    font-weight: 700;
    position: absolute;
    border-radius: 10px;
    letter-spacing: 1px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.btn-mp:hover {
      background-color: #006D77;
      color: #E29578;
      box-shadow: 2px 5px 8px #0000003d;
}
.btn-pf:hover {
      background-color: #006D77;
      color: #E29578;
      box-shadow: 2px 5px 8px #0000003d;
}
</style>