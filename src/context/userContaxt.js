
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Login } from "../api/userApi";


const useAuthStore = create(
    persist(
        (set) => ({
            user: null,
            token: null,
            setUser : (user) => set({ user }),
            setToken : (token) => set({ token }),

            login: async (email, password, rememberMe) => {
                // Implement login logic here
                const response = await Login({ email, password, rememberMe });
                if(!response.success){
                    return response;
                }
                set({user: response.user, token: response.token});
                return response;
            
            },
            logout: () => set({ user: null, token: null }),
        })
    )
)

export default useAuthStore;