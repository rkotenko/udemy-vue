new Vue({
        el: '#exercise',
        data: {
            value: 0
            
        },
        computed: {
          result() {
            return this.value == 11 ? 'done' : 'not there yet';
          }
        },
        watch: {
          result() {
            
            setTimeout(() => {
              this.value = '';
            }, 5000);
          }
        }
    });