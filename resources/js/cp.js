import Location from './components/Location';

import VueMeta from 'vue-meta'

window.Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true,
})

Statamic.$components.register('location-fieldtype', Location)