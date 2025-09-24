const { createApp } = Vue;

createApp({
    data() {
        return {
           nomeProdotto: 'Coca Cola',
           prezzoProdotto: 2
        }
    }
}).mount('#app');