package com.kh.nxcr.empl.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.kh.nxcr.empl.model.service.EmplService;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformRequest;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xapi.tx.PlatformException;

/**
 * Servlet implementation class EmplSaveServlet
 */
@WebServlet("/empl/save")
public class EmplSaveServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//1. nexacro 전용요청객체 처리
		HttpPlatformRequest httpPlatformRequest = new HttpPlatformRequest(request);
		try {
			httpPlatformRequest.receiveData();
		} catch (PlatformException e) {
			e.printStackTrace();
		}
		
		//2. dataset가져오기 : HttpPlatformRequest - PlatformData
		PlatformData reqPlatformData = httpPlatformRequest.getData();
		DataSet ds = reqPlatformData.getDataSet("in_ds");
	
		//3. 업무로직
		int ErrorCode = 0;
		String ErrorMsg = "SUCCESS";
		try {
			new EmplService().saveEmpl(ds);
		} catch(Exception e) {
			ErrorCode = -1;
			ErrorMsg = e.getMessage();
		}
		
		//4. 사용자피드백 및 nexacro 전용 응답객체 처리
		PlatformData resPlatformData = new PlatformData();
		VariableList varList = resPlatformData.getVariableList();
		varList.add("ErrorCode", ErrorCode);
		varList.add("ErrorMsg", ErrorMsg);
		
		HttpPlatformResponse httpPlatformResponse = 
				new HttpPlatformResponse(response);
		httpPlatformResponse.setData(resPlatformData);
		try {
			httpPlatformResponse.sendData();
		} catch (PlatformException e) {
			e.printStackTrace();
		}
	
	}

}