(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comp_radio");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_color", this);
            obj._setContents("<ColumnInfo><Column id=\"colorCode\" type=\"STRING\" size=\"256\"/><Column id=\"colorData\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colorCode\">red</Col><Col id=\"colorData\">빨강</Col></Row><Row><Col id=\"colorCode\">yellow</Col><Col id=\"colorData\">노랑</Col></Row><Row><Col id=\"colorCode\">green</Col><Col id=\"colorData\">초록</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Radio("Radio00","50","55","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("0");
            obj.set_rowcount("1");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남자</Col></Row><Row><Col id=\"codecolumn\">F</Col><Col id=\"datacolumn\">여자</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","60","150","348","136",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("0");
            var Radio01_innerdataset = new nexacro.NormalDataset("Radio01_innerdataset", obj);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Americao</Col><Col id=\"datacolumn\">아메리카노</Col></Row><Row><Col id=\"codecolumn\">Caffe Macchiato</Col><Col id=\"datacolumn\">마끼야또</Col></Row><Row><Col id=\"codecolumn\">Caffe Latte</Col><Col id=\"datacolumn\">카페라떼</Col></Row><Row><Col id=\"codecolumn\">Capuchino</Col><Col id=\"datacolumn\">카푸치노</Col></Row><Row><Col id=\"codecolumn\">Caffe Mocha</Col><Col id=\"datacolumn\">카페모카</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Radio("Radio02","77","316","113","54",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_color");
            obj.set_codecolumn("colorCode");
            obj.set_datacolumn("colorData");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","220","273","280","154",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Sample");
            obj.set_font("48px/normal \"Consolas\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","63","450","171","70",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_displaynulltext("color code");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","278","457","165","56",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_displaynulltext("color name");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","499","454","79","51",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("추가");
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
        this.registerScript("comp_radio.xfdl", function() {

        this.Radio00_onitemchanged = function(obj,e)
        {
        	alert(obj.value);
        };

        this.Radio01_onitemchanged = function(obj,e)
        {
        	alert(obj.value);
        };

        this.Radio02_onitemchanged = function(obj,e)
        {
        	//alert(obj.value);
        	//라디오 클릭시 스태틱 글씨 색 변경
        	this.Static00.set_color(obj.value);
        };

        //ds_color에 data 동적추가
        this.Button00_onclick = function(obj,e)
        {
        	var colorCode =this.Edit00.value;
        	var colorData =this.Edit01.value;

        	//ds_color 마지막에 행추가
        	var nRow = this.ds_color.addRow();
        	this.ds_color.setColumn(nRow, 'colorCode', colorCode);
        	this.ds_color.setColumn(nRow, 'colorData', colorData);

        	//초기화
        	this.Edit00.set_value('');
        	this.Edit01.set_value('');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Radio01.addEventHandler("onitemchanged",this.Radio01_onitemchanged,this);
            this.Radio02.addEventHandler("onitemchanged",this.Radio02_onitemchanged,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };

        this.loadIncludeScript("comp_radio.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
