package com.shopping.apigateway.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Users")
public class Users {
	String userName;
	String email;
	int phone;
	String password;
	String role;
	Address address;;
	
	public Users() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Users(String userName, String email, int phone, String password, String role, Address address) {
		super();
		this.userName = userName;
		this.email = email;
		this.phone = phone;
		this.password = password;
		this.role = role;
		this.address = address;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getPhone() {
		return phone;
	}

	public void setPhone(int phone) {
		this.phone = phone;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}
	

}
