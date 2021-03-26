package com.kh.nxcr.empl.model.dao;

import static com.kh.common.JDBCTemplate.close;

import java.io.FileReader;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import com.kh.nxcr.empl.model.vo.Empl;

public class EmplDao {

	private Properties prop = new Properties();

	public EmplDao() {
		try {
			//클래스객체 위치찾기 : 절대경로를 반환한다. 
			String fileName = EmplDao.class.getResource("/sql/nxcr/nxcr-query.properties").getPath();
			prop.load(new FileReader(fileName));
		} catch (Exception e) {
			e.printStackTrace();
		}	
	}

	public List<Empl> selectAll(Connection conn) {
		List<Empl> list = new ArrayList<>();
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		
		String query = prop.getProperty("selectList");
		
		try{
			//미완성쿼리문을 가지고 객체생성. 
			pstmt = conn.prepareStatement(query);
			//쿼리문실행
			rset = pstmt.executeQuery();
			
			while(rset.next()){
				Empl empl = new Empl(
						rset.getString("EMPL_ID"), 
						rset.getString("FULL_NAME"),
						rset.getString("DEPT_CD"),
						rset.getString("POS_CD"),
						rset.getDate("HIRE_DATE"),
						rset.getInt("SALARY"),
						rset.getString("GENDER"),
						rset.getBoolean("MARRIED"),
						rset.getString("MEMO")    
					);
				list.add(empl);
			}
			
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			close(rset);
			close(pstmt);
		}
		return list;
	}
	
	
}