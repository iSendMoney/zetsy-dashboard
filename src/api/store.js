import axios from "axios";


export async function getStore(token){
    try {     
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URI}/api/v1/store/`,{
            headers:{
              Authorization: `${token}`
            }
          });
        const {store} = response.data;
        return store;
    } catch (error) {
       
        throw (error.response.data || "Failed to fetch");
    }
}