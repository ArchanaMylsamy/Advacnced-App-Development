package com.connect.connect.service;

import com.connect.connect.dto.Servicedto;
import com.connect.connect.entity.Serviceentity;
import com.connect.connect.mapper.Servicemapper;
import com.connect.connect.repository.ServiceRepo;

import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class Serviceservice {

    private final ServiceRepo serviceRepo;

    public Serviceservice(ServiceRepo serviceRepo) {
        this.serviceRepo = serviceRepo;
    }

    public List<Servicedto> getAllServices() {
        List<Serviceentity> services = serviceRepo.findAll();
        return services.stream()
                .map(Servicemapper::maptoServicedto)
                .collect(Collectors.toList());
    }

    public Servicedto getServiceByName(String name) {
        Serviceentity serviceentity = serviceRepo.findByName(name);
        return Servicemapper.maptoServicedto(serviceentity);
    }

    public Servicedto createService(Servicedto servicedto) {
        Serviceentity serviceentity = Servicemapper.maptoServiceentity(servicedto);
        serviceentity = serviceRepo.save(serviceentity);
        return Servicemapper.maptoServicedto(serviceentity);
    }

    public Servicedto updateServiceByName(String name, Servicedto updatedServicedto) {
        Serviceentity existingService = serviceRepo.findByName(name);

        if (existingService != null) {
            // Update the fields you want to allow updating
            existingService.setEmail(updatedServicedto.getEmail());
            existingService.setMobile(updatedServicedto.getMobile());
            existingService.setTrainer(updatedServicedto.getTrainer());
            existingService.setGoal(updatedServicedto.getGoal());

            existingService = serviceRepo.save(existingService);
            return Servicemapper.maptoServicedto(existingService);
        } else {
            // Handle not found scenario
            return null;
        }
    }

    public void deleteServiceByName(String name) {
        serviceRepo.deleteByName(name);
    }
}

