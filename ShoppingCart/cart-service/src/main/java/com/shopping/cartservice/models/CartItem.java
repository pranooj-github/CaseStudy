package com.shopping.cartservice.models;

public class CartItem {
	private String product_Id;
	private String productName;
	private String image;
	private double unitPrice;
	private int quantity;
			
	public CartItem() {
		
	}
	public CartItem(String product_Id, String productName, String image, double unitPrice, int quantity) {
		super();
		this.product_Id = product_Id;
		this.productName = productName;
		this.image = image;
		this.unitPrice = unitPrice;
		this.quantity = quantity;
	}
	
	public String getProduct_Id() {
		return product_Id;
	}
	public void setProduct_Id(String product_Id) {
		this.product_Id = product_Id;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public double getUnitPrice() {
		return unitPrice;
	}
	public void setUnitPrice(double unitPrice) {
		this.unitPrice = unitPrice;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	@Override
	public String toString() {
		return "CartItem [product_Id=" + product_Id + ", productName=" + productName + ", image=" + image
				+ ", unitPrice=" + unitPrice + ", quantity=" + quantity + "]";
	}
	
	
}
