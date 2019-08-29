import axios from 'axios'

export default async ({ Vue }: { Vue: any }) => {
  Vue.prototype.$axios = axios
}
