<template>
  <div>
    <MainMenu></MainMenu>
    <BannerComponent></BannerComponent>

    <h2 style="text-align: center">Destinos</h2>
    <div class="viajes">
      <div @click="goToDestino(destino.id)" v-for="destino in destinos" :key="destino.id" class="card" >
        <div class="component-img">
          <img :src="destino.imagen" alt="" class="image-card" />
          <h4 class="name-card-float">{{ destino.nombre }}</h4>
        </div>
        <div class="component-detail">
          <p>Desde Bogotá</p>
          <h3>{{ pesoCOL(destino.precio) }}</h3>
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

  data() {
    return {
      destinos: [],
    };
  },

  methods: {
    getAllDestinos: async function () {
      let url =
        "https://cobuses.com.co/APIV2/model/destinos.php?dato=getalldestinos";
      let vue = this;
      await this.axios
        .get(url)
        .then(function (response) {
          console.log("ESTOS SON LOS DATOS");
          console.log(response.data);
          console.log("STATUS");
          console.log(response.status);
          vue.destinos = response.data;
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          console.log("Proceso terminado");
        });
    },

    pesoCOL: function (numero) {
      return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
      }).format(numero);
    },

    goToDestino: function(idDestino){
      console.log(idDestino);
      this.$router.push({name: 'DestinoView', params: {id: idDestino}})
    }
  },

  created: function () {
    this.getAllDestinos();
  },
};
</script>

<style scope>
.viajes {
  height: 700px;
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;
}

.card {
  display: flex;
  flex-direction: column;
  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.component-img {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  flex-grow: 2;
}

.image-card {
  height: 100%;
  width: 100%;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  object-position: center center;
}

.name-card-float {
  position: absolute;
  bottom: 5px;
  left: 1rem;
  color: #fff;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 9999px;
}

.component-detail {
  flex-grow: 1;
  padding: 1rem;
}
</style>
