
// import { create } from "zustand";
// import { persist } from "zustand/middleware";
// import { Login, fetchMe } from "../api/userApi";

// const chooseStorage = (rememberMe, token) => {
//     let storage;
//     if(rememberMe){
//       storage = localStorage.setItem("authToken", token);
//     } else{
//       storage = sessionStorage.setItem("authToken", token);
//     }
//     return storage;
// }

// const useAuthStore = create(
//     persist(
//         (set, get) => ({
//             user: null,
//             token: null,
//             loading: false,
//             setUser : (user) => set({ user }),
//             setToken : (token) => set({ token }),

//             login: async (email, password, rememberMe) => {
//                 // Implement login logic here
//                 let response;
//                try {
//                 set({loading: true});
//                   response = await Login({ email, password, rememberMe });
//                 if(!response.success){
//                     set({loading: false});
//                     return response;
                   
//                 }
//                 set({user: response.user, token: response.token});
//                 set({loading: false});
//                 await chooseStorage(rememberMe, response.token);
//                 return response;
                
//                } catch (error) {
//                 console.error("Login failed:", error);
//                 set({loading: false});
//                 return response;

                
//                }
            
//             },
//             logout: () => set({ user: null, token: null }),
//             fetchMe: async (token) => {
//               try {
//                   const response = await fetchMe(token);
//                 set({user: response.user, token: response.token});
//                 return response;
//               } catch (error) {
//                 console.error("FetchMe failed:", error);
//                 return null;
                
//               }
//             },
//             init: async () => {
//                try {
//                  const {token} = get();
//                 if(!token) return null;
//                 const response = await get().fetchMe(token);
//                 return response;
                
//                } catch (error) {
//                 console.error("Initialization failed:", error);
//                 return null
                
//                }
//             }
//         }),

//         {
//             name: "auth-storage"
//         }
//     )
// )

// export default useAuthStore;







// src/context/userContaxt.js
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Login as apiLogin, fetchMe as apiFetchMe } from "../api/userApi";

const PERSIST_KEY = "auth-storage";
const REMEMBER_FLAG = "auth_remember"; // 'local' | 'session'

// helper to choose storage for persist rehydration
const chooseStorage = () => {
  try {
    const pref = localStorage.getItem(REMEMBER_FLAG) || "local";
    return pref === "session" ? window.sessionStorage : window.localStorage;
  } catch (err) {
    return window.localStorage;
  }
};

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      loading: false,

      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),

      // login: set remember flag first, then update store
      login: async (email, password, rememberMe = false) => {
        set({ loading: true });
        try {
          const response = await apiLogin({ email, password, rememberMe });
          // expected response: { success, user, token, message }
          if (!response || !response.success) {
            set({ loading: false });
            return response;
          }

          // save the remember preference (so persist's getStorage can use it later)
          try {
            localStorage.setItem(REMEMBER_FLAG, rememberMe ? "local" : "session");
          } catch (err) {
            console.warn("Could not write remember flag:", err);
          }

          // update zustand state (persist will write to the chosen storage)
          set({ user: response.user, token: response.accessToken, loading: false });

          // Optional: immediately write snapshot to chosen storage to avoid short race
          try {
            const storage = rememberMe ? window.localStorage : window.sessionStorage;
            const snapshot = { state: { user: response.user, token: response.accessToken } };
            storage.setItem(PERSIST_KEY, JSON.stringify(snapshot));
          } catch (err) {
            console.warn("Could not write immediate snapshot:", err);
          }

          return response;
        } catch (err) {
          console.error("Login failed:", err);
          set({ loading: false });
          throw err;
        }
      },

      logout: () => {
        set({ user: null, token: null });
        // clear persisted state from both storages and remove flag
        try {
          window.localStorage.removeItem(PERSIST_KEY);
          window.sessionStorage.removeItem(PERSIST_KEY);
          localStorage.removeItem(REMEMBER_FLAG);
        } catch (err) {
          console.warn("Error clearing storage on logout:", err);
        }
      },

      fetchMe: async (token) => {
        set({ loading: true });
        try {
          const response = await apiFetchMe(token);
          if (response && response.user) {
            set({ user: response.user, token: response.accessToken || token, loading: false });
            // update persisted snapshot in chosen storage
            try {
              const pref = localStorage.getItem(REMEMBER_FLAG) || "local";
              const storage = pref === "session" ? window.sessionStorage : window.localStorage;
              const snapshot = { state: { user: response.user, token: response.accessToken || token } };
              storage.setItem(PERSIST_KEY, JSON.stringify(snapshot));
            } catch (err) {
              console.warn("Could not update persisted snapshot:", err);
            }
          } else {
            set({ user: null, token: null, loading: false });
          }
          return response;
        } catch (err) {
          console.error("fetchMe failed:", err);
          set({ user: null, token: null, loading: false });
          return null;
        }
      },

      // init: run after rehydration to validate token
      init: async () => {
        const { token } = get();
        if (!token) return null;
        try {
          return await get().fetchMe(token);
        } catch (err) {
          return null;
        }
      }
    }),
    {
      name: PERSIST_KEY,
      getStorage: () => chooseStorage()
    }
  )
);

export default useAuthStore;
