function Todoitem({ id, text, deleteItem }) {
    return (
        <div key={id}>{text}
            <button onClick={() => deleteItem (id)}>Удалить</button></div>
    )
}
export default Todoitem