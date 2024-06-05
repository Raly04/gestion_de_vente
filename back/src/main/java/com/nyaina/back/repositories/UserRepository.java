package com.nyaina.back.repositories;

import com.nyaina.back.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Integer> {
    Optional<User> findByEmailAndMdp(String email, String mdp);
}
