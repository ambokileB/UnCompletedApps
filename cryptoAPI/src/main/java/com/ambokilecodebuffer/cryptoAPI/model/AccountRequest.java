package com.ambokilecodebuffer.cryptoAPI.model;

import com.ambokilecodebuffer.cryptoAPI.entity.User;

public class AccountRequest {
    private double balance;
//    private User user;

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }





    public AccountRequest() {
    }

    public AccountRequest(double balance) {
        this.balance = balance;

    }

    @Override
    public String toString() {
        return "AccountRequest{" +
                "balance=" + balance +

                '}';
    }
}
