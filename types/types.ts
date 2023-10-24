export type Task = {
    id: string
    created_at: string
    title: string
    user_id: string | undefined
}
export type Notice = {
    id: string
    created_at: string
    content: string
    user_id: string | undefined
}
export type EditedTask = Omit<Task, "user_id" | "created_at">
export type EditedNotice = Omit<Notice, "user_id" | "created_at">