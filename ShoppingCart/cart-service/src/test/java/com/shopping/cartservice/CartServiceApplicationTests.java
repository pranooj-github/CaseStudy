package com.shopping.cartservice;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.shopping.cartservice.models.Cart;
import com.shopping.cartservice.models.CartItem;
import com.shopping.cartservice.repository.CartRepository;
import com.shopping.cartservice.service.CartServiceImpl;

@SpringBootTest
class CartServiceApplicationTests {
	@Autowired
	CartServiceImpl cartService;
	@MockBean
	CartRepository repository;
	@Test
	void addCartTest() {
		
		CartItem item1=new CartItem("testprod1","aa","cc",100,1);
		CartItem item2=new CartItem("testprod2","bb","dd",100,1);
		Cart testCart=new Cart("id1","testUser",List.of(item1,item2),200,2);
		cartService.addCart(testCart);
		verify(repository,times(1)).save(testCart);
	}
	@Test
	public void getCartByUserIdTest() {
		List<CartItem> cartItems= new ArrayList<>();
		cartItems.add(new CartItem("testprod1","laptop","hp.jpg",50000,2));
		cartItems.add(new CartItem("testprod2","shirt","shirt.jpg",500,2));
		Optional<Cart> cart=Optional.of(new Cart("carttestid","testuser",cartItems,50500,4));
		when(repository.findOneByUserId("testuser")).thenReturn(cart);
		assertEquals(cart,cartService.findByUserId("testuser"));
	}

}
