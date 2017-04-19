<template>
<md-dialog ref="PlaybookDialog">
  <md-dialog-title>PlaybookResults</md-dialog-title>
  <md-dialog-content>
    <div class="dice">
      <div :class=" { 'result' : true, 'success' : goal <= result, 'fail' : goal > result }" v-for="result in results">
        <Die :result="result" :class=" { 'die-result' : true, 'success' : goal <= result }" />
      </div>
    </div>
    <div class="playbook">
      <div class="playbook-column" v-for="(playbookColumn, playbookIndex) in playbookColumns">
          <div :class=" { 'playbook-result' : true, 'enabled' : hits > playbookIndex  }"  v-for="playbookResult in playbookColumn.PlaybookResults" @click="closeDialog(playbookResult)">
            <span class="playbook-result-action" v-for="action in playbookResult.PlaybookResultActions"> {{action.Action.Abbreviation}}</span>
          </div>
      </div>
    </div>
  </md-dialog-content>
  <md-dialog-actions>
  </md-dialog-actions>
</md-dialog>
</template>
<script>
import Die from "./Die";

export default {
  name: 'PlaybookDialog',
  components: {
    Die
  },
  props: ["playbookColumns", "results", "open", "onClose", "goal"],
  data() {
    return {
    }
  },
  watch: {
    open(value) {
      if (value)
        this.openDialog();
      else
        this.$refs["PlaybookDialog"].close();

    }
  },
  computed: {
    hits(){
      let hits = 0;

      this.results.forEach(r => {
        if(r >= this.goal)
          hits++;
      }, this);
      return hits;
    }
  },
  methods: {
    openDialog() {
      this.$refs["PlaybookDialog"].open();
    },
    closeDialog(playbookResult) {

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
