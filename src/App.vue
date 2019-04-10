<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuex Trial</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        target="_blank"
      >
        <span class="mr-2">Something</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <addToDo/>
      <todos/>
    </v-content>
  </v-app>
</template>

<script>
import todos from '@/components/todos'
import addToDo from '@/components/addToDo'

export default {
  name: 'App',
  data () {
    return {
      //
    }
  },
  components: {
    todos,
    addToDo
  }
}
</script>
