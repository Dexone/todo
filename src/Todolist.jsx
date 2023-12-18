import Todoitem from './Todoitem'
function TodoList({todo, deleteItem}) {
    const todoItems = todo.map(t => <Todoitem key={t.id} id={t.id} text={t.text} deleteItem={deleteItem} />)
    return (
        <div>{todoItems}</div>
    )
}
export default TodoList