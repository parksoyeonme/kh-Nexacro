package com.kh.nxcr.empl.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.kh.nxcr.empl.model.service.EmplService;
import com.kh.nxcr.empl.model.vo.Empl;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.Variable;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformRequest;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xapi.tx.PlatformException;

/**
 * Servlet implementation class EmplSelectServlet
 */
@WebServlet("/empl/select")
public class EmplSelectServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		// 1. nexacro전용 요청객체 처리
		HttpPlatformRequest httpPlatformRequest = new HttpPlatformRequest(request);
		try {
			httpPlatformRequest.receiveData();
		} catch (PlatformException e) {
			e.printStackTrace();
		}

		// 2. 사용자입력값처리
		PlatformData reqPlatformData = httpPlatformRequest.getData();
		Variable varName = reqPlatformData.getVariable("name");
		String name = varName.getString();
		System.out.println("name@servlet = " + name);
//		Variable varNum = reqPlatformData.getVariable("num");
//		int num = varNum.getInt();
//		System.out.println("num@servlet = " + num);

		// 3. 업무로직 : db에서 tb_empl의 정보를 리턴
		List<Empl> list = new EmplService().selectList();
		System.out.println("list@servlet = " + list);
		PlatformData resPlatformData = new PlatformData();
		int ErrorCode = 0;
		String ErrorMsg = "SUCCESS";

		// 4. 조회된 사원정보를 DataSet변환
		DataSet ds = new DataSet("out_ds");
		ds.addColumn("EMPL_ID", DataTypes.STRING);
		ds.addColumn("FULL_NAME", DataTypes.STRING);
		ds.addColumn("DEPT_CD", DataTypes.STRING);
		ds.addColumn("POS_CD", DataTypes.STRING);
		ds.addColumn("HIRE_DATE", DataTypes.STRING);
		ds.addColumn("SALARY", DataTypes.INT);
		ds.addColumn("GENDER", DataTypes.STRING);
		ds.addColumn("MARRIED", DataTypes.STRING);
		ds.addColumn("MEMO", DataTypes.STRING);
		// forEach문으로 찍어서 한번씩 돌려주기
		for (Empl empl : list) {
			int nRow = ds.newRow();
			ds.set(nRow, "EMPL_ID", empl.getEmplId());
			ds.set(nRow, "FULL_NAME", empl.getFullName());
			ds.set(nRow, "DEPT_CD", empl.getDeptCode());
			ds.set(nRow, "POS_CD", empl.getPosCode());
			ds.set(nRow, "HIRE_DATE", empl.getHireDate());
			ds.set(nRow, "SALARY", empl.getSalary());
			ds.set(nRow, "GENDER", empl.getGender());
			ds.set(nRow, "MARRIED", empl.isMarried());
			ds.set(nRow, "MEMO", empl.getMemo());

		}

		// 응답메세지에 전송할 데이터 컨테이너객체
		resPlatformData.addDataSet(ds);

		// DataSet이 아닌 데이터 추가
		VariableList varList = resPlatformData.getVariableList();
		varList.add("ErrorCode", ErrorCode);
		varList.add("ErrorMsg", ErrorMsg);

		// 5. nexacro전용 응답객체 처리
		HttpPlatformResponse httpPlatformResponse = new HttpPlatformResponse(response);
		httpPlatformResponse.setData(resPlatformData);
		try {
			httpPlatformResponse.sendData();
		} catch (PlatformException e) {
			e.printStackTrace();
		}

	}

}