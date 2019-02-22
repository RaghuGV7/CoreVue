import Vue from 'vue';
import FirstComponent from '.././components/FirstComponent/FirstComponent.vue';

new Vue({
    el: '#app',
    components: {
        FirstComponent
    },
    data() {
        return {
            vueMessage: 'Message from Vue'
        };
    },
    methods: {
    }
});
