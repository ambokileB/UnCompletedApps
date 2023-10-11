package com.ambokilecodebuffer.cryptoAPI.repository;

import com.ambokilecodebuffer.cryptoAPI.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account,Long> {
}
