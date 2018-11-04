package com.xidian.neuseer.dao;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface DataMapper {
    @Select("SELECT * FROM ${tableName}")
    List<List<String>> selectTable(@Param(value = "tableName") String tableName);
}
