package com.shopping.cartservice.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.shopping.cartservice.models.Cart;

public interface CartRepository extends MongoRepository<Cart,String>{
	public Optional<Cart> findOneByUserId(String userId);

}
