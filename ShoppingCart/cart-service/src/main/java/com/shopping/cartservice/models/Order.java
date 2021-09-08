package com.shopping.cartservice.models;

import java.util.List;

import org.springframework.data.annotation.Id;

public class Order {
	@Id
	private String id;
	private String userId;
	private double totalPrice;
	private List<CartItem> items;
	private Address address;
	private String orderStatus;
	private String paymentType;
	private String transactionId;
	
	public Order() {
		super();
	}

	public Order(Cart cart, CheckoutInformation checkoutInfo) {
		super();
		this.id = "";
		this.userId = cart.getUserId();
		this.totalPrice = cart.getTotalAmount() ;
		this.items = cart.getCartItems();
		this.address = checkoutInfo.getAddress();
		this.paymentType = checkoutInfo.getPaymentType();
		this.orderStatus = "";
		
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

	public double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public List<CartItem> getItems() {
		return items;
	}

	public void setItems(List<CartItem> items) {
		this.items = items;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public String getOrderStatus() {
		return orderStatus;
	}

	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}

	public String getPaymentType() {
		return paymentType;
	}

	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}

	public String getTransactionId() {
		return transactionId;
	}

	public void setTransactionId(String transactionId) {
		this.transactionId = transactionId;
	}
	
}
