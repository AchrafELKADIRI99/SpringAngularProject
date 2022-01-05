package com.example.loginapp.services;

import com.example.loginapp.entities.User;
import com.example.loginapp.repository.UserInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserInterface userInterface;
    @Override
    public User saveUser(User u) {
        return userInterface.save(u);
    }
    @Override
    public User updateUser(Long id, User u) {
        return userInterface.save(u);
    }
    @Override
    public void deleteUser(User u) {
        userInterface.delete(u);
    }
    @Override
    public void deleteUserById(Long id) {
        userInterface.deleteById(id);
    }
    @Override
    public User getUser(Long id) {
        return userInterface.findById(id).get();
    }
    @Override
    public List<User> getAllUsers() {
        return userInterface.findAll();
    }
}
