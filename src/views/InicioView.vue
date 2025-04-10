<template>
  <div>
    <MainMenu></MainMenu>
    <BannerComponent></BannerComponent>

    <div class="viajes">
        <div class="card">
            <div class="component-img">
                <img src="" alt="" class="image-card">
                <h4 class="name-card-float"></h4>
            </div>
            <div class="component-detail">
                <p>Desde Bogotá</p>
                <h3>$950.000</h3>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import MainMenu from "@/components/MainMenu.vue";
import BannerComponent from "@/components/BannerComponent.vue";

export default {
  components: {
    MainMenu,
    BannerComponent,
  },
};
</script>

<style></style>
