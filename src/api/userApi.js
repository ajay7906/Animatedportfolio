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