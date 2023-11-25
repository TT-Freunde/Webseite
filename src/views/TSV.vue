<template>
   <div class="row">
        <div class="col-1"/>
            <div class="col-10">
             <br>                
             <br>
             <hr>
             <center>   
                <h3>Tischtennis U19 Saisonplanung Januar - März 2024 im Bezirk Ufr.-Nord</h3>
                <br>
                <h5>Die Rückrunde der TT-Saison findet von Mitte Januar bis Ende März 2024 statt. </h5>
                <h5> Für die Rückrund werden wir zwei Mannschaften melden, so dass unsere Kids häufiger zum Einsatz kommen. </h5>
                <br>
                <h5> Das bedeutet, jede Mannschaft hat wieder 4 Heimspiele und und 4 Auswärtsspiele.  </h5>
                <h5> Die Heimspiele werden donnerstags um 17:30 Uhr angesetzt werden. Die Auswärtsspiele werden durch die Heimmannschaft festgelegt und können an den Tagen von Montag bis Samstag (ab 17:30 Uhr/ ab 10:00 Uhr) stattfinden. </h5>
                <h5> Aktuell sind 11 Kids beim BTTV gemeldet und spielberechtigt. Wir gehen somit davon aus, dass ein Spieler auf max. 7 Einsätze in dieser Zeit kommt. </h5>
                <h5> Da ein Spieltag mit 3 oder 4 Spieler bestritten wird, können wir auch Ausfälle recht gut kompensieren. </h5>
                <br>
                <h5> Wir planen aktuell mit folgender BTTV Mannschaft A: 1. Max, 2. Elias, 3. Milas, 4. Leo G., 5. Paul, 6. Leo R., 7. Samy, 8. Mathis, 9. Jaron, 10. Alexander, 11. Lukas  </h5>  
                <br>
                <h5> Alle Kids, welche nicht in der BTTV Mannschaft sind, bzw. im BTTV Tischtennis-Ranking auf etwa 800 TTR-Punkte kommen, können an den, 1x im Quartal stattfindenden, Kids-Open-Tunieren mitspielen.  </h5>          
                <h5> Das "Neueinsteiger"-Team, bzw. Kids-Open-Team wird durch die TT-Betreuer von z. Zt. neu besetzt.  </h5> 
                <h5> Das Ranking BTTV Spieler findet Ihr auf folgender myTischtennnis.de WEB-Seite. Die TTR Punkt können nur mit der Premium Mitgliedschaft myTischtennnis.de - Portal eingesehen werden. Kosten: 15,-€ im Jahr</h5>  
                </center>
                <hr>
                <br>
                 <br>
                    <div class="row">
                    <div class="col-1"/>
                    <div class="col-10">
                    <iframe id="spielplan" src="https://www.mytischtennis.de/clicktt/ByTTV/23-24/ligen/Jugend-19-Bezirksklasse-B-Herbst-Gruppe-1-Nordost-Bayerischer-TTV-Unterfranken-Nord-/gruppe/446746/mannschaft/2741056/TSV-Poppenhausen/spielplan/aktuell/" title="BTTV Portal"></iframe>
                    </div>
                    <div class="col-1"/>
                    </div>
                    <br>
                      <!--
                    <hr v-if="variable.pdf_bild_anzeige_tsv_aktiv">
                    <br v-if="variable.pdf_bild_anzeige_tsv_aktiv">
                    <PDFBildAnzeige :titel="variable.pdf_bild_anzeige_tsv_titel" :src="variable.pdf_bild_anzeige_tsv_src" :button_text="variable.pdf_bild_anzeige_tsv_button" :pdf="variable.pdf_bild_anzeige_tsv_pdf" v-if="variable.pdf_bild_anzeige_tsv_aktiv" id="pdfbildanzeige"/>
                    <br v-if="variable.pdf_bild_anzeige_tsv_aktiv">
                    <hr v-if="variable.pdf_bild_anzeige_tsv_aktiv">
                    <br v-if="variable.pdf_bild_anzeige_tsv_aktiv">
                    <br>
                    <div class="d-flex justify-content-center">
                    <img src="../assets/Bilder/TSVPoppenhausenLogo.jpeg">
                    </div>
                -->
                <br>              
            </div>
        <div class="col-1"/>
    </div> 
    
    <TSVGruss/>
    
</template>

<script>
import TSVGruss from "../components/TSVGruss.vue";
import PDFBildAnzeige from "../components/PDF_BildAnzeige.vue";

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
#spielplan{
        width: 100%;
        height: 500px;
    }
</style>