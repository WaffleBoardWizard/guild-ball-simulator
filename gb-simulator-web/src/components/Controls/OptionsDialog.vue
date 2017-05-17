<template>
<div class="option-dialog">
  <div class="message">
    {{message}}
  </div>
  <div class="option" v-for="option in options">
    <md-button @click.native="onOptionClicked(option)" class="md-raised md-primary">{{option}}</md-button>
  </div>
</div>
</template>

<script>
export default {
  name: 'OptionsDialog',
  props: ["message", "options"],
  components: {
  },
  data() {
    return {}
  },
  methods: {
    onOptionClicked(option){
       this.$emit('onOptionClicked', option)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.option-dialog{

}

.option-dialog .message{
  font-size: 22px;
}

.option-dialog .option{
  display: inline-block;
}
</style>
