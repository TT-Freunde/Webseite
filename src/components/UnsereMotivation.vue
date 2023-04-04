<template>
<div>
    <div class="row">
      <div class="col-1"/>
      <div class="col-10">
        <h3>{{variable.motivation_text_ueberschrift}}</h3>
        <br>
        <p class="h4">{{variable.motivation_text_absatz1}} <b><u>{{variable.motivation_text_absatz1_fett}}</u></b></p>
        <br>
        <p class="h4">{{variable.motivation_text_absatz2_1}}
          <br>{{variable.motivation_text_absatz2_2}}
        </p>
        <br>
        <p class="h4">
          {{variable.motivation_text_absatz3_1}}
        </p>
        <br>
        <p class="h4">
          {{variable.motivation_text_absatz4_1}}
        </p>
      </div>
      <div class="col-1"/>
    </div>
</div>
</template>

<script>
import variables from "@/variables.js";

export default {
  name: "UnsereMotivation",
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