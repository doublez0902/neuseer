package com.xidian.neuseer.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;


@Controller
public class TraceBack {

    @RequestMapping("/TraceBack")
    public String breaker() {
        return "mainPage";
    }

    @ResponseBody
    @RequestMapping("/getDataTable")
    public Map<String, String> getDataTable(@RequestParam("failureType") String failureType, @RequestParam("analysisType") String analysisType) {
        Map mapPack = new HashMap<String, String>();
        if (analysisType.equals("quantitative")) {
            switch (failureType) {
                case "leak":
                    mapPack.put("leak", "SF6泄露");
                    break;
                case "deterioration":
                    mapPack.put("deterioration", "主要部件劣化");
                    break;
                case "abnormal":
                    mapPack.put("abnormal", "操作机构异常");
                    break;
                default:
                    mapPack.put("damage", "辅助部件损坏");
            }
        } else {
            mapPack.put("inputdata", "inputdata");
        }
        return mapPack;
    }

    @ResponseBody
    @RequestMapping("/getTableContent")
    public void getBusinesNodes() {
    }
}
