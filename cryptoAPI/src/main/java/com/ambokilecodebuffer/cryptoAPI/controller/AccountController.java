package com.ambokilecodebuffer.cryptoAPI.controller;

import com.ambokilecodebuffer.cryptoAPI.entity.Account;
import com.ambokilecodebuffer.cryptoAPI.model.AccountRequest;
import com.ambokilecodebuffer.cryptoAPI.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/account")
public class AccountController {
    private  final AccountService accountService;
    @Autowired
    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }


    @PostMapping("/createAccount")
    public ResponseEntity<Account> createAccount(@RequestBody AccountRequest accountRequest){
        Account account = this.accountService.createAccount(accountRequest);

        return new ResponseEntity<Account>(account, HttpStatus.CREATED);
    }

}
