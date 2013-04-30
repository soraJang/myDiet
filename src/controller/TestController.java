package controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class TestController {

	@RequestMapping
	public ModelAndView callJ(HttpServletRequest request) {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("index2");
		return mv;
	}
}
