(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_empl");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","26","26","249","55",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("KH Networks");
            obj.set_border("2px solid darkgreen");
            obj.set_textAlign("center");
            obj.set_font("bold 28px/normal \"Consolas\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","30","99","245","211",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("gds_empl");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"EMPL_ID\"/><Cell col=\"2\" text=\"FULL_NAME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:EMPL_ID\" edittype=\"none\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"AA-###\"/><Cell col=\"2\" text=\"bind:FULL_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","299","26","551","54",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_border("2px solid darkgray");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","25","10","94","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Select");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","159","10","94","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Add");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02","289","9","94","33",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Delete");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button03","419","9","100","33",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Save");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","300","99","550","450",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_border("2px solid darkgray");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","54","15","183","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("EMP_ID");
            obj.set_border("2px solid darkgray");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","54","55","183","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("FULL NAME");
            obj.set_border("2px solid darkgray");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_01","55","98","183","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("DEPT CD");
            obj.set_border("2px solid darkgray");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_02","54","138","183","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("POS CD");
            obj.set_border("2px solid darkgray");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_03","55","178","183","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("HIRE DATE");
            obj.set_border("2px solid darkgray");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_04","54","218","183","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("SALARY");
            obj.set_border("2px solid darkgray");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_05","54","258","183","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("GENDER");
            obj.set_border("2px solid darkgray");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_05_00","55","298","183","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("MARRIED");
            obj.set_border("2px solid darkgray");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_05_01","54","338","183","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("MEMO");
            obj.set_border("2px solid darkgray");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","292","15","183","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_type("string");
            obj.set_format("AA-###");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","292","55","183","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00","292","98","183","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_innerdataset("gds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("Combo00");
            this.Div01.addChild(obj.name, obj);

            obj = new ListBox("ListBox00","292","138","183","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_innerdataset("gds_pos");
            obj.set_codecolumn("POS_CD");
            obj.set_datacolumn("POS_NAME");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","292","178","183","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            this.Div01.addChild(obj.name, obj);

            obj = new Radio("Radio00","294","255","183","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_columncount("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div01_form_Radio00_innerdataset = new nexacro.NormalDataset("Div01_form_Radio00_innerdataset", obj);
            Div01_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">여</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_Radio00_innerdataset);
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","295","295","183","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_text("결혼여부");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","292","215","183","33",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_format("#,###");
            this.Div01.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","600","433","183","87",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div01.form.MaskEdit00","value","gds_empl","EMPL_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div01.form.Edit00","value","gds_empl","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div01.form.Combo00","value","gds_empl","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div01.form.ListBox00","value","gds_empl","POS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div01.form.Calendar00","value","gds_empl","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div01.form.MaskEdit01","value","gds_empl","SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div01.form.Radio00","value","gds_empl","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div01.form.CheckBox00","value","gds_empl","MARRIED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","TextArea00","value","gds_empl","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_empl.xfdl", function() {

        this.Div00_Button03_onclick = function(obj,e)
        {

        };
        /*
           db에서 tb_empl의 데이터를 불러와 페이지에 로드한다.
           로드된 데이터로 gds_empl을 갱신하면, 화면 렌더는 자동처리된다.
        */
        this.Div00_Button01_onclick = function(obj,e)
        {
        	  //전역 dataset : gds_empl
           var application = nexacro.getApplication();
           var nRow = application.gds_empl.addRow()
           console.log(nRow);

           //hire_date에 오늘 날짜 세팅
           var today = application.getToday();
           this.Div01.form.Calendar00.set_value(today);
        };

        this.Div00_Button02_onclick = function(obj,e)
        {
        	 //선택된 행을 삭제
           //_application도 전역변수를 가져오는 방법
           var nRow = _application.gds_empl.rowposition;
           _application.gds_empl.deleteRow(nRow);
        };

        /*
        * db에서 tb_empl의 데이터를 불러와 페이지에 로드한다.
        * 로드된 데이터로 gds_empl을 갱신하면, 화면렌더는 자동처리된다.
        */
        this.Div00_Button00_onclick = function(obj,e)
        {

        	/*
               Application.transaction(
                 strSvcID,      	-- service id
                 strURL,         	-- 요청 url
                 strInDatasets,   	-- 요청 dataset serverDataset=clientDataset1 / 잘 적어야 함. 여러개면 공백 기준으로 연결
        							-- 옵션 : :U(갱신정보), :A(모든정보), :N(기본값:삭제제외)
                 strOutDatasets,  	-- 응답 dataset clientDataset1=serverDataset1 / 응답받는 데이터셋, 역시 공백 기준 연결
                 strArgument,  		-- 사용자 입력값(전송할 값이 있다면)
                 strCallbackFunc   	-- callback함수(문자열로 전달해야 한다)
        		};
            */

        	_application.transaction(
        		"empl.select",
        		"DataUrl::/empl/select",
        		"",
        		"gds_empl=out_ds",
        		"name=홍길동",
        		"callbackFunc"
        	);
        };
        _application.callbackFunc = function(strSvcID, nErrorCode, strErrorMsg){
        	console.log(strSvcID, nErrorCode, strErrorMsg);
        	 //nErrorCode 가 음수면 에러
        	if(nErrorCode < 0) alert(strErrorMsg);
        	else alert("[" + strSvcID + "] 트랜잭션 성공!");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
            this.Div00.form.Button01.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.Div00.form.Button02.addEventHandler("onclick",this.Div00_Button02_onclick,this);
            this.Div00.form.Button03.addEventHandler("onclick",this.Div00_Button03_onclick,this);
        };

        this.loadIncludeScript("frm_empl.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
