package com.chatpoint_ai.backend.cors;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.beans.factory.annotation.Value;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Value("${frontend.url}")
    private String frontEnd_URL; 

    @Override
    public void addCorsMappings(CorsRegistry registry) {
      registry.addMapping("/**")
              .allowedOrigins(frontEnd_URL)
              .allowedMethods("GET","POST","PUT","DELETE","OPTIONS")
              .allowedHeaders("*")
              .allowCredentials(true);
    }
    
    
}
