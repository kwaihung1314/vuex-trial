<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6 md3 v-for="todo in getAllTodos" :key="todo.id">
        <v-card :class="{'deep-orange lighten-3': !todo.completed, 'indigo lighten-2': todo.completed}">
          <v-card-title>TODO {{todo.id}}</v-card-title>
          <v-card-text class="title">
            {{todo.title}}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat icon color="white">
              <v-icon>delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      
    }
  },
  computed: mapGetters(['getAllTodos']),
  methods: {
    ...mapActions(['fetchTodos'])
  },
  mounted() {
    this.fetchTodos();
  }
}
</script>

<style>

</style>