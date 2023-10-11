package com.ambokilecodebuffer.cryptoAPI.controller;

import com.ambokilecodebuffer.cryptoAPI.entity.User;
import com.ambokilecodebuffer.cryptoAPI.model.UserRequest;
import com.ambokilecodebuffer.cryptoAPI.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }
    @PostMapping("/createUser")
    public ResponseEntity<User> createUser(@RequestBody UserRequest userRequest){
        User createdUser = this.userService.createUser(userRequest);

        return new ResponseEntity<User>(createdUser, HttpStatus.CREATED);
    }
    @GetMapping("/getAllUsers")
    public ResponseEntity<?> getAllUsers(){
        List<User> users = this.userService.getAllUsers();


        if (users.isEmpty()){
//            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("no user found");
            return ResponseEntity.ok("no users found here");
        }else {
            return ResponseEntity.ok(users);
        }
    }

    @GetMapping("/getSingleUser/{userId}")
    public ResponseEntity<?> getUserByUserId(@PathVariable Long userId){
        User user = userService.getUserByUserId(userId);
        return ResponseEntity.ok(Objects.requireNonNullElse(user, "user with userId : "+userId+" not found"));
    }

}
