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

                <a class="navbar-brand order-sm-last d-flex align-items-center" href="/">
                    <h5 class="headerUeberschrift"><b>{{variable.navigations_titel}}</b></h5>
                    <img class="d-inline-block align-text-top headerImg" height="50" :src="require(`@/assets/Bilder/${variable.logo_bild}`)">
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
                        <li v-if="variable.rueckblick_aktiv" class="nav-item">
                            <a class="nav-link text-dark btn" href="/rueckblick"><b>Rückblick</b></a>
                        </li>
                        <li v-if="variable.ueberDenTSV_aktiv" class="nav-item">
                            <a class="nav-link text-dark btn" href="/tsv"><b>Allgemeines</b></a>
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

<style lang="scss">
    .headerUeberschrift{
        display: inline-block;
        margin-bottom: 0px !important;
    }

    .headerImg{
        margin-top: 5px !important;
        margin-left: 5px !important;
    }

    @media screen and (max-width: 576px) {
        .headerUeberschrift{
            display: inline-block !important;
        }
    }

    @media screen and (min-width: 576px) and (max-width: 768px) {
        .headerUeberschrift{
            display: none !important;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 992px) {
        .headerUeberschrift{
            display: none !important;
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1200px) {
        .headerUeberschrift{
            display: inline-block !important;
        }
    }

    @media screen and (min-width: 1200px) {
        .headerUeberschrift{
            display: inline-block !important;
        }
    }
</style>
