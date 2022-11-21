<template>
          <TaskForm></TaskForm>
            <!-- <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="modelDone">
              <label class="form-check-label" for="flexCheckDefault" :class="{ done: done}">
              {{ deion }}
              </label>
              <button type="button" class="btn btn-sm float-end" @click="this.$emit('remove', id)"><i class="bi bi-x-lg"></i></button>
          </div>
            <div id="progress" class="progress mt-1 ">
              <div class="progress-bar" role="progressbar" :style="{ width: percentagedone + '%'}" :aria-valuenow="percentagedone" aria-valuemin="0" aria-valuemax="100">{{ percentagedone }}%</div>
            </div> -->
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import TaskForm from './components/TaskForm.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
