<template>
  <div class="my-input">
    <v-text-field
      class="mt-6"
      dark
      placeholder="Tarefa"
      flat
      clearable
      dense
      v-model="task"
      @keydown.enter="adicionar()"
    ></v-text-field>    
    <v-btn text dark @click="adicionar()" :disabled="!task">
      <v-icon x-large dark>mdi-bookmark-plus</v-icon>
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
  data: () => {
    return ({
      task: '',
    });
  },
  methods: {
    adicionar() {
      if(!this.task)
        return

      this.tasks.push({ texto: this.task, status: false })
      this.task = ''
    }
  }

}
</script>

<style scoped>
.my-input {
  display: inline-flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-top: 30px;
  height: 50px;
}
</style>