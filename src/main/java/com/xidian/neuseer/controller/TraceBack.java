package com.xidian.neuseer.controller;


import com.xidian.neuseer.service.DataService;
import net.sf.json.JSONObject;
import okhttp3.FormBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URLDecoder;
import java.nio.charset.Charset;
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
    public Map<String, String> getDataTable(@RequestParam("failureType") String failureType, @RequestParam(value = "analysisType") String analysisType) {
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
            mapPack.put("qualitativeData", "定性");
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

    @RequestMapping("/getHeader")
    private static String getHeader() {
        String USERNAME = "u_spk_qzcsLAOz";
        String PASSWORD = "31k3hYgs9kiqhNZYCPEP3SR3Cw4Y8Bin";
        String auth = USERNAME + ":" + PASSWORD;
        //byte[] encodedAuth = Base64.Encoder(auth.getBytes(Charset.forName("US-ASCII")));
        byte[] encodeAuth = Base64.getEncoder().encode(auth.getBytes
                (Charset.forName("US-ASCII")));
        String authHeader = "Basic " + new String(encodeAuth);
        return authHeader;
    }

    @ResponseBody
    @RequestMapping("/getResult")
    public String getResult(HttpServletRequest request, HttpServletResponse httpServletRespose) throws IOException, InterruptedException {
        httpServletRespose.setContentType("text/html;charset=UTF-8");
        String FAtype = URLDecoder.decode(request.getParameter("FAtype"), "utf-8");

        String urlID = null;
        switch (FAtype) {
            case "leakqualitative":
                urlID = "2DWY5RJG8";
                break;
            case "deteriorationqualitative":
                urlID = "2DV4589A6";
                break;
            case "abnormalqualitative":
                urlID = "2DWY5RJG8";
                break;
            case "damagequalitative":
                urlID = "2DWY5RJG8";
                break;
            case "leakquantitative":
                urlID = "2DWY5RJG8";
                break;
            case "deteriorationquantitative":
                urlID = "2DWY5RJG8";
                break;
            case "abnormalquantitative":
                urlID = "2DWY5RJG8";
                break;
            case "damagequantitative":
                urlID = "2DWY5RJG8";
                break;
        }
        String URL = "https://spark.neuseer.com/api/notebook/job/ext/" + urlID;

        JSONObject result = null;
        String GetUrl = null;
        //String GetStatus = null;
        FormBody formBody = new FormBody.Builder()
                //.add("","")//设置参数名称和参数值               
                .build();
        OkHttpClient client = new OkHttpClient();
        Request request1 = new Request.Builder()
                .url(URL)
                .addHeader("Authorization", getHeader())
                //.addHeader("Postman-Token", "e92c91a8-c8dc-4b72-9885-fc7e0f050c15")
                .post(formBody)
                .build();
        try {
            Response response = client.newCall(request1).execute();
            //result=new JSONObject();
            //System.out.println(response.body().string());
            //result = JSONObject.fromObject(response);
            String responseData = response.body().string();
            //System.out.println(responseData);
            result = JSONObject.fromObject(responseData);
            GetUrl = result.getString("id");
            //GetStatus = result.getString("status");
            System.out.println(GetUrl);

        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        Thread.sleep(30000);

        String data = null;
        String status = null;
        OkHttpClient client2 = new OkHttpClient();

        Request request2 = new Request.Builder()
                .url("https://spark.neuseer.com/api/notebook/job/ext/" + GetUrl)
                .get()
                .addHeader("Authorization", getHeader())
                //.addHeader("Postman-Token", "9b38db8b-ba90-4992-93ac-e31abe57a5e3")
                .build();

        try {
            Response response = client2.newCall(request2).execute();
            //System.out.println(response.body().string());
            String responseData = response.body().string();
            result = JSONObject.fromObject(responseData);

            status = result.getString("status");
            System.out.println(status);

            data = result.getString("data");
            System.out.println(data);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return data;
    }

    //分析结果
    @RequestMapping("/getAnalysisResult")
    public ModelAndView getBusinesNodes(@RequestParam("failureType") String failureType, @RequestParam(value = "analysisType") String analysisType) {

        String pageType = null;

        if (analysisType.equals("qualitative")) {
            pageType = "qualitativeResult";
        } else {
            pageType = "quantitativeResult";
        }
        ModelAndView modelAndView = new ModelAndView(pageType);

        List<LinkedHashMap<String, String>> tableData = dataService.getTableData(analysisType + failureType);
        modelAndView.addObject("tableData", tableData);

        LinkedList<String> title = new LinkedList<>();
        for (String titleName : tableData.get(0).keySet()) {
            title.add(titleName);
        }
        modelAndView.addObject("title", title);

        if (analysisType.equals("quantitative")) {
            List<LinkedHashMap<String, String>> anotherData = dataService.getTableData(failureType + "anotherValue");
            modelAndView.addObject("anotherData", anotherData);

            LinkedList<String> anotherTitle = new LinkedList<>();
            for (String anotherTitleName : anotherData.get(0).keySet()) {
                anotherTitle.add(anotherTitleName);
            }
            modelAndView.addObject("anotherTitle", anotherTitle);
        }

        modelAndView.addObject("option", "option_" + failureType);

        return modelAndView;
    }

}
