import create from "zustand"

export const useStore = create(set => ({
    item1 : 'item1 empty',
    updateItem1: (data) => set(state => ({item1: data})),
    item2 : 'item2 empty',
    updateItem2: (data) => set(state => ({item2: data})),
}))