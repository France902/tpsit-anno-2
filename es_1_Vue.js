const { createApp } = Vue;

createApp({
    data() {
        return {
           nome: 'Francesco',
           cognome: 'Scicchitano',
           città: 'Nichelino (TO)'
        }
    }
}).mount('#app');