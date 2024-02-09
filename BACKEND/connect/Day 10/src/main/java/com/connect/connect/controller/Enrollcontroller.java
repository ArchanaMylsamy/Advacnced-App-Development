package com.connect.connect.controller;

import com.connect.connect.dto.Enrolldto;
import com.connect.connect.service.Enrollservice;

import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RequestMapping("/enroll")
@CrossOrigin(origins="*")
@RestController

public class Enrollcontroller {

    private final Enrollservice enrollservice;

    public Enrollcontroller(Enrollservice enrollservice) {
        this.enrollservice = enrollservice;
    }
    @Tag(name="Get enroll",description="Enroll details will be listed")
    @GetMapping
    public ResponseEntity<List<Enrolldto>> getAllServices() {
        List<Enrolldto> services = enrollservice.getAllServices();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }
    @Tag(name="Get enroll by name",description="Enroll details will be listed by searching their name")
    @GetMapping("/{name}")
    public ResponseEntity<Enrolldto> getServiceByName(@PathVariable String name) {
        Enrolldto service = enrollservice.getServiceByName(name);
        if (service != null) {
            return new ResponseEntity<>(service, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @Tag(name="Post enrollment details",description="Posting enrollment details using post method")
    @PostMapping
    public ResponseEntity<Enrolldto> createService(@RequestBody Enrolldto service) {
        Enrolldto createdService = enrollservice.createService(service);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }
    @Tag(name="Update enroll details",description="Updating enrollment details using put method")
    @PutMapping("/{name}")
    public ResponseEntity<Enrolldto> updateServiceByName(@PathVariable String name, @RequestBody Enrolldto updatedService) {
        Enrolldto updatedServiceDto = enrollservice.updateServiceByName(name, updatedService);
        if (updatedServiceDto != null) {
            return new ResponseEntity<>(updatedServiceDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @Tag(name="Delete enroll",description="Updating enrollment details by name")
    @DeleteMapping("/{name}")
    public ResponseEntity<Void> deleteServiceByName(@PathVariable String name) {
        enrollservice.deleteServiceByName(name);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

