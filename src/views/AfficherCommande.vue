<template>
    <form>
        <div class="num-cmd">
            <p>22122021133000Y6X</p>
        </div>
        <div class="clnt">
        <label>CLIENT :</label>
            <p>HAMID EL ASRI</p>
        </div>
        <div class="dte">
        <label>DATE :</label>
            <p>22/06/2022</p>
        </div>
        <div class="tbl-cmd">
      <table width="100%">
          <thead>
              <tr>
                  <td>PRODUIT</td>
                  <td>QUANTITÉ</td>
                  <td>PRIX UNITAIRE</td>
              </tr>
          </thead>
          <tbody>
              <tr style="border-bottom: 1px solid #FFFFFF">
                  <td style="color: #E29578">CUVETTE DE WC SUSPENDUE</td>
                  <td style="color: #3D3C3C">5</td>
                  <td>1,000.00 </td>

              </tr>
              <tr style="border-bottom: 1px solid #FFFFFF">
                  <td style="color: #E29578">LAVABO MURALX</td>
                  <td style="color: #3D3C3C">5</td>
                  <td>2,000.00 </td>
                  
              </tr>
              <tr>
                  <td style="color: #E29578">LAVE MAIN ETNA</td>
                  <td style="color: #3D3C3C">2</td>
                  <td>2,000.00 </td>
              </tr>
          </tbody>
      </table>
  </div>
        <div class="prix-ttl">
            <p>19,000.00</p>
        </div>
    </form>
</template>

<script>
export default {

}
</script>

<style scoped>

form {
    background-color: white;
    margin-top: 142px;
    position: absolute;
    margin-left: 69px;
    padding-left: 1015px;
    padding-bottom: 98px;
    padding-top: 54px;
    border-radius: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    color: #006D77;
    font-size: 14px;
    box-shadow: 2px 5px 8px #0000003d;
}
.num-cmd p{
    padding-right: 20px;
    position: absolute;
    margin-left: -383px;
    margin-top: -14px;
    background: #006D77;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    border-radius: 10px;
    color: white;
    letter-spacing: 1px;
    font-size: 16px;
}
.clnt label {
    margin-left: -942px;
    float: left;
    margin-top: 81px;
    position: absolute;
    letter-spacing: 1px;
    font-size: 16px;
}
.clnt p {
    position: absolute;
    margin-left: -821px;
    margin-top: 81px;
    color: #3D3C3C;
    font-size: 16px;
    font-weight: 800;
    letter-spacing: 1px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.dte label {
    margin-left: -414px;
    float: left;
    margin-top: 81px;
    position: absolute;
    letter-spacing: 1px;
    font-size: 16px;
}
.dte p {
    position: absolute;
    margin-left: -311px;
    margin-top: 81px;
    color: #3D3C3C;
    font-size: 16px;
    font-weight: 800;
    letter-spacing: 1px;
    
}
.tbl-cmd {
    background: #f0f0f0;
    margin-top: 149px;
    margin-left: -909px;
    margin-right: 100px;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 2px 5px 8px #0000003d;
}
.tbl-cmd thead td {
  color: #006D77;
  font-size: 16px;
  padding-top: 2px;
  padding-bottom: 40px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  letter-spacing: 1px;
  font-weight: 800;
}
.tbl-cmd tbody td {
  padding-top: 20px;
  padding-bottom: 30px;
  color: #000000;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  letter-spacing: 1px;
  font-weight: 800;
}
.prix-ttl p{
    padding-right: 20px;
    position: absolute;
    margin-left: -290px;
    margin-top: 30px;
    background: #006D77;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    border-radius: 10px;
    color: white;
    letter-spacing: 1px;
    font-size: 16px;
}
</style>