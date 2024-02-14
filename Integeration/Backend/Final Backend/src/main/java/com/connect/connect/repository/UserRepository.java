// package com.recharge.mobilerecharge.repository;

// import com.recharge.mobilerecharge.model.User;
// import org.springframework.data.jpa.repository.JpaRepository;

// public interface UserRepo extends JpaRepository<User, Long> {
//     User findByEmail(String email);
// }

package com.connect.connect.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.connect.connect.entity.User;


@Repository
public interface UserRepository extends JpaRepository<User,Long>{
    Optional<User> findByEmail(String email);
}