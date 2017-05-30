<template>
<md-dialog ref="dialog" @close="onClose">
  <md-dialog-title>{{character.Name}}</md-dialog-title>
  <md-dialog-content>
    <BigCharacter :character="character" />
  </md-dialog-content>
  <md-dialog-actions>
  </md-dialog-actions>
</md-dialog>
</template>
<script>
import BigCharacter from "./BigCharacter";

export default {
  name: 'CharacterDialog',
  components: {
    BigCharacter
  },
  props: ["character", "open"],
  data() {
    return {
    }
  },
  watch: {
    open(value) {
      if (value)
        this.openDialog();
      else
        this.$refs["dialog"].close();

    }
  },
  computed: {

  },
  methods: {
    onClose(){
        this.$emit("onClose", false);
    },
    openDialog() {
      this.$refs["dialog"].open();
    },
    closeDialog(dialog) {
      if (this.onClose)
        this.onClose(playbookResult);

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.die-result {
  display: inline-block;
}

.result {
  font-size: 32px;
  font-weight: bold;
  display: inline-block;
  padding: 3px;
  margin: 2px;
}

.fail {
  background-color: red;
}

.success{
  background-color: green;
}

.playbook-column {
  display: inline-block;
}

.playbook-result {
  border: 1px solid black;
  padding: 6px;
  border-radius: 50px;
  text-align: center;
  width: 50px;
  height: 50px;
}

.playbook-result.momentous{
  border: 3px solid red;

}

.playbook-result.enabled:hover{
  background: red;
  cursor: pointer;
}

.playbook-result.disabled{
  opacity: .5;
}

.playbook-result-action {
  font-weight: bold;
  text-align: center;
  font-size: 14px;
  vertical-align: -webkit-baseline-middle;
}
</style>
