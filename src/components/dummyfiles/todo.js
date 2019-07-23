Vue.component('todo-item',{
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>',
    data(){
        return { msg : ['Welcome' , 'Cambodia'] }
    }
})