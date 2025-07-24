package com.chatpoint_ai.backend.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service 
public class QNAService {

    // Get access to Gemini AI 
    @Value("${gemini.api.url}")
    private String geminiApiUrl;
    
    @Value("${gemini.api.key}")
    private String geminiApiKey;

    private final WebClient webClient;

    public QNAService(WebClient.Builder webClient){
        this.webClient=webClient.build();
    }
    
    public String askQuestion(String question){

        // Construct the request payload 
        //payload schema

        // { "contents": [
        //                {
        //                 "parts": [{"text": "Explain how AI works in a few words"}]
        //                 }
        //                ]
        //  }

          Map<String,Object> requestBody = Map.of("contents",new Object[]{
            Map.of("parts",new Object[]{
                Map.of("text",question)
            })
          });
        
        // Make API Call

      String response =  webClient.post()
                 .uri(geminiApiUrl)
                 .header("X-goog-api-key",geminiApiKey)
                 .bodyValue(requestBody)
                 .retrieve()
                 .bodyToMono(String.class)
                 .block();

        // Return response

        return response;
    }
}
