<template>
<div>
    <h3>Aktuelles vom 20.06.2023:</h3>
    <h4>- 6 Spieler zum Kids Tunier Jahrgang 2011 und jünger in Langendorf am 25.06.2023 gemeldet.</h4>
    <h4>- Anmeldung unserer TT-Jugendmannschaft U19 für die BTTV Herbstsaison 2023 erfolgt.</h4>
    <h4>- Wir suchen einen guten TT-Spieler/-in mit BTTV-Spielbetrieb-Erfahrung, welche/-r sich als Jugendtrainer/-in engagiert und unsere 8-12 Kinder/ Jugendliche auf das nächste Level hebt. Er wird unterstützt durch den TT-Spartenleiter und 2 Senioren aus der Erwachsengruppe.</h4>
    <br>
    <div class="row">
        <div v-if="variable.aktuelles_card1_aktiv" class="card h-100 col-md-4">
            <div class="card-body">
                <h4 class="card-title">{{variable.aktuelles_card1_ueberschrift}}</h4>
                <h6 class="card-subtitle text-muted">{{variable.aktuelles_card1_unterueberschrift}}</h6>
            </div>
            <div class="imageContainer d-flex justify-content-center">
            <img class="cardImage" @click="showFullImage(1)" :src="require(`@/assets/Bilder/Aktuelles/${variable.aktuelles_card1_bild}`)" alt="Photo of sunset">
            </div>
            <div class="card-body">
                <p class="card-text">{{variable.aktuelles_card1_text}}</p>
            </div>
        </div>


        <div v-if="variable.aktuelles_card2_aktiv" class="card h-100 col-md-4">
            <div class="card-body">
                <h4 class="card-title">{{variable.aktuelles_card2_ueberschrift}}</h4>
                <h6 class="card-subtitle text-muted">{{variable.aktuelles_card2_unterueberschrift}}</h6>
            </div>
            <div class="imageContainer d-flex justify-content-center">
            <img class="cardImage" @click="showFullImage(2)" :src="require(`@/assets/Bilder/Aktuelles/${variable.aktuelles_card2_bild}`)" alt="Photo of sunset">
            </div>
            <div class="card-body">
                <p class="card-text">{{variable.aktuelles_card2_text}}</p>
            </div>
        </div>


        <div v-if="variable.aktuelles_card3_aktiv" class="card h-100 col-md-4">
            <div class="card-body">
                <h4 class="card-title">{{variable.aktuelles_card3_ueberschrift}}</h4>
                <h6 class="card-subtitle text-muted">{{variable.aktuelles_card3_unterueberschrift}}</h6>
            </div>
            <div class="imageContainer d-flex justify-content-center">
            <img class="cardImage" @click="showFullImage(3)" :src="require(`@/assets/Bilder/Aktuelles/${variable.aktuelles_card3_bild}`)" alt="Photo of sunset">
            </div>
            <div class="card-body">
                <p class="card-text">{{variable.aktuelles_card3_text}}</p>
            </div>
        </div>
    </div>


    <div class="modal fade" v-if="showModal" tabindex="-1" role="dialog"  @click="hideFullImage">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="hideFullImage">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body d-flex justify-content-center">
                <img :src="require(`@/assets/Bilder/Aktuelles/${imageSrc}`)" class="img-fluid" alt="Modal Image">
            </div>
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
      showModal: false,
      imageSrc: "",
    };
  },
  components: {
  },
  methods: {
    showFullImage(nummer) {
        if(nummer == 1){
            this.imageSrc = this.variable.aktuelles_card1_bild
        } else if(nummer == 2){
            this.imageSrc = this.variable.aktuelles_card2_bild
        } else if(nummer == 3){
            this.imageSrc = this.variable.aktuelles_card3_bild
        }
        this.showModal = true;
    },
    hideFullImage() {
      this.showModal = false;
    }
  },
  created(){
    this.variable = variables;
  }
}
</script>

<style lang="scss">

    .cardImage{
        height: 100%;
        width: auto;
        max-height: 350px !important;
        max-width: 100% !important;
    }

    .cardImage:hover{
        cursor: pointer !important;
    }

    .modal {
        all: initial !important;
        display: block !important;
        position: fixed !important;
        z-index: 1 !important;
        padding-top: 100px !important;
        left: 0 !important;
        top: 0 !important;
        width: 100% !important;
        height: 100% !important;
        overflow: auto !important;
        background-color: rgba(0, 0, 0, 0.9) !important;
    }

    .modal-content {
        all: initial !important;
        margin: auto !important;
        display: block !important;
        max-width: 80% !important;
        max-height: 80% !important;
    }

    .close {
        all: initial !important;
        color: #fff !important;
        float: right !important;
        font-size: 28px !important;
        font-weight: bold !important;
        cursor: pointer !important;
    }

    .close:hover,
    .close:focus {
        color: #bbb !important;
        text-decoration: none !important;
        cursor: pointer !important;
    }
</style>