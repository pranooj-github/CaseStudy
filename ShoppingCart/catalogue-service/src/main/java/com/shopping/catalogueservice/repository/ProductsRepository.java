package com.shopping.catalogueservice.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.shopping.catalogueservice.model.Products;


@Repository
public interface ProductsRepository extends MongoRepository<Products,String> {
	public List<Products> findByProductName(String productName);
	public List<Products> findProductByProductCategory(String category);
}