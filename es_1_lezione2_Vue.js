const { createApp } = Vue;

createApp({
    data() {
        return {
           isLoggedIn: false,
        }
    }
}).mount('#app');