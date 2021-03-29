(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comp_combo");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"deptCode\" type=\"STRING\" size=\"256\"/><Column id=\"deptData\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"deptCode\">D1</Col><Col id=\"deptData\">인사</Col></Row><Row><Col id=\"deptCode\">D2</Col><Col id=\"deptData\">기획</Col></Row><Row><Col id=\"deptCode\">D3</Col><Col id=\"deptData\">총무</Col></Row><Row><Col id=\"deptCode\">D4</Col><Col id=\"deptData\">개발</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Combo("Combo00","50","64","259","52",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("부서");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">D1</Col><Col id=\"datacolumn\">인사</Col></Row><Row><Col id=\"codecolumn\">D2</Col><Col id=\"datacolumn\">기획</Col></Row><Row><Col id=\"codecolumn\">D3</Col><Col id=\"datacolumn\">총무</Col></Row><Row><Col id=\"codecolumn\">D4</Col><Col id=\"datacolumn\">개발</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","55","141","254","66",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_dept");
            obj.set_datacolumn("deptData");
            obj.set_codecolumn("deptCode");
            obj.set_displaynulltext("부서");
            obj.set_text("Combo01");
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
        this.registerScript("comp_combo.xfdl", function() {

        this.Combo00_onitemchanged = function(obj,e)
        {
        	alert(obj.text + "(" + obj.value + ")");
        };

        this.Combo01_onitemchanged = function(obj,e)
        {
        	alert(obj.text + "(" + obj.value + ")");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.Combo01.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
        };

        this.loadIncludeScript("comp_combo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
