package com.connect.connect.repository;

import com.connect.connect.entity.Trainerentity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainerRepo extends JpaRepository<Trainerentity, Long> {
    Trainerentity findByName(String name);
    void deleteByName(String name);
    // Other methods...
}
