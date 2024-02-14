package com.connect.connect;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;



@SpringBootApplication
@OpenAPIDefinition(
		info =@Info(
				title = "SATTVA CONNECT",
				version = "1.1.2",
				description = "Yoga Academy Admission Portal",
				contact = @Contact(
						name = "Archana",
						email = "archanaa1404@gmail.com"
						)
				)
		)
public class ConnectApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConnectApplication.class, args);
	}

}
