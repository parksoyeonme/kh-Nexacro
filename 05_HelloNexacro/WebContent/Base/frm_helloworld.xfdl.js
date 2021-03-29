(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_helloworld");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","310","70","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("안녕 Nexacro");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","70","75","160","45",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","90","180","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("일반 텍스트입니다.");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_helloworld.xfdl", function() {
        /*
        * Button00_onclick
        * id_event 임의의 핸들러 함수작성
        * this 현재 form을 가리킴.
        */
        this.Button00_onclick = function(obj,e)
        {
        	//alert('안녕');
        	//trace('trace : ' + obj.text); //개발자도구에찍힘
        // 	console.log('console.log :' + obj.text); //NRE에서 무시

        	alert(this.Edit00.value); //getter로 사용
        	this.Edit00.set_value('반갑다, Nexcaro'); //setter(함수)

        	//전역객체 application
        	var application = nexacro.getApplication();
        	console.dir(application); //nexacro._EventSinkObject#Application_Desktop

        };

        /**
        * custom함수 event binding
        *컴포넌트의 event속성에서 직접 지정
        */
        this.my_button_handler = function(obj, e){
        	//alert('my_button_handler();');
        	alert(this.Static00.text);
        	this.Static00.set_text('박소연');
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.my_button_handler,this);
            this.Static00.addEventHandler("onclick",this.my_button_handler,this);
        };

        this.loadIncludeScript("frm_helloworld.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
