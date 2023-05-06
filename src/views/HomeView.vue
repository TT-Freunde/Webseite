<template>
  <div class="home">
    <!-- Titel -->
    <div class="d-flex justify-content-center">
      <h1 class="text-center">{{ variable.startseite_ueberschrift }}</h1>
    </div>

    <!-- Titelbild -->
    <div class="row">
      <div class="col-md-1"/>
      <div class="col-md-10">
        <img class="w-100" :src="require(`@/assets/Bilder/${variable.startseiten_bild}`)">
      </div>
      <div class="col-md-1"/>
    </div>
    <br v-if="variable.motivation_aktiv">
    <br v-if="variable.motivation_aktiv">
    <UnsereMotivation v-if="variable.motivation_aktiv" id="unsereMotivation"/>
    <br v-if="variable.motivation_aktiv">
    <hr v-if="variable.motivation_aktiv">
    <br v-if="variable.trainingszeiten_aktiv">
    <Trainingszeiten v-if="variable.trainingszeiten_aktiv" id="trainingszeiten"/>
    <br v-if="variable.trainingszeiten_aktiv">
    <hr v-if="variable.trainingszeiten_aktiv">
    <br v-if="variable.aktuelles_aktiv">
    <div v-if="variable.aktuelles_aktiv" class="row">
      <div v-if="variable.aktuelles_aktiv" class="col-1"/>
      <div v-if="variable.aktuelles_aktiv" class="col-10">
        <Aktuelles v-if="variable.aktuelles_aktiv" id="aktuelles"/>
      </div>
      <div v-if="variable.aktuelles_aktiv" class="col-1"/>
    </div>
    <br v-if="variable.aktuelles_aktiv">
    <hr v-if="variable.aktuelles_aktiv">
    <br v-if="variable.pdf_bild_anzeige_home_aktiv">
    <div v-if="variable.pdf_bild_anzeige_home_aktiv" class="row">
      <div v-if="variable.pdf_bild_anzeige_home_aktiv" class="col-1"/>
      <div v-if="variable.pdf_bild_anzeige_home_aktiv" class="col-10">
        <PDFBildAnzeige :titel="variable.pdf_bild_anzeige_home_titel" :src="variable.pdf_bild_anzeige_home_src" :button_text="variable.pdf_bild_anzeige_home_button" :pdf="variable.pdf_bild_anzeige_home_pdf" v-if="variable.pdf_bild_anzeige_home_aktiv" id="pdfbildanzeige"/>
      </div>
      <div v-if="variable.pdf_bild_anzeige_home_aktiv" class="col-1"/>
    </div>
    <br v-if="variable.pdf_bild_anzeige_home_aktiv">
    <hr v-if="variable.pdf_bild_anzeige_home_aktiv">
    <br v-if="variable.bilder_aktiv">
    <div v-if="variable.bilder_aktiv" class="row">
      <div v-if="variable.bilder_aktiv" class="col-1"/>
      <div v-if="variable.bilder_aktiv" class="col-10">
        <Bilder v-if="variable.bilder_aktiv" id="bilder"/>
      </div>
      <div v-if="variable.bilder_aktiv" class="col-1"/>
    </div>
    <br v-if="variable.bilder_aktiv">
    <hr v-if="variable.bilder_aktiv">
    <br v-if="variable.lernvideos_aktiv">
    <div v-if="variable.lernvideos_aktiv" class="row">
      <div v-if="variable.lernvideos_aktiv" class="col-1"/>
      <div v-if="variable.lernvideos_aktiv" class="col-10">
        <Lernvideos v-if="variable.lernvideos_aktiv" id="lernvideos"/>
      </div>
      <div v-if="variable.lernvideos_aktiv" class="col-1"/>
    </div>
    <br v-if="variable.lernvideos_aktiv">
    <hr v-if="variable.lernvideos_aktiv">
    <br v-if="variable.kontakt_aktiv">
    <div v-if="variable.kontakt_aktiv" class="row">
      <div v-if="variable.kontakt_aktiv" class="col-1"/>
      <div v-if="variable.kontakt_aktiv" class="col-10">
        <Kontakt v-if="variable.kontakt_aktiv" id="kontakt"/>
      </div>
      <div v-if="variable.kontakt_aktiv" class="col-1"/>
    </div>
    <TSVGruss v-if="variable.tsvGruss_aktiv"/>
  </div>
</template>

<script>
import UnsereMotivation from "../components/UnsereMotivation.vue";
import Trainingszeiten from "../components/Trainingszeiten.vue";
import Aktuelles from "../components/Aktuelles.vue";
import Bilder from "../components/Bilder.vue";
import Lernvideos from "../components/Lernvideos.vue";
import Kontakt from "../components/Kontakt.vue";
import TSVGruss from "../components/TSVGruss.vue";
import PDFBildAnzeige from "../components/PDF_BildAnzeige.vue";

import variables from "@/variables.js";

export default {
  name: "HomeView",
  data(){
    return{
      variable: this.variables,
    };
  },
  components: {
    UnsereMotivation,
    Trainingszeiten,
    Aktuelles,
    Bilder,
    Lernvideos,
    Kontakt,
    TSVGruss,
    PDFBildAnzeige,
  },
  methods: {
    

  },
  created(){
    this.variable = variables;
  }
}
</script>

<style lang="scss">
  .tel{
    color: black;
  }
    .mail{
    color: black;
  }
</style>
