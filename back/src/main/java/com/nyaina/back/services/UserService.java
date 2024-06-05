package com.nyaina.back.services;

import com.nyaina.back.models.User;
import com.nyaina.back.repositories.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class UserService {
    private final UserRepository repository;

    public User save (User user) {
        return repository.save(user);
    }
    public void deleteById (Integer id) {
        repository.deleteById(id);
    }
    public User getById (Integer id) {
        var user = repository.findById(id);
        if(user.isEmpty()) return new User(null,null,null,null,null,null,null);
        return user.orElseThrow(()->new EntityNotFoundException("User not found"));
    }

    public User getByEmailAndMdp (String email,String mdp) {
        return repository.findByEmailAndMdp(email,mdp).orElseThrow(()->new EntityNotFoundException("User not found"));
    }
    public List<User> getAll () {
        return repository.findAll();
    }
}
