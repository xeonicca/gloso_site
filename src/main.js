// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/bootstrap.min.css'
import '~/assets/framework.css'
import '~/assets/style.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,600,500,700,800,900|Poppins:100,200,300,400,500,600,700,800,900&amp;subset=latin',
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
    integrity: 'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf',
    crossorigin: 'anonymous'
  })

  head.script.push({
    src: 'https://code.jquery.com/jquery-3.3.1.min.js',
    body: true
  })
}
