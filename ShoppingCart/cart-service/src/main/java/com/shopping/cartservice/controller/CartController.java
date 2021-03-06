package com.shopping.cartservice.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shopping.cartservice.models.Cart;
import com.shopping.cartservice.models.CheckoutInformation;
import com.shopping.cartservice.service.CartService;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/cart")

public class CartController {
	@Autowired
	CartService service;
	
	@GetMapping("/getCartByUserId/{userId}")
	@ApiOperation(value = "Getting cart by userId", notes = "Finds cart of specific user")

	public Optional<Cart> getCartByUserId(@PathVariable("userId") String userId) {
		System.out.println("reached here");
		System.out.println(service.findByUserId(userId));
		return service.findByUserId(userId);
	}
	
	@PostMapping("/addCart")
	@ApiOperation(value = "Creating new cart", notes = "creates new carts based on user id and given list of items")

	public void addToCart(@RequestBody Cart cart,BindingResult result) {
		
		System.out.println(result);
		service.addCart(cart);
	}
	
	@PostMapping("/order")
	@ApiOperation(value = "placing order", notes = "initiates order placing")

	public ResponseEntity<String> order(@RequestBody CheckoutInformation checkoutInfo,BindingResult result)throws Exception{
		return service.order(checkoutInfo);
		
	}
	

}
