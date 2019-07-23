var obj = {
    title:'Dummy Product List',
    message: 'Hello Vue!',
    newTodoText:'Nuon Raksmey',
    visitCount: 5,
    hideCompletedTodos:false,
    website: "https://www.google.com",
    websiteTag:'<a :href="website"/>Wanna know god ?</a>',
    groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
    ],
    error:null,
    products:[
        { lbl: 'Product Id' , value: '10' },
        { lbl: 'Product Name' , value: 'Apple' },
        { lbl: 'Quantity' , value: '8' },
        { lbl: 'Price' , value: '54' },
        { lbl: 'Description' , value: 'nothing' },
        { lbl: 'IsValid' , value: 'nothing' },
        { }
    ],
    value_checkbox:[
        {name :'Jack'},
        {name : 'John'} ,
        {name :'Mike'}
    ],
    productList:[
        { 	id : 1,
            name: 'Apple' ,
            qty:8 ,
            price:54,
            importdate:'12/12/2019',
            type:'A',
            warehouse:'warehouse A',
            expired:true
        },
        { 	id : 2,
            name: 'Banana' ,
            qty: 5 ,
            price:24,
            importdate:'02/02/2019',
            type:'B',
            warehouse:'warehouse B',
            expired:true
        },
    ],
    lbl_pros:[
        { lbl: 'Product Id' },
        { lbl: 'Product Name' },
        { lbl: 'Quanity' },
        { lbl: 'Price' }
    ],
    value_pros:[
        { value: '10' },
        { value: 'Apple' },
        { value: '8' },
        { value: '54' }
    ],
    picked:'',
    init_pro:[
        { id: '' , name:'' , qty:'' ,price:'' }
    ],
    dataEntry:''
}

//Object.freeze(obj)


Vue.component('todo-item',{
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>',
    data(){
        return { msg : ['Welcome' , 'Cambodia'] }
    }
})
// Vue.component('render-td',{
//     props: ['render'],
//     template: '<td > <label> {{ render.text }}</label>  </td>',
// })
var second_data={
    count: 1,
    name: 'sok',
    email:'',
    picked:'',
    selected:'',
    options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
    ]
}

// import mytest from "mytest"
var app = new Vue({
    el: '#app',
    data: obj,
    // components: {
    //     mytest
    // },
    methods:{
        // greet: function(time){
        //     return 'Good' + ' ' + time
        // },
        greetfull: function(event){
            // `this` inside methods points to the Vue instance
            //alert('Hello ' + this.name + '!')
            // `event` is the native DOM event
            if (event) {
                alert(event.target.tagName)
            }
        },

        increase:function(){
            this.count += 1
        },
        decrease:function(){
            this.count -= 1
        },
        submit () {
            alert(this.title)
        },
        retrieveData: function(){

            for (var key in this.init_pro) {
                if (this.init_pro.hasOwnProperty(key)) {
                    //alert(this.init_pro[key].id + this.init_pro[key].name + this.init_pro[key].qty + this.init_pro[key].price);
                    this.productList.push({
                        id : this.$refs.proid[key].value,
                        name: this.$refs.proname[key].value ,
                        qty: this.$refs.proqty[key].value ,
                        price: this.$refs.proprice[key].value,
                        //importdate:this.$refs.proimdate[key].value
                        // type:this.$refs.protype[key].value,
                        // warehouse:this.$refs.prowh[key].value,
                        // expired:this.$refs.proexpired[key].value
                    })

                }
            }

        }
    }
});

app.greetfull()



