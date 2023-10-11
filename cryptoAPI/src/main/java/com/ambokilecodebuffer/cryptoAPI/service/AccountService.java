package com.ambokilecodebuffer.cryptoAPI.service;

import com.ambokilecodebuffer.cryptoAPI.entity.Account;
import com.ambokilecodebuffer.cryptoAPI.model.AccountRequest;

public interface AccountService {
    public Account createAccount(AccountRequest accountRequest);
}
