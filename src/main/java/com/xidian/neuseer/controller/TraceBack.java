package com.xidian.neuseer.controller;


import com.xidian.neuseer.service.DataService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import java.util.*;


@Controller
public class TraceBack {

    @Resource
    DataService dataService;

    @RequestMapping("/traceBack")
    public String traceBack() {
        return "mainPage";
    }

    @ResponseBody
    @RequestMapping("/getDataTable")
    public Map<String, String> getDataTable(@RequestParam("failureType") String failureType, @RequestParam("analysisType") String analysisType) {
        Map mapPack = new HashMap<String, String>();
        if (analysisType.equals("quantitative")) {
            switch (failureType) {
                case "leak":
                    mapPack.put("algorithmset", "SF6泄露");
                    break;
                case "deterioration":
                    mapPack.put("businessTree", "主要部件劣化");
                    break;
                case "abnormal":
                    mapPack.put("dataTree", "操作机构异常");
                    break;
                default:
                    mapPack.put("qualityTree", "辅助部件损坏");
            }
        } else {
            mapPack.put("SF6packlogitAIC", "inputdata");
        }
        return mapPack;
    }


    @RequestMapping("/getTableContent")
    public ModelAndView getBusinesNodes(@RequestParam("dataSource") String name) {
        List<LinkedHashMap<String, String>> tableData = dataService.getTableData(name);
        ModelAndView modelAndView = new ModelAndView("tableContent");
        modelAndView.addObject("tableData", tableData);

        LinkedList<String> title = new LinkedList<>();
        for (String titleName : tableData.get(0).keySet()) {
            title.add(titleName);
        }
        modelAndView.addObject("title", title);

        return modelAndView;
    }

}
