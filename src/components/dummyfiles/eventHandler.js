var obj = {
    name : 'Lai thoura'
}

//Object.freeze(obj)

import APP_TEM from 'app_template'

var app = new Vue({
    el: '#app',
    comments:{
      APP_TEM
    },
    data: obj,
    methods:{
        warn: function (message, event) {
            // now we have access to the native event
            //if (event) event.preventDefault()
            alert(this.name)
        }
    }
});





