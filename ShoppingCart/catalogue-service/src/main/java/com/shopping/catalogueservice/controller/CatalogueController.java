package com.shopping.catalogueservice.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shopping.catalogueservice.model.Products;
import com.shopping.catalogueservice.service.CatalogueService;

import io.swagger.annotations.ApiOperation;


@RestController
@RequestMapping("/catalogue")
public class CatalogueController {
	@Autowired
	CatalogueService catalogueService;
	
	
	@GetMapping("/getProductById/{productId}")
	@ApiOperation(value = "Getting product By Id", notes = "Provide id of the product to get particular product details")
	public Products getProductById(@PathVariable("productId") String productId ) {
		return catalogueService.getProductById(productId);
	}
	
	
	
	@GetMapping("/getProductsByCategory/{category}")
	@ApiOperation(value = "Getting product by category", notes = "Provide category of the product to get all product with specofic category")
	public List<Products> getProductsByCategory(@PathVariable("category") String category){
		return catalogueService.getProductByCategory(category);
	}
	
	@GetMapping("/getAllProducts")
	@ApiOperation(value = "Getting all the products in the db", notes = "Provides all the products")
	public List<Products> getAllProducts(){
		List<Products> products=catalogueService.getAllProducts();
		return products;
		
	}
	
}
	
