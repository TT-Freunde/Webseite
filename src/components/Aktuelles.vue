<template>
<div>
    <br>
    <p style="font-size:28px;color:blue;"> Aktuelles vom 01.04.2025:</p>
    <h4>- Vom 12.01. bis ca. Mitte April 2025 findet die Rückrunde Winter 2025 für unsere Jugendmannschaften in der Bezirksklasse A und C statt. </h4>
    <h4>- Wir suchen eine(n) TT-Spieler/-in, der/ die uns unterstützt, die Fähigkeiten unserer Kinder und Jugendlichen im Tischtennisspiel zu erweitern.</h4>
    <h4>- Wir suchen eine(n) TT-Spieler/-in, der/ die unsere BKA U19 Jugend - Mannschaft (5 Spieler) anleitet. </h4>
    <h4>- Da wir i.d.R. immer eine TT-Platte zwischen 18:30 - etwa 20:00 Uhr frei haben, sind auch Gastspieler anderer Vereine willkommen.</h4>
     <br>
    <h4>- Link zum Winter-Spielplan unserer 1. Jugendmannschaft in 2025 <a href="https://www.mytischtennis.de/clicktt/ByTTV/JRR-24-25/jugend-punktspiele-rr/Jugend-19-Bezirksklasse-A-Winter-Bayerischer-TTV-Unterfranken-Nord-/gruppe/486098/tabelle/gesamt/" target=”_blank”> BTTV Bezirksklasse-A-Winter-Gruppe-1-Nord </a> </h4>
    <h4>- Link zum Winter-Spielplan unserer 2. Jugendmannschaft in 2025 <a href="https://www.mytischtennis.de/clicktt/ByTTV/JRR-24-25/jugend-punktspiele-rr/Jugend-19-Bezirksklasse-A-Winter-Bayerischer-TTV-Unterfranken-Nord-/gruppe/486098/mannschaft/2940427/TSV-Poppenhausen/infos/" target=”_blank”> BTTV Bezirksklasse-C-Winter-Gruppe-1-West </a> </h4>
     <br>
    <br>
    <h4>- Link zu Informationen über den Spieltag-Ablauf gemäß <a href="https://www.bttv.de/news/data/2018/07/22/so-gehts-richtig-das-braunschweiger-system/" target=”_blank”> Braunschweiger Spiel-System </a> </h4>
    <h4>- Link zu Informationen über  <a href=" https://www.tischtennis.de/mein-sport/spielen/tischtennis-basics.html" target=”_blank”> wichtige TT-Grundlagen </a> </h4>
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