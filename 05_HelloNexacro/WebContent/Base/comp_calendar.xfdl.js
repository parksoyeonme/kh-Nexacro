(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comp_calendar");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("Calendar00","80","47","280","63",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","83","130","277","68",null,null,null,null,null,null,this);
            obj.set_taborder("1");
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
        this.registerScript("comp_calendar.xfdl", function() {

        this.Calendar00_onchanged = function(obj,e)
        {
        	//alert(obj.value);
        	//alert(obj.getMonth()); // 1 ~ 12
        	alert(obj.getYear() + "/" + obj.getMonth() + "/" + obj.getDay());

        	//요일 일요일 0 ~ 토요일 6
        	var arr = ['일', '월', '화', '목', '금', '토'];
        	alert(arr[obj.getDayOfWeek()] + "요일");
        };

        this.getToday = function(){

        	var today = new Date();

        	//20210324
        	var yyyy = today.getFullYear();
        	 //두자리를 만들어라, 안 될 경우 앞에다가 "0"을 채워라

        	var mm = (today.getMonth() + 1).toString().padStart(2, "0");
        	var dd = today.getDate().toString().padStart(2, "0");

        	return "" + yyyy + mm + dd;
        	//.getFullYear() 이게 숫자로 반환되서 문자열로 만드려고 하는것
        	// 지금은 이미 mm,dd를 toString해버려서 필요없긴함

        };
        //comp_calendar 자체에 onload를 적용
        this.comp_calendar_onload = function(obj,e)
        {
        	this.Calendar01.set_value(this.getToday());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.comp_calendar_onload,this);
            this.Calendar00.addEventHandler("onchanged",this.Calendar00_onchanged,this);
        };

        this.loadIncludeScript("comp_calendar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
