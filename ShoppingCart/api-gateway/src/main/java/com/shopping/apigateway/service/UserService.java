package com.shopping.apigateway.service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.shopping.apigateway.model.Users;
import com.shopping.apigateway.repository.UsersRepository;

@Service
public class UserService implements UserDetailsService{
	@Autowired
	UsersRepository userrepository;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
        Optional<Users> user = userrepository.findByEmail(username);
        if(user == null) {throw new UsernameNotFoundException("User not found");}
        String role=user.get().getRole();
        System.out.println(role);
        List<SimpleGrantedAuthority> authorities = Arrays.asList(new SimpleGrantedAuthority(role));

		
		return new User(user.get().getEmail(),user.get().getPassword(),authorities);
	}

}
