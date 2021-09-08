package com.shopping.walletservice.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.shopping.walletservice.model.Wallet;

@Repository
public interface WalletRepository extends MongoRepository<Wallet,String> {
	public Optional<Wallet> findOneByUserId(String id);
}
