<template>
    
    <button class="btnn-prd-1" @click="openModalNew()"> NOUVEAU
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1NiAwYy0xNDEuMTY0MDYyIDAtMjU2IDExNC44MzU5MzgtMjU2IDI1NnMxMTQuODM1OTM4IDI1NiAyNTYgMjU2IDI1Ni0xMTQuODM1OTM4IDI1Ni0yNTYtMTE0LjgzNTkzOC0yNTYtMjU2LTI1NnptMTEyIDI3Ny4zMzIwMzFoLTkwLjY2Nzk2OXY5MC42Njc5NjljMCAxMS43NzczNDQtOS41NTQ2ODcgMjEuMzMyMDMxLTIxLjMzMjAzMSAyMS4zMzIwMzFzLTIxLjMzMjAzMS05LjU1NDY4Ny0yMS4zMzIwMzEtMjEuMzMyMDMxdi05MC42Njc5NjloLTkwLjY2Nzk2OWMtMTEuNzc3MzQ0IDAtMjEuMzMyMDMxLTkuNTU0Njg3LTIxLjMzMjAzMS0yMS4zMzIwMzFzOS41NTQ2ODctMjEuMzMyMDMxIDIxLjMzMjAzMS0yMS4zMzIwMzFoOTAuNjY3OTY5di05MC42Njc5NjljMC0xMS43NzczNDQgOS41NTQ2ODctMjEuMzMyMDMxIDIxLjMzMjAzMS0yMS4zMzIwMzFzMjEuMzMyMDMxIDkuNTU0Njg3IDIxLjMzMjAzMSAyMS4zMzIwMzF2OTAuNjY3OTY5aDkwLjY2Nzk2OWMxMS43NzczNDQgMCAyMS4zMzIwMzEgOS41NTQ2ODcgMjEuMzMyMDMxIDIxLjMzMjAzMXMtOS41NTQ2ODcgMjEuMzMyMDMxLTIxLjMzMjAzMSAyMS4zMzIwMzF6bTAgMCIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4=" />
  </button>
  <button class="btnn-prd-2" @click="goToSortie()"> SORTIE
    <img class="img-2" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1NiAwYy0xNDEuMTY0MDYyIDAtMjU2IDExNC44MzU5MzgtMjU2IDI1NnMxMTQuODM1OTM4IDI1NiAyNTYgMjU2IDI1Ni0xMTQuODM1OTM4IDI1Ni0yNTYtMTE0LjgzNTkzOC0yNTYtMjU2LTI1NnptMTEyIDI3Ny4zMzIwMzFoLTkwLjY2Nzk2OXY5MC42Njc5NjljMCAxMS43NzczNDQtOS41NTQ2ODcgMjEuMzMyMDMxLTIxLjMzMjAzMSAyMS4zMzIwMzFzLTIxLjMzMjAzMS05LjU1NDY4Ny0yMS4zMzIwMzEtMjEuMzMyMDMxdi05MC42Njc5NjloLTkwLjY2Nzk2OWMtMTEuNzc3MzQ0IDAtMjEuMzMyMDMxLTkuNTU0Njg3LTIxLjMzMjAzMS0yMS4zMzIwMzFzOS41NTQ2ODctMjEuMzMyMDMxIDIxLjMzMjAzMS0yMS4zMzIwMzFoOTAuNjY3OTY5di05MC42Njc5NjljMC0xMS43NzczNDQgOS41NTQ2ODctMjEuMzMyMDMxIDIxLjMzMjAzMS0yMS4zMzIwMzFzMjEuMzMyMDMxIDkuNTU0Njg3IDIxLjMzMjAzMSAyMS4zMzIwMzF2OTAuNjY3OTY5aDkwLjY2Nzk2OWMxMS43NzczNDQgMCAyMS4zMzIwMzEgOS41NTQ2ODcgMjEuMzMyMDMxIDIxLjMzMjAzMXMtOS41NTQ2ODcgMjEuMzMyMDMxLTIxLjMzMjAzMSAyMS4zMzIwMzF6bTAgMCIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4=" />
  </button>
  <button class="btnn-prd-3" @click="openModaEntree()"> ENTRÉE
    <img class="img-3" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1NiAwYy0xNDEuMTY0MDYyIDAtMjU2IDExNC44MzU5MzgtMjU2IDI1NnMxMTQuODM1OTM4IDI1NiAyNTYgMjU2IDI1Ni0xMTQuODM1OTM4IDI1Ni0yNTYtMTE0LjgzNTkzOC0yNTYtMjU2LTI1NnptMTEyIDI3Ny4zMzIwMzFoLTkwLjY2Nzk2OXY5MC42Njc5NjljMCAxMS43NzczNDQtOS41NTQ2ODcgMjEuMzMyMDMxLTIxLjMzMjAzMSAyMS4zMzIwMzFzLTIxLjMzMjAzMS05LjU1NDY4Ny0yMS4zMzIwMzEtMjEuMzMyMDMxdi05MC42Njc5NjloLTkwLjY2Nzk2OWMtMTEuNzc3MzQ0IDAtMjEuMzMyMDMxLTkuNTU0Njg3LTIxLjMzMjAzMS0yMS4zMzIwMzFzOS41NTQ2ODctMjEuMzMyMDMxIDIxLjMzMjAzMS0yMS4zMzIwMzFoOTAuNjY3OTY5di05MC42Njc5NjljMC0xMS43NzczNDQgOS41NTQ2ODctMjEuMzMyMDMxIDIxLjMzMjAzMS0yMS4zMzIwMzFzMjEuMzMyMDMxIDkuNTU0Njg3IDIxLjMzMjAzMSAyMS4zMzIwMzF2OTAuNjY3OTY5aDkwLjY2Nzk2OWMxMS43NzczNDQgMCAyMS4zMzIwMzEgOS41NTQ2ODcgMjEuMzMyMDMxIDIxLjMzMjAzMXMtOS41NTQ2ODcgMjEuMzMyMDMxLTIxLjMzMjAzMSAyMS4zMzIwMzF6bTAgMCIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4=" />
  </button>
  <div  class="dropdown-1">
      <ul id="blocks1" class="bloc-links-1">
        <li>
          <a @click="goToEntreeMP()">MATIÈRE PREMIÈRE</a>
        </li>
        <li>
          <a @click="goToEntreePF()">PRODUIT FINAL</a>
        </li>
      </ul>
  </div>
  <div  class="dropdown-2">
      <ul id="blocks2" class="bloc-links-2">
        <li>
          <a @click="PopupNMP()">MATIÈRE PREMIÈRE</a>
        </li>
        <li>
          <a @click="PopupNPF()">PRODUIT FINAL</a>
        </li>
      </ul>
  </div>
  <h3>MATIÈRES PREMIÈRES</h3>
  <div class="mp">
  <div class="box">
        <h1>Hello Guys im amine from fes</h1>
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
  

  </div>
  <h3>PRODUITS FINAUX</h3>
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
  </div>

  <div id="overlay-NMP" class="overlay-NMP">
        <div id="popup-NMP" class="popup-NMP">
            <h2> 
                NOUVELLE MATIÈRE PREMIÈRE
               <span @click="PopupNMPClose()" id="btnClose-NMP" class="btnClose-NMP">&times;</span>
            </h2>
            <div class="NMP">
                 <input type="text" placeholder="MATIERE PREMIERE" required v-model="date">
            </div>
            <div class="zone-NMP">
                 <input type="text" placeholder="ZONE" required v-model="client">
            </div>
            <div  class="ddown-NMP">
        <div class="ddown-select-NMP">
      <span class="slct-NMP">UNITÉ</span>
      <img @click="openModalSMpNew()" class="ddown-icon-NMP" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkRvd25fQXJyb3dfM18iIGQ9Im02NCA4OGMtMS4wMjMgMC0yLjA0Ny0uMzkxLTIuODI4LTEuMTcybC00MC00MGMtMS41NjMtMS41NjMtMS41NjMtNC4wOTQgMC01LjY1NnM0LjA5NC0xLjU2MyA1LjY1NiAwbDM3LjE3MiAzNy4xNzIgMzcuMTcyLTM3LjE3MmMxLjU2My0xLjU2MyA0LjA5NC0xLjU2MyA1LjY1NiAwczEuNTYzIDQuMDk0IDAgNS42NTZsLTQwIDQwYy0uNzgxLjc4MS0xLjgwNSAxLjE3Mi0yLjgyOCAxLjE3MnoiIGZpbGw9IiMwMDZkNzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
    </div>
      <ul id="blcks-NMP" class="blc-link-NMP">
        <li>
          <a @click="ListLettrage($event)">KG</a>
        </li>
        <li>
          <a @click="ListLettrage($event)">L</a>
        </li>
      </ul>
  </div>
  <button class="btn-NMP" @click="PopupNMPClose()"> VALIDER 
    <img class="img-vad-NMP" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xMiAwYy02LjYxNyAwLTEyIDUuMzgzLTEyIDEyczUuMzgzIDEyIDEyIDEyIDEyLTUuMzgzIDEyLTEyLTUuMzgzLTEyLTEyLTEyem02LjA4MiA5LjQ1Ny02LjUgNi41Yy0uMTk1LjE5NS0uNDUxLjI5My0uNzA3LjI5M3MtLjUxMi0uMDk4LS43MDctLjI5M2wtMy4yNS0zLjI1Yy0uMzkxLS4zOTEtLjM5MS0xLjAyMyAwLTEuNDE0czEuMDIzLS4zOTEgMS40MTQgMGwyLjU0MyAyLjU0MyA1Ljc5My01Ljc5M2MuMzkxLS4zOTEgMS4wMjMtLjM5MSAxLjQxNCAwcy4zOTEgMS4wMjMgMCAxLjQxNHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
  </button>
    
         </div>
     </div>
     <div id="overlay-NPF" class="overlay-NPF">
        <div id="popup-NPF" class="popup-NPF">
            <h2> 
                NOUVEAU PRODUIT FINAL
               <span @click="PopupNPFClose()" id="btnClose-NPF" class="btnClose-NPF">&times;</span>
            </h2>
            <div class="NPF">
                 <input type="text" placeholder="MATIERE PREMIERE" required v-model="date">
            </div>
            <div class="zone-NPF">
                 <input type="text" placeholder="ZONE" required v-model="client">
            </div>
            <div class="prix-NPF">
                 <input type="text" placeholder="PRIX UNITAIRE" required v-model="client">
            </div>
  <button class="btn-NPF" @click="PopupNPFClose()"> VALIDER 
    <img class="img-vad-NPF" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xMiAwYy02LjYxNyAwLTEyIDUuMzgzLTEyIDEyczUuMzgzIDEyIDEyIDEyIDEyLTUuMzgzIDEyLTEyLTUuMzgzLTEyLTEyLTEyem02LjA4MiA5LjQ1Ny02LjUgNi41Yy0uMTk1LjE5NS0uNDUxLjI5My0uNzA3LjI5M3MtLjUxMi0uMDk4LS43MDctLjI5M2wtMy4yNS0zLjI1Yy0uMzkxLS4zOTEtLjM5MS0xLjAyMyAwLTEuNDE0czEuMDIzLS4zOTEgMS40MTQgMGwyLjU0MyAyLjU0MyA1Ljc5My01Ljc5M2MuMzkxLS4zOTEgMS4wMjMtLjM5MSAxLjQxNCAwcy4zOTEgMS4wMjMgMCAxLjQxNHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
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
            coggle:false,
            moggle:false,
            noggle:false
        }
    },
    methods: {
          goToSortie(){
   this.$router.push('/SortieMatierePremiere');
          },
          goToEntreeMP(){
   this.$router.push('/EntreeMatierePremiere');
          },
          goToEntreePF(){
   this.$router.push('/EntreeProduitFinal');
          },
          openModaEntree(){
       
       this.toggle = !this.toggle
       console.log(this.toggle)
       var bloc = document.getElementById('blocks1')
       
       if (this.toggle === true) {
           bloc.style.display  = 'block'
           console.log("this is if")
           
       }
       else {
           bloc.style.display  = 'none'
           console.log("this is else")
           
       }
   },
          openModalNew(){
       
       this.moggle = !this.moggle
       console.log(this.moggle)
       var bloc = document.getElementById('blocks2')
       
       if (this.moggle === true) {
           bloc.style.display  = 'block'
           console.log("this is if")
           
       }
       else {
           bloc.style.display  = 'none'
           console.log("this is else")
           
       }
   },
   PopupNMP(){
       
       this.boggle = !this.boggle
       console.log(this.boggle)
       var over = document.getElementById('overlay-NMP')
       
       
           over.style.display  = 'block'
           console.log("this is if")
           
       
   },
   PopupNPF(){
       
       this.boggle = !this.boggle
       console.log(this.boggle)
       var over = document.getElementById('overlay-NPF')
       
       
           over.style.display  = 'block'
           console.log("this is if")
           
       
   },
        PopupNMPClose(){
       
       this.coggle = !this.coggle
       console.log(this.coggle)
       var cover = document.getElementById('overlay-NMP')
       
       
           cover.style.display  = 'none'
           console.log("this is if")
           
       

   },
   openModalSMpNew(){
     this.toggle = !this.toggle
       console.log(this.toggle)
       var bloc = document.getElementById('blcks-NMP')
       
       if (this.toggle === true) {
           bloc.style.display  = 'block'
           console.log("this is if")
           
       }
       else {
           bloc.style.display  = 'none'
           console.log("this is else")
           
       }
   },
   PopupNPFClose(){
       
       this.coggle = !this.coggle
       console.log(this.coggle)
       var cover = document.getElementById('overlay-NPF')
       
       
           cover.style.display  = 'none'
           console.log("this is if")
           
       

   }

    }

}
</script>

<style scoped>
h3 {
    
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 800;
    letter-spacing: 1px;
    color: #006D77;
    float: left;
    margin-left: 50px;
    margin-top: 45px;
}
h2 {
    margin-top: 499px;
    margin-left: -800px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 800;
    letter-spacing: 1px;
    font-size: 18px;
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
   margin-bottom: 15px;
    float: left;
    
}
 .dropdown-1 {
    width: 8.8rem;
    position: absolute;
    margin-left: 475px;
    margin-top: -2px;
    z-index: 1;
 }
.bloc-links-1 {
  padding: 0 22px;
  list-style-type: none;
  background-color: #006D77;
  /* margin-right: 0px; */
  margin-left: -46px;
  border-radius: 10px;
  margin-top: 7px;
  display: none;
  box-shadow: 2px 5px 8px #0000003d;
  border: 1px solid #006D77;
 }

 .bloc-links-1 li  {
   padding: 5px 0;
   text-align: left;
   padding-top: 13px;
    padding-bottom: 13px;
 }
 .bloc-links-1 a {
   font-size: 16px;
   color: #ffffff;
   margin-right: 7px;
   text-decoration: none;
   cursor: pointer;
   letter-spacing: 1px;
   font-weight: 700;
 }
 .bloc-links-1 a:hover {
      color: #E29578;
      
 }
 .dropdown-2 {
    width: 8.8rem;
    position: absolute;
    margin-left: 953px;
    margin-top: -2px;
    z-index: 1;
 }
.bloc-links-2 {
  padding: 0 22px;
  list-style-type: none;
  background-color: #006D77;
  /* margin-right: 0px; */
  margin-left: -46px;
  border-radius: 10px;
  margin-top: 7px;
  display: none;
  box-shadow: 2px 5px 8px #0000003d;
  border: 1px solid #006D77;
 }

 .bloc-links-2 li  {
   padding: 5px 0;
   text-align: left;
   padding-top: 13px;
    padding-bottom: 13px;
 }
 .bloc-links-2 a {
   font-size: 16px;
   color: #ffffff;
   margin-right: 7px;
   text-decoration: none;
   cursor: pointer;
   letter-spacing: 1px;
   font-weight: 700;
 }
 .bloc-links-2 a:hover {
      color: #E29578;
      
 }

 .overlay-NMP{
    position: fixed;
    left: 0px;
    top: 0px;
    background-color: rgba( 0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: none;
    z-index: 1000;
}
.popup-NMP h2{
    font-size: 20px;
    margin-top: -300px;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    color: #006D77;
    letter-spacing: 1px;
    margin-left: 7px;
    
}
.popup-NMP{
    margin-top: 202px;
    margin-left: 399px;
    width: 50%;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
    padding-top: 350px;
    padding-bottom: 38px;
    padding-right: -20px;
    
}
.btnClose-NMP{
    float: right;
    cursor: pointer;
    margin-top: -60px;
    margin-right: 10px;
    font-size: 50px;
    color: #006D77;
    
}
.NMP input {
    margin-left: -284px;
    width: 25.66%;
    position: fixed;
    margin-top: 71px;
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
    box-shadow: 2px 5px 8px #0000003d;
}

.ddown-NMP {
    width: 8.5%;
    position: absolute;
    margin-left: 120px;
    margin-top: 189px;
 }
 .ddown-select-NMP {
   padding: 8px 38px 30px 2px;
    border-radius: 10px;
    background-color: #ffffff;
    border: 1px solid #006D77;
    font-weight: 700;
    cursor: pointer;
    margin-left: -23px;
    margin-left: -44px;
    /* width: 214px; */
    box-shadow: 2px 5px 8px #0000003d;
   
 }
 .slct-NMP{
    letter-spacing: 1px;
    margin-left: -54px;
    color: #006D77;
    float: left;
    position: absolute;
    margin-top: 2px;
}
 
.ddown-icon-ENMP  {
    width: 25px;
    height: 25px;
    padding-left: 10px;
    position: absolute;
    display: inline-block;
    margin-top: -0.2%;
    margin-left: 33px;
}
.blc-link-NMP {
  padding: 0 22px;
    list-style-type: none;
    background-color: rgb(255, 255, 255);
    /* margin-right: 0px; */
    margin-left: -44px;
    border-radius: 10px;
    margin-top: 7px;
    display: none;
    box-shadow: 2px 5px 8px #0000003d;
    border: 1px solid #006D77;
    z-index: 2;
    position: absolute;
  
 }

 .blc-link-NMP li  {
   padding: 5px 0;
   text-align: left;
   padding-top: 13px;
    padding-bottom: 13px;
 }
 .blc-link-NMP a {
   font-size: 16px;
    color: #006D77;
    margin-right: 95px;
    text-decoration: none;
    cursor: pointer;
    letter-spacing: 1px;
    font-weight: 700;
 }
 .blc-link-NMP a:hover {
      color: #E29578;
 }

 .btn-NMP{
  margin-top: 271px;
  margin-left: 430px;
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
.img-vad-NMP{
  width: 25px;
  height: 25px;
  padding-left: 10px; 
  position: absolute;
  display: inline-block;
  margin-top: -0.2%;
  margin-left: 79px;
}
.zone-NMP input {
    margin-left: -284px;
    width: 10.5%;
    position: absolute;
    margin-top: 131px;
    border-radius: 10px;
    padding-top: 9px;
    padding-left: 11px;
    padding-bottom: 9px;
    border: 1px solid #006D77;
    background-color: #F0F0F0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    color: #006D77;
    font-weight: 700;
    letter-spacing: 1px;
    box-shadow: 2px 5px 8px #0000003d;
    
}

 .overlay-NPF{
    position: fixed;
    left: 0px;
    top: 0px;
    background-color: rgba( 0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: none;
    z-index: 1000;
}
.popup-NPF h2{
    font-size: 20px;
    margin-top: -300px;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    color: #006D77;
    letter-spacing: 1px;
    margin-left: 7px;
    
}
.popup-NPF{
    margin-top: 202px;
    margin-left: 399px;
    width: 50%;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
    padding-top: 350px;
    padding-bottom: 38px;
    padding-right: -20px;
    
}
.btnClose-NPF{
    float: right;
    cursor: pointer;
    margin-top: -60px;
    margin-right: 10px;
    font-size: 50px;
    color: #006D77;
    
}
.NPF input {
    margin-left: -284px;
    width: 25.66%;
    position: fixed;
    margin-top: 71px;
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
    box-shadow: 2px 5px 8px #0000003d;
}
.zone-NPF input {
    margin-left: -284px;
    width: 10.5%;
    position: absolute;
    margin-top: 131px;
    border-radius: 10px;
    padding-top: 9px;
    padding-left: 11px;
    padding-bottom: 9px;
    border: 1px solid #006D77;
    background-color: #F0F0F0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    color: #006D77;
    font-weight: 700;
    letter-spacing: 1px;
    box-shadow: 2px 5px 8px #0000003d;
    
}
.prix-NPF input {
    margin-left: -284px;
    width: 10.5%;
    position: absolute;
    margin-top: 191px;
    border-radius: 10px;
    padding-top: 9px;
    padding-left: 11px;
    padding-bottom: 9px;
    border: 1px solid #006D77;
    background-color: #F0F0F0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    color: #006D77;
    font-weight: 700;
    letter-spacing: 1px;
    box-shadow: 2px 5px 8px #0000003d;
    
}
 .btn-NPF{
  margin-top: 271px;
  margin-left: 430px;
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
.img-vad-NPF{
  width: 25px;
  height: 25px;
  padding-left: 10px; 
  position: absolute;
  display: inline-block;
  margin-top: -0.2%;
  margin-left: 79px;
}
</style>