<template>
<div>
    <h3>Bilder: "Kids Open im Mai 2023 in der Werntalhalle mit 61 Teilnehmern aus 10 Vereinen des TT-Bezirks Ufr. Nord"</h3><br>
    <div class="row-fluid">
        <div class="col-12">
            <div class="cover-container">
                <!-- START PANEL -->
                <div v-if="variable.bilder_bild1_aktiv" class="cover-item">
                    <img class="cover-image" :src="require(`@/assets/Bilder/${variable.bilder_bild1_source}`)">
                </div>
                <div v-if="variable.bilder_bild2_aktiv"  class="cover-item">
                    <img class="cover-image" :src="require(`@/assets/Bilder/${variable.bilder_bild2_source}`)">
                </div>
                <div v-if="variable.bilder_bild3_aktiv" class="cover-item">
                    <img class="cover-image" :src="require(`@/assets/Bilder/${variable.bilder_bild3_source}`)">
                </div>
                <div v-if="variable.bilder_bild4_aktiv" class="cover-item">
                    <img class="cover-image" :src="require(`@/assets/Bilder/${variable.bilder_bild4_source}`)">
                </div>
            </div>
        </div>
    </div>
    <p class="wischen">&#171; Scrollen für mehr &#187;</p>
</div>
</template>

<script>
import variables from "@/variables.js";

export default {
  name: "Bilder",
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
    .cover-container {
        height: 300px;
        width: 100%;
        white-space: nowrap;
        overflow-x: scroll;
        overflow-y: hidden;
    }
    .cover-item {
        position: relative;
        display: inline-block;
        margin: 8px 8px;
        box-shadow: 2px 2px 4px #bbb;
        border-top-right-radius: 4px;
        height: 300px;
        vertical-align: bottom;
        background-position: top left;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .cover-image{
        height: 300px;
    }

    .wischen{
        text-align: center;
    }

    @media screen and (max-width: 1000px) {
        .cover-container{
            height: 200px !important;
        }

        .cover-item{
            height: 200px !important;
        }

        .cover-image{
            height: 200px !important;
        }
    }
</style>