package com.kh.nxcr.empl.model.service;

import static com.kh.common.JDBCTemplate.*;

import java.sql.Connection;
import java.util.List;

import com.kh.nxcr.empl.model.dao.EmplDao;
import com.kh.nxcr.empl.model.vo.Empl;


public class EmplService {

	private EmplDao emplDao = new EmplDao();

	
	public List<Empl> selectList() {
		Connection conn = getConnection();
		List<Empl> list = emplDao.selectAll(conn);
		close(conn);
		return list;
	}
}