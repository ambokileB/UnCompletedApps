package com.ambokilecodebuffer.cryptoAPI.model;

import com.ambokilecodebuffer.cryptoAPI.entity.Account;

public class UserRequest {

    private String phone;
    private String email;
    private String password;

    private Account account;

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public UserRequest() {
    }

    public UserRequest(String phone, String email, String password, Account account) {
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.account = account;
    }

    @Override
    public String toString() {
        return "UserRequest{" +
                "phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", account=" + account +
                '}';
    }
}
