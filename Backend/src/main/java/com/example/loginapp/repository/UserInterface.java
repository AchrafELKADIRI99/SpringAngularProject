package com.example.loginapp.repository;


import com.example.loginapp.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin

@RepositoryRestResource(path = "rest")
public interface UserInterface extends JpaRepository<User, Long> {
}
