package com.shopping.cartservice.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.shopping.cartservice.model.Transaction;
import com.shopping.cartservice.models.Cart;
import com.shopping.cartservice.models.CheckoutInformation;
import com.shopping.cartservice.models.Order;
import com.shopping.cartservice.repository.CartRepository;
@Service
public class CartServiceImpl implements CartService {
	@Autowired
	CartRepository cartRepository;
	@Autowired
	OrderService orderService;
	@Autowired
	RestTemplate restTemplate;
	@Override
	public void addCart(Cart cart) {
		Optional<Cart> userCart=this.findByUserId(cart.getUserId());	
		if(userCart.isPresent()) {
			Cart existingCart=userCart.get();
			if(cart.getUserId().equals(existingCart.getUserId())) {
				cart.setId(existingCart.getId());
				
				cartRepository.save(cart);
			}
		
		}
		else {
		cartRepository.save(cart);
		}
		
	}

	
	@Override
	public Optional<Cart> findByUserId(String userId) {
		return cartRepository.findOneByUserId(userId);
	}
	

	@Override
	public ResponseEntity<String> order(CheckoutInformation checkoutInfo) throws Exception {
		
		Optional<Cart> existingCartOfUser=this.findByUserId(checkoutInfo.getUserId());
		
		if(existingCartOfUser.isPresent()) 
		{
			Cart cart=existingCartOfUser.get();
			Order order=new Order(cart,checkoutInfo);
				if(order.getPaymentType().equals("WALLET"))
				{
					
					String transactionId=this.startTransaction(order.getUserId(), order.getTotalPrice());
					
					order.setTransactionId(transactionId);
					
				}

			orderService.add(order);
			cartRepository.deleteById(cart.getId());
			return ResponseEntity.ok().body("Order placed successfully");
			
		}
		else {
			throw new Exception("No Cart For User Found");
		}
	}
	
	public String startTransaction(String sourceId, double amount) throws Exception{
		
		Transaction transaction=new Transaction();
		transaction.setSource(sourceId);
		transaction.setDestination("Your EShope");
		transaction.setAmount(amount);
		try {
			String uri="http://WALLET-SERVICE/wallets/payment";
			ResponseEntity<String> response=restTemplate.postForEntity(uri, transaction, String.class);
			String transactionId=response.getBody();
			return transactionId;
		}
		catch(Exception e) {
			throw new Exception("Wallet is not responding try again later...");
		}
		
		
	}

}
