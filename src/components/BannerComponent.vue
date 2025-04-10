<template>
  <div class="container-banner">
    <video class="banner" autoplay loop muted playsinline>
        <source src="../assets/avion.mp4" type="video/mp4">
    </video>

    <div class="overlay">
        <h2 class="overlay-text">Aerolinea CBN</h2>
        <h5 class="overlay-text">Experimenta un vuelo con tranquilidad</h5>
        <button class="btn-white">Suscribirse</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scope>
.banner{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 600px;
    object-fit: cover;
    z-index: -1;
}

.overlay{
    position: absolute;
    top: 9rem;
    left: 7rem;
    z-index: 10;
    width: 40%;
    text-align: center;
    color: white;
    font-size: 2rem;
    padding: 4rem 1rem;
    background-color: rgba(0, 0, 0, 0.6);
    box-shadow: 5px 10px 5px 10px rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    opacity: 0.7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
}

.overlay-text{
    font-weight: 100;
}

.btn-white{
    padding: 1rem;
    border-radius: 9999px;
    border: none;
    font-size: 1.2rem;
    font-weight: 500;
    color: #000;
    background-color: #FFF;
}

.btn-white:hover{
    cursor: pointer;
    color: #FFF;
    background-color: #000;
}


</style>