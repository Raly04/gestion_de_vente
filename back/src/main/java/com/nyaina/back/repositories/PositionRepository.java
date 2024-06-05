package com.nyaina.back.repositories;

import com.nyaina.back.models.Position;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PositionRepository extends JpaRepository<Position , Integer> {
}
