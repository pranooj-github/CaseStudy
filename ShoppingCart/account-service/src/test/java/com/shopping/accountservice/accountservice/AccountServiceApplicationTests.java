package com.shopping.accountservice.accountservice;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.shopping.accountservice.model.Address;
import com.shopping.accountservice.model.Users;
import com.shopping.accountservice.repository.UsersRepository;
import com.shopping.accountservice.service.UserServiceImpl;

@SpringBootTest
class AccountServiceApplicationTests {
	@Autowired
	private UserServiceImpl userService;
	
	@MockBean
	private UsersRepository userRepository;  

	@Test
	public void getUserByEmailTest() {
		String email="pranooj@gmail.com";
		Address address=new Address();
		Optional<Users> user=Optional.of(new Users("1abc","pranooj","pranooj@gmail.com",1234567890,"password","customer",address));
		when(userRepository.findOneByEmail(email))
			.thenReturn(user);
		assertEquals(user,userService.getUserByEmail(email));
								
	}
	@Test
	public void addUserTest() {
		Address address=new Address();
		Users user=new Users("1abc","pranooj","pranooj@gmail.com",1234567890,"password","customer",address);
		userService.addUser(user);
		verify(userRepository, times(1)).save(user);
		
	}
	@Test
	public void updateUserTest() {
		Address address=new Address();
		
		Users user=new Users("1abc","pranooj","pranooj@gmail.com",1234567890,"password","customer",address);
		userService.updateUser(user);;
		verify(userRepository, times(1)).save(user);
		
		
	}
	@Test
	public void getUserByIdTest() {
		String userId="demoUser";
		Address address=new Address();
		Optional<Users> user=Optional.of(new Users("demoUser","pranooj","pranooj@gmail.com",1234567890,"password","customer",address));
		when(userRepository.findById(userId)).thenReturn(user);
		assertEquals(user,userService.getUserById(userId));

		
	}
	
	
	
	
}
