export interface ITodoModel {
    id: number
    todoName: string
    completed: boolean
}

export interface ITodoItemProps {
    todo: ITodoModel
    handleRemove: (id: number) => void
}