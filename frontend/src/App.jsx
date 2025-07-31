import { useState } from "react"
import ChatInput from "./component/ChatInput"
import ChatResponse from "./component/ChatResponse"
import fetchChatResponse from "./services/api"

function App() {

  const[response,setResponse] = useState(null)
  const[loading,setLoading] = useState(false)

  const handleQuestionSubmit = async (question) => {
    setLoading(true)
    setResponse(null)
    try {
      //await api
      const apiResponse = await fetchChatResponse(question)
      setResponse(apiResponse)
    } catch (error) {
      alert("Failed to get response")
      console.error(error)
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="App">
      <header className="bg-primary text-white py-4 shadow-sm">
        <div className="container text-center">
         <h1 className="display-5 fw-bold m-0">ChatPoint</h1>
         <p className="lead mb-0">Talk Freely. Ask Anything.</p>
        </div>
      </header>

      {/* INPUT BOX*/}
      <ChatInput onSubmit={handleQuestionSubmit}/>
      {/* RESPONSE BODY */}
      {loading && <h1 className="text-center">Loading...</h1>} 
      <ChatResponse response={response}/>
    </div>
  )
}

export default App
