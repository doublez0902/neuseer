package com.xidian.neuseer.service.impl;

import com.xidian.neuseer.dao.DataMapper;
import com.xidian.neuseer.service.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


@Service
public class DataServiceImpl implements DataService {

    @Autowired
    DataMapper dataMapper;

    @Override
    public List<Map<String, String>> getTableData(String name) {
        return dataMapper.selectTableData(name);
    }
}
