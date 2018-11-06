package com.xidian.neuseer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class TraceGuide {

    @RequestMapping("/traceGuide")
    public String traceGuide() {
        return "traceGuide";
    }

    @RequestMapping("/faultKnowledge")
    public String faultKnowledge() {
        return "faultKnowledge";
    }
}
