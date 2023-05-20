<template>
    <div class="row">
        <div class="col-1"/>
        <div class="col-10">
            <br>
            <div class="d-flex justify-content-center">
                <h1>Turn- und Sportverein 1910 Poppenhausen e. V.</h1>
            </div>
            <div class="d-flex justify-content-center">
                <img src="../assets/Bilder/TSVPoppenhausenLogo.jpeg">
            </div>
            <br>
                        <hr>
            <center>
            <h3>Aktuelles:</h3>
            <h4>Ergebnis nach Neuwahlen: 1. Vorstand - Corinna Pabst, 2. Vorstand - Markus Pfülb, 3. Vorstand in der Funktion des Kassier - Andrea Helbig.</h4>
            </center>
            <hr>
            <br>
            <h6> Die neue offizielle Webseite des TSV Poppenhausen 1910 e.V. - welche unter einer eigenen WEB-Adresse erscheinen wird - befindet sich zur Zeit in der Überarbeitung. Bis dahin sind auf dieser interims Seite die Sparten des TSV und Kontakte gelistet.</h6>
            <br>
            <hr v-if="variable.pdf_bild_anzeige_tsv_aktiv">
            <br v-if="variable.pdf_bild_anzeige_tsv_aktiv">
            <PDFBildAnzeige :titel="variable.pdf_bild_anzeige_tsv_titel" :src="variable.pdf_bild_anzeige_tsv_src" :button_text="variable.pdf_bild_anzeige_tsv_button" :pdf="variable.pdf_bild_anzeige_tsv_pdf" v-if="variable.pdf_bild_anzeige_tsv_aktiv" id="pdfbildanzeige"/>
            <br v-if="variable.pdf_bild_anzeige_tsv_aktiv">
            <hr v-if="variable.pdf_bild_anzeige_tsv_aktiv">
            <br v-if="variable.pdf_bild_anzeige_tsv_aktiv">
            <div class="d-flex justify-content-center">
                <h3>Wir freuen uns über rund 150 aktive Mitglieder in folgenden Gruppen:</h3>
            </div>
            <br>
            <h3>Gymnastik:</h3>
            <div class="row">
                <div class="col-lg-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4 class="card-title">Männer/ Senioren 1 & 2 </h4>
                        </div>
                        <img src="../assets/Bilder/Sportarten/GymnastikMaenner.jpg" alt="Photo of sunset">
                        <div class="card-body">
                            <p class="card-text"><b>Kontakt:</b> Thomas Hohmann</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4 class="card-title">Frauen/ SeniorInnen 1 & 2 </h4>
                        </div>
                        <img src="../assets/Bilder/Sportarten/Gymnastik.jpg" alt="Photo of sunset">
                        <div class="card-body">
                            <p class="card-text"><b>Kontakt:</b> Anika Mahlmeister</p>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <hr>
            <br>
            <h3>Garde:</h3>
            <div class="row">
                <div class="col-lg-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4 class="card-title">Gruppe 1</h4>
                        </div>
                        <img src="../assets/Bilder/Sportarten/Garde.jpg" alt="Photo of sunset">
                        <div class="card-body">
                            <p class="card-text">Mädchen, bzw. junge Frauen</p>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <hr>
            <br>
            <h3>Fußball:</h3>
            <h5>TSV Poppenhausen Jugend:</h5>
            <div class="row">
                <div class="col-lg-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4 class="card-title">U7</h4>
                        </div>
                        <img src="../assets/Bilder/Sportarten/TSVPoppenhausenFussball.jpg" alt="Photo of sunset">
                        <div class="card-body">
                            <p class="card-text"><b>Kontakt:</b> Werner Bauer</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4 class="card-title">U9</h4>
                        </div>
                        <img src="../assets/Bilder/Sportarten/TSVPoppenhausenFussball.jpg" alt="Photo of sunset">
                        <div class="card-body">
                            <p class="card-text"><b>Kontakt:</b> Sven Rückert, Marco Cekys</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4 class="card-title">U11</h4>
                        </div>
                        <img src="../assets/Bilder/Sportarten/TSVPoppenhausenFussball.jpg" alt="Photo of sunset">
                        <div class="card-body">
                            <p class="card-text"><b>Kontakt:</b> Dieter Mahlmeister, Robert Bordas, Toni Lehmeyer</p>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <h5>JFG Werngrund (Zusammenschluss von Poppenhausen, Maibach, Kronungen, Oberwerrn, Niederwerrn):</h5>
            <div class="row">
                <div class="col-lg-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4 class="card-title">U13</h4>
                        </div>
                        <img src="../assets/Bilder/Sportarten/JFGWerngrund.jpg" alt="Photo of sunset">
                        <div class="card-body">
                            <p class="card-text"><b>Kontakt:</b> </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4 class="card-title">U15</h4>
                        </div>
                        <img src="../assets/Bilder/Sportarten/JFGWerngrund.jpg" alt="Photo of sunset">
                        <div class="card-body">
                            <p class="card-text"><b>Kontakt:</b> Jürgen Zeissner, Ricky Müller</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4 class="card-title">U19</h4>
                        </div>
                        <img src="../assets/Bilder/Sportarten/JFGWerngrund.jpg" alt="Photo of sunset">
                        <div class="card-body">
                            <p class="card-text"><b>Kontakt:</b> Christian Schüllner</p>
                        </div>
                    </div>
                </div>
            </div>
            <br>

            <h5>SG Poppenhausen / Kronungen (Männer):</h5>
            <div class="row">
                <div class="col-lg-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4 class="card-title">1. Mannschaft</h4>
                        </div>
                        <img src="../assets/Bilder/Sportarten/TSVPoppenhausenFussball.jpg" alt="Photo of sunset">
                        <div class="card-body">
                            <p class="card-text"><b>Kontakt:</b> <a target="_blank" href="https://www.facebook.com/TsvPoppenhausen">Facebook</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4 class="card-title">2. Mannschaft</h4>
                        </div>
                        <img src="../assets/Bilder/Sportarten/TSVPoppenhausenFussball.jpg" alt="Photo of sunset">
                        <div class="card-body">
                            <p class="card-text"><b>Kontakt:</b> <a target="_blank" href="https://www.facebook.com/TsvPoppenhausen">Facebook</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <h5>TSV Poppenhausen (Männer):</h5>
            <div class="col-lg-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4 class="card-title">Erwachsene ab 32</h4>
                        </div>
                        <img src="../assets/Bilder/Sportarten/TSVPoppenhausenFussball.jpg" alt="Photo of sunset">
                        <div class="card-body">
                            <p class="card-text"><b>Kontakt:</b> Dieter Mahlmeister</p>
                        </div>
                    </div>
                </div>
            <br>
            <hr>
            <br>
            <h3>Tennis:</h3>
            <div class="row">
                <div class="col-lg-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4 class="card-title">Männer</h4>
                        </div>
                        <img src="../assets/Bilder/Sportarten/Tennis.jpg" alt="Photo of sunset">
                        <div class="card-body">
                            <p class="card-text"><b>Kontakt:</b> Ralf Haas</p>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <hr>
            <br>
            <h3>Tischtennis:</h3>
            <div class="row">
                <div class="col-lg-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4 class="card-title">Kinder + Jugend</h4>
                        </div>
                        <img src="../assets/Bilder/Sportarten/ueber_TSV_table_tennis.jpg" alt="Photo of sunset">
                        <div class="card-body">
                            <p class="card-text"><b>Kontakt:</b> Lutz Urlau</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4 class="card-title">Jugend + Erwachsene </h4>
                        </div>
                        <img src="../assets/Bilder/Sportarten/ueber_TSV_table_tennis.jpg" alt="Photo of sunset">
                        <div class="card-body">
                            <p class="card-text"><b>Kontakt:</b> Lutz Urlau</p>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <hr>
            <br>
            <h3>Korbball:</h3>
            <div class="row">
                <div class="col-lg-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4 class="card-title">Kinder + Jugend + Frauen </h4>
                        </div>
                        <img src="../assets/Bilder/Sportarten/Korbball.jpg" alt="Photo of sunset">
                        <div class="card-body">
                            <p class="card-text">In Kooperation mit der DJK Maibach, bzw. dem TSV Kützberg</p>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <hr>
            <br>
            <h3>Kinderturnen:</h3>
            <div class="row">
                <div class="col-lg-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4 class="card-title">Kinder (Bild von Freepik) </h4>
                        </div>
                        <img src="../assets/Bilder/Sportarten/Kinderturnen.jpg" alt="Photo of sunset">
                        <div class="card-body">
                            <p class="card-text"> Kontakt: ? </p>
                        </div>
                    </div>
                </div>
            </div>
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
</style>