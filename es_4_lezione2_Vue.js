const { createApp } = Vue;

createApp({
    data() {
        return {
           prodotti: [
                { id: 1, nome: 'Sgrassatore', prezzo: 2.50 },
                { id: 2, nome: 'Pasta', prezzo: 1.20 },
                { id: 3, nome: 'Cioccolato', prezzo: 1.50 },
            ]
        }
    }
}).mount('#app');