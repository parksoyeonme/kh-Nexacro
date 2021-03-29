(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comp_maskEdit");
            this.set_titletext("New Form");
            this.set_tooltiptype("default");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new MaskEdit("MaskEdit00","50","40","317","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_format("######-#{######}");
            obj.set_tooltiptype("default");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","417","50","121","58",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","53","123","309","71",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_displaynulltext("전화번호 압력");
            obj.set_type("string");
            obj.set_format("010-####-####");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02","58","211","307","83",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_displaynulltext("도서번호");
            obj.set_type("string");
            obj.set_format("AAAA-####");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03","64","309","310","75",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_displaynulltext("카드번호");
            obj.set_type("string");
            obj.set_format("####-{####}-{####}-####");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04","70","401","299","62",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_format("#,###");
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
        this.registerScript("comp_maskEdit.xfdl", function() {

        this.MaskEdit00_onchanged = function(obj,e)
        {
        	//alert(this.MaskEdit00.value);
        	//alert('010' + this.MaskEdit01.value);
        	//alert(this.MaskEdit02.value);
        	//alert(this.MaskEdit03.value);
        	alert(this.MaskEdit04.value);
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.MaskEdit00.addEventHandler("onchanged",this.MaskEdit00_onchanged,this);
            this.MaskEdit01.addEventHandler("onchanged",this.MaskEdit00_onchanged,this);
            this.MaskEdit02.addEventHandler("onchanged",this.MaskEdit00_onchanged,this);
            this.MaskEdit03.addEventHandler("onchanged",this.MaskEdit00_onchanged,this);
            this.MaskEdit04.addEventHandler("onchanged",this.MaskEdit00_onchanged,this);
        };

        this.loadIncludeScript("comp_maskEdit.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
