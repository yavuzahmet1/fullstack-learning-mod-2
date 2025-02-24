
interface ITodo{
    task:string,
    isDone:boolean,
    id:string
}

type AddFn=(task:string)=>Promise<void>
type ToggleFn=(todo:ITodo)=>Promise<void>
type DeleteFn=(id:string | number)=>Promise<void>