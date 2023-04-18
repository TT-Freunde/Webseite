<template>
<div>
    <h3>Aktuelles:</h3>
    <h4>Unsere neuen DONIC TT-Platten sind da ! Somit ist unser Ziel von 7 neuen TT-Platten erreicht.</h4>
    <br>
    <div class="row">
        <div v-if="variable.aktuelles_card1_aktiv" class="card h-100 col-md-4">
            <div class="card-body">
                <h4 class="card-title">{{variable.aktuelles_card1_ueberschrift}}</h4>
                <h6 class="card-subtitle text-muted">{{variable.aktuelles_card1_unterueberschrift}}</h6>
            </div>
            <img :src="require(`@/assets/Bilder/Aktuelles/${variable.aktuelles_card1_bild}`)" alt="Photo of sunset">
            <div class="card-body">
                <p class="card-text">{{variable.aktuelles_card1_text}}</p>
            </div>
        </div>


        <div v-if="variable.aktuelles_card2_aktiv" class="card h-100 col-md-4">
            <div class="card-body">
                <h4 class="card-title">{{variable.aktuelles_card2_ueberschrift}}</h4>
                <h6 class="card-subtitle text-muted">{{variable.aktuelles_card2_unterueberschrift}}</h6>
            </div>
            <img :src="require(`@/assets/Bilder/Aktuelles/${variable.aktuelles_card2_bild}`)" alt="Photo of sunset">
            <div class="card-body">
                <p class="card-text">{{variable.aktuelles_card2_text}}</p>
            </div>
        </div>


        <div v-if="variable.aktuelles_card3_aktiv" class="card h-100 col-md-4">
            <div class="card-body">
                <h4 class="card-title">{{variable.aktuelles_card3_ueberschrift}}</h4>
                <h6 class="card-subtitle text-muted">{{variable.aktuelles_card3_unterueberschrift}}</h6>
            </div>
            <img :src="require(`@/assets/Bilder/Aktuelles/${variable.aktuelles_card3_bild}`)" alt="Photo of sunset">
            <div class="card-body">
                <p class="card-text">{{variable.aktuelles_card3_text}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import variables from "@/variables.js";

export default {
  name: "Aktuelles",
  data(){
    return{
      variable: this.variables,
    };
  },
  components: {
  },
  methods: {
  },
  created(){
    this.variable = variables;
  }
}
</script>
