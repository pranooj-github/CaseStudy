package com.shopping.apigateway.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.shopping.apigateway.model.JWTRequest;
import com.shopping.apigateway.model.JWTResponse;
import com.shopping.apigateway.model.Users;
import com.shopping.apigateway.service.UserService;
import com.shopping.apigateway.utility.JWTUtility;

@RestController
public class AuthorizationController {
	
	@Autowired
	private JWTUtility jwtUtility;
	@Autowired
	RestTemplate restTemplate;
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	UserService userService;
	
	
	
	 @PostMapping("/authenticate")
	    public JWTResponse authenticate(@RequestBody JWTRequest jwtRequest)  throws Exception{

	    

	        try {
	            authenticationManager.authenticate(
	                    new UsernamePasswordAuthenticationToken(
	                            jwtRequest.getEmail(),
	                            jwtRequest.getPassword())

	            );
	            
	        } catch (BadCredentialsException e){throw  new Exception("INVALID CREDENTIALS", e);}

	        final UserDetails userDetails = userService.loadUserByUsername(jwtRequest.getEmail());

	        final String token =
	                jwtUtility.generateToken(userDetails);

	        return  new JWTResponse(token);
	    }
	 @PostMapping("/register")
	 public ResponseEntity<String> register(@RequestBody Users user) {
		 String uri="http://localhost:8081/users/addUser";
		 user.setPassword(passwordEncoder.encode(user.getPassword()));
		 
		 ResponseEntity<String> response=restTemplate.postForEntity(uri, user, String.class);
		 return response;
	 }
}
