<template>
  
    <h3>MODIFIER BATCH</h3>
    <form>
        <div class="coulage-mod">
        <label>COULAGE</label>
        <input type="text" placeholder="11" required v-model="coulage">
        </div>
        <div class="fr-coulage-mod">
        <label>FOUR DE COULAGE</label>
        <input type="text" placeholder="16" required v-model="frcoulage">
        </div>
        <div class="maillage-mod">
        <label>MAILLAGE</label>
        <input type="text" placeholder="12" required v-model="maillage">
        </div>
        <div class="fr-maillage-mod">
        <label>FOUR DE MAILLAGE</label>
        <input type="text" placeholder="30" required v-model="frmaillage">
        </div>
        <div class="cntrl-fnl-mod">
        <label>CONTROLE FINAL</label>
        <input type="text" placeholder="20" required v-model="cntrlfnl">
        </div>
        
        <div class="title-PQBmod">
          <h2>PRODUIT</h2>
          <h3>QUANTITÉ</h3>
        </div>

    <div class="line-Bmod">
        <div  class="ddown-Bmod">
        <div class="ddown-select-Bmod">
      <span class="slct-Bmod">CUVETTE DE WC SUSPENDUE</span>
    </div>
      
  </div>
  
       <div class="qtBmod">
             <input type="text" placeholder="2000" required>
        </div>
    </div>

    <div class="line-Bmod">
        <div  class="ddown-Bmod">
        <div class="ddown-select-Bmod">
      <span class="slct-Bmod">CUVETTE DE WC SUSPENDUE</span>
    </div>
      
  </div>
  
       <div class="qtBmod">
             <input type="text" placeholder="2000" required>
        </div>
    </div>

    

    


      <button class="btin-Bmod" @click="goToProduction()"> VALIDER 
          <img class="img-vad-Bmod" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xMiAwYy02LjYxNyAwLTEyIDUuMzgzLTEyIDEyczUuMzgzIDEyIDEyIDEyIDEyLTUuMzgzIDEyLTEyLTUuMzgzLTEyLTEyLTEyem02LjA4MiA5LjQ1Ny02LjUgNi41Yy0uMTk1LjE5NS0uNDUxLjI5My0uNzA3LjI5M3MtLjUxMi0uMDk4LS43MDctLjI5M2wtMy4yNS0zLjI1Yy0uMzkxLS4zOTEtLjM5MS0xLjAyMyAwLTEuNDE0czEuMDIzLS4zOTEgMS40MTQgMGwyLjU0MyAyLjU0MyA1Ljc5My01Ljc5M2MuMzkxLS4zOTEgMS4wMjMtLjM5MSAxLjQxNCAwcy4zOTEgMS4wMjMgMCAxLjQxNHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
      </button>
    </form>
    
  
   <!--<p>COULAGE: {{coulage}}</p>
    <p>FOUR DE COULAGE: {{frcoulage}}</p>
    <p>MAILLAGE: {{maillage}}</p>
    <p>FOUR DE MAILLAGE: {{frmaillage}}</p>
    <p>CONTROLE FINAL: {{cntrlfnl}}</p>
    <p>QUANTITÉ: {{quantite1}}</p>
    <p>QUANTITÉ: {{quantite2}}</p>
    <p>QUANTITÉ: {{quantite3}}</p>-->

</template>

<script>
export default {
    name: 'ModifierBatch',
    data() {
        return {
            coulage: '',
            frcoulage: '',
            maillage:'',
            frmaillage:'',
            cntrlfnl:'',
            quantite1: '',
            quantite2: '',
            quantite3: '',
            toggle: false,
            moggle: false,
            moggle: false
        }
    },
    methods: {
        goToProduction(){
   this.$router.push('/Production'); 
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
    padding-bottom: 115px;
    padding-top: 54px;
    border-radius: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    color: #006D77;
    font-size: 14px;
    box-shadow: 2px 5px 8px #0000003d;
}
.coulage-mod input {
    margin-left: -967px;
    width: 18%;
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
.coulage-mod label {
    margin-left: -941px;
    float: left;
    margin-top: -25px;
    position: absolute;
    letter-spacing: 1px;
}

.fr-coulage-mod input {
    margin-left: -729px;
    width: 18%;
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
.fr-coulage-mod label {
    margin-left: -700px;
    float: left;
    margin-top: -25px;
    position: absolute;
    letter-spacing: 1px;
}
.maillage-mod input {
    margin-left: -488px;
    width: 18%;
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
.maillage-mod label {
    margin-left: -456px;
    float: left;
    margin-top: -25px;
    position: absolute;
    letter-spacing: 1px;
}
.fr-maillage-mod input {
    margin-left: -250px;
    width: 18%;
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
.fr-maillage-mod label {
    margin-left: -220px;
    float: left;
    margin-top: -25px;
    position: absolute;
    letter-spacing: 1px;
}
.cntrl-fnl-mod input {
    margin-left: -967px;
    width: 18%;
    position: absolute;
    margin-top: 107px;
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
.cntrl-fnl-mod label {
    margin-left: -941px;
    float: left;
    margin-top: 73px;
    position: absolute;
    letter-spacing: 1px;
}
h2 {
    margin-top: 178px;
    margin-left: -942px;
    position: absolute;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
    color: #006D77;
    font-size: 14px;
}

.title-PQBmod {
  margin-top: 84px;
}

.title-PQBmod h2 {
    margin-top: 119px;
    margin-left: -943px;
    /* position: absolute; */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
    color: #006D77;
    margin-bottom: -135px;
    font-size: 14px;
}
.title-PQBmod h3 {
        margin-top: 119px;
    margin-left: -318px;
    /* position: absolute; */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
    color: #006D77;
    font-size: 14px;
}
.ddown-Bmod {
    width: 32rem;
    /* position: absolute; */
    margin-left: -921px;
    margin-top: 153px;
 }
 .ddown-select-Bmod {
   padding: 8px 15px 30.5px 2px;
    border-radius: 10px;
    background-color: #ffffff;
    border: 1px solid #006D77;
    font-weight: 700;
    cursor: pointer;
    margin-left: -46px;
   
 }
 .slct-Bmod{
    letter-spacing: 1px;
    margin-left: 11px;
    color: #006D77;
    float: left;
    /* position: absolute; */
    margin-top: 2px;
    
}
 .qtBmod input {
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
.btin-Bmod{
  margin-top: 243px;
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
.img-vad-Bmod{
  width: 25px;
  height: 25px;
  padding-left: 10px; 
  position: absolute;
  display: inline-block;
  margin-top: -1.8%;
  margin-left: 79px;
}
.line-Bmod {
  margin-bottom: -203px;
  margin-top: 241px;
}
</style>