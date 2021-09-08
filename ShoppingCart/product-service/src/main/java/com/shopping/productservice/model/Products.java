package com.shopping.productservice.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Products")
public class Products {
	@Id
	private String id;
	private String productName;
	private String productCategory;
	private double price;
	private String description;
	private String image;
	
		
	public Products() {
		
	}
	
	public Products(String id, String productName, String productCategory, double price, String description,
			String image) {
		super();
		this.id = id;
		this.productName = productName;
		this.productCategory = productCategory;
		this.price = price;
		this.description = description;
		this.image = image;
		
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductCategory() {
		return productCategory;
	}
	public void setProductCategory(String productCategory) {
		this.productCategory = productCategory;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}

	
	
	

}
