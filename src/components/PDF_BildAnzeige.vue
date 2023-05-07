<template>
<div>
    <h3>{{titel}}:</h3>
    <br>
    <div class="d-flex justify-content-center">
      <button v-if="pdf" type="button" class="btn btn-primary" @click="openPDF('/' + this.src)">{{button_text}}</button>
      <button v-if="!pdf" type="button" class="btn btn-primary" @click="openPDF(require('@/assets/' + this.src))">{{button_text}}</button>
    </div>
</div>
</template>

<script>
export default {
  name: "PDF_BildAnzeige",
  data(){
    return{
      
    };
  },
  components: {
  },
  methods: {
    openPDF(url){
      window.open(url, '_blank');
    },
  },
  props: {
    titel: "",
    src: "",
    button_text: "",
    pdf: false,
  },
  created(){
    
  }
}
</script>