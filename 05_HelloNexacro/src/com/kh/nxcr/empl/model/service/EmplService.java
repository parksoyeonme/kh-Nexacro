package com.kh.nxcr.empl.model.service;

import static com.kh.common.JDBCTemplate.close;
import static com.kh.common.JDBCTemplate.commit;
import static com.kh.common.JDBCTemplate.getConnection;
import static com.kh.common.JDBCTemplate.rollback;

import java.sql.Connection;
import java.util.List;

import com.kh.nxcr.empl.model.dao.EmplDao;
import com.kh.nxcr.empl.model.exception.EmplException;
import com.kh.nxcr.empl.model.vo.Empl;
import com.nexacro17.xapi.data.DataSet;

public class EmplService {

	private EmplDao emplDao = new EmplDao();

	public List<Empl> selectList() {
		Connection conn = getConnection();
		List<Empl> list = emplDao.selectAll(conn);
		close(conn);
		return list;
	}

	public void saveEmpl(DataSet ds) {
		Connection conn = getConnection();
		
		//DataSet의 rowtype
		//0 ROW_TYPE_NORMAL
		//1 ROW_TYPE_INSERTED
		//2 ROW_TYPE_UPDATED
		try {
			// 1. insert | update
			for(int i = 0; i < ds.getRowCount(); i++) {
				
				int rowType = ds.getRowType(i);
				System.out.println(ds.getString(i, "EMPL_ID") + " : " + rowType);
				
				if(rowType == DataSet.ROW_TYPE_NORMAL)
					continue;
				
				Empl empl = new Empl();
				empl.setEmplId(ds.getString(i, "EMPL_ID"));
				empl.setFullName(ds.getString(i, "FULL_NAME"));
				empl.setDeptCode(ds.getString(i, "DEPT_CD"));
				empl.setPosCode(ds.getString(i, "POS_CD"));
				empl.setGender(ds.getString(i, "GENDER"));
				empl.setMarried(ds.getBoolean(i, "MARRIED"));
				empl.setSalary(ds.getInt(i, "SALARY"));
				empl.setMemo(ds.getString(i, "MEMO"));
				
				java.util.Date utilHireDate = ds.getDateTime(i, "HIRE_DATE");
				java.sql.Date sqlHireDate = new java.sql.Date(utilHireDate.getTime());
				empl.setHireDate(sqlHireDate);
				
				if(rowType == DataSet.ROW_TYPE_INSERTED)
					emplDao.insertEmpl(conn, empl);
				else if(rowType == DataSet.ROW_TYPE_UPDATED)
					emplDao.updateEmpl(conn, empl);
				
			}
			
			
			// 2. delete
			for(int i = 0; i < ds.getRemovedRowCount(); i++) {
				String emplId = ds.getRemovedStringData(i, "EMPL_ID");
				emplDao.deleteEmpl(conn, emplId);
			}
			
			// 트랜잭션 처리
			commit(conn);
		} catch (Exception e) {
			rollback(conn);
			throw new EmplException("사원 정보 저장 오류!", e);
		} finally {
			close(conn);
		}
	}
}


