import axios from "axios";

export const createBlog = async (blogData, token) => {
    try {
        const response = await axios.post(`http://localhost:4000/api/blogs/create`, blogData, {
            headers: {
                Authorization: `Bearer ${token}`,
                
            }
        });
        return response.data;
        
    } catch (error) {
        console.error(error);
        throw error;
        
    }
}