package com.connect.connect.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.connect.connect.dto.request.AuthenticationRequest;
import com.connect.connect.dto.request.RegisterRequest;
// import com.connect.connect.dto.request.RegisterRequest;
// import com.connect.connect.dto.request.UserRequest;
import com.connect.connect.dto.response.AuthenticationResponse;
import com.connect.connect.service.AuthenticationService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController

@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin(origins="*")
public class AuthenticationController {

    private final AuthenticationService authenticationService;
     @Tag(name="Register",description="Register endpoint")
    @PostMapping("/register") 
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authenticationService.register(request));
    }
    @Tag(name="Login",description="Login endpoint")
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }
}
