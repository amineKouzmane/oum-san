<template v-cloak>
  <div class="threee-SMP">
  <button class="btnn-SMP" @click="PopupSortie()"> NOUVEAU SORTIE
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1NiAwYy0xNDEuMTY0MDYyIDAtMjU2IDExNC44MzU5MzgtMjU2IDI1NnMxMTQuODM1OTM4IDI1NiAyNTYgMjU2IDI1Ni0xMTQuODM1OTM4IDI1Ni0yNTYtMTE0LjgzNTkzOC0yNTYtMjU2LTI1NnptMTEyIDI3Ny4zMzIwMzFoLTkwLjY2Nzk2OXY5MC42Njc5NjljMCAxMS43NzczNDQtOS41NTQ2ODcgMjEuMzMyMDMxLTIxLjMzMjAzMSAyMS4zMzIwMzFzLTIxLjMzMjAzMS05LjU1NDY4Ny0yMS4zMzIwMzEtMjEuMzMyMDMxdi05MC42Njc5NjloLTkwLjY2Nzk2OWMtMTEuNzc3MzQ0IDAtMjEuMzMyMDMxLTkuNTU0Njg3LTIxLjMzMjAzMS0yMS4zMzIwMzFzOS41NTQ2ODctMjEuMzMyMDMxIDIxLjMzMjAzMS0yMS4zMzIwMzFoOTAuNjY3OTY5di05MC42Njc5NjljMC0xMS43NzczNDQgOS41NTQ2ODctMjEuMzMyMDMxIDIxLjMzMjAzMS0yMS4zMzIwMzFzMjEuMzMyMDMxIDkuNTU0Njg3IDIxLjMzMjAzMSAyMS4zMzIwMzF2OTAuNjY3OTY5aDkwLjY2Nzk2OWMxMS43NzczNDQgMCAyMS4zMzIwMzEgOS41NTQ2ODcgMjEuMzMyMDMxIDIxLjMzMjAzMXMtOS41NTQ2ODcgMjEuMzMyMDMxLTIxLjMzMjAzMSAyMS4zMzIwMzF6bTAgMCIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4=" />
  </button>
  </div>
  <div class="cmd-SMP">
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
             <td> <img @click="openList()" class="threee-dot-SMP" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxNS41NTUgNTE1LjU1NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoNi4xMjMyMzM5OTU3MzY3NjZlLTE3LC0xLDEsNi4xMjMyMzM5OTU3MzY3NjZlLTE3LDAuMDAwNTA1NDQ3Mzg3Njk1MzEyNSw1MTUuNTU0NTIxNTYwNjY5KSI+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNDk2LjY3OSAyMTIuMjA4YzI1LjE2NyAyNS4xNjcgMjUuMTY3IDY1Ljk3MSAwIDkxLjEzOHMtNjUuOTcxIDI1LjE2Ny05MS4xMzggMC0yNS4xNjctNjUuOTcxIDAtOTEuMTM4IDY1Ljk3MS0yNS4xNjcgOTEuMTM4IDAiIGZpbGw9IiMwMDZkNzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0zMDMuMzQ3IDIxMi4yMDhjMjUuMTY3IDI1LjE2NyAyNS4xNjcgNjUuOTcxIDAgOTEuMTM4cy02NS45NzEgMjUuMTY3LTkxLjEzOCAwLTI1LjE2Ny02NS45NzEgMC05MS4xMzggNjUuOTcxLTI1LjE2NyA5MS4xMzggMCIgZmlsbD0iIzAwNmQ3NyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTExMC4wMTQgMjEyLjIwOGMyNS4xNjcgMjUuMTY3IDI1LjE2NyA2NS45NzEgMCA5MS4xMzhzLTY1Ljk3MSAyNS4xNjctOTEuMTM4IDAtMjUuMTY3LTY1Ljk3MSAwLTkxLjEzOCA2NS45NzEtMjUuMTY3IDkxLjEzOCAwIiBmaWxsPSIjMDA2ZDc3IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg==" />
            
                  <ul id="lis-SMP" class="lis-links-SMP">
                     <li>
                         <a @click="PopupSortieMod()">Modifier</a>
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
  <div id="overlay-SMP" class="overlay-SMP">
        <div id="popup-SMP" class="popup-SMP">
            <h2> 
                NOUVEAU SORTIE
               <span @click="PopupSortieClose()" id="btnClose-SMP" class="btnClose-SMP">&times;</span>
            </h2>
            <div class="date-SMP">
                 <input type="date" placeholder="22/02/2021" required v-model="date">
            </div>
            <div class="qte-SMP">
                 <input type="text" placeholder="QUANTITÉ" required v-model="client">
            </div>
            <div class="zone-SMP">
                 <input type="text" placeholder="ZONE" required v-model="client">
            </div>
            <div  class="ddown-SMP">
        <div class="ddown-select-SMP">
      <span class="slct-SMP">MATIÈRE PREMIÈRE</span>
      <img @click="openModalSMpNew()" class="ddown-icon-SMP" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkRvd25fQXJyb3dfM18iIGQ9Im02NCA4OGMtMS4wMjMgMC0yLjA0Ny0uMzkxLTIuODI4LTEuMTcybC00MC00MGMtMS41NjMtMS41NjMtMS41NjMtNC4wOTQgMC01LjY1NnM0LjA5NC0xLjU2MyA1LjY1NiAwbDM3LjE3MiAzNy4xNzIgMzcuMTcyLTM3LjE3MmMxLjU2My0xLjU2MyA0LjA5NC0xLjU2MyA1LjY1NiAwczEuNTYzIDQuMDk0IDAgNS42NTZsLTQwIDQwYy0uNzgxLjc4MS0xLjgwNSAxLjE3Mi0yLjgyOCAxLjE3MnoiIGZpbGw9IiMwMDZkNzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
    </div>
      <ul id="blcks-SMP" class="blc-link-SMP">
        <li>
          <a @click="ListLettrage($event)">MATIÈRE 1</a>
        </li>
        <li>
          <a @click="ListLettrage($event)">MATIÈRE 2</a>
        </li>
      </ul>
  </div>
  <button class="btn-SMP" @click="PopupSortieClose()"> VALIDER 
    <img class="img-vad-SMP" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xMiAwYy02LjYxNyAwLTEyIDUuMzgzLTEyIDEyczUuMzgzIDEyIDEyIDEyIDEyLTUuMzgzIDEyLTEyLTUuMzgzLTEyLTEyLTEyem02LjA4MiA5LjQ1Ny02LjUgNi41Yy0uMTk1LjE5NS0uNDUxLjI5My0uNzA3LjI5M3MtLjUxMi0uMDk4LS43MDctLjI5M2wtMy4yNS0zLjI1Yy0uMzkxLS4zOTEtLjM5MS0xLjAyMyAwLTEuNDE0czEuMDIzLS4zOTEgMS40MTQgMGwyLjU0MyAyLjU0MyA1Ljc5My01Ljc5M2MuMzkxLS4zOTEgMS4wMjMtLjM5MSAxLjQxNCAwcy4zOTEgMS4wMjMgMCAxLjQxNHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
  </button>
    
         </div>
     </div>

     <div id="overlay-SMP-mod" class="overlay-SMP-mod">
        <div id="popup-SMP-mod" class="popup-SMP-mod">
            <h2> 
                MODIFIER SORTIE
               <span @click="PopupSortieModClose()" id="btnClose-SMP-mod" class="btnClose-SMP-mod">&times;</span>
            </h2>
            <div class="date-SMP-mod">
                 <input type="date" placeholder="22/02/2021" required v-model="date">
            </div>
            <div class="qte-SMP-mod">
                 <input type="text" placeholder="QUANTITÉ" required v-model="client">
            </div>
            <div class="zone-SMP-mod">
                 <input type="text" placeholder="ZONE" required v-model="client">
            </div>
            <div  class="ddown-SMP-mod">
        <div class="ddown-select-SMP-mod">
      <span class="slct-SMP-mod">MATIÈRE PREMIÈRE</span>
      <img @click="openModalSMP()" class="ddown-icon-SMP-mod" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkRvd25fQXJyb3dfM18iIGQ9Im02NCA4OGMtMS4wMjMgMC0yLjA0Ny0uMzkxLTIuODI4LTEuMTcybC00MC00MGMtMS41NjMtMS41NjMtMS41NjMtNC4wOTQgMC01LjY1NnM0LjA5NC0xLjU2MyA1LjY1NiAwbDM3LjE3MiAzNy4xNzIgMzcuMTcyLTM3LjE3MmMxLjU2My0xLjU2MyA0LjA5NC0xLjU2MyA1LjY1NiAwczEuNTYzIDQuMDk0IDAgNS42NTZsLTQwIDQwYy0uNzgxLjc4MS0xLjgwNSAxLjE3Mi0yLjgyOCAxLjE3MnoiIGZpbGw9IiMwMDZkNzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
    </div>
      <ul id="blcks-SMP-mod" class="blc-link-SMP-mod">
        <li>
          <a @click="ListLettrage($event)">MATIÈRE 1</a>
        </li>
        <li>
          <a @click="ListLettrage($event)">MATIÈRE 2</a>
        </li>
      </ul>
  </div>
  <button class="btn-SMP-mod" @click="PopupSortieModClose()"> VALIDER 
    <img class="img-vad-SMP-mod" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xMiAwYy02LjYxNyAwLTEyIDUuMzgzLTEyIDEyczUuMzgzIDEyIDEyIDEyIDEyLTUuMzgzIDEyLTEyLTUuMzgzLTEyLTEyLTEyem02LjA4MiA5LjQ1Ny02LjUgNi41Yy0uMTk1LjE5NS0uNDUxLjI5My0uNzA3LjI5M3MtLjUxMi0uMDk4LS43MDctLjI5M2wtMy4yNS0zLjI1Yy0uMzkxLS4zOTEtLjM5MS0xLjAyMyAwLTEuNDE0czEuMDIzLS4zOTEgMS40MTQgMGwyLjU0MyAyLjU0MyA1Ljc5My01Ljc5M2MuMzkxLS4zOTEgMS4wMjMtLjM5MSAxLjQxNCAwcy4zOTEgMS4wMjMgMCAxLjQxNHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
  </button>
    
         </div>
     </div>
</template>

<script>
export default {
    name: 'SortieMatierePremiere',
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
       var liss = document.getElementById('lis-SMP')
       
       if (this.boggle === true) {
           liss.style.display  = 'block'
           console.log("this is if")
           
       }
       else {
           liss.style.display  = 'none'
           console.log("this is else")
           
       }
   },
   PopupSortie(){
       
       this.boggle = !this.boggle
       console.log(this.boggle)
       var over = document.getElementById('overlay-SMP')
       
       
           over.style.display  = 'block'
           console.log("this is if")
           
       
   },
        PopupSortieClose(){
       
       this.coggle = !this.coggle
       console.log(this.coggle)
       var cover = document.getElementById('overlay-SMP')
       
       
           cover.style.display  = 'none'
           console.log("this is if")
           
       

   },
        openModalSMpNew(){
       
       this.toggle = !this.toggle
       console.log(this.toggle)
       var bloc = document.getElementById('blcks-SMP')
       
       if (this.toggle === true) {
           bloc.style.display  = 'block'
           console.log("this is if")
           
       }
       else {
           bloc.style.display  = 'none'
           console.log("this is else")
           
       }
   },
   PopupSortieMod(){
       
       this.boggle = !this.boggle
       console.log(this.boggle)
       var over = document.getElementById('overlay-SMP-mod')
       
       
           over.style.display  = 'block'
           console.log("this is if")
           
       
   },
        PopupSortieModClose(){
       
       this.coggle = !this.coggle
       console.log(this.coggle)
       var cover = document.getElementById('overlay-SMP-mod')
       
       
           cover.style.display  = 'none'
           console.log("this is if")
           
   },
   openModalSMP(){
       
       this.toggle = !this.toggle
       console.log(this.toggle)
       var bloc = document.getElementById('blcks-SMP-mod')
       
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
.btnn-SMP{
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
.cmd-SMP {
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
.threee-dot-SMP  {
    margin-left: -29px;
    position: absolute;
    margin-top: -11px;
    cursor: pointer;
    width: 20px;
    height: 20px;
}
.lis-links-SMP {
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

 .lis-links-SMP li  {
   padding: 5px 0;
   text-align: left;
   padding-top: 13px;
    padding-bottom: 13px;
 }
 .lis-links-SMP a {
   font-size: 14px;
   color: #ffffff;
   margin-right: 5px;
   text-decoration: none;
   cursor: pointer;
   letter-spacing: 1px;
   font-weight: 700;
 }
  .lis-links-SMP a:hover {
      color: #E29578;
 } 
 .overlay-SMP{
    position: fixed;
    left: 0px;
    top: 0px;
    background-color: rgba( 0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: none;
    z-index: 1000;
}
.popup-SMP h2{
    font-size: 20px;
    margin-top: -300px;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    color: #006D77;
    letter-spacing: 1px;
    
}
.popup-SMP{
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
.btnClose-SMP{
    float: right;
    cursor: pointer;
    margin-top: -60px;
    margin-right: 10px;
    font-size: 50px;
    color: #006D77;
    
}
.date-SMP input {
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
.qte-SMP input {
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
.zone-SMP input {
    margin-left: 48px;
    width: 15%;
    position: absolute;
    margin-top: 189px;
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
.ddown-SMP {
    width: 14.5%;
    position: absolute;
    margin-left: 120px;
    margin-top: 189px;
 }
 .ddown-select-SMP {
   padding: 8px 38px 30px 2px;
    border-radius: 10px;
    background-color: #ffffff;
    border: 1px solid #006D77;
    font-weight: 700;
    cursor: pointer;
    margin-left: -46px;
    box-shadow: 2px 5px 8px #0000003d;
   
 }
 .slct-SMP{
    letter-spacing: 1px;
    margin-left: -98px;
    color: #006D77;
    float: left;
    position: absolute;
    margin-top: 2px;
}
 
.ddown-icon-SMP  {
    margin-left: 102px;
    position: absolute;
    width: 25px;
}
.blc-link-SMP {
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

 .blc-link-SMP li  {
   padding: 5px 0;
   text-align: left;
   padding-top: 13px;
    padding-bottom: 13px;
 }
 .blc-link-SMP a {
   font-size: 16px;
   color: #006D77;
   margin-right: 117px;
   text-decoration: none;
   cursor: pointer;
   letter-spacing: 1px;
   font-weight: 700;
 }
 .blc-link-SMP a:hover {
      color: #E29578;
 }
 .date-SMP-mod input {
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
.qte-SMP-mod input {
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
.zone-SMP-mod input {
    margin-left: 48px;
    width: 15%;
    position: absolute;
    margin-top: 189px;
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
 .btn-SMP{
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
.img-vad-SMP{
  width: 25px;
  height: 25px;
  padding-left: 10px; 
  position: absolute;
  display: inline-block;
  margin-top: -0.2%;
  margin-left: 79px;
}

.overlay-SMP-mod{
    position: fixed;
    left: 0px;
    top: 0px;
    background-color: rgba( 0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: none;
    z-index: 1000;
}
.popup-SMP-mod h2{
    font-size: 20px;
    margin-top: -300px;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    color: #006D77;
    letter-spacing: 1px;
    
}
.popup-SMP-mod{
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
.btnClose-SMP-mod{
    float: right;
    cursor: pointer;
    margin-top: -60px;
    margin-right: 10px;
    font-size: 50px;
    color: #006D77;
    
}

.ddown-SMP-mod {
    width: 14.5%;
    position: absolute;
    margin-left: 120px;
    margin-top: 189px;
 }
 .ddown-select-SMP-mod {
   padding: 8px 38px 30px 2px;
    border-radius: 10px;
    background-color: #ffffff;
    border: 1px solid #006D77;
    font-weight: 700;
    cursor: pointer;
    margin-left: -46px;
    box-shadow: 2px 5px 8px #0000003d;
   
 }
 .slct-SMP-mod{
    letter-spacing: 1px;
    margin-left: -98px;
    color: #006D77;
    float: left;
    position: absolute;
    margin-top: 2px;
}
 
.ddown-icon-SMP-mod  {
    margin-left: 102px;
    position: absolute;
    width: 25px;
}
.blc-link-SMP-mod {
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

 .blc-link-SMP-mod li  {
   padding: 5px 0;
   text-align: left;
   padding-top: 13px;
    padding-bottom: 13px;
 }
 .blc-link-SMP-mod a {
   font-size: 16px;
   color: #006D77;
   margin-right: 117px;
   text-decoration: none;
   cursor: pointer;
   letter-spacing: 1px;
   font-weight: 700;
 }
 .blc-link-SMP-mod a:hover {
      color: #E29578;
 }
 .btn-SMP-mod{
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
.img-vad-SMP-mod{
  width: 25px;
  height: 25px;
  padding-left: 10px; 
  position: absolute;
  display: inline-block;
  margin-top: -0.2%;
  margin-left: 79px;
}
</style>