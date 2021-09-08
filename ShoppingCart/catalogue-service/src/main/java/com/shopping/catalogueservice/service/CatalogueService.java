package com.shopping.catalogueservice.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shopping.catalogueservice.model.Products;
import com.shopping.catalogueservice.repository.ProductsRepository;

@Service
public class CatalogueService {
	@Autowired
	ProductsRepository repository;
	
	public List<Products> getAllProducts(){
		List<Products> getAllProducts= new ArrayList<>();
		repository.findAll().forEach(getAllProducts::add);
		return getAllProducts;
	}


	public Products getProductById(String id) {
		return repository.findById(id).get();
		
	}

	public List<Products> getProductByCategory(String category) {
		return repository.findProductByProductCategory(category);
		
	}


}
