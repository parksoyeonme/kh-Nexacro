(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top");
            this.set_titletext("Form_Top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,50);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer00","13","5","237","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_image("url(\'theme://images/img_WF_Nexacro.png\')");
            obj.set_stretch("none");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu00","261","5","839","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("gds_menu");
            obj.set_captioncolumn("name");
            obj.set_idcolumn("id");
            obj.set_levelcolumn("level");
            obj.set_userdatacolumn("url");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,50,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Top.xfdl", function() {

        this.Menu00_onmenuclick = function(obj,e)
        {
        	var id = e.id;
        	//alert(id);

        	var url = _application.gds_menu.lookup("id", id, "url");
        	//alert(url);

        	_application.openFrm(url);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Menu00.addEventHandler("onmenuclick",this.Menu00_onmenuclick,this);
        };

        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
