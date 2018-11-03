package com.xidian.neuseer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class TraceBack {

    @ResponseBody
    @RequestMapping("/get")
    public void getBusinesNodes() {
    }
}
