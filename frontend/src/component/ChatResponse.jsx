const ChatResponse = ({response}) => {

   if(!response){
      return null;
   }

   const {candidates,usageMetadata} = response

   return (
  <div className="container my-5">
    <div className="text-center mb-4">
      <h2 className="text-primary">AI Responses</h2>
    </div>

    {candidates.map((candidate, index) => (
      <div className="card shadow-sm mb-4" key={index}>
        <div className="card-body">
          <h5 className="card-title text-success">Response {index + 1}</h5>
          <p className="card-text">{candidate.content.parts[0].text}</p>

          {candidate?.citationMetadata?.citationSources?.length > 0 && (
            <>
              <h6 className="mt-4">Citations:</h6>
              <ul className="list-group list-group-flush">
                {candidate.citationMetadata.citationSources.map((source, idx) => (
                  <li className="list-group-item" key={idx}>
                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-decoration-underline text-primary">
                      {source.url}
                    </a>
                    <br />
                    <small className="text-muted">
                      Indexes: {source.startIndex} - {source.endIndex}
                    </small>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    ))}

    <div className="bg-light p-4 rounded shadow-sm mt-5">
      <h4 className="text-info">Usage Metadata</h4>
      <p><strong>Total Tokens:</strong> {usageMetadata.totalTokenCount}</p>
      <p><strong>Prompt Tokens:</strong> {usageMetadata.promptTokenCount}</p>
      <p><strong>Response Tokens:</strong> {usageMetadata.candidatesTokenCount}</p>
    </div>
  </div>
);

}

export default ChatResponse