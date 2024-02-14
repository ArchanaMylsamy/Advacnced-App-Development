package com.connect.connect.repository;

import com.connect.connect.entity.Academyentity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AcademyRepo extends JpaRepository<Academyentity, Long> {
    Academyentity findByName(String name) ;
   
    void deleteByName(String name);
    // Other methods...
}
