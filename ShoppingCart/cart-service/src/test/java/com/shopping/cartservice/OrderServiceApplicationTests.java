package com.shopping.cartservice;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.shopping.cartservice.models.Address;
import com.shopping.cartservice.models.Cart;
import com.shopping.cartservice.models.CartItem;
import com.shopping.cartservice.models.CheckoutInformation;
import com.shopping.cartservice.models.Order;
import com.shopping.cartservice.repository.OrderRepository;
import com.shopping.cartservice.service.OrderService;
@SpringBootTest
class OrderServiceApplicationTests {
	@Autowired
	OrderService service;
	@MockBean
	OrderRepository repository;
	

	@Test
	void getOrderByUserId() {
		String userId="testUser";
		CartItem item1=new CartItem("testprod1","aa","cc",100,1);
		CartItem item2=new CartItem("testprod2","bb","dd",100,1);
		Cart testCart=new Cart("id1","testUser",List.of(item1,item2),200,2);
		CheckoutInformation testcheckout= new CheckoutInformation();
		testcheckout.setUserId(userId);
		testcheckout.setPaymentType("WALLET");
		
		Address address= new Address();
		address.setHouse("house");
		address.setCity("city");
		address.setStreet("street");
		address.setPin("123456");
		testcheckout.setAddress(address);
		Order order=new Order(testCart,testcheckout);
		order.setId("testOrder");
		when(repository.findByUserId(userId)).thenReturn(List.of(order));
		assertEquals(1, service.getOrderByUser(userId).size());

		
		
		
		

		
	}

}
