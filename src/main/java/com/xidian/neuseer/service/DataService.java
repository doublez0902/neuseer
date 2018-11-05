package com.xidian.neuseer.service;

import java.util.List;
import java.util.Map;

public interface DataService {

    List<Map<String, String>> getTableData(String name);

}
