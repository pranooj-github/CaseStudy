package com.shopping.walletservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shopping.walletservice.model.Transaction;
import com.shopping.walletservice.repository.TransactionRepository;

@Service
public class TransactionService {
	@Autowired
	TransactionRepository transactionRepository;
	
	public List<Transaction> getTransactionByUserId(String userId){
		
		return transactionRepository.findTransactionBySource(userId);
		
	}
		
	// method to add new transaction and return transaction id for order service
	public String completeTransaction(Transaction transaction) {
		
		Transaction newTransaction= transactionRepository.save(transaction);

		return newTransaction.getId();
	}
	
	
	
}
