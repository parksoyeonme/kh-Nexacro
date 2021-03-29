(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comp_edit");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("Edit00","75","48","335","82",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_displaynulltext("아이디를 입력하세요");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","520","68","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","73","139","335","82",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_displaynulltext("비밀번호를 입력하세요");
            obj.set_password("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","75","236","335","82",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_value("이것은 읽기전용입니다");
            obj.set_readonly("true");
            obj.set_text("이것은 읽기전용입니다");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","75","330","335","82",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_displaynulltext("영문자만 입력가능합니다");
            obj.set_inputtype("english");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04","75","424","335","82",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_displaynulltext("숫자만 입력가능");
            obj.set_inputtype("number");
            obj.set_maxlength("10");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","471","158","173","60",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("비밀번호확인");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp_edit.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	alert(this.Edit00.value);
        	this.Edit00.set_value(''); //초기화
        };

        //비밀번호 확인-체크박스 클릭시에 비번이 보여진다
        this.CheckBox00_onclick = function(obj,e)
        {
        	var isPassword = !obj.value;
        	this.Edit01.set_password(isPassword);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.CheckBox00.addEventHandler("onclick",this.CheckBox00_onclick,this);
        };

        this.loadIncludeScript("comp_edit.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
