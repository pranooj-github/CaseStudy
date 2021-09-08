package com.shopping.accountservice.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection="Users")
public class Users {
	@Id
	String id;
	String userName;
	String email;
	int phone;
	String password;
	String role;
	Address address;
	
	
	public Users() {
		
	}
	

	public Users(String id, String userName,String email,int phone,  String password, String role,Address address) {
	super();
	this.id = id;
	this.userName = userName;
	this.email = email;
	this.phone = phone;
	this.password = password;
	this.role = role;
	this.address=address;
	}

	
	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public int getPhone() {
		return phone;
	}

	public void setPhone(int phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
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
