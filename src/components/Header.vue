<template>
    <div class="row">
        <div class="col-md-1"/>
        <div class="col-md-10">
            <nav class="navbar navbar-expand-sm bg-faded" style="padding: 0px">
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#nav-content"
                    aria-controls="nav-content"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <a class="navbar-brand order-sm-last" href="/">
                    <img class="d-inline-block align-text-top" height="50" src="../assets/Bilder/Fahne.png">
                </a>

                <div
                    class="collapse navbar-collapse justify-content-start"
                    id="nav-content">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link text-dark btn" href="/"><b>Startseite</b></a>
                        </li>
                        <li v-if="variable.trainingszeiten_aktiv" class="nav-item">
                            <a class="nav-link text-dark btn" href="/#trainingszeiten"><b>Trainingszeiten</b></a>
                        </li>
                        <li v-if="variable.aktuelles_aktiv" class="nav-item">
                            <a class="nav-link text-dark btn" href="/#aktuelles"><b>Aktuelles</b></a>
                        </li>
                        <li v-if="variable.bilder_aktiv" class="nav-item">
                            <a class="nav-link text-dark btn" href="/#bilder"><b>Bilder</b></a>
                        </li>
                        <li v-if="variable.lernvideos_aktiv" class="nav-item">
                            <a class="nav-link text-dark btn" href="/#lernvideos"><b>Lernvideos</b></a>
                        </li>
                        <li v-if="variable.kontakt_aktiv" class="nav-item">
                            <a class="nav-link text-dark btn" href="/#kontakt"><b>Kontakt</b></a>
                        </li>
                        <li v-if="variable.ueberDenTSV_aktiv" class="nav-item">
                            <a class="nav-link text-dark btn" href="/tsv"><b>Über den TSV</b></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="col-md-1"/>
    </div>
</template>


<script>
import variables from "@/variables.js";

export default {
  name: "HomeView",
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
