import create from 'zustand'
import { EditedTask, EditedNotice } from './types/types'
import { type } from 'os'

type State = {
    editedTask: EditedTask
    editedNotice: EditedNotice
    updatedEditedTask: (payload: EditedTask) => void
    updatedEditedNotice: (payload: EditedNotice) => void
    resetEditedTask: () => void
    resetEditedNotice: () => void
}
const useStore = create<State>((set) => ({
    editedTask: {
        id: '',
        title: '',
    },
    editedNotice: {
        id: '',
        content: '',
    },
    updatedEditedTask: (payload) => 
        set({
            editedTask: {
                 id: payload.id,
                 title: payload.title,
            },
        }),
    resetEditedTask: () => set({ editedTask: { id: '', title: '' } }),
    updatedEditedNotice: (payload) =>
        set({
            editedNotice: {
                id: payload.id,
                content: payload.content,
            },
        }), 
    resetEditedNotice: () => set({ editedNotice: { id: '', content: '' } }),
}))
export default useStore
