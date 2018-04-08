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
            newTodo: "",
            // @ts-ignore
            store : [{id : 0, title: title, completed: false}, ... this.store]
        })
        // @ts-ignore
        console.log(this.state)
    }
}
