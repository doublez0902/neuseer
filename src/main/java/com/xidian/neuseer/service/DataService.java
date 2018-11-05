package com.xidian.neuseer.service;

import java.util.LinkedHashMap;
import java.util.List;


public interface DataService {

    List<LinkedHashMap<String, String>> getTableData(String name);

}
