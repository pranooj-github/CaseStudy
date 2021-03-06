package com.shopping.cartservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shopping.cartservice.models.Order;
import com.shopping.cartservice.repository.OrderRepository;
@Service
public class OrderService {
	@Autowired
	private OrderRepository orderRepository;
	
	public List<Order> getOrderByUser(String userId){
		
		return orderRepository.findByUserId(userId);
		
	}
	
	public void add(Order order) {
		order.setOrderStatus("COMPLETED");
		orderRepository.save(order);
	}

}
