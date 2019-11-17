<template>
  <v-speed-dial v-model="fab" class="ma-2" direction="bottom" top right fixed transition="slide-y-reverse-transition">
    <template v-slot:activator>
      <v-btn v-model="fab" large color="teal darken-3" dark fab>
        <v-icon v-if="fab">mdi-close</v-icon>
        <v-icon v-else>mdi-format-list-bulleted-square</v-icon>
      </v-btn>
    </template>
    <v-btn fab dark small color="indigo" @click="sortAsc()">
      <v-icon>mdi-sort-alphabetical-descending</v-icon>
    </v-btn>
    <v-btn fab dark small color="green" @click="sortDesc()">
      <v-icon>mdi-sort-alphabetical-ascending</v-icon>
    </v-btn>
    <v-btn fab dark small color="red" @click="clearAll()">
      <v-icon>mdi-delete</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    fab: false
  }),
  methods: {
    clearAll() {
      this.tasks.splice(0)
    },
    sortAsc() {
      this.tasks.sort(function (elA, elB) {
        return (elA.texto < elB.texto) ? -1 : (elA.texto > elB.texto) ? 1 : 0
      })
    },
    sortDesc() {
      this.tasks.sort(function (elA, elB) {
        return (elA.texto < elB.texto) ? 1 : (elA.texto > elB.texto) ? -1 : 0
      })
    }
  }
}

</script>

<style>
/* This is for documentation purposes and will not be needed in your application */
#create .v-speed-dial {
  position: absolute;
}

#create .v-btn--floating {
  position: relative;
}
</style>