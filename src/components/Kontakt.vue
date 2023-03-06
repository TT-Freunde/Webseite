<template>
    <div>
        <h3>Kontakt:</h3>
        <br>
        <h4>{{variable.kontakt_name}}</h4>
        <h4>Tel: <a class="tel" :href="'tel:' + variable.kontakt_tel">{{variable.kontakt_tel}}</a></h4>
        <h4>Email: <a class="mail" :href="'mailto:' + variable.kontakt_mail">{{variable.kontakt_mail}}</a></h4>
    </div>
</template>

<script>
import variables from "@/variables.js";

export default {
  name: "Kontakt",
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