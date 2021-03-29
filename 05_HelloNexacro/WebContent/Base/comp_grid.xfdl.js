(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comp_grid");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"dept_code\" type=\"STRING\" size=\"256\"/><Column id=\"dept_name\" type=\"STRING\" size=\"256\"/><Column id=\"dept_tel\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"dept_code\">D1</Col><Col id=\"dept_name\">개발부</Col><Col id=\"dept_tel\">070-1234-5678</Col></Row><Row><Col id=\"dept_code\">D2</Col><Col id=\"dept_tel\">070-2222-3333</Col><Col id=\"dept_name\">기획부</Col></Row><Row><Col id=\"dept_code\">D3</Col><Col id=\"dept_tel\">070-4444-5555</Col><Col id=\"dept_name\">총무부</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_students", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"kor\" type=\"INT\" size=\"256\"/><Column id=\"eng\" type=\"INT\" size=\"256\"/><Column id=\"math\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">홍길동</Col><Col id=\"kor\">90</Col><Col id=\"eng\">80</Col><Col id=\"math\">70</Col><Col id=\"gender\">M</Col></Row><Row><Col id=\"math\">30</Col><Col id=\"eng\">40</Col><Col id=\"kor\">50</Col><Col id=\"name\">장영실</Col><Col id=\"gender\">M</Col></Row><Row><Col id=\"name\">논개</Col><Col id=\"gender\">F</Col><Col id=\"kor\">100</Col><Col id=\"eng\">40</Col><Col id=\"math\">80</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new TextArea("TextArea00","16","30","474","93",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_value("Grid는 dataset과 1:1 대응하는 component.\n-양방향 참조 \n- grid를 수정하면, dataset에 즉시반영 \n- dataset을 수정해도,grid에 즉시반영");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","32","143","368","157",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_dept");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"부서코드\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" text=\"전화번호\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:dept_code\"/><Cell col=\"2\" text=\"bind:dept_name\"/><Cell col=\"3\" text=\"bind:dept_tel\"/></Band><Band id=\"summary\"><Cell text=\"총부서수\"/><Cell col=\"1\" colspan=\"3\" text=\"expr:dataset.getRowCount()\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","35","322","515","188",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_students");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"no\"/><Cell col=\"1\" text=\"name\"/><Cell col=\"2\" text=\"gender\"/><Cell col=\"3\" text=\"kor\"/><Cell col=\"4\" text=\"eng\"/><Cell col=\"5\" text=\"math\"/><Cell col=\"6\" text=\"sum\"/><Cell col=\"7\" text=\"avg\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" text=\"bind:name\"/><Cell col=\"2\" text=\"bind:gender\"/><Cell col=\"3\" text=\"bind:kor\"/><Cell col=\"4\" text=\"bind:eng\"/><Cell col=\"5\" text=\"bind:math\"/><Cell col=\"6\" expr=\"kor +eng +math\"/><Cell col=\"7\" expr=\"Math.round(((kor + eng + math) / 3 ) *  10)  / 10\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"expr:Math.round( dataset.getSum('kor') / dataset.rowcount * 10 ) / 10\"/><Cell col=\"4\" text=\"expr:Math.round( dataset.getSum('eng') / dataset.rowcount * 10 ) / 10\"/><Cell col=\"5\" text=\"expr:Math.round( dataset.getSum('math') / dataset.rowcount * 10 ) / 10\"/><Cell col=\"6\"/><Cell col=\"7\" text=\"expr:comp.parent.getStudentsAvg()\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","604","309","496","361",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_border("2px solid darkgray");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","33","23","197","52",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_displaynulltext("이름");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","34","137","197","52",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("국어");
            obj.set_inputtype("digit");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","36","203","197","52",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_displaynulltext("영어");
            obj.set_inputtype("digit");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","33","79","197","52",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var Div00_form_Radio00_innerdataset = new nexacro.NormalDataset("Div00_form_Radio00_innerdataset", obj);
            Div00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남</Col></Row><Row><Col id=\"codecolumn\">F</Col><Col id=\"datacolumn\">여</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Radio00_innerdataset);
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit03","33","273","197","52",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_displaynulltext("수학");
            obj.set_inputtype("digit");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","280","29","124","37",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("추가");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","282","97","125","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("선택행 삭제");
            this.Div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Edit00","value","ds_students","name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Radio00","value","ds_students","gender");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.Edit01","value","ds_students","kor");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.Edit02","value","ds_students","eng");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.Edit03","value","ds_students","math");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp_grid.xfdl", function() {

        this.TextArea00_onchanged = function(obj,e)
        {

        };

        //this => 현재폼
        this.getStudentsAvg = function(){
        	var ds = this.ds_students;
        	var sum = ds.getSum('kor') + ds.getSum('eng') + ds.getSum('math');
        	var avg = Math.round(sum / (ds.rowcount * 3) * 10) /10; //학생수 * 과목수
        	return avg;
        };

        //ds_students에 새로운행을 추가
        this.Div00_Button00_onclick = function(obj,e)
        {
        	//form객체를 먼저 찾아야한다.
        	var name = this.Div00.form.Edit00;
        	var gender = this.Div00.form.Radio00;
        	var kor = this.Div00.form.Edit01;
        	var eng = this.Div00.form.Edit02;
        	var math = this.Div00.form.Edit03;

        	//데이터셋에 행추가
        	var ds = this.ds_students;
        	var nRow = ds.addRow(); //맨 마지막에 행추가
        	//컬럼값 세팅(행인덱스, 컬럼명, 값)
        	ds.setColumn(nRow, 'name', name.value);
        	ds.setColumn(nRow, 'gender', gender.value);
        	ds.setColumn(nRow, 'kor', kor.value);
        	ds.setColumn(nRow, 'eng', eng.value);
        	ds.setColumn(nRow, 'math', math.value);

        	//초기화
        	name.set_value('');
        	gender.set_value('');
        	kor.set_value('');
        	eng.set_value('');
        	math.set_value('');

        };

        this.Div00_Button01_onclick = function(obj,e)
        {

        	//현재 선택된 행의 인덱스 가져오기
        	var nRow = this.ds_students.rowposition;
        	 if(confirm("[" + nRow + "]를 정말 삭제하시겠습니까?")){
              this.ds_students.deleteRow(nRow);

        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.TextArea00.addEventHandler("onchanged",this.TextArea00_onchanged,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
            this.Div00.form.Button01.addEventHandler("onclick",this.Div00_Button01_onclick,this);
        };

        this.loadIncludeScript("comp_grid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
