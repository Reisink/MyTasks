<template>
  <div>
    <transition-group
      class="d-flex align-content-start flex-wrap justify-start"
      name="slide"
      mode="in-out"
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
        <v-card-subtitle :class="obj.status ? 'task-finish' : 'task-pend'">{{ obj.texto }}</v-card-subtitle>
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

.task-pend {
  font-size: 24px !important;
}
.task-finish {
  text-decoration: line-through;
  font-size: 24px !important;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}

.slide-enter-active {
  animation: slide-in 0.3s ease;
}

.slide-leave-active {
  animation: slide-out 0.5s ease;
}

</style>