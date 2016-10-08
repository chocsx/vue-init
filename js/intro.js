var hello = new Vue({
    el:'#hello',
    data:{
        msg: "Hello Vue!",
        peoples: [
            {name: "Mateus"},
            {name: "Pedro"},
            {name: "Carlos"},
            {name: "Ronaldo"},
            {name: "Maria"},
            {name: "Bruna"},
            {name: "Thais"}
        ],
        newElement: '',
        elements: [],
        objectA:{
            'font-size': '50px'
        },
        objectB:{
            'color': 'orangered'
        },
        myListForm: [],
        myForm: {
            name: '',
            email: ''
        }
    },
    methods:{
        addElement: function(e){
            var title = this.newElement.trim();
            if(title){
                this.elements.push({
                    title:title
                });
                this.newElement = ""
            }
        },
        removeElement: function(e,index){
            e.preventDefault();
            this.elements.splice(index,1);
        },
        myClick: function(){
            alert("CLICK");
        },
        myKeyUp: function(){
            alert("My myKeyUp");
        },
        addForm: function(){
            this.myListForm.push({
                name: this.myForm.name, 
                email: this.myForm.email
            });
            this.myForm.name='',
            this.myForm.email=''
        }
    }
});