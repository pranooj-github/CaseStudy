package com.shopping.cartservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shopping.cartservice.models.Order;
import com.shopping.cartservice.service.OrderService;

import io.swagger.annotations.ApiOperation;
@RestController
@RequestMapping("/order")

public class OrderController {
	@Autowired
	OrderService orderService;
	
	@GetMapping("/orderByUserId/{userId}")
	@ApiOperation(value = "Getting order by user id", notes = "Provide orders of the users by passing user Id")

	public List<Order> getOrderByUserId(@PathVariable("userId") String userId){
		return orderService.getOrderByUser(userId);
		
	}

}
