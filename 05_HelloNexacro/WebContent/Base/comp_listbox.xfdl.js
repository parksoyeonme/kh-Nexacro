(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comp_listbox");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ListBox("ListBox00","104","49","236","171",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_multiselect("true");
            var ListBox00_innerdataset = new nexacro.NormalDataset("ListBox00_innerdataset", obj);
            ListBox00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">menu1</Col><Col id=\"datacolumn\">칼국수</Col></Row><Row><Col id=\"codecolumn\">menu2</Col><Col id=\"datacolumn\">순대국</Col></Row><Row><Col id=\"codecolumn\">menu3</Col><Col id=\"datacolumn\">닭발</Col></Row><Row><Col id=\"codecolumn\">menu4</Col><Col id=\"datacolumn\">곱창</Col></Row><Row><Col id=\"codecolumn\">menu5</Col><Col id=\"datacolumn\">번데기</Col></Row></Rows>");
            obj.set_innerdataset(ListBox00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Button("Button00","377","62","120","52",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("선택 확인");
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
        this.registerScript("comp_listbox.xfdl", function() {

        this.ListBox00_onitemchanged = function(obj,e)
        {
        	//alert(obj.value);
        };

        //다중선태 요소 확인
        this.Button00_onclick = function(obj,e)
        {
        	var ds = this.ListBox00.getInnerDataset();

        	//선택된 요소의 인덱스 배열
        	  //인덱스 배열은 0부터 시작된다는 점 유의할 것

        	var indexArr = this.ListBox00.getSelectedItems();

        	//선택된 개수
        	var cnt = this.ListBox00.getSelectedCount();
        	var result ="";

        	 //배열 요소 하나씩 접근하기
        	//index는 실제 배열에 들어있는 값의 인덱스, i는 선택된 갯수의 배열 인덱스(0부터)
        	indexArr.forEach(function(index, i){
        		console.log(index, i);
        		var menuCode = ds.getColumn(index, 'codecolumn')
        		var menuName = ds.getColumn(index, 'datacolumn')
        		console.log(menuCode, menuName);

        		 //메뉴 이름 더하기
        		result += menuName;
        		 //마지막 인덱스가 아닐 경우에만 콤마
        		result += i != indexArr.length - 1 ? ", " : "";
        	});

        	if(cnt == 0)
        		alert("선택된 메뉴가 없습니다.");
        	else
        	 alert(result);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ListBox00.addEventHandler("onitemchanged",this.ListBox00_onitemchanged,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };

        this.loadIncludeScript("comp_listbox.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
