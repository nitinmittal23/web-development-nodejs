$(function () {
    let newTodoBox = $('#newtodo')
    let addtodoBtn = $('#addtodo')
    let todoList = $('#todolist')

    addtodoBtn.click(function(){
        let newtodo = newTodoBox.val()
        
        $.post(
            '/todos/',
            {task: newtodo},
            function(data){
                todoList.empty();
                for (todo of data){
                    todoList.append("<li>"+todo.task+"</li>")
                }
            }
        )
    })

})
