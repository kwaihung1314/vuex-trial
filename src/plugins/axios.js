import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

Vue.use(VueAxios, instance);