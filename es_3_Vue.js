const { createApp } = Vue;

createApp({
    data() {
        return {
           immagineDisabilitata: false,
           urlImmagine: 'https://vuejs.org/images/logo.png',
           opacityValue: 1,
        }
    },
    methods: {
    toggleOpacity() {
        if(this.immagineDisabilitata == false) this.immagineDisabilitata = true;
        else this.immagineDisabilitata = false;
        if(this.immagineDisabilitata == true) this.opacityValue = 0;
        else this.opacityValue = 1;
    }
  }
}).mount('#app');


