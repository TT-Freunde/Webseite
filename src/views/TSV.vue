<template>
   <div class="row">
        <div class="col-1"/>
            <div class="col-10">
             <br>
             <!--
             <hr>
              <center>   
                <h3>In Planung U19 Tischtennis-Herbst-Runde von Oktober-Dezember 2024</h3>
                <br>
                <h5>Die Aufteilung der Spieler in die 1. und 2. Mannschaft eines Vereins erfolgt auf Basis des quartalsmäßig erhobenen TT-Rating-Wert (kurz QTTR) jedes Spielers.</h5>
                <br>
                </center>
                <h5>TSV Poppenhausen I: Max, Elias, + i.d.R. 2 Spieler aus der 2. Mannschaft</h5> 
                <h5>Link zum Spielplan unserer 1. Jugendmannschaft in 2024 <a href="https://www.mytischtennis.de/clicktt/ByTTV/JRR-23-24/jugend-punktspiele-rr/Bezirksklasse-B-Winter-Gruppe-1-Nord/gruppe/461779/tabelle/gesamt/" target=”_blank”> BTTV Bezirksklasse-B-Winter-Gruppe-1-Nord </a> </h5>
               <br>
                <h5>TSV Poppenhausen II: Milas, Samy, Jaron, Paul G., Leo G., Leo R., Mathis, Lukas.</h5> 
                <h5>Link zum Spielplan unserer 2. Jugendmannschaft in 2024 <a href="https://www.mytischtennis.de/clicktt/ByTTV/JRR-23-24/jugend-punktspiele-rr/Bezirksklasse-C-Winter-Gruppe-1-West/gruppe/462562/tabelle/gesamt/" target=”_blank”> BTTV Bezirksklasse-C-Winter-Gruppe-1-West </a> </h5>
                <br>
                <h5>Jeder Spieler der 2. Mannschaft kann in der 1. Mannschaft eingesetzt werden.</h5>
                <h5> <a href="https://de.wikipedia.org/wiki/Tischtennis-Rating" target=”_blank”> Was ist der QTTR Wert? (Siehe Wikipedia) </a></h5>
                <br>
                <h5>Alle Kids, welche nicht in der BTTV Mannschaft sind, bzw. im BTTV-Tischtennis-Ranking auf etwa 800 TTR-Punkte kommen, können an den Bezirks-Kids-Open (kurz BKO, bzw. Turniere für TT-Einsteiger) teilnehmen. Diese finden in der Regel 1x im Quartal statt.</h5>
                <br> 
                -->               
              <hr>
              <br>
            <h3>Termine in 2025</h3>   
             <br>
               <h5><a href="https://www.bttv.de/unterfranken-nord" target=”_blank”> Siehe BTTV Portal - Bezirk Ufr Nord </a></h5>
                <br>
                <h3> Informationen über Bezirk übergreifende TT-Tuniere des Bayrischer Tischtennis Verband</h3>
                <h5><a href="https://www.bttv.de/turniere/turnierkalender-1" target=”_blank”> Siehe BTTV Portal - Turnierkalender  </a></h5>
              <br>
              <hr>
              <br>
                
                
                <!--
                    <div class="row">
                    <div class="col-1"/>
                    <div class="col-10">
                       <h3> Alle Termine des TT-Bezirks Ufr Nord in 2024</h3>  
                        <br> 
                    <iframe id="spielplan" src="https://www.bttv.de/fileadmin/bttv/media/b02/Termine/BTTV-UfrN__I__231101_-ST__Terminplan_.pdf" title="BTTV Portal- Bezirk Ufr Nord"></iframe>
                    </div>.
                    <div class="col-1"/>
                    </div>
                    <br>
                    -->
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
                      <h3> Spielplan TT-Jugendmannschaften des TSV Poppenhausen </h3>
                      <br>
                    <iframe id="spielplan" src="https://www.mytischtennis.de/clicktt/ByTTV/24-25/verein/102094/TSV-Poppenhausen-1910-e-V-/spielplan/" title="BTTV Portal"></iframe>
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