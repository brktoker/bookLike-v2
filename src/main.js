import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style.css'
import {appAxios} from '@/utils/appAxios'

//components
import AppHeader from '@/components/Shared/AppHeader.vue'
import BookmarkList from '@/components/BookmarkItems/Index.vue'
const app = createApp(App)
app.component("AppHeader",AppHeader)
app.component("BookmarkList", BookmarkList)

app.config.globalProperties.$axios = appAxios;


app.use(router)
app.use(store)
app.mount('#app')
