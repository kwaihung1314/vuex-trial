<template>
  <v-container>
    <v-form>
      <v-layout row wrap>
        <v-flex xs12 md6>
          <v-text-field
            v-model="itemAdding"
            label="Type item here to add"
          ></v-text-field>
        </v-flex>
        <v-btn color="success">Add</v-btn>
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
  }
}
</script>

<style>

</style>
