
const { create } = require("zustand");
const { persist } = require("zustand/middleware");
const { Login } = require("../api/userApi");


const useAuthStore = create(
    persist(
        (set) => ({
            user: null,
            token: null,
            setUser : (user) => set({ user }),
            setToken : (token) => set({ token }),

            login: async (email, password) => {
                // Implement login logic here
                const response = await Login({ email, password });
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