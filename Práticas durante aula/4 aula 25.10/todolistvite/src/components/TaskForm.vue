vue.component('task-form',{

    data: function(){
        return{
        }
    },
    <template>
        <form class="row g-3">
        <div class="col">
            <label for="newTask" class="visually-hidden">Awesome TodoList</label>
            <input type="text" class="form-control" id="newTask" placeholder="O que você precisa hoje?" v-model="newTask">
        </div>
        <div class="col-auto">
            <input type="button" id="addButton" class="btn btn-primary" >
        </div>
    </form>
    </template>
    
    })
    
    
    