package com.xidian.neuseer.dao;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.LinkedHashMap;
import java.util.List;


@Component
public interface DataMapper {

    @Select("select * from ${tableName}")
    List<LinkedHashMap<String, String>> selectTableData(@Param("tableName") String tableName);

}
