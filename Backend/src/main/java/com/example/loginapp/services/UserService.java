package com.example.loginapp.services;


import com.example.loginapp.entities.User;

import java.util.List;

public interface UserService {
    User saveUser(User u);
    User updateUser(Long id, User u);
    void deleteUser(User u);
    void deleteUserById(Long id);
    User getUser(Long id);
    List<User> getAllUsers();
}
