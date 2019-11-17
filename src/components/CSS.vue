<template>
  <div class="flex-container">
      <div>1</div>
      <div>2</div>
      <div class="big">3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.flex-container {
    display: flex;
    width: 100%;
    height: 300px;

    flex-direction: column;
    flex-direction: row;
    
    flex-flow: row;
    flex-flow: column;
    
    flex-wrap: wrap-reverse;
    flex-wrap: wrap;

    justify-content: flex-start;
    justify-content: space-around;
    justify-content: space-between;
    justify-content: center;
    
    align-items: center;
    align-items: baseline;

    flex-grow: 1;
    flex-grow: 0;
 
}

.big {
    font-size: 2em;
}

div {
    border: white solid 1px;
    margin: 4px;
    padding: 10px;
    font-size: 1.1em;
    flex-grow: 1;
}
</style>