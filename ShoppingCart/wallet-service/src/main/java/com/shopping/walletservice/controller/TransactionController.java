package com.shopping.walletservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shopping.walletservice.model.Transaction;
import com.shopping.walletservice.service.TransactionService;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/transaction")
public class TransactionController {
	@Autowired
	TransactionService transactionService;
	
	@GetMapping("/showtransactions/{userId}")
	@ApiOperation(value = "Getting all transactions of specific user", notes = "finding the transaction done by a customer passing ID of that customer")

	public List<Transaction> showTransactionsOfUser(@PathVariable("userId") String userId) {
		
		return transactionService.getTransactionByUserId(userId);
		
	} 
	
	

}
