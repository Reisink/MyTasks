<template>
  <v-progress-linear
    class="barraVue mt-8"
    background-color="transparent"
    color="success"
    dark
    height="30"
    :value="progress"
  >
    <strong>{{ progress }}%</strong>
  </v-progress-linear>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      required: true
    }
  }

}
</script>

<style>
.barraVue {
  border: white solid 1.5px;
  border-radius: 2rem;
  font-size: 15px;
  font-display: 300;
}
/* 
.barra {
  width: 100%;
  height: 30px;
  border: white solid 1.5px;
  border-radius: 2rem;
}

.progresso {
  height: 100%;
  background: linear-gradient(to bottom, #56ab2f, #a8e063);
  border-radius: 2rem;
}

.labelProgresso {
  color: white;
  font-size: 15px;
  position: absolute;
  align-items: center;
}
 */
</style>