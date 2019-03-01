new Vue({
        el: '#exercise',
        data: {
            value: 'type'
        },
        methods: {
          alert() {
            alert('clicked!');
          },
          setValue(e) {
            this.value = e.target.value;
          }
        }
    });