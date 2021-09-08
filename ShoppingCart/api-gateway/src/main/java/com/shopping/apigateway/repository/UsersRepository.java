package com.shopping.apigateway.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.shopping.apigateway.model.Users;

@Repository
public interface UsersRepository extends MongoRepository<Users,String> {
	public Optional<Users> findByUserName(String username);
	public Optional<Users> findByEmail(String email);
}
