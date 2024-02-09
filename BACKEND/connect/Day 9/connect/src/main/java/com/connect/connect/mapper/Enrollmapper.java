package com.connect.connect.mapper;

import com.connect.connect.dto.Enrolldto;
import com.connect.connect.entity.Enrollentity;

public class Enrollmapper {

    public static Enrolldto maptoServicedto(Enrollentity enrollentity) {
        // Implement the mapping logic
        return new Enrolldto(
                enrollentity.getId(),
                enrollentity.getName(),
                enrollentity.getEmail(),
                enrollentity.getMobile(),
                enrollentity.getDate(),
                enrollentity.getGender(),
                enrollentity.getAddress(),
                enrollentity.getCity(),
                enrollentity.getRegion(),
                enrollentity.getPostal()
        );
    }

    public static Enrollentity maptoServiceentity(Enrolldto enrolldto) {
        // Implement the mapping logic
        return new Enrollentity(
            enrolldto.getId(),
            enrolldto.getName(),
            enrolldto.getEmail(),
            enrolldto.getMobile(),
            enrolldto.getDate(),
            enrolldto.getGender(),
            enrolldto.getAddress(),
            enrolldto.getCity(),
            enrolldto.getRegion(),
            enrolldto.getPostal()
        );
    }
}

