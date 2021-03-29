(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comp_static");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","50","37","259","93",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Nexacro");
            obj.set_font("20px/normal \"Gulim\",\"Consolas\"");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_border("1px solid green");
            obj.set_background("lightskyblue");
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
        this.registerScript("comp_static.xfdl", function() {

        this.Static00_onmouseenter = function(obj,e)
        {
        	//textDecoration
        	obj.set_textDecoration('underline');
        	obj.set_text('노잼');
        	obj.set_background('orange');
        };

        this.Static00_onmouseleave = function(obj,e)
        {
        	obj.set_textDecoration('');
        	obj.set_text('입니다만?');
        	obj.set_background('lightskyblue');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00.addEventHandler("onmouseenter",this.Static00_onmouseenter,this);
            this.Static00.addEventHandler("onmouseleave",this.Static00_onmouseleave,this);
        };

        this.loadIncludeScript("comp_static.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
