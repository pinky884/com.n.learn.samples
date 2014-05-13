package com.n.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomePageController {
	
	@RequestMapping("/home")
	public ModelAndView homePage(){
		return new ModelAndView("/container");
	}

}
