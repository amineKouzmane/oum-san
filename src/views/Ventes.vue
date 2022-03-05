<template v-cloak>
  <div class="three">
  <div  class="dropdown">
    <div class="dropdown-select">
      <span class="select">CLIENT</span>
      <img @click="openModal()" class="dropdown-icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkRvd25fQXJyb3dfM18iIGQ9Im02NCA4OGMtMS4wMjMgMC0yLjA0Ny0uMzkxLTIuODI4LTEuMTcybC00MC00MGMtMS41NjMtMS41NjMtMS41NjMtNC4wOTQgMC01LjY1NnM0LjA5NC0xLjU2MyA1LjY1NiAwbDM3LjE3MiAzNy4xNzIgMzcuMTcyLTM3LjE3MmMxLjU2My0xLjU2MyA0LjA5NC0xLjU2MyA1LjY1NiAwczEuNTYzIDQuMDk0IDAgNS42NTZsLTQwIDQwYy0uNzgxLjc4MS0xLjgwNSAxLjE3Mi0yLjgyOCAxLjE3MnoiIGZpbGw9IiMwMDZkNzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
    </div>
      <ul id="blocks" class="bloc-links">
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
  <div class="date-vente">
        <input type="date" placeholder="22/02/2021" required v-model="date">
        </div>
  <button class="btn-check"> 
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xMiAwYy02LjYxNyAwLTEyIDUuMzgzLTEyIDEyczUuMzgzIDEyIDEyIDEyIDEyLTUuMzgzIDEyLTEyLTUuMzgzLTEyLTEyLTEyem02LjA4MiA5LjQ1Ny02LjUgNi41Yy0uMTk1LjE5NS0uNDUxLjI5My0uNzA3LjI5M3MtLjUxMi0uMDk4LS43MDctLjI5M2wtMy4yNS0zLjI1Yy0uMzkxLS4zOTEtLjM5MS0xLjAyMyAwLTEuNDE0czEuMDIzLS4zOTEgMS40MTQgMGwyLjU0MyAyLjU0MyA1Ljc5My01Ljc5M2MuMzkxLS4zOTEgMS4wMjMtLjM5MSAxLjQxNCAwcy4zOTEgMS4wMjMgMCAxLjQxNHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
  </button>
  <button class="btn" @click="goToNewCommand()"> NOUVELLE COMMANDE 
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1NiAwYy0xNDEuMTY0MDYyIDAtMjU2IDExNC44MzU5MzgtMjU2IDI1NnMxMTQuODM1OTM4IDI1NiAyNTYgMjU2IDI1Ni0xMTQuODM1OTM4IDI1Ni0yNTYtMTE0LjgzNTkzOC0yNTYtMjU2LTI1NnptMTEyIDI3Ny4zMzIwMzFoLTkwLjY2Nzk2OXY5MC42Njc5NjljMCAxMS43NzczNDQtOS41NTQ2ODcgMjEuMzMyMDMxLTIxLjMzMjAzMSAyMS4zMzIwMzFzLTIxLjMzMjAzMS05LjU1NDY4Ny0yMS4zMzIwMzEtMjEuMzMyMDMxdi05MC42Njc5NjloLTkwLjY2Nzk2OWMtMTEuNzc3MzQ0IDAtMjEuMzMyMDMxLTkuNTU0Njg3LTIxLjMzMjAzMS0yMS4zMzIwMzFzOS41NTQ2ODctMjEuMzMyMDMxIDIxLjMzMjAzMS0yMS4zMzIwMzFoOTAuNjY3OTY5di05MC42Njc5NjljMC0xMS43NzczNDQgOS41NTQ2ODctMjEuMzMyMDMxIDIxLjMzMjAzMS0yMS4zMzIwMzFzMjEuMzMyMDMxIDkuNTU0Njg3IDIxLjMzMjAzMSAyMS4zMzIwMzF2OTAuNjY3OTY5aDkwLjY2Nzk2OWMxMS43NzczNDQgMCAyMS4zMzIwMzEgOS41NTQ2ODcgMjEuMzMyMDMxIDIxLjMzMjAzMXMtOS41NTQ2ODcgMjEuMzMyMDMxLTIxLjMzMjAzMSAyMS4zMzIwMzF6bTAgMCIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4=" />
  </button>
  </div>
  <div class="cmd">
      <table width="100%">
          <thead>
              <tr>
                  <td>COMMANDE</td>
                  <td>CLIENT</td>
                  <td>DATE</td>
                  <td>VALEUR</td>
                  <td>LETTRAGE</td>
              </tr>
          </thead>
          <tbody>
              <tr style="border-bottom: 1px solid #8d939531">
                  <td style="color: #E29578">22122021133000Y6X</td>
                  <td style="color: #006D77">HAMID EL ASRI</td>
                  <td>22/12/2021</td>
                  <td>3,000.00 </td>
                  <td style="color: #E29578">80%</td>
                  <td> <img data-id="22122021133000T6X" @click="openList($event)" class="three-dot" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxNS41NTUgNTE1LjU1NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoNi4xMjMyMzM5OTU3MzY3NjZlLTE3LC0xLDEsNi4xMjMyMzM5OTU3MzY3NjZlLTE3LDAuMDAwNTA1NDQ3Mzg3Njk1MzEyNSw1MTUuNTU0NTIxNTYwNjY5KSI+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNDk2LjY3OSAyMTIuMjA4YzI1LjE2NyAyNS4xNjcgMjUuMTY3IDY1Ljk3MSAwIDkxLjEzOHMtNjUuOTcxIDI1LjE2Ny05MS4xMzggMC0yNS4xNjctNjUuOTcxIDAtOTEuMTM4IDY1Ljk3MS0yNS4xNjcgOTEuMTM4IDAiIGZpbGw9IiMwMDZkNzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0zMDMuMzQ3IDIxMi4yMDhjMjUuMTY3IDI1LjE2NyAyNS4xNjcgNjUuOTcxIDAgOTEuMTM4cy02NS45NzEgMjUuMTY3LTkxLjEzOCAwLTI1LjE2Ny02NS45NzEgMC05MS4xMzggNjUuOTcxLTI1LjE2NyA5MS4xMzggMCIgZmlsbD0iIzAwNmQ3NyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTExMC4wMTQgMjEyLjIwOGMyNS4xNjcgMjUuMTY3IDI1LjE2NyA2NS45NzEgMCA5MS4xMzhzLTY1Ljk3MSAyNS4xNjctOTEuMTM4IDAtMjUuMTY3LTY1Ljk3MSAwLTkxLjEzOCA2NS45NzEtMjUuMTY3IDkxLjEzOCAwIiBmaWxsPSIjMDA2ZDc3IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg==" />
            
                  <ul id="22122021133000T6X" class="lis-links">
                     <li>
                         <a @click="goToUpdateCommand()">Modifier</a>
                     </li>
                     <li>
                         <a @click="goToAffCommand()">Afficher</a>
                     </li>
                     <li>
                         <a @click="Delete()">Supprimer</a>
                     </li>
                      <li>
                         <a @click="goToLettrage()">Lettrage</a>
                     </li>
                      <li>
                         <a @click="filterClient($event)">Télécharger facture</a>
                     </li>
                 </ul>
             </td>

              </tr>
              <tr style="border-bottom: 1px solid #8d939531">
                  <td style="color: #E29578">22122021133000Y6X</td>
                  <td style="color: #006D77">HAMID EL ASRI</td>
                  <td>22/12/2021</td>
                  <td>3,000.00 </td>
                  <td style="color: #E29578">80%</td>
              </tr>
              <tr style="border-bottom: 1px solid #8d939531">
                  <td style="color: #E29578">22122021133000Y6X</td>
                  <td style="color: #006D77">HAMID EL ASRI</td>
                  <td>22/12/2021</td>
                  <td>3,000.00 </td>
                  <td style="color: #E29578">80%</td>
              </tr>
              <tr style="border-bottom: 1px solid #8d939531">
                  <td style="color: #E29578">22122021133000Y6X</td>
                  <td style="color: #006D77">HAMID EL ASRI</td>
                  <td>22/12/2021</td>
                  <td>3,000.00 </td>
                  <td style="color: #E29578">80%</td>
              </tr>
              <tr style="border-bottom: 1px solid #8d939531">
                  <td style="color: #E29578">22122021133000Y6X</td>
                  <td style="color: #006D77">HAMID EL ASRI</td>
                  <td>22/12/2021</td>
                  <td>3,000.00 </td>
                  <td style="color: #E29578">80%</td>
              </tr>
              <tr style="border-bottom: 1px solid #8d939531">
                  <td style="color: #E29578">22122021133000Y6X</td>
                  <td style="color: #006D77">HAMID EL ASRI</td>
                  <td>22/12/2021</td>
                  <td>3,000.00 </td>
                  <td style="color: #E29578">80%</td>
              </tr>
              <tr>
                  <td style="color: #E29578">22122021133000Y6X</td>
                  <td style="color: #006D77">HAMID EL ASRI</td>
                  <td>22/12/2021</td>
                  <td>3,000.00 </td>
                  <td style="color: #E29578">80%</td>
                  <td> <img data-id="22122021133000Y6X" @click="openList($event)" class="three-dot" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxNS41NTUgNTE1LjU1NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoNi4xMjMyMzM5OTU3MzY3NjZlLTE3LC0xLDEsNi4xMjMyMzM5OTU3MzY3NjZlLTE3LDAuMDAwNTA1NDQ3Mzg3Njk1MzEyNSw1MTUuNTU0NTIxNTYwNjY5KSI+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNDk2LjY3OSAyMTIuMjA4YzI1LjE2NyAyNS4xNjcgMjUuMTY3IDY1Ljk3MSAwIDkxLjEzOHMtNjUuOTcxIDI1LjE2Ny05MS4xMzggMC0yNS4xNjctNjUuOTcxIDAtOTEuMTM4IDY1Ljk3MS0yNS4xNjcgOTEuMTM4IDAiIGZpbGw9IiMwMDZkNzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0zMDMuMzQ3IDIxMi4yMDhjMjUuMTY3IDI1LjE2NyAyNS4xNjcgNjUuOTcxIDAgOTEuMTM4cy02NS45NzEgMjUuMTY3LTkxLjEzOCAwLTI1LjE2Ny02NS45NzEgMC05MS4xMzggNjUuOTcxLTI1LjE2NyA5MS4xMzggMCIgZmlsbD0iIzAwNmQ3NyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTExMC4wMTQgMjEyLjIwOGMyNS4xNjcgMjUuMTY3IDI1LjE2NyA2NS45NzEgMCA5MS4xMzhzLTY1Ljk3MSAyNS4xNjctOTEuMTM4IDAtMjUuMTY3LTY1Ljk3MSAwLTkxLjEzOCA2NS45NzEtMjUuMTY3IDkxLjEzOCAwIiBmaWxsPSIjMDA2ZDc3IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg==" />
            
                  <ul id="22122021133000Y6X" class="lis-links">
                     <li>
                         <a @click="goToUpdateCommand()">Modifier</a>
                     </li>
                     <li>
                         <a @click="goToAffCommand()">Afficher</a>
                     </li>
                     <li>
                         <a @click="Delete()">Supprimer</a>
                     </li>
                      <li>
                         <a @click="goToLettrage()">Lettrage</a>
                     </li>
                      <li>
                         <a @click="filterClient($event)">Télécharger facture</a>
                     </li>
                 </ul>
             </td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
export default {
    name: 'Ventes',
    data(){
        return  {
            toggle: false,
            boggle: false
            
        }
    },

  methods:{
   goToLettrage(){
   this.$router.push('/Lettrage'); 
   },
   goToAffCommand(){
   this.$router.push('/AfficherCommande'); 
   },
   goToUpdateCommand(){
   this.$router.push('/ModifierCommande'); 
   },

   goToNewCommand(){
   this.$router.push('/NouvelleCommande'); 
   },

   filterClient(event){
       console.log(event.target.innerText)
   },

   openModal(){
       
       this.toggle = !this.toggle
       console.log(this.toggle)
       var bloc = document.getElementById('blocks')
       
       if (this.toggle === true) {
           bloc.style.display  = 'block'
           console.log("this is if")
           
       }
       else {
           bloc.style.display  = 'none'
           console.log("this is else")
           
       }
   },
   openList(event){
       
       this.boggle = !this.boggle
       console.log(this.boggle)
       var id = event.target.getAttribute('data-id')
       var liss = document.getElementById(id)
       console.log(liss)
       
       if (this.boggle === true) {
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
body {
overflow-x: hidden;
overflow-y: hidden;
}
.btn{
  margin-top: 110px;
  margin-left: 800px;
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
.btn-check{
      margin-top: 110px;
    margin-left: 632px;
    padding: 13px 30px 27px 12px;
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
    position: absolute;
    letter-spacing: 1px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.btn-check img {
  width: 25px;
    height: 25px;
    padding-left: 3px;
    position: absolute;
    display: inline-block;
    margin-top: -11.9%;
    margin-left: -6px;
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
.cmd {
  background: #ffffff;
  margin-top: 30px;
  margin-left: 50px;
  margin-right: 47px;
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

.date-vente input {
    margin-left: -211px;
    width: 19.1%;
    position: absolute;
    margin-top: 110px;
    border-radius: 10px;
    padding-top: 9px;
    padding-left: 11px;
    padding-right: 11px;
    padding-bottom: 9px;
    border: 1px solid #006D77;
    background-color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    color: #006D77;
    font-weight: 700;
    letter-spacing: 1px;
    justify-content: right;
    
    
    
}

 .bloc-links {
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

 .bloc-links li  {
   padding: 5px 0;
   text-align: left;
   padding-top: 13px;
    padding-bottom: 13px;
 }
 .bloc-links a {
   font-size: 16px;
   color: #006D77;
   margin-right: 5px;
   text-decoration: none;
   cursor: pointer;
   letter-spacing: 1px;
   font-weight: 700;
 }
 .bloc-links a:hover {
      color: #E29578;
 } 
 [v-cloak] {
  display: none;
}
.three-dot  {
    margin-left: -29px;
    position: absolute;
    margin-top: -11px;
    cursor: pointer;
    width: 20px;
    height: 20px;
}
.lis-links {
  padding: 0 22px;
    list-style-type: none;
    background-color: #006D77;
    /* margin-right: 0px; */
    margin-left: -211px;
    border-radius: 10px;
    margin-top: 15px;
    display: none;
    box-shadow: 2px 5px 8px #0000003d;
    border: 1px solid #006D77;
    /* z-index: -1; */
    position: absolute;
 }

 .lis-links li  {
   padding: 5px 0;
   text-align: left;
   padding-top: 13px;
    padding-bottom: 13px;
 }
 .lis-links a {
   font-size: 14px;
   color: #ffffff;
   margin-right: 5px;
   text-decoration: none;
   cursor: pointer;
   letter-spacing: 1px;
   font-weight: 700;
 }
  .lis-links a:hover {
      color: #E29578;
 } 
</style>
