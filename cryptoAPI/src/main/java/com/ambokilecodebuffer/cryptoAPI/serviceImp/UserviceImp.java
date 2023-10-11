package com.ambokilecodebuffer.cryptoAPI.serviceImp;

import com.ambokilecodebuffer.cryptoAPI.entity.Account;
import com.ambokilecodebuffer.cryptoAPI.entity.User;
import com.ambokilecodebuffer.cryptoAPI.model.UserRequest;
import com.ambokilecodebuffer.cryptoAPI.repository.UserRepository;
import com.ambokilecodebuffer.cryptoAPI.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserviceImp implements UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserviceImp(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User createUser(UserRequest userRequest) {
        User user = new User();
        Account newAccount = new Account();

        user.setPhone(userRequest.getPhone());
        user.setEmail(userRequest.getEmail());
        user.setPassword(userRequest.getPassword());
        newAccount.setBalance(0.0);
//        user.setAccount(userRequest.getAccount());
        user.setAccount(newAccount);

        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserByUserId(Long userId) {
        return userRepository.getUserByUserId(userId);
    }


}
