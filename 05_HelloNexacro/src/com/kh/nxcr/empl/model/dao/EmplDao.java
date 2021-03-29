package com.kh.nxcr.empl.model.dao;

import static com.kh.common.JDBCTemplate.close;

import java.io.FileReader;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import com.kh.nxcr.empl.model.exception.EmplException;
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

	public void insertEmpl(Connection conn, Empl empl) {
		PreparedStatement pstmt = null;
		String sql = prop.getProperty("insertEmpl");
		
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, empl.getEmplId());
			pstmt.setString(2, empl.getFullName());
			pstmt.setString(3, empl.getDeptCode());
			pstmt.setString(4, empl.getPosCode());
			pstmt.setDate(5, empl.getHireDate());
			pstmt.setInt(6, empl.getSalary());
			pstmt.setString(7, empl.getGender());
			pstmt.setBoolean(8, empl.isMarried());
			pstmt.setString(9, empl.getMemo());
			
			pstmt.executeUpdate();
			
		} catch (SQLException e) {
			e.printStackTrace();
			throw new EmplException("사원정보 추가 오류", e);
		} finally {
			close(pstmt);
		}
	}

	public void updateEmpl(Connection conn, Empl empl) {
		PreparedStatement pstmt = null;
		String sql = prop.getProperty("updateEmpl");
		
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, empl.getFullName());
			pstmt.setString(2, empl.getDeptCode());
			pstmt.setString(3, empl.getPosCode());
			pstmt.setDate(4, empl.getHireDate());
			pstmt.setInt(5, empl.getSalary());
			pstmt.setString(6, empl.getGender());
			pstmt.setBoolean(7, empl.isMarried());
			pstmt.setString(8, empl.getMemo());
			pstmt.setString(9, empl.getEmplId());
			
			pstmt.executeUpdate();
			
		} catch (SQLException e) {
			e.printStackTrace();
			throw new EmplException("사원정보 업데이트 오류", e);
		} finally {
			close(pstmt);
		}
		
	}

	public void deleteEmpl(Connection conn, String emplId) {
		PreparedStatement pstmt = null;
		String sql = prop.getProperty("deleteEmpl");
		
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, emplId);
			pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
			throw new EmplException("사원정보 삭제 오류!", e);
		} finally {
			close(pstmt);
		}
		
		
	}
	
	
}