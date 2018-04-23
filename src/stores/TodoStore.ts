import { iTodo } from "../constants/interfaces"

class TodoStore {

    constructor() {
        this.addTodo = this.addTodo.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.toggleTodo = this.toggleTodo.bind(this)
    }

    public newTodo: string = ""
    public todos: iTodo[] = []
    private static i: number = 0
    private cb: Function[] = []

    static increment(): number {
        return this.i++
    }

    inform() {
        this.cb.forEach(cb => {
            cb()
        })
    }

    addTodo(title: string): void {
        this.newTodo = ""
        this.todos = [{ id: TodoStore.increment(), title: title, completed: false }, ...this.todos]
        // @ts-ignore
        // this.setState({newTodo: '', todos: [{id: increment(), title: title, completed: false}, ...this.state.todos]})
        this.inform()
    }

    deleteTodo(id: number): void {
        this.todos = this
            .todos
            .filter(todo => todo.id != id)
        this.inform()
    }

    updateNewTodo(newTodo: string): void {
        this.newTodo = newTodo
        this.inform()
    }

    toggleTodo = (id: number): void => {
        // As setState in asynchonous perhaps it is not a good idea to save a property
        // state in a variable.
        this.todos = this.todos.map((todo) => {
            return todo.id === id
                ? {
                    ...todo,
                    completed: !todo.completed
                }
                : todo
        })
        this.inform()
    }

    clearAll = () => {
        this.todos = []
        this.inform()
    }

    completeAll = () => {
        this.todos =  this.todos.map(todo => { return { ...todo, completed: true } });
        this.inform()
    }

    clearCompleted = () => {
        this.todos =  this.todos.filter(todo => {
            return !todo.completed
        })
        this.inform()

    }
    
    setTodos = (todos : iTodo[]) => {
        this.todos = todos
        this.inform()
    }


    subscribe(cb: Function) {
        this.cb.push(cb)
    }
}

const todoStore = new TodoStore()
export {todoStore, TodoStore}
