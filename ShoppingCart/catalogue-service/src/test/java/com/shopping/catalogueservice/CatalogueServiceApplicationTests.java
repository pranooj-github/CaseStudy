package com.shopping.catalogueservice;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.shopping.catalogueservice.model.Products;
import com.shopping.catalogueservice.repository.ProductsRepository;
import com.shopping.catalogueservice.service.CatalogueService;
@SpringBootTest
class CatalogueServiceApplicationTests {
	@Autowired
	CatalogueService service;
	
	@MockBean
	ProductsRepository repository;

	@Test
	public void getAllProductsTest() {
		when(repository.findAll())
		.thenReturn(
			Stream.of(
					new Products("id1", "TestProduct1", "Test description", 200,"books","https://m.media-amazon.com/images/I/71Jmd1zPfRL._SY879_.jpg"),
					new Products("id2", "TestProduct2", "Test description", 100,"electronics","https://m.media-amazon.com/images/I/71Jmd1zPfRL._SY879_.jpg")
						).collect(Collectors.toList()));
		assertEquals(2, service.getAllProducts().size());
	}
	@Test
	public void getProductByIdTest() {
		String id="id1";
		Products product=new Products("id1", "TestProduct1", "Test description", 200,"books","https://m.media-amazon.com/images/I/71Jmd1zPfRL._SY879_.jpg");
		when(repository.findById(id).get()).thenReturn(product);
		assertEquals(product,service.getProductById(id));
	}
	@Test
	public void getProductByCategoryTest() {

		String category="books";
		when(repository.findProductByProductCategory(category))
		.thenReturn(Stream
				.of(new Products("id1", "TestProduct1", "Test description", 200,"books","https://m.media-amazon.com/images/I/71Jmd1zPfRL._SY879_.jpg"))
				.collect(Collectors.toList()));
			assertEquals(1, service.getProductByCategory(category).size());
		
	}
	
	

}
