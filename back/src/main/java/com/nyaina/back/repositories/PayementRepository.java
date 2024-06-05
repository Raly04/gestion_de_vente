package com.nyaina.back.repositories;

import com.nyaina.back.models.Payement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PayementRepository extends JpaRepository<Payement , Integer> {
}
