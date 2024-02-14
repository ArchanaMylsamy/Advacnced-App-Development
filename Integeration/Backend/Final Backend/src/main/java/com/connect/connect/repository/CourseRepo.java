package com.connect.connect.repository;

import com.connect.connect.entity.Courseentity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepo extends JpaRepository<Courseentity, Long> {
    Courseentity findByName(String name);
    void deleteByName(String name);
    // Other methods...
}
