package com.shopping.walletservice.service;

import java.util.Optional;

import org.springframework.http.ResponseEntity;

import com.shopping.walletservice.model.Refill;
import com.shopping.walletservice.model.Transaction;
import com.shopping.walletservice.model.Wallet;

public interface WalletService {
	public Optional<Wallet> findByUserId(String userId);
	public void add(Wallet wallet);
	public void addMoney(Refill amount) throws Exception;
	public ResponseEntity<String> completePayment(Transaction transaction);
}
