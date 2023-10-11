package com.ambokilecodebuffer.cryptoAPI.service;

import com.ambokilecodebuffer.cryptoAPI.entity.User;
import com.ambokilecodebuffer.cryptoAPI.model.UserRequest;

import java.util.List;
import java.util.Optional;

public interface UserService {

    public User createUser(UserRequest userRequest);
    public List<User> getAllUsers();

    public User getUserByUserId(Long userId);
}
