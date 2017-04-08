<template>
  <div class="hello">

    <div id="menu">
    </div>
    <h1>{{ msg }}</h1>
    <h1 v-if="selectedCharacter">{{ selectedCharacter.Name }}</h1>
    <h1 v-if="selectedCharacter">{{ selectedCharacter.Influence }}</h1>


    <p style="display: none;"><i class="fa fa-car"></i> Force Font to load.</p>
    <button id="replay">Replay</button>
    <button id="finishActivation">Finish Activation</button>
    <canvas id="demoCanvas" width="1200" height="1200"></canvas>
  </div>
</template>

<script>
import GuildBallGame from "../../../../v2/src/GuildBallGame";

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selectedCharacter : {
          Name: null
      }
    }
  },
  mounted: function(){
    var game = new GuildBallGame("demoCanvas", {
      showCharacter : this.showCharacter
    });
  },
  methods: {
    showCharacter(character){
      this.selectedCharacter = character;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
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

  .momentous {
    background-color: #f7bfbf;
  }

  #menu{
    position: fixed;
    width: 100%;
    background: black;
  }

  #demoCanvas{
    margin-top: 20px;
  }
</style>
