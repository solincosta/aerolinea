<template>
  <div class="header">
    <div class="logo-header">
        <img class="logo" src="../assets/aviation-logo.png" alt="">
    </div>
    <nav class="menu-nav">
      <li>RESERVAS</li>
      <li>CHECK-IN</li>
      <li>MIS VIAJES</li>
      <li>INFORMACIÓN</li>
      <li>OFERTAS Y DESTINOS</li>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scope>

.header{
    position: absolute;
    height: 80px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.6);
    opacity: 0.7;
    display: flex;
    justify-content: start;
}

.logo-header{
    width: 20%;
}

.logo{
    width: 100%;
    height: 100%;
}

.menu-nav{
    width: 80%;
    height: 100%;
    display: flex;
}

.menu-nav li{
    color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
    flex-grow: 1;
    font-weight: 700;
    font-size: 1.2rem;
    list-style: none;
}
.menu-nav li:hover{
    background-color: #000;
    color: white;
    cursor: pointer;
}
</style>
