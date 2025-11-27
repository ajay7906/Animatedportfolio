
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Login, fetchMe } from "../api/userApi";


const useAuthStore = create(
    persist(
        (set) => ({
            user: null,
            token: null,
            loading: false,
            setUser : (user) => set({ user }),
            setToken : (token) => set({ token }),

            login: async (email, password, rememberMe) => {
                // Implement login logic here
                let response;
               try {
                set({loading: true});
                  response = await Login({ email, password, rememberMe });
                if(!response.success){
                    set({loading: false});
                    return response;
                   
                }
                set({user: response.user, token: response.token});
                set({loading: false});
                return response;
                
               } catch (error) {
                console.error("Login failed:", error);
                set({loading: false});
                return response;

                
               }
            
            },
            logout: () => set({ user: null, token: null }),
            fetchMe: async (token) => {
                const response = await fetchMe(token);
                set({user: response.user, token: response.token});
                return response;
            }
        })
    )
)

export default useAuthStore;