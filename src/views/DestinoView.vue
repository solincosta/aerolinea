<template>
  
    <div class="contenedor">
      <div class="card-selected">
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

</template>

<script>

export default {

  name: "DestinoView",
  data() {
    return {
      destino: {},
    };
  },

  methods: {
    pesoCOL: function (numero) {
      return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
      }).format(numero);
    },

    getDestinosXId: async function () {
      let url =
        "https://cobuses.com.co/APIV2/model/destinos.php?dato=getdestinoxid&id=" +
        this.$route.params.id;
      let vue = this;
      await this.axios
        .get(url)
        .then(function (response) {
          console.log(response.data);
          vue.destino = response.data[0];
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          console.log("Proceso terminado");
        });
    },
  },

  created: function () {
    this.getDestinosXId();
  },
};
</script>

<style scope>
.contenedor {
  width: 80%;
  margin: 1rem auto;
}




</style>
