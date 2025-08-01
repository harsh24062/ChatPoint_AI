 import axios from "axios"

 const API_URL = import.meta.env.VITE_API_URL

const fetchChatResponse = async (question) => {
  try {
    const response = await axios.post(API_URL,{question})
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default fetchChatResponse