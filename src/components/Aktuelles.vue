<template>
<div>
    <h3>Aktuelles:</h3>
    <h4>- Werntalhalle Poppenhausen "Tag der offenen Tür": Am Samstag, den 29.04.2023 zwischen 14:00- 16:00 Uhr besteht die Möglichkeit die Tischtennisabteilung kennen zu lernen und TT zu spielen.</h4>
    <h4>- Aktuell finden Planungen statt, eine TT-Jugendmannschaft für die BTTV Herbstsaison 2023 zu melden.</h4>
    <h4>- Weitere Infos zum Vereinsrecht:</h4>
    <a href="https://www.bmj.de/SharedDocs/Publikationen/DE/Leitfaden_Vereinsrecht.html">Bundesministerium der Justiz: Leitfaden Vereinsrecht</a>
    <br>
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
