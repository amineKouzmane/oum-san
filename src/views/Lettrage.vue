<template>
    <button class="buttn" @click="PopupLettrage()"> NOUVEAU LETTRAGE 
    <img class="n-let" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1NiAwYy0xNDEuMTY0MDYyIDAtMjU2IDExNC44MzU5MzgtMjU2IDI1NnMxMTQuODM1OTM4IDI1NiAyNTYgMjU2IDI1Ni0xMTQuODM1OTM4IDI1Ni0yNTYtMTE0LjgzNTkzOC0yNTYtMjU2LTI1NnptMTEyIDI3Ny4zMzIwMzFoLTkwLjY2Nzk2OXY5MC42Njc5NjljMCAxMS43NzczNDQtOS41NTQ2ODcgMjEuMzMyMDMxLTIxLjMzMjAzMSAyMS4zMzIwMzFzLTIxLjMzMjAzMS05LjU1NDY4Ny0yMS4zMzIwMzEtMjEuMzMyMDMxdi05MC42Njc5NjloLTkwLjY2Nzk2OWMtMTEuNzc3MzQ0IDAtMjEuMzMyMDMxLTkuNTU0Njg3LTIxLjMzMjAzMS0yMS4zMzIwMzFzOS41NTQ2ODctMjEuMzMyMDMxIDIxLjMzMjAzMS0yMS4zMzIwMzFoOTAuNjY3OTY5di05MC42Njc5NjljMC0xMS43NzczNDQgOS41NTQ2ODctMjEuMzMyMDMxIDIxLjMzMjAzMS0yMS4zMzIwMzFzMjEuMzMyMDMxIDkuNTU0Njg3IDIxLjMzMjAzMSAyMS4zMzIwMzF2OTAuNjY3OTY5aDkwLjY2Nzk2OWMxMS43NzczNDQgMCAyMS4zMzIwMzEgOS41NTQ2ODcgMjEuMzMyMDMxIDIxLjMzMjAzMXMtOS41NTQ2ODcgMjEuMzMyMDMxLTIxLjMzMjAzMSAyMS4zMzIwMzF6bTAgMCIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4=" />
  </button>
  <div id="overlay" class="overlay">
        <div id="popup" class="popup">
            <h2> 
                NOUVEAU LETTRAGE
               <span @click="PopupLettrageClose()" id="btnClose" class="btnClose">&times;</span>
            </h2>
            <div class="date-lett">
                 <input type="date" placeholder="22/02/2021" required v-model="date">
            </div>
            <div class="mnt-lett">
                 <input type="text" placeholder="MONTANT" required v-model="client">
            </div>
            <div  class="ddown-lett">
        <div class="ddown-select-lett">
      <span class="slct-lett">LAVABO MURAL</span>
      <img @click="openModalLettrage()" class="ddown-icon-lett" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkRvd25fQXJyb3dfM18iIGQ9Im02NCA4OGMtMS4wMjMgMC0yLjA0Ny0uMzkxLTIuODI4LTEuMTcybC00MC00MGMtMS41NjMtMS41NjMtMS41NjMtNC4wOTQgMC01LjY1NnM0LjA5NC0xLjU2MyA1LjY1NiAwbDM3LjE3MiAzNy4xNzIgMzcuMTcyLTM3LjE3MmMxLjU2My0xLjU2MyA0LjA5NC0xLjU2MyA1LjY1NiAwczEuNTYzIDQuMDk0IDAgNS42NTZsLTQwIDQwYy0uNzgxLjc4MS0xLjgwNSAxLjE3Mi0yLjgyOCAxLjE3MnoiIGZpbGw9IiMwMDZkNzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
    </div>
      <ul id="blcks-lett" class="blc-link-lett">
        <li>
          <a @click="ListLettrage($event)">ESPECE</a>
        </li>
        <li>
          <a @click="ListLettrage($event)">CHEQUE</a>
        </li>
      </ul>
  </div>
  <button class="btn-lett" @click="PopupLettrageClose()"> VALIDER 
    <img class="img-vad-lett" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xMiAwYy02LjYxNyAwLTEyIDUuMzgzLTEyIDEyczUuMzgzIDEyIDEyIDEyIDEyLTUuMzgzIDEyLTEyLTUuMzgzLTEyLTEyLTEyem02LjA4MiA5LjQ1Ny02LjUgNi41Yy0uMTk1LjE5NS0uNDUxLjI5My0uNzA3LjI5M3MtLjUxMi0uMDk4LS43MDctLjI5M2wtMy4yNS0zLjI1Yy0uMzkxLS4zOTEtLjM5MS0xLjAyMyAwLTEuNDE0czEuMDIzLS4zOTEgMS40MTQgMGwyLjU0MyAyLjU0MyA1Ljc5My01Ljc5M2MuMzkxLS4zOTEgMS4wMjMtLjM5MSAxLjQxNCAwcy4zOTEgMS4wMjMgMCAxLjQxNHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
  </button>
    
         </div>
     </div>
    <form>
        <div class="clnt-let">
        <label>CLIENT :</label>
            <p>HAMID EL ASRI</p>
        </div>
        <div class="dte-let">
        <label>DATE :</label>
            <p>22/06/2022</p>
        </div>
        <div class="tbl-cmd-let">
      <table width="100%">
          <thead>
              <tr>
                  <td>DATE</td>
                  <td>TYPE</td>
                  <td>MONTANT</td>
              </tr>
          </thead>
          <tbody>
              <tr style="border-bottom: 1px solid #FFFFFF">
                  <td style="color: #E29578">22/12/2021</td>
                  <td style="color: #3D3C3C">CHEQUE</td>
                  <td>1,000.00 </td>

              </tr>
              <tr style="border-bottom: 1px solid #FFFFFF">
                  <td style="color: #E29578">24/12/2021</td>
                  <td style="color: #3D3C3C">ESPECE</td>
                  <td>2,000.00 </td>
                  
              </tr>
              <tr>
                  <td style="color: #E29578">28/12/2021</td>
                  <td style="color: #3D3C3C">ESPECE</td>
                  <td>2,000.00 </td>
              </tr>
          </tbody>
      </table>
  </div>
        <div class="mnt-rest-let">
           <label>MONTANT RESTANT :</label>
            <p>2,000.00</p>
        </div>
        <div class="mnt-payer-let">
            <label>MONTANT PAYEE :</label>
            <p>5,000.00</p>
        </div>
    </form>
</template>

<script>


export default {
    name: 'Lettrage',
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
        openModalLettrage(){
       
       this.toggle = !this.toggle
       console.log(this.toggle)
       var bloc = document.getElementById('blcks-lett')
       
       if (this.toggle === true) {
           bloc.style.display  = 'block'
           console.log("this is if")
           
       }
       else {
           bloc.style.display  = 'none'
           console.log("this is else")
           
       }
   },
   ListLettrage(event){
       console.log(event.target.innerText)
   }
    }
}
</script>

<style scoped>
.buttn{
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
.n-let{
  width: 25px;
  height: 25px;
  padding-left: 10px; 
  position: absolute;
  display: inline-block;
  margin-top: -0.2%;
}
form {
    background-color: white;
    margin-top: 31px;
    position: absolute;
    margin-left: 69px;
    padding-left: 1015px;
    padding-bottom: 138px;
    padding-top: 54px;
    border-radius: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    color: #006D77;
    font-size: 14px;
    box-shadow: 2px 5px 8px #0000003d;
}

.clnt-let label {
    margin-left: -942px;
    float: left;
    margin-top: -14px;
    position: absolute;
    letter-spacing: 1px;
    font-size: 16px;
}
.clnt-let p {
    position: absolute;
    margin-left: -821px;
    margin-top: -14px;
    color: #3D3C3C;
    font-size: 16px;
    font-weight: 800;
    letter-spacing: 1px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.dte-let label {
    margin-left: -414px;
    float: left;
    margin-top: -14px;
    position: absolute;
    letter-spacing: 1px;
    font-size: 16px;
}
.dte-let p {
    position: absolute;
    margin-left: -311px;
    margin-top: -14px;
    color: #3D3C3C;
    font-size: 16px;
    font-weight: 800;
    letter-spacing: 1px;
    
}
.tbl-cmd-let {
    background: #f0f0f0;
    margin-top: 58px;
    margin-left: -909px;
    margin-right: 100px;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 2px 5px 8px #0000003d;
}
.tbl-cmd-let thead td {
  color: #006D77;
  font-size: 16px;
  padding-top: 2px;
  padding-bottom: 40px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  letter-spacing: 1px;
  font-weight: 800;
}
.tbl-cmd-let tbody td {
  padding-top: 20px;
  padding-bottom: 30px;
  color: #000000;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  letter-spacing: 1px;
  font-weight: 800;
}
.mnt-payer-let p{
    padding-right: 20px;
    position: absolute;
    margin-left: -290px;
    margin-top: 73px;
    background: #006D77;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    border-radius: 10px;
    color: white;
    letter-spacing: 1px;
    font-size: 16px;
}
.mnt-payer-let label {
    margin-left: -370px;
    float: left;
    margin-top: 28px;
    position: absolute;
    letter-spacing: 1px;
    font-size: 16px;
}
.mnt-rest-let p{
    padding-right: 20px;
    position: absolute;
    margin-left: -480px;
    margin-top: 73px;
    background: #006D77;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    border-radius: 10px;
    color: white;
    letter-spacing: 1px;
    font-size: 16px;
}
.mnt-rest-let label {
    margin-left: -602px;
    float: left;
    margin-top: 28px;
    position: absolute;
    letter-spacing: 1px;
    font-size: 16px;
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
.date-lett input {
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
.mnt-lett input {
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
.ddown-lett {
    width: 14.5%;
    position: absolute;
    margin-left: 120px;
    margin-top: 189px;
 }
 .ddown-select-lett {
   padding: 8px 38px 30px 2px;
    border-radius: 10px;
    background-color: #ffffff;
    border: 1px solid #006D77;
    font-weight: 700;
    cursor: pointer;
    margin-left: -46px;
    box-shadow: 2px 5px 8px #0000003d;
   
 }
 .slct-lett{
    letter-spacing: 1px;
    margin-left: -98px;
    color: #006D77;
    float: left;
    position: absolute;
    margin-top: 2px;
}
 
.ddown-icon-lett  {
    margin-left: 112px;
    position: absolute;
    width: 25px;
}
.blc-link-lett {
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

 .blc-link-lett li  {
   padding: 5px 0;
   text-align: left;
   padding-top: 13px;
    padding-bottom: 13px;
 }
 .blc-link-lett a {
   font-size: 16px;
   color: #006D77;
   margin-right: 135px;
   text-decoration: none;
   cursor: pointer;
   letter-spacing: 1px;
   font-weight: 700;
 }
 .blc-link-lett a:hover {
      color: #E29578;
 }
 .btn-lett{
  margin-top: 241px;
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
.img-vad-lett{
  width: 25px;
  height: 25px;
  padding-left: 10px; 
  position: absolute;
  display: inline-block;
  margin-top: -0.2%;
  margin-left: 79px;
}
</style>