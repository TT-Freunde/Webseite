<template>
    <div class="row">
        <div class="col-1"/>
        <div class="col-10">
            <div class="row d-flex">
                <div class="col-lg-6 align-self-center">
                    <h3>{{variable.trainingszeiten_ueberschrift}}</h3>
                    <h3>{{variable.trainingszeiten_unterueberschrift}}</h3>
                    <br>
                    <h4><b>{{variable.trainingszeiten_absatz1_ueberschrift}}</b></h4>
                    <h4>{{variable.trainingszeiten_absatz1_text}}</h4>
                    <br>
                    <h4><b>{{variable.trainingszeiten_absatz2_ueberschrift}}</b></h4>
                    <h4>{{variable.trainingszeiten_absatz2_text}}</h4>
                </div>
                <div class="col-lg-6 d-flex">
                    <img class="w-100 align-self-center" :src="require(`@/assets/Bilder/${variable.trainingszeiten_bild}`)">
                </div>
            </div>
        </div>
        <div class="col-1"/>
    </div>
</template>

<script>
import variables from "@/variables.js";

export default {
  name: "Trainingszeiten",
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