<template>
<div>
    <h3>Aktuelles:</h3>
    <h4>- TT-Mini-Meisterschaft mit ca. 30-40 Kids aus dem BTTV Bezirk-Nord am 13.05.2023 zwischen 11:00-14:00 Uhr in der Werntalhalle.</h4>
    <h4>- Aktuell finden Planungen statt, eine TT-Jugendmannschaft für die BTTV Herbstsaison 2023 zu melden.</h4>
    <h4>- Wir suchen einen guten TT-Spieler/-in mit BTTV-Spielbetrieb-Erfahrung, welche/-r sich als Jugendtrainer/-in engagiert und unsere 8-12 Kinder/ Jugendliche auf das nächste Level hebt. Er wird unterstützt durch den TT-Spartenleiter und 2 Senioren aus der Erwachsengruppe.</h4>
    <h4>- Infos zum Vereinsrecht:</h4>
    <a href="https://www.bmj.de/SharedDocs/Publikationen/DE/Leitfaden_Vereinsrecht.html">Bundesministerium der Justiz: Leitfaden Vereinsrecht</a>
    <br>
    <a href="https://auren.com/de/blog/verein-ohne-vorstand-wann-wird-das-fuer-den-verein-und-den-alt-vorstand-zum-problem/">Rechteberatung Auren: Verein ohne Vorstand</a>
    <br>
    <a href="https://www.gem-gruppe.de/newsarchiv-artikel/praxisfall-verein-ohne-vorstand">Rechteberatung gem-gruppe: Praxisfall Verein ohne Vorstand</a>
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
