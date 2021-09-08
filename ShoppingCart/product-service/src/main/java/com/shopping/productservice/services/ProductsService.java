package com.shopping.productservice.services;

import com.shopping.productservice.model.Products;

public interface ProductsService {
	
	public void addProduct(Products product);
	
	public void updateProduct(Products product);
	public void deleteProductById(String id);
	

}

