package com.shopping.walletservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shopping.walletservice.model.Refill;
import com.shopping.walletservice.model.Transaction;
import com.shopping.walletservice.model.Wallet;
import com.shopping.walletservice.service.WalletServiceImpl;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/wallets")
//@CrossOrigin(origins="*")
public class WalletController {
	@Autowired
	WalletServiceImpl walletService;
	@PostMapping("/add")
	@ApiOperation(value = "Adding creating new wallet", notes = "creates new products by merchant")
	public String addNewVallet(@RequestBody Wallet wallet, BindingResult results) {
		
		walletService.add(wallet);
		return "wallet added";
	}
	@PostMapping("/addMoney")
	@ApiOperation(value = "adding money to wallet", notes = "recharging the wallet")

	public void addMoney(@RequestBody Refill refill) throws Exception
	{
		walletService.addMoney(refill);
		
	}
	@GetMapping("getWalletById/{id}")
	@ApiOperation(value = "Retrieve specific user wallet", notes = "Finding user speific wallet", response = Wallet.class, responseContainer = "Object")

	public Wallet findWalletByUserId(@PathVariable("id") String id)
	{
		return walletService.findByUserId(id).get();
	}
	@PostMapping("/payment")
	@ApiOperation(value = "getting rest call from orde specific user wallet", notes = "Finding user speific wallet", response = Wallet.class, responseContainer = "Object")
	public ResponseEntity<String> startTransaction(@RequestBody Transaction transaction){
		return walletService.completePayment(transaction);
		
	}
}
