package com.connect.connect.controller;

import com.connect.connect.dto.Coursedto;
import com.connect.connect.service.Courseservice;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.transaction.Transactional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RequestMapping("/course")
@CrossOrigin(origins="*")
@RestController

public class Coursecontroller {

    private final Courseservice courseservice;

    public Coursecontroller(Courseservice courseservice) {
        this.courseservice = courseservice;
    }
    @Tag(name="Get ",description="Listing details")
    @Transactional
    @GetMapping
    public ResponseEntity<List<Coursedto>> getAllServices() {
        List<Coursedto> services = courseservice.getAllCourses();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }
    @Tag(name="Get ",description="Listing details by their name")
    @Transactional
    @GetMapping("/{name}")
    public ResponseEntity<Coursedto> getServiceByName(@PathVariable String name) {
        Coursedto service = courseservice.getCourseByName(name);
        if (service != null) {
            return new ResponseEntity<>(service, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @Tag(name="Post",description="Adding details")
    @Transactional
    @PostMapping
    public ResponseEntity<Coursedto> createService(@RequestBody Coursedto service) {
        Coursedto createdService = courseservice.createCourse(service);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }
    @Tag(name="Update",description="Updating details by name")
    @Transactional
    @PutMapping("/{name}")
    public ResponseEntity<Coursedto> updateServiceByName(@PathVariable String name, @RequestBody Coursedto updatedService) {
        Coursedto updatedServiceDto = courseservice.updateCourseByName(name, updatedService);
        if (updatedServiceDto != null) {
            return new ResponseEntity<>(updatedServiceDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @Tag(name="Delete",description="Deleting details by name")
    @Transactional
    @DeleteMapping("/{name}")
    public ResponseEntity<Void> deleteServiceByName(@PathVariable String name) {
        courseservice.deleteCourseByName(name);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
