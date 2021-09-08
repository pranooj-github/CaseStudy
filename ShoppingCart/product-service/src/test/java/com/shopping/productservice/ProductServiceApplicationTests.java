package com.shopping.productservice;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.shopping.productservice.model.Products;
import com.shopping.productservice.repository.ProductsRepository;
import com.shopping.productservice.services.ProductsService;

@SpringBootTest
class ProductServiceApplicationTests {
	@Autowired
	ProductsService service;
	@MockBean
	ProductsRepository repository;

	@Test
	public void addProductTest() {
		
		Products testProduct=new Products("test1","","",123,"","");
		service.addProduct(testProduct);
		verify(repository, times(1)).save(testProduct);
		
	}
	@Test
	public void updateProductTest() {
		Products testProduct=new Products("test1","","",123,"","");
		service.updateProduct(testProduct);
		verify(repository, times(1)).save(testProduct);

	}
	@Test
	public void deleteByIdTest() {
		String id="test1";
		service.deleteProductById(id);
		verify(repository, times(1)).deleteById(id);

		
	}

}
