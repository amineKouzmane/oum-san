<template v-cloak>
  <div class="threee-ENMP">
  <button class="btnn-ENMP" @click="PopupEntree()"> NOUVEAU ENTRÉE
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1NiAwYy0xNDEuMTY0MDYyIDAtMjU2IDExNC44MzU5MzgtMjU2IDI1NnMxMTQuODM1OTM4IDI1NiAyNTYgMjU2IDI1Ni0xMTQuODM1OTM4IDI1Ni0yNTYtMTE0LjgzNTkzOC0yNTYtMjU2LTI1NnptMTEyIDI3Ny4zMzIwMzFoLTkwLjY2Nzk2OXY5MC42Njc5NjljMCAxMS43NzczNDQtOS41NTQ2ODcgMjEuMzMyMDMxLTIxLjMzMjAzMSAyMS4zMzIwMzFzLTIxLjMzMjAzMS05LjU1NDY4Ny0yMS4zMzIwMzEtMjEuMzMyMDMxdi05MC42Njc5NjloLTkwLjY2Nzk2OWMtMTEuNzc3MzQ0IDAtMjEuMzMyMDMxLTkuNTU0Njg3LTIxLjMzMjAzMS0yMS4zMzIwMzFzOS41NTQ2ODctMjEuMzMyMDMxIDIxLjMzMjAzMS0yMS4zMzIwMzFoOTAuNjY3OTY5di05MC42Njc5NjljMC0xMS43NzczNDQgOS41NTQ2ODctMjEuMzMyMDMxIDIxLjMzMjAzMS0yMS4zMzIwMzFzMjEuMzMyMDMxIDkuNTU0Njg3IDIxLjMzMjAzMSAyMS4zMzIwMzF2OTAuNjY3OTY5aDkwLjY2Nzk2OWMxMS43NzczNDQgMCAyMS4zMzIwMzEgOS41NTQ2ODcgMjEuMzMyMDMxIDIxLjMzMjAzMXMtOS41NTQ2ODcgMjEuMzMyMDMxLTIxLjMzMjAzMSAyMS4zMzIwMzF6bTAgMCIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4=" />
  </button>
  </div>
  <div class="cmd-ENMP">
      <table width="100%">
          <thead>
              <tr>
                  <td>MATIÈRE PREMIÈRE</td>
                  <td>DATE</td>
                  <td>ZONE</td>
                  <td>QUANTITÉ</td>
              </tr>
          </thead>
          <tbody>
              <tr style="border-bottom: 1px solid #8d939531">
                  <td style="color: #E29578">MATIERE 1</td>
                  <td>22/12/2021</td>
                  <td>A2</td>
                  <td>100</td>
             <td> <img @click="openList()" class="threee-dot-ENMP" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxNS41NTUgNTE1LjU1NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoNi4xMjMyMzM5OTU3MzY3NjZlLTE3LC0xLDEsNi4xMjMyMzM5OTU3MzY3NjZlLTE3LDAuMDAwNTA1NDQ3Mzg3Njk1MzEyNSw1MTUuNTU0NTIxNTYwNjY5KSI+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNDk2LjY3OSAyMTIuMjA4YzI1LjE2NyAyNS4xNjcgMjUuMTY3IDY1Ljk3MSAwIDkxLjEzOHMtNjUuOTcxIDI1LjE2Ny05MS4xMzggMC0yNS4xNjctNjUuOTcxIDAtOTEuMTM4IDY1Ljk3MS0yNS4xNjcgOTEuMTM4IDAiIGZpbGw9IiMwMDZkNzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0zMDMuMzQ3IDIxMi4yMDhjMjUuMTY3IDI1LjE2NyAyNS4xNjcgNjUuOTcxIDAgOTEuMTM4cy02NS45NzEgMjUuMTY3LTkxLjEzOCAwLTI1LjE2Ny02NS45NzEgMC05MS4xMzggNjUuOTcxLTI1LjE2NyA5MS4xMzggMCIgZmlsbD0iIzAwNmQ3NyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTExMC4wMTQgMjEyLjIwOGMyNS4xNjcgMjUuMTY3IDI1LjE2NyA2NS45NzEgMCA5MS4xMzhzLTY1Ljk3MSAyNS4xNjctOTEuMTM4IDAtMjUuMTY3LTY1Ljk3MSAwLTkxLjEzOCA2NS45NzEtMjUuMTY3IDkxLjEzOCAwIiBmaWxsPSIjMDA2ZDc3IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg==" />
            
                  <ul id="lis-ENMP" class="lis-links-ENMP">
                     <li>
                         <a @click="PopupEntreeMod()">Modifier</a>
                     </li>
                     <li>
                         <a @click="filterClient($event)">Supprimer</a>
                     </li>
                 </ul>
             </td>

              </tr>
              <tr style="border-bottom: 1px solid #8d939531">
                  <td style="color: #E29578">MATIERE 2</td>
                  <td>21/12/2021</td>
                  <td>A2</td>
                  <td>300</td>
              </tr>
              <tr style="border-bottom: 1px solid #8d939531">
                  <td style="color: #E29578">MATIERE 3</td>
                  <td>23/12/2021</td>
                  <td>A2</td>
                  <td>340</td>
              </tr>
              <tr style="border-bottom: 1px solid #8d939531">
                  <td style="color: #E29578">MATIERE 4</td>
                  <td>25/12/2021</td>
                  <td>A2</td>
                  <td>150</td>
              </tr>
              <tr style="border-bottom: 1px solid #8d939531">
                  <td style="color: #E29578">MATIERE 5</td>
                  <td>27/12/2021</td>
                  <td>A2</td>
                  <td>500</td>
              </tr>
              <tr>
                  <td style="color: #E29578">MATIERE 6</td>
                  <td>27/12/2021</td>
                  <td>A2</td>
                  <td>200</td>
              </tr>
          </tbody>
      </table>
  </div>
  <div id="overlay-ENMP" class="overlay-ENMP">
        <div id="popup-ENMP" class="popup-ENMP">
            <h2> 
                NOUVEAU ENTRÉE
               <span @click="PopupEntreeClose()" id="btnClose-ENMP" class="btnClose-ENMP">&times;</span>
            </h2>
            <div class="date-MP">
                 <input type="date" placeholder="22/02/2021" required v-model="date">
            </div>
            <div class="qte-MP">
                 <input type="text" placeholder="QUANTITÉ" required v-model="client">
            </div>
           
            <div  class="ddown-ENMP">
        <div class="ddown-select-ENMP">
      <span class="slct-ENMP">MATIÈRE PREMIÈRE</span>
      <img @click="openModalMpNew()" class="ddown-icon-ENMP" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkRvd25fQXJyb3dfM18iIGQ9Im02NCA4OGMtMS4wMjMgMC0yLjA0Ny0uMzkxLTIuODI4LTEuMTcybC00MC00MGMtMS41NjMtMS41NjMtMS41NjMtNC4wOTQgMC01LjY1NnM0LjA5NC0xLjU2MyA1LjY1NiAwbDM3LjE3MiAzNy4xNzIgMzcuMTcyLTM3LjE3MmMxLjU2My0xLjU2MyA0LjA5NC0xLjU2MyA1LjY1NiAwczEuNTYzIDQuMDk0IDAgNS42NTZsLTQwIDQwYy0uNzgxLjc4MS0xLjgwNSAxLjE3Mi0yLjgyOCAxLjE3MnoiIGZpbGw9IiMwMDZkNzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
    </div>
      <ul id="blcks-ENMP" class="blc-link-ENMP">
        <li>
          <a @click="ListLettrage($event)">MATIÈRE 1</a>
        </li>
        <li>
          <a @click="ListLettrage($event)">MATIÈRE 2</a>
        </li>
      </ul>
  </div>
  <button class="btn-ENMP" @click="PopupEntreeClose()"> VALIDER 
    <img class="img-vad-ENMP" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xMiAwYy02LjYxNyAwLTEyIDUuMzgzLTEyIDEyczUuMzgzIDEyIDEyIDEyIDEyLTUuMzgzIDEyLTEyLTUuMzgzLTEyLTEyLTEyem02LjA4MiA5LjQ1Ny02LjUgNi41Yy0uMTk1LjE5NS0uNDUxLjI5My0uNzA3LjI5M3MtLjUxMi0uMDk4LS43MDctLjI5M2wtMy4yNS0zLjI1Yy0uMzkxLS4zOTEtLjM5MS0xLjAyMyAwLTEuNDE0czEuMDIzLS4zOTEgMS40MTQgMGwyLjU0MyAyLjU0MyA1Ljc5My01Ljc5M2MuMzkxLS4zOTEgMS4wMjMtLjM5MSAxLjQxNCAwcy4zOTEgMS4wMjMgMCAxLjQxNHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
  </button>
    
         </div>
     </div>

     <div id="overlay-ENMP-mod" class="overlay-ENMP-mod">
        <div id="popup-ENMP-mod" class="popup-ENMP-mod">
            <h2> 
                MODIFIER ENTRÉE
               <span @click="PopupEntreeModClose()" id="btnClose-ENMP-mod" class="btnClose-ENMP-mod">&times;</span>
            </h2>
            <div class="date-MP-mod">
                 <input type="date" placeholder="22/02/2021" required v-model="date">
            </div>
            <div class="qte-MP-mod">
                 <input type="text" placeholder="QUANTITÉ" required v-model="client">
            </div>
            
            <div  class="ddown-ENMP-mod">
        <div class="ddown-select-ENMP-mod">
      <span class="slct-ENMP-mod">MATIÈRE PREMIÈRE</span>
      <img @click="openModalMP()" class="ddown-icon-ENMP-mod" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkRvd25fQXJyb3dfM18iIGQ9Im02NCA4OGMtMS4wMjMgMC0yLjA0Ny0uMzkxLTIuODI4LTEuMTcybC00MC00MGMtMS41NjMtMS41NjMtMS41NjMtNC4wOTQgMC01LjY1NnM0LjA5NC0xLjU2MyA1LjY1NiAwbDM3LjE3MiAzNy4xNzIgMzcuMTcyLTM3LjE3MmMxLjU2My0xLjU2MyA0LjA5NC0xLjU2MyA1LjY1NiAwczEuNTYzIDQuMDk0IDAgNS42NTZsLTQwIDQwYy0uNzgxLjc4MS0xLjgwNSAxLjE3Mi0yLjgyOCAxLjE3MnoiIGZpbGw9IiMwMDZkNzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
    </div>
      <ul id="blcks-ENMP-mod" class="blc-link-ENMP-mod">
        <li>
          <a @click="ListLettrage($event)">MATIÈRE 1</a>
        </li>
        <li>
          <a @click="ListLettrage($event)">MATIÈRE 2</a>
        </li>
      </ul>
  </div>
  <button class="btn-ENMP-mod" @click="PopupEntreeModClose()"> VALIDER 
    <img class="img-vad-ENMP-mod" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xMiAwYy02LjYxNyAwLTEyIDUuMzgzLTEyIDEyczUuMzgzIDEyIDEyIDEyIDEyLTUuMzgzIDEyLTEyLTUuMzgzLTEyLTEyLTEyem02LjA4MiA5LjQ1Ny02LjUgNi41Yy0uMTk1LjE5NS0uNDUxLjI5My0uNzA3LjI5M3MtLjUxMi0uMDk4LS43MDctLjI5M2wtMy4yNS0zLjI1Yy0uMzkxLS4zOTEtLjM5MS0xLjAyMyAwLTEuNDE0czEuMDIzLS4zOTEgMS40MTQgMGwyLjU0MyAyLjU0MyA1Ljc5My01Ljc5M2MuMzkxLS4zOTEgMS4wMjMtLjM5MSAxLjQxNCAwcy4zOTEgMS4wMjMgMCAxLjQxNHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
  </button>
    
         </div>
     </div>
</template>

<script>
export default {
    name: 'EntreeMatierePremiere',
    data(){
        return  {
            toggle: false,
            boggle: false,
            coggle:false
        }
    },

  methods:{
   openList(){
       
       this.boggle = !this.boggle
       console.log(this.boggle)
       var liss = document.getElementById('lis-ENMP')
       
       if (this.boggle === true) {
           liss.style.display  = 'block'
           console.log("this is if")
           
       }
       else {
           liss.style.display  = 'none'
           console.log("this is else")
           
       }
   },
   PopupEntree(){
       
       this.boggle = !this.boggle
       console.log(this.boggle)
       var over = document.getElementById('overlay-ENMP')
       
       
           over.style.display  = 'block'
           console.log("this is if")
           
       
   },
        PopupEntreeClose(){
       
       this.coggle = !this.coggle
       console.log(this.coggle)
       var cover = document.getElementById('overlay-ENMP')
       
       
           cover.style.display  = 'none'
           console.log("this is if")
           
       

   },
        openModalMpNew(){
       
       this.toggle = !this.toggle
       console.log(this.toggle)
       var bloc = document.getElementById('blcks-ENMP')
       
       if (this.toggle === true) {
           bloc.style.display  = 'block'
           console.log("this is if")
           
       }
       else {
           bloc.style.display  = 'none'
           console.log("this is else")
           
       }
   },
   PopupEntreeMod(){
       
       this.boggle = !this.boggle
       console.log(this.boggle)
       var over = document.getElementById('overlay-ENMP-mod')
       
       
           over.style.display  = 'block'
           console.log("this is if")
           
       
   },
        PopupEntreeModClose(){
       
       this.coggle = !this.coggle
       console.log(this.coggle)
       var cover = document.getElementById('overlay-ENMP-mod')
       
       
           cover.style.display  = 'none'
           console.log("this is if")
           
   },
   openModalMP(){
       
       this.toggle = !this.toggle
       console.log(this.toggle)
       var bloc = document.getElementById('blcks-ENMP-mod')
       
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
.btnn-ENMP{
  margin-top: 110px;
  margin-left: 841px;
  padding: 13px 48px 13px 12px;
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
img{
  width: 25px;
  height: 25px;
  padding-left: 10px; 
  position: absolute;
  display: inline-block;
  margin-top: -0.2%;
}
table{
  border-collapse: collapse;
}
.cmd-ENMP {
  background: #ffffff;
  margin-top: 30px;
  margin-left: 138px;
  margin-right: 124px;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 2px 5px 8px #0000003d;
}
/*td {
  border-bottom: 1px solid #8d939531;
}*/
thead td {
  color: #006D77;
  font-size: 16px;
  padding-top: 2px;
  padding-bottom: 40px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  letter-spacing: 1px;
  font-weight: 800;
}
tbody td {
  padding-top: 20px;
  padding-bottom: 30px;
  color: #3D3C3C;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  letter-spacing: 1px;
  font-weight: 800;
}

 [v-cloak] {
  display: none;
}
.threee-dot-ENMP  {
    margin-left: -29px;
    position: absolute;
    margin-top: -11px;
    cursor: pointer;
    width: 20px;
    height: 20px;
}
.lis-links-ENMP {
  padding: 0 22px;
    list-style-type: none;
    background-color: #006D77;
    /* margin-right: 0px; */
    margin-left: -136px;
    border-radius: 10px;
    margin-top: 15px;
    display: none;
    box-shadow: 2px 5px 8px #0000003d;
    border: 1px solid #006D77;
    /* z-index: -1; */
    position: absolute;
 }

 .lis-links-ENMP li  {
   padding: 5px 0;
   text-align: left;
   padding-top: 13px;
    padding-bottom: 13px;
 }
 .lis-links-ENMP a {
   font-size: 14px;
   color: #ffffff;
   margin-right: 5px;
   text-decoration: none;
   cursor: pointer;
   letter-spacing: 1px;
   font-weight: 700;
 }
  .lis-links-ENMP a:hover {
      color: #E29578;
 } 
 .overlay-ENMP{
    position: fixed;
    left: 0px;
    top: 0px;
    background-color: rgba( 0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: none;
    z-index: 1000;
}
.popup-ENMP h2{
    font-size: 20px;
    margin-top: -300px;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    color: #006D77;
    letter-spacing: 1px;
    
}
.popup-ENMP{
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
.btnClose-ENMP{
    float: right;
    cursor: pointer;
    margin-top: -60px;
    margin-right: 10px;
    font-size: 50px;
    color: #006D77;
    
}
.date-MP input {
    margin-left: -284px;
    width: 15.66%;
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
.qte-MP input {
    margin-left: 48px;
    width: 15%;
    position: absolute;
    margin-top: 71px;
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
    box-shadow: 2px 5px 8px #0000003d;
    
}

.ddown-ENMP {
    width: 14.5%;
    position: absolute;
    margin-left: 120px;
    margin-top: 189px;
 }
 .ddown-select-ENMP {
   padding: 8px 38px 30px 2px;
    border-radius: 10px;
    background-color: #ffffff;
    border: 1px solid #006D77;
    font-weight: 700;
    cursor: pointer;
    margin-left: -46px;
    box-shadow: 2px 5px 8px #0000003d;
   
 }
 .slct-ENMP{
    letter-spacing: 1px;
    margin-left: -98px;
    color: #006D77;
    float: left;
    position: absolute;
    margin-top: 2px;
}
 
.ddown-icon-ENMP  {
    margin-left: 102px;
    position: absolute;
    width: 25px;
}
.blc-link-ENMP {
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

 .blc-link-ENMP li  {
   padding: 5px 0;
   text-align: left;
   padding-top: 13px;
    padding-bottom: 13px;
 }
 .blc-link-ENMP a {
   font-size: 16px;
   color: #006D77;
   margin-right: 117px;
   text-decoration: none;
   cursor: pointer;
   letter-spacing: 1px;
   font-weight: 700;
 }
 .blc-link-ENMP a:hover {
      color: #E29578;
 }
 .date-MP-mod input {
    margin-left: -284px;
    width: 15.66%;
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
.qte-MP-mod input {
    margin-left: 48px;
    width: 15%;
    position: absolute;
    margin-top: 71px;
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
    box-shadow: 2px 5px 8px #0000003d;
    
}

 .btn-ENMP{
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
.img-vad-ENMP{
  width: 25px;
  height: 25px;
  padding-left: 10px; 
  position: absolute;
  display: inline-block;
  margin-top: -0.2%;
  margin-left: 79px;
}

.overlay-ENMP-mod{
    position: fixed;
    left: 0px;
    top: 0px;
    background-color: rgba( 0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: none;
    z-index: 1000;
}
.popup-ENMP-mod h2{
    font-size: 20px;
    margin-top: -300px;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    color: #006D77;
    letter-spacing: 1px;
    
}
.popup-ENMP-mod{
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
.btnClose-ENMP-mod{
    float: right;
    cursor: pointer;
    margin-top: -60px;
    margin-right: 10px;
    font-size: 50px;
    color: #006D77;
    
}

.ddown-ENMP-mod {
    width: 14.5%;
    position: absolute;
    margin-left: 120px;
    margin-top: 189px;
 }
 .ddown-select-ENMP-mod {
   padding: 8px 38px 30px 2px;
    border-radius: 10px;
    background-color: #ffffff;
    border: 1px solid #006D77;
    font-weight: 700;
    cursor: pointer;
    margin-left: -46px;
    box-shadow: 2px 5px 8px #0000003d;
   
 }
 .slct-ENMP-mod{
    letter-spacing: 1px;
    margin-left: -98px;
    color: #006D77;
    float: left;
    position: absolute;
    margin-top: 2px;
}
 
.ddown-icon-ENMP-mod  {
    margin-left: 102px;
    position: absolute;
    width: 25px;
}
.blc-link-ENMP-mod {
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

 .blc-link-ENMP-mod li  {
   padding: 5px 0;
   text-align: left;
   padding-top: 13px;
    padding-bottom: 13px;
 }
 .blc-link-ENMP-mod a {
   font-size: 16px;
   color: #006D77;
   margin-right: 117px;
   text-decoration: none;
   cursor: pointer;
   letter-spacing: 1px;
   font-weight: 700;
 }
 .blc-link-ENMP-mod a:hover {
      color: #E29578;
 }
 .btn-ENMP-mod{
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
.img-vad-ENMP-mod{
  width: 25px;
  height: 25px;
  padding-left: 10px; 
  position: absolute;
  display: inline-block;
  margin-top: -0.2%;
  margin-left: 79px;
}
</style>