package com.shopping.cartservice.models;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection="Cart")
public class Cart {
	@Id
	private String id;
	private String userId;
	private List<CartItem> cartItems;
	private double totalAmount;	
	private double total_quantity;
	@Override
	public String toString() {
		return "Cart [id=" + id + ", userId=" + userId + ", cartItems=" + cartItems + ", totalAmount=" + totalAmount
				+ "]";
	}

	public Cart() {
		
	}

	public Cart(String id, String userId, List<CartItem> cartItems,double totalAmount,double total_quantity) {
		
		this.id = id;
		this.userId = userId;
		this.cartItems = cartItems;
		this.totalAmount=totalAmount;
		this.total_quantity=total_quantity;
	}
	

	public double getTotal_quantity() {
		return total_quantity;
	}

	public void setTotal_quantity(double total_quantity) {
		this.total_quantity = total_quantity;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public List<CartItem> getCartItems() {
		return cartItems;
	}

	public void setCartItems(List<CartItem> cartItems) {
		this.cartItems = cartItems;
	} 
	public double getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(double totalAmount) {
		this.totalAmount = totalAmount;
	}

	
	
	

}
