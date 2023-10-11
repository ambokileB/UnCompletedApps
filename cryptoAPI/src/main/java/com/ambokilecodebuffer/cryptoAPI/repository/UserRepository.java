package com.ambokilecodebuffer.cryptoAPI.repository;

import com.ambokilecodebuffer.cryptoAPI.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    User findByUserId(Long userId);

    User getUserByUserId(Long userId);
}
