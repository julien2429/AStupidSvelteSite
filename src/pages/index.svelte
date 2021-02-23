<script>
import { route } from "@roxi/routify/runtime/store";
import { urlToRoute } from "@roxi/routify/runtime/utils/urlToRoute";
  function search_func() {
    let address = document.getElementById("address").value;
    location.replace("./"+address);
  }
</script>

<main>

  <div class="banner">
    <img class="h1" src="../Poze/Logo.jpg" alt="Logo" />
    <img class="Carte" src="../Poze/Carti.png" alt="Cardati" />
  </div>
  <div class="side-bar" >
  </div>
  
</main>

<style>
  
  .side-bar {
    position: fixed;
    height: 100vw;
    width: 200px;
    left: 0%;
    background-color: rgb(197, 192, 192);
    top: 236px;
    border-right: solid 6px black;
    z-index: 0;
  }
  .Carte {
    position: fixed;
    top: 60px;
    left: 20%;
    height: 140px;
    z-index: 1;
  }
  .h1 {
    position: fixed;
    top: 60px;
    left: 40%;
    z-index: 1;
    border: solid 3px rgb(0, 0, 0);
  }
  .banner {
    position: absolute;
    top: 0;
    left: 0;
    filter: contrast(75%) brightness(100%);
    background-image: url("../Poze/Fundal.jpg");
    border-bottom: 6px solid rgb(3, 3, 3);
    width: 100%;
    height: 230px;
    z-index: 1;
  }
</style>
