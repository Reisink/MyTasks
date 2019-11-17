<template>
  <div>
    <transition-group
      class="d-flex align-content-start flex-wrap justify-start"
      enter-active-class="animated rubberBand fast"
      leave-active-class="animated fadeOut"
    >
      <v-card
        dark
        @click="cliqueCard(i)"
        class="ma-4 darken-1"
        v-for="(obj, i) in tasks"
        :key="obj.texto"
        :color="obj.status ? 'success' : 'error'"
      >
        <v-card-actions>
          <v-btn text icon dark @click.stop="cliqueRemover(i)">
            <v-icon center>mdi-close</v-icon>
          </v-btn>
        </v-card-actions>
        <v-card-subtitle :class="obj.status ? 'task-finish-f' : 'task-pend-f'">{{ obj.texto }}</v-card-subtitle>
      </v-card>
    </transition-group>
  </div>
</template>

<script>

export default {

  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  methods: {
    cliqueCard(e) {
      this.tasks[e].status = !this.tasks[e].status;
    },
    cliqueRemover(e) {
      this.tasks.splice(e, 1)
    }
  }

}
</script>

<style>
.task-pend-f {
  font-size: 30px;
}
.task-finish-f {
  text-decoration: line-through;
  font-size: 30px;
}

</style>