package com.shopping.productservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shopping.productservice.model.Products;
import com.shopping.productservice.repository.ProductsRepository;
@Service
public class ProductsServiceImpl implements ProductsService{
	
	@Autowired
	ProductsRepository repository;
	
	@Override
	public void addProduct(Products product) {
		repository.save(product);
		
	}
	
	@Override
	public void updateProduct(Products product) {
		repository.save(product);
		
	}

	@Override
	public void deleteProductById(String id) {
		repository.deleteById(id);		
	}


}
