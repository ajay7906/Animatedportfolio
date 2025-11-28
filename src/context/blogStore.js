import { title } from "framer-motion/client";
import { create } from "zustand";
import useAuthStore from "./userContaxt";
import { createBlog } from "../api/blogApi";

const useBlogStore = create((set, get) => ({
    posts: [],
    draft: {title: "", content: ""},
    loading: false,
    error : null,
    setDraft: (draft) => set({ draft }),
    clearDraft: () => set({ draft: { title: "", content: "" } }),
    createPost: async (FormData) => {
        set({ loading: true,  error: null });
        try {
            const token = useAuthStore.getState().token;
            const response = await createBlog(FormData, token);
            if(response && response.success){
                set((state) => ({posts:[response.post, ...state.posts]}));
                return response;
            }else{
                set({ error: response.message || "Failed to create post" });
                return response;
            }
        } catch (error) {
            set({loading: false, error: error.message });
            
        } finally {
            set({loading: false});
            
        }
    }
}))

export default useBlogStore;