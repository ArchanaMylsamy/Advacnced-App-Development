package com.connect.connect.mapper;

import com.connect.connect.dto.Academydto;
import com.connect.connect.entity.Academyentity;

public class Academymapper {

    public static Academydto mapToServiceDto(Academyentity academyEntity) {
        // Implement the mapping logic
        return new Academydto(
                academyEntity.getId(),
                academyEntity.getName(),
                academyEntity.getPlace()
               
        );
    }

    public static Academyentity mapToServiceEntity(Academydto academyDto) {
        // Implement the mapping logic
        return new Academyentity(
            academyDto.getId(),
            academyDto.getName(),
            academyDto.getPlace()
            
        );
    }
}
