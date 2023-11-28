<template>
   <div class="row">
        <div class="col-1"/>
            <div class="col-10">
             <br>                
             <br>
             <hr>
             <center>   
                <h3> Planung der Tischtennis-Rückrunde von Januar - Ende März 2024</h3>
                <br>
                <h5> Für die Planung ist es wichtig, dass wir von den Mannschaftsspielern und Ihren Eltern die Zusage haben, dass Ihr bis mindestens April 2024 für den TT- Spielbetrieb zur Verfügung steht.</h5>
                <br>
                <h5> Für die Rückrunde werden wir zwei Mannschaften melden, so dass unsere TT-Kids öfters Gelegenheit erhalten sich mit ähnlich starken Spielern zu messen. Das bedeutet, jede Mannschaft hat wieder 4 Heimspiele und 4 Auswärtsspiele. Die Auswärtsspiele werden durch die Heimmannschaft festgelegt und können an den Tagen von Montag bis Samstag (ab 17:30 Uhr/ ab 10:00 Uhr) stattfinden.</h5>
                <h5> Unsere Heimspiele werden immer donnerstags um 17:30 Uhr beginnen. Aktuell sind 11 Kids beim BTTV gemeldet und spielberechtigt. Wir gehen davon aus, dass ein Spieler auf max. 6-7 Einsätze  innerhalb dieser 3 Monate kommt.</h5>
                <h5>Da ein Spieltag mit 3 oder 4 Spieler bestritten wird, können wir mit der geplanten Mannschaft auch Krankheits-Ausfälle recht gut kompensieren.</h5> 
                <h5>Wir planen aktuell mit folgender BTTV Mannschaft: 1. Max, 2. Elias, 3. Milas, 4. Leo G., 5. Paul, 6. Leo R., 7. Samy, 8. Mathis, 9. Jaron, 10. Alexander, 11. Lukas</h5> 
                <h5>Alle Kids, welche nicht in der BTTV Mannschaft sind, bzw. im BTTV-Tischtennis-Ranking auf etwa 800 TTR-Punkte kommen, können an den Kids-Open-Turnieren (Turniere für TT-Einsteiger) teilnehmen. Diese finden in der Regel 1x im Quartal statt.</h5>
                <br>
                <h5>Die  Mannschaft, das "Neueinsteiger"-Team, bzw. das Kids-Open-Team wird durch die TT-Coaches von Zeit zur Zeit neu besetzt.</h5>
                </center>
                <hr>
                <br>
                    <div class="row">
                    <div class="col-1"/>
                    <div class="col-10">
                    <iframe id="spielplan" src="https://www.bttv.de/fileadmin/bttv/media/b02/Termine/BTTV-UfrN__I__231101_-ST__Terminplan_.pdf" title="BTTV Portal- Bezirk Ufr Nord"></iframe>
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
                   <hr> 
                <br>
                    <hr>
                    <div class="d-flex justify-content-center">
                    <img src="../assets/Bilder/Termine1.jpg">
                    </div>
                    <hr>
                    <br>
                    <hr v-if="variable.pdf_bild_anzeige_tsv_aktiv">
                    <br v-if="variable.pdf_bild_anzeige_tsv_aktiv">
                    <PDFBildAnzeige titel="Titel" src="require(`@UfrN_Terminplan_2024.pdf`)" button_text="Button Text" :pdf="true"/>
                    <br v-if="variable.pdf_bild_anzeige_tsv_aktiv">
                    <hr v-if="variable.pdf_bild_anzeige_tsv_aktiv">
                    <br v-if="variable.pdf_bild_anzeige_tsv_aktiv">
                    <br>
                 -->
                <br>
                    <div class="row">
                    <div class="col-1"/>
                    <div class="col-10">
                    <iframe id="spielplan" src="https://www.mytischtennis.de/clicktt/ByTTV/23-24/ligen/Jugend-19-Bezirksklasse-B-Herbst-Gruppe-1-Nordost-Bayerischer-TTV-Unterfranken-Nord-/gruppe/446746/mannschaft/2741056/TSV-Poppenhausen/spielplan/aktuell/" title="BTTV Portal"></iframe>
                    </div>
                    <div class="col-1"/>
                    </div>
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
        width: 110%;
        height: 550px;
    }
</style>