package com.shopping.cartservice.service;

import java.util.Optional;

import org.springframework.http.ResponseEntity;

import com.shopping.cartservice.models.Cart;
import com.shopping.cartservice.models.CheckoutInformation;

public interface CartService {
	
	public Optional<Cart> findByUserId(String userId);
	public void addCart(Cart cart);
	public ResponseEntity<String> order(CheckoutInformation checkoutInfo) throws Exception;
	 
}
