package com.shopping.walletservice.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.shopping.walletservice.model.Refill;
import com.shopping.walletservice.model.Transaction;
import com.shopping.walletservice.model.Wallet;
import com.shopping.walletservice.repository.WalletRepository;
@Service
public class WalletServiceImpl implements WalletService{
	@Autowired
	WalletRepository walletRepository;
	@Autowired
	TransactionService transactionService;
	
	@Override
	public Optional<Wallet> findByUserId(String userId) {
	
		return walletRepository.findOneByUserId(userId);
	}

	@Override
	public void add(Wallet wallet) {
		this.walletRepository.save(wallet);
		
	}


	@Override
	public void addMoney(Refill refill) throws Exception {
		Optional<Wallet> userWallet=this.findByUserId(refill.getUserId());
		if(userWallet.isPresent())
		{
			Wallet wallet=userWallet.get();
			double newBalance=wallet.getBalance()+refill.getBalance();
			wallet.setBalance(newBalance);

			this.walletRepository.save(wallet);
		}else {
			throw new Exception("No wallet is found for this user");
		}
		
	}
//completing transaction,deducting money from wallet
	@Override
	public ResponseEntity<String> completePayment(Transaction transaction) {
		Optional<Wallet> sourceWallet=this.findByUserId(transaction.getSource());
		if(sourceWallet.isPresent()) 
		{
				Wallet wallet=sourceWallet.get();
				if(wallet.getBalance()>=transaction.getAmount())
				{
					double newBalance=wallet.getBalance()-transaction.getAmount();
					wallet.setBalance(newBalance);

					this.walletRepository.save(wallet);

					String transactionId=transactionService.completeTransaction(transaction);
					
					return ResponseEntity.ok().body(transactionId);
				}
				else {
					return ResponseEntity.badRequest().body("Insufficient Wallet balance!");
				}			
		}
		else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Wallet not found");
		}
		
		
	}
	
	
	
	
}
