package com.nyaina.back.services;

import com.nyaina.back.models.Position;
import com.nyaina.back.models.Reservation;
import com.nyaina.back.repositories.PositionRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class PositionService {
    private final PositionRepository repository;

    public Position save (Position position)  {
        return repository.save(position);
    }

    public String deleteById (Integer id) {
        repository.deleteById(id);
        return "User deleted successfully";
    }
    public Position getById(Integer id) {
        var position = repository.findById(id);
        if(position.isEmpty()) return new Position(null,null,null,null,null,null,null,null,null);
        return position.orElseThrow(()->new EntityNotFoundException("Position not found"));
    }
    public List<Position> getAll () {
        return repository.findAll();
    }
}
