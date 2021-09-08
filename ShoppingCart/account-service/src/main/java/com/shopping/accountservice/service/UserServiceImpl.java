package com.shopping.accountservice.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shopping.accountservice.model.Users;
import com.shopping.accountservice.repository.UsersRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UsersRepository userRepository;
	
	
	
	@Override
	public Optional<Users> getUserByEmail(String email) {
		return userRepository.findOneByEmail(email);
	}

	@Override
	public void addUser(Users user) {
		userRepository.save(user);
		
	}

	
	@Override
	public void updateUser(Users user) {
		userRepository.save(user);
			
	}

	@Override
	public Optional<Users> getUserById(String userId) {
		return userRepository.findById(userId);
	}
	

}
