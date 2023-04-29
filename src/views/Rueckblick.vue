<template>
    <div class="row">
        <div class="col-1"/>
        <div class="col-10">
            <br>
            <div class="d-flex justify-content-center">
                <h1>Rückblick</h1>
            </div>
            <br>
            <div v-for="rueckblickCard in variable.rueckblick_cards" :key="rueckblickCard.ueberschrift" class="card">
                <div class="card-body row">
                    <div class="col-md-8">
                    <h4 class="card-title">{{rueckblickCard.ueberschrift}}</h4>
                    <h6 class="card-subtitle text-muted">{{rueckblickCard.unterueberschrift}}</h6>
                    <p class="card-text">{{rueckblickCard.text}}</p>
                    </div>
                    <div class="col-md-4 d-flex justify-content-center">
                        <img :src="require(`@/assets/Bilder/Rueckblick/${rueckblickCard.bild}`)" alt="Photo of sunset">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-1"/>
    </div>
    <TSVGruss/>
</template>

<script>
import TSVGruss from "../components/TSVGruss.vue";
import variables from "@/variables.js";

export default {
  name: "TSV",
  data(){
    return{
        variable: this.variables,
    };
  },
  components: {
    TSVGruss,
  },
  methods: {

  },
  created(){
    this.variable = variables;
  }
}
</script>

<style lang="scss">
    .card{
        margin-bottom: 10px;
    }

    .card img{
        max-height: 150px;
        max-width: 100%;
    }
</style>