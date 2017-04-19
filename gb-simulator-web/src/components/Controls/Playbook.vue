<template>
  <div class="playbook">
    <div class="playbook-column" v-for="(playbookColumn, playbookIndex) in playbook">
        <div :class=" { 'playbook-result' : true}"  v-for="playbookResult in playbookColumn.PlaybookResults">
          <span class="playbook-result-action" v-for="action in playbookResult.PlaybookResultActions"> {{action.Action.Abbreviation}}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Playbook',
  props: ['playbook'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.playbook-column {
  display: inline-block;
}

.playbook-result {
  border: 1px solid black;
  padding: 6px;
  border-radius: 18px;
  text-align: center;
  width: 36px;
  height: 36px;
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
  text-align: center;
  font-size: 9px;
  font-weight: bolder;
  vertical-align: -webkit-baseline-middle;
}

.playbook{
  display: inline-block;
}
</style>
