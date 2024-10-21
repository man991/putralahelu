import AsyncStorage from "@react-native-async-storage/async-storage";
import { StateStorage } from "zustand/middleware";


export const asyncStorage: StateStorage={
    setItem:(name: string, value: string) => {
        return AsyncStorage.setItem(name, value);
    },
    getItem:(name: string) =>{
        const value = AsyncStorage.getItem(name);
        return value ?? null;
    },
    removeItem:(name: string) =>{
        return AsyncStorage.removeItem(name);
    }
}