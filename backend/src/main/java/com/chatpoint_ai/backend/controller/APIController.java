package com.chatpoint_ai.backend.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chatpoint_ai.backend.service.QNAService;

@RestController
@RequestMapping("/api/qna")
public class APIController {

    @Autowired
    private QNAService qnaService;

    @PostMapping("/ask")
    public ResponseEntity<String> askQuestion(@RequestBody Map<String,String> payload){
      
       String question = payload.get("question");

       if(question==null || question.trim().isEmpty()){
        return new ResponseEntity<>("Question cannot be empty or null",HttpStatus.BAD_REQUEST);
       }

       try {
        String answer = qnaService.askQuestion(question);
        return new ResponseEntity<>(answer,HttpStatus.OK);
       } catch (Exception e) {
        return new ResponseEntity<>("Its not your fault, we are facing some issue. Try again later.",HttpStatus.INTERNAL_SERVER_ERROR);
       }
       
    }
    
}
