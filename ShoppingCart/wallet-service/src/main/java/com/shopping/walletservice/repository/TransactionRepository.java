package com.shopping.walletservice.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.shopping.walletservice.model.Transaction;
@Repository
public interface TransactionRepository extends MongoRepository<Transaction,String> {
	public List<Transaction> findTransactionBySource(String userId);
}
