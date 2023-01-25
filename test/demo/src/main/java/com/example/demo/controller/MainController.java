package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

public class MainController {

	@Controller
	public class HomeController {
		 @GetMapping("/")
		 public String home() {
		 return "home";
		 }
		}
}
