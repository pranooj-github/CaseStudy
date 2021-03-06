package com.shopping.accountservice;

import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
@SpringBootApplication
@EnableSwagger2
public class AccountServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(AccountServiceApplication.class, args);
	}
	@Bean
	public Docket swaggerConfig() {
		return new Docket(DocumentationType.SWAGGER_2).select()
				.apis(RequestHandlerSelectors.basePackage("com.shopping.accountservice.controller")).build()
				.apiInfo(apiInfo());
	}
	//meta data
	private ApiInfo apiInfo() {
		return new ApiInfo("User Service", "User management services ", "1.0", "Free to use",
				new Contact("Pranooj P V", "http://eshop.com", "pranooj@eshop.com"), "License of API",
				"http://eshop.com", Collections.emptyList());
	}

}
