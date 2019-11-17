<template>
  <div>
    <transition-group
      class="d-flex align-content-start flex-wrap justify-start"
      name="list-complete"
      mode="in-out"
    >
      <v-card
        dark
        @click="cliqueCard(i)"
        class="ma-4 darken-1 list-complete-item"
        v-for="(obj, i) in tasks"
        :key="obj.texto"
        :color="obj.status ? 'success' : 'error'"
      >
        <v-card-actions>
          <v-btn text icon dark @click.stop="cliqueRemover(i)">
            <v-icon center large>mdi-close</v-icon>
          </v-btn>
          <v-btn class="ml-12" text icon dark @click.stop="cliqueLeft(i)">
            <v-icon center large>mdi-arrow-left-circle</v-icon>
          </v-btn>
          <v-btn class="ml-4" text icon dark @click.stop="cliqueRight(i)">
            <v-icon center large>mdi-arrow-right-circle</v-icon>
          </v-btn>
        </v-card-actions>
        <v-card-subtitle :class="obj.status ? 'task-finish' : 'task-pend'">{{ obj.texto }}</v-card-subtitle>
      </v-card>
    </transition-group>
    <v-btn v-if="false" @click.stop="refreshDev()">
      <v-icon center large>mdi-arrow-right</v-icon>
    </v-btn>
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
    refreshDev() {
      this.tasks = []
      for (let i = 0; i < 10; i++) {
        this.tasks.push({ texto: i, status: false })
      }
    },
    cliqueCard(e) {
      this.tasks[e].status = !this.tasks[e].status;
    },
    cliqueRemover(e) {
      this.tasks.splice(e, 1)
    },
    cliqueLeft(e) {
      this.$emit('refresh', this.moveTask(e, false))
    },
    cliqueRight(e) {
      this.$emit('refresh', this.moveTask(e, true))
    },
    moveTask(e, right) {
      if(e === 0 && !right) return this.tasks

      let _ii, _mi, _mf, _ff

      _ii = right ? e : e - 1
      _mi = right ? e : e - 1
      _mf = right ? e + 2 : e + 1
      _ff = right ? e + 2 : e + 1

      return this.tasks.slice(0, _ii).concat(
        this.tasks.slice(_mi, _mf).reverse(),
        this.tasks.slice(_ff)
      )        
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

.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>