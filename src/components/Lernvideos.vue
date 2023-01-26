<template>
<div>
    <h3>Lernvideos:</h3><br>
    <div class="row-fluid">
        <div class="col-12">
            <div class="cover-container">
                <!-- START PANEL -->
                <div v-if="variable.lernvideos_video1_aktiv" class="cover-item">
                    <iframe class="cover-image" :src="variable.lernvideos_video1_source" 
                    title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen></iframe>
                </div>
                <div v-if="variable.lernvideos_video2_aktiv" class="cover-item">
                    <iframe class="cover-image" :src="variable.lernvideos_video2_source" 
                    title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen></iframe>
                </div>
                <div v-if="variable.lernvideos_video3_aktiv" class="cover-item">
                    <iframe class="cover-image" :src="variable.lernvideos_video3_source" 
                    title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen></iframe>
                </div>
                <div v-if="variable.lernvideos_video4_aktiv" class="cover-item">
                    <iframe class="cover-image" :src="variable.lernvideos_video4_source" 
                    title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen></iframe>
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
  name: "Lernvideos",
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
        height: 320px;
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
        width: 540px;
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
            height: 170px !important;
            width: 300px !important;
        }
    }
</style>