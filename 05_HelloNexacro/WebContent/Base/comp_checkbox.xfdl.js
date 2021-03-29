(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comp_checkbox");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new CheckBox("CheckBox00","32","28","164","48",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("메일수신여부");
            obj.set_falsevalue("no");
            obj.set_truevalue("yes");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","192","32","120","41",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
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
        this.registerScript("comp_checkbox.xfdl", function() {
        this.Button00_onclick = function(obj,e)
        {
           //alert(this.CheckBox00.value);

           var chk = this.CheckBox00;
           chk.set_value(chk.isChecked() ? 'no' : 'yes');
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };

        this.loadIncludeScript("comp_checkbox.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
