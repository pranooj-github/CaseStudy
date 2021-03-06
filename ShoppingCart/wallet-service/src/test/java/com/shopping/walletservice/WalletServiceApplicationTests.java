package com.shopping.walletservice;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.shopping.walletservice.model.Wallet;
import com.shopping.walletservice.repository.WalletRepository;
import com.shopping.walletservice.service.WalletServiceImpl;

@SpringBootTest
class WalletServiceApplicationTests {
	@Autowired
	WalletServiceImpl walletService;
	
	@MockBean
	WalletRepository walletRepository;
	

	@Test
	public void findByUserIdTest() {
		
		String userId="acbc";
		Wallet testWallet= new Wallet();
		testWallet.setId("test1");
		testWallet.setUserId(userId);
		testWallet.setBalance(1000);
		
		when(walletRepository.findOneByUserId(userId)).thenReturn(Optional.of(testWallet));
		assertEquals(Optional.of(testWallet),walletService.findByUserId(userId));
	}
	@Test
	public void addWalletTest() {
		String userId="acbc";
		Wallet testWallet= new Wallet();
		testWallet.setId("test1");
		testWallet.setUserId(userId);
		testWallet.setBalance(1000);
		walletService.add(testWallet);
		verify(walletRepository, times(1)).save(testWallet);		
	}

	

}
