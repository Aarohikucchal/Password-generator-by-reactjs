import {create} from 'zustand'

export const useTheme = create((set) =>({
    darkTheme :true,
    setDarkTheme : ()=> set((state)=>({darkTheme: !state.darkTheme}))
}))

export default useTheme
