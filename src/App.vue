<template>
  <v-app>
    <v-content main fluid>
      <div controle>
        <h3 class="animated bounce delay-1s">Tarefas</h3>
        <Options :tasks="tarefas"/>
        <ProgressBar :progress="perConcluido"></ProgressBar>
        <InputTask :tasks="tarefas"></InputTask>
      </div>
      <hr />
      <div>
        <GridTasksAnime v-if="false" :tasks="tarefas"></GridTasksAnime>
        <GridTasks v-if="false" :tasks="tarefas"></GridTasks>
        <GridTasksMove :tasks="tarefas" @refresh="refreshTasks($event)"></GridTasksMove>
      </div>
    </v-content>
  </v-app>
</template>

<script>

import InputTask from '@/components/InputTask'
import ProgressBar from '@/components/ProgressBar'
import GridTasksAnime from '@/components/GridTasksAnime'
import GridTasks from '@/components/GridTasks'
import GridTasksMove from '@/components/GridTasksMove'
import Options from '@/components/Options'

export default {
  name: 'App',

  components: {
    InputTask,
    ProgressBar,
    GridTasksAnime,
    GridTasks,
    GridTasksMove,
    Options
  },
  data: () => ({
    percent: 0,
    tarefas: []
  }),
  computed: {
    perConcluido() {

      const concluidas = this.tarefas.filter(s => (s.status)).length
      return Math.floor((concluidas / this.tarefas.length) * 100) || 0
    }
  },
  watch: {
    tarefas: {
      deep: true,
      handler() {
        localStorage.setItem('tarefas', JSON.stringify(this.tarefas))
      }
    }
  },
  methods: {
    refreshTasks(tasks) {
      this.tarefas = tasks
    }
  },
  mounted() {
    this.tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
  }
}
</script>

<style>
[main] {
  background: linear-gradient(to bottom, #44a08d, #093637);
  font-family: "Quicksand", sans-serif;
  color: white;
}

[controle] {
  margin: 30px;
  font-size: 25px;
  font-weight: 300;
  text-align: center;
  align-items: top;
}
</style>
