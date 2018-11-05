package com.xidian.neuseer.dao;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;


@Component
public interface DataMapper {

    @Select("select * from ${tableName}")
    List<Map<String, String>> selectTableData(@Param("tableName") String tableName);

}
