package com.connect.connect.repository;

import com.connect.connect.entity.Enrollentity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnrollRepo extends JpaRepository<Enrollentity, Long> {
    static Enrollentity findByName(String name) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findByName'");
    }
    void deleteByName(String name);
    // Other methods...
}
