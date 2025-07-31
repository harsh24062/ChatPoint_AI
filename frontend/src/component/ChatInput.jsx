import { useState } from "react"

const ChatInput = ({onSubmit}) => {

    const [question,setQuestion] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault();
      if(question.trim()){
        onSubmit(question)
        setQuestion("")
      }
    }

return (
  <div className="container my-5 d-flex justify-content-center">
    <form 
      className="border rounded p-4 shadow bg-light" 
      style={{ maxWidth: "500px", width: "100%" }} 
      onSubmit={handleSubmit}
    >
      <h4 className="mb-3 text-center text-primary">Can we talk...?</h4>
      
      <div className="form-group mb-3">
        <input
          type="text"
          className="form-control"
          id="question"
          placeholder="Write here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
      
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  </div>
);

}

export default ChatInput