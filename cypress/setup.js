import activities from './fixtures/activities'
import location from './fixtures/location'

module.exports = {
  url: {
    protocol: 'https://',
    page: {
      homepage: 'www-getyourguide-com.vm.gygtest.com/',
      adp: `www-getyourguide-com.vm.gygtest.com/-t${activities.eg.freeSale}/`
    },
    params: '?platform=desktop&gyg_experiments=0',

    get: function (page) {
      return `${this.protocol}${this.page[page]}${this.params}`
    }
  },

  params: { activities, location }
}
