import axios from "axios";

export  const Login = async (userData) => {
    try {
        const response = await axios.post("http://localhost:4000/api/auth/login", userData);
        return response.data;
        
    } catch (error) {
        console.error("Login error:", error);
        throw error;
        
    }
}

export const fetchMe = async (token) => {
    try {
        const response = await axios.get("http://localhost:4000/api/auth/me", {
            headers: {
                Authorization: `Bearer ${token}`
            }

        });
        return response.data;
        
    } catch (error) {
        console.error("Fetch user error:", error);
        throw error;
        
    }
}