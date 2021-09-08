package com.shopping.productservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shopping.productservice.model.Products;
import com.shopping.productservice.services.ProductsServiceImpl;

import io.swagger.annotations.ApiOperation;


@RestController
@RequestMapping("/products")
@CrossOrigin(origins="*")
public class ProductController {

	@Autowired
	ProductsServiceImpl productService;

	@ApiOperation(value = "Adding new product", notes = "creates new products by merchant")
	@PostMapping("/addProduct")
	public void addProduct(@RequestBody Products product ) {
		productService.addProduct(product);
	}
	
	//update product
	@PostMapping("/updateProduct")
	@ApiOperation(value = "update existing product", notes = "updates products by merchant")
	public void updateProduct(@RequestBody Products product) {
		
		productService.updateProduct(product);
		
	}
	@DeleteMapping("/deleteById/{productId}")
	@ApiOperation(value = "Delete existing product", notes = "deletes products by merchant by passing product id")
	public void deleteById(@PathVariable String productId) {
		System.out.println(productId);
		productService.deleteProductById(productId);
	}
	
	
}
