package com.shopping.accountservice.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.shopping.accountservice.model.Users;

@Repository
public interface UsersRepository extends MongoRepository<Users,String>{
	Optional<Users> findOneByEmail(String email);
}
