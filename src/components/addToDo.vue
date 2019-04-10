<template>
  <v-container>
    <v-form @submit="submitTodo">
      <v-layout row wrap>
        <v-flex xs12 md6>
          <v-text-field
            v-model="itemAdding"
            label="Type item here to add"
          ></v-text-field>
        </v-flex>
        <v-btn color="success" type="submit">Add</v-btn>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      itemAdding: ''
    }
  },
  methods: {
    submitTodo(e) {
      e.preventDefault();
      let todo = {
        "userId": 3,
        "title": this.itemAdding,
        "completed": false
      }
      this.$store.dispatch('AddTodo', todo);
      this.itemAdding = '';
    }
  }
}
</script>

<style>

</style>
