package com.ambokilecodebuffer.cryptoAPI.serviceImp;

import com.ambokilecodebuffer.cryptoAPI.entity.Account;
import com.ambokilecodebuffer.cryptoAPI.model.AccountRequest;
import com.ambokilecodebuffer.cryptoAPI.repository.AccountRepository;
import com.ambokilecodebuffer.cryptoAPI.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImp implements AccountService {
    private final AccountRepository accountRepository;
    @Autowired
    public AccountServiceImp(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @Override
    public Account createAccount(AccountRequest accountRequest) {
        Account account= new Account();


        account.setBalance(accountRequest.getBalance());

        return accountRepository.save(account);
    }
}
