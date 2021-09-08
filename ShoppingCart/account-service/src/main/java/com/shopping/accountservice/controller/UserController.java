package com.shopping.accountservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shopping.accountservice.model.Users;
import com.shopping.accountservice.service.UserServiceImpl;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	UserServiceImpl service;

	@GetMapping("/getUserById/{userId}")
	public Users findById(@PathVariable("userId") String userId) {
		return service.getUserById(userId).get();
		
	}
	
	@GetMapping("/getuserbyemail/{email}")
	@ApiOperation(value = "Getting user By Email Id", notes = "Provide email address of the user to get user details")
	public Users findByEmailId(@PathVariable String email) {
		return service.getUserByEmail(email).get();
	}

	
	
	@PostMapping("/addUser")
	@ApiOperation(value = "Add a new user", notes = "Provide registration details to add a new user")
	public ResponseEntity<String> addUser(@RequestBody Users users ) {
		service.addUser(users);
		return ResponseEntity.ok().body("Registration Success");
	}
	
	
	@PutMapping("/updateUser")
	@ApiOperation(value = "updating user", notes = "Provide user specific details to update existing user")
	public void updateUserProfile(@RequestBody Users users) {
		
		service.updateUser(users);
		
	}
	
	
	
}
