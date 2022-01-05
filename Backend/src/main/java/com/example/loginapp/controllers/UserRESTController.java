package com.example.loginapp.controllers;


import com.example.loginapp.entities.User;
import com.example.loginapp.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserRESTController {
    @Autowired
    UserService userService;

    @RequestMapping(method = RequestMethod.GET)
    public List<User> getAllUsers(){
        return userService.getAllUsers();}

    @RequestMapping(method = RequestMethod.POST)
    @CrossOrigin
    public User saveUser(@RequestBody User user){
        System.out.println("ddddddddddddddddddd"+user.getEmail());
        User saveUser = userService.saveUser(user);
        return saveUser;
       }
    @RequestMapping(value = "/{id}", method = RequestMethod.PATCH)
    @CrossOrigin
    public User updateUser(@PathVariable(value = "id") Long id, @RequestBody User userBody){
        User user = userService.getUser(id);
        System.out.println("ddddddddddddddddddd"+user.getEmail());
        user.setEmail(userBody.getEmail());
        user.setNom(userBody.getNom());
        User updateUser = userService.updateUser(id, user);
        return updateUser;
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @CrossOrigin
    public User getUser(@PathVariable(value = "id") Long id){
        User user = userService.getUser(id);

        return user;
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    @CrossOrigin
    public void deleteUserById(@PathVariable(value = "id") Long id){
        userService.deleteUserById(id);
    }
}
