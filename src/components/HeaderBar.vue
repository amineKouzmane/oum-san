<template v-cloak>
  <div class="Header">
      <a id="header-title">{{ msg }}</a>
            
      
      <div class="usr">
            <img class="user-icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUzIDUzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iIiBkPSJNMTguNjEzLDQxLjU1MmwtNy45MDcsNC4zMTNjLTAuNDY0LDAuMjUzLTAuODgxLDAuNTY0LTEuMjY5LDAuOTAzQzE0LjA0Nyw1MC42NTUsMTkuOTk4LDUzLDI2LjUsNTMgIGM2LjQ1NCwwLDEyLjM2Ny0yLjMxLDE2Ljk2NC02LjE0NGMtMC40MjQtMC4zNTgtMC44ODQtMC42OC0xLjM5NC0wLjkzNGwtOC40NjctNC4yMzNjLTEuMDk0LTAuNTQ3LTEuNzg1LTEuNjY1LTEuNzg1LTIuODg4di0zLjMyMiAgYzAuMjM4LTAuMjcxLDAuNTEtMC42MTksMC44MDEtMS4wM2MxLjE1NC0xLjYzLDIuMDI3LTMuNDIzLDIuNjMyLTUuMzA0YzEuMDg2LTAuMzM1LDEuODg2LTEuMzM4LDEuODg2LTIuNTN2LTMuNTQ2ICBjMC0wLjc4LTAuMzQ3LTEuNDc3LTAuODg2LTEuOTY1di01LjEyNmMwLDAsMS4wNTMtNy45NzctOS43NS03Ljk3N3MtOS43NSw3Ljk3Ny05Ljc1LDcuOTc3djUuMTI2ICBjLTAuNTQsMC40ODgtMC44ODYsMS4xODUtMC44ODYsMS45NjV2My41NDZjMCwwLjkzNCwwLjQ5MSwxLjc1NiwxLjIyNiwyLjIzMWMwLjg4NiwzLjg1NywzLjIwNiw2LjYzMywzLjIwNiw2LjYzM3YzLjI0ICBDMjAuMjk2LDM5Ljg5OSwxOS42NSw0MC45ODYsMTguNjEzLDQxLjU1MnoiIGZpbGw9IiNlN2VjZWQiIGRhdGEtb3JpZ2luYWw9IiNlN2VjZWQiIGNsYXNzPSIiPjwvcGF0aD4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxwYXRoIHN0eWxlPSIiIGQ9Ik0yNi45NTMsMC4wMDRDMTIuMzItMC4yNDYsMC4yNTQsMTEuNDE0LDAuMDA0LDI2LjA0N0MtMC4xMzgsMzQuMzQ0LDMuNTYsNDEuODAxLDkuNDQ4LDQ2Ljc2ICAgYzAuMzg1LTAuMzM2LDAuNzk4LTAuNjQ0LDEuMjU3LTAuODk0bDcuOTA3LTQuMzEzYzEuMDM3LTAuNTY2LDEuNjgzLTEuNjUzLDEuNjgzLTIuODM1di0zLjI0YzAsMC0yLjMyMS0yLjc3Ni0zLjIwNi02LjYzMyAgIGMtMC43MzQtMC40NzUtMS4yMjYtMS4yOTYtMS4yMjYtMi4yMzF2LTMuNTQ2YzAtMC43OCwwLjM0Ny0xLjQ3NywwLjg4Ni0xLjk2NXYtNS4xMjZjMCwwLTEuMDUzLTcuOTc3LDkuNzUtNy45NzcgICBzOS43NSw3Ljk3Nyw5Ljc1LDcuOTc3djUuMTI2YzAuNTQsMC40ODgsMC44ODYsMS4xODUsMC44ODYsMS45NjV2My41NDZjMCwxLjE5Mi0wLjgsMi4xOTUtMS44ODYsMi41MyAgIGMtMC42MDUsMS44ODEtMS40NzgsMy42NzQtMi42MzIsNS4zMDRjLTAuMjkxLDAuNDExLTAuNTYzLDAuNzU5LTAuODAxLDEuMDNWMzguOGMwLDEuMjIzLDAuNjkxLDIuMzQyLDEuNzg1LDIuODg4bDguNDY3LDQuMjMzICAgYzAuNTA4LDAuMjU0LDAuOTY3LDAuNTc1LDEuMzksMC45MzJjNS43MS00Ljc2Miw5LjM5OS0xMS44ODIsOS41MzYtMTkuOUM1My4yNDYsMTIuMzIsNDEuNTg3LDAuMjU0LDI2Ljk1MywwLjAwNHoiIGZpbGw9IiMwMDZkNzciIGRhdGEtb3JpZ2luYWw9IiM1NTYwODAiIGNsYXNzPSIiPjwvcGF0aD4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+" />
            <a>Khalid Chami
                <br>
            <span>ID:657678</span></a>
            <img  class="drop-icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkRvd25fQXJyb3dfM18iIGQ9Im02NCA4OGMtMS4wMjMgMC0yLjA0Ny0uMzkxLTIuODI4LTEuMTcybC00MC00MGMtMS41NjMtMS41NjMtMS41NjMtNC4wOTQgMC01LjY1NnM0LjA5NC0xLjU2MyA1LjY1NiAwbDM3LjE3MiAzNy4xNzIgMzcuMTcyLTM3LjE3MmMxLjU2My0xLjU2MyA0LjA5NC0xLjU2MyA1LjY1NiAwczEuNTYzIDQuMDk0IDAgNS42NTZsLTQwIDQwYy0uNzgxLjc4MS0xLjgwNSAxLjE3Mi0yLjgyOCAxLjE3MnoiIGZpbGw9IiMwMDZkNzciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
      </div>
      
 </div>
        
</template>

<script>
export default {
    name: "HeaderBar",
    props: {
    msg: String,
  },
}
</script>

<style scoped>
.Header {
  
  background-color: rgb(255, 255, 255);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.1em;
  transition: 0.3s ease;
  
  
  
}
#header-title {
  float: left;
  color: #006D77;
  text-align: center;
  margin-left: 320px;
  margin-bottom: 25px;
  margin-top: 20px ;
  padding: 8px 16px;
  text-decoration: none;
  letter-spacing: 1px;
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 800;
}
.user-icon {
    margin-right: 15px;
    width: 35px;
    height: 35px;
    
    
   
}
.usr a {
    
    margin-right: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
    color: #006D77;
    text-align: left;
}
.usr {
    float: right;
    display: flex;
    margin-bottom: 25px;
  margin-top: 20px ;
}
.drop-icon  {
    
    margin-right: 15px;
    cursor: pointer;
    width: 25px;
    height: 26px;
}
span {
    color:grey;
    font-size: 14px;

}
[v-cloak] {
  display: none;
}

</style>