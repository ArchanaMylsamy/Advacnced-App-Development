package com.connect.connect.mapper;

import com.connect.connect.dto.Servicedto;
import com.connect.connect.entity.Serviceentity;

public class Servicemapper {

    public static Servicedto maptoServicedto(Serviceentity serviceentity) {
        // Implement the mapping logic
        return new Servicedto(
                serviceentity.getId(),
                serviceentity.getName(),
                serviceentity.getEmail(),
                serviceentity.getMobile(),
                serviceentity.getTrainer(),
                serviceentity.getGoal()
        );
    }

    public static Serviceentity maptoServiceentity(Servicedto servicedto) {
        // Implement the mapping logic
        return new Serviceentity(
                servicedto.getId(),
                servicedto.getName(),
                servicedto.getEmail(),
                servicedto.getMobile(),
                servicedto.getTrainer(),
                servicedto.getGoal()
        );
    }
}

