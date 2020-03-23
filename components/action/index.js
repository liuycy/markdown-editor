Component({
  data: {
    menuVisible: false
  },

  methods: {
    trigger(ev) {
      const { dataset } = ev.currentTarget
      this.triggerEvent(dataset.event)
      setTimeout(() => {
        this.setData({ ...this.data, menuVisible: false })
      }, 300)
    },
    toggleMenu() {
      this.setData({ ...this.data, menuVisible: !this.data.menuVisible })
    }
  }
})
