import { iTodo } from "./interfaces"

export class TodoStore {

    public todos : iTodo[] = []
    private static i : number = 0


    static increment() {
        this.i++
    }

    addTodo(title: string) : void {
        // @ts-ignore
        this.setState({
            // @ts-ignore
            newTodo: this.state.newTodo,
            // @ts-ignore
            todos : [{id : 0, title: title, completed: false}, ... this.todos]
        })
    }
}
