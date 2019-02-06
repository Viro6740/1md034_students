new Vue({
    el: '#order',
    data: {        
        info: "",
    },
    methods: {
        markDone: function(array)
        {
            console.log(getContact())            
            this.info = getContact()
        }       
    }       
});

