package com.connect.connect.service;

import com.connect.connect.dto.request.LoginRequest;
import com.connect.connect.dto.request.RegisterRequest;
import com.connect.connect.dto.response.LoginResponse;
import com.connect.connect.dto.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);
}