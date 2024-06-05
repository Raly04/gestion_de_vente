package com.nyaina.back.services;

import com.nyaina.back.models.Payement;
import com.nyaina.back.repositories.PayementRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PayementService {
    private final PayementRepository repository;
    public Payement save (Payement payement) {
        return repository.save(payement);
    }
    public List<Payement> getAll () {
        return  repository.findAll();
    }
}
