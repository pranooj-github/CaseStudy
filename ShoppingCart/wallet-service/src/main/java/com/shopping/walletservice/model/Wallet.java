package com.shopping.walletservice.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Wallets")
public class Wallet {
	private String id;
	private String userId;
	private double balance;
	
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
	public double getBalance() {
		return balance;
	}
	public void setBalance(double balance) {
		this.balance = balance;
	}
	

}
