// socail-share
var initSocial = function (div){
  var $config = {
  "sites":['wechat', 'qzone', 'qq', 'weibo','douban'],
  "title ":"hello world",
  "mode":"prepend",
  "mobile-sites":['wechat', 'qq', 'weibo']
};
$(div).share($config);

}
var show = function(divmodel){
  $link = $(divmodel);
  console.log($link.css("display"))
  if($link.css("display")=="none"){
    $link.removeClass("hidden");
    $link.show(600)
  }
  else{
      $link.hide(600)
     
  }  
}
/* input userId
 *  check wehether login or not 
 */
var checkLogin = function(userId){
    var loginFlag = false;
    if(window.localStorage){   
         loginFlag = localStorage.getItem(userId);    
    }else{  
        alert("浏览器还不支持 web storage 功能");  
    } 
    return loginFlag; //采用其他处理方式    
}
// request data
var reqData = function(interfaceurl){
  var resultdata;
    $.ajax({
            url:'http://127.0.0.1:3333/'+interfaceurl,//common_image,
            type:'get',
            async: false, // 同步
            dataType:'json',
            success:function(data){
                if(data['success']){
                    resultdata = {
                    title: interfaceurl,
                    datalist: data['data']
                  };  
                }
            }
        })
    return resultdata;
}

// get url parameters
var  getQueryString = function(url){
    tmp = url || window.location.href;
    var flag = tmp.indexOf("?");
    if(flag > 0)
        return tmp.substr(flag +1);
    else
        return null;
}

// 保存后反馈窗口
var save = function(titleTxt,conTxt){
  titleTxt = '牛逼闪闪的标题';
  conTxt =  '<p>收藏成功.</p>';
 new show_modal({modalId:'alert_like',titleTxt:titleTxt,modalCon:conTxt ,bootstrapOptionObj:{show:true,backdrop:false},callback:timeClose()});
}
/** 
 *
 *说明：本方法基于bootstrap对模态框进行封装；
 *界面构造(必须给予madal控件ID)
    <!-- 弹出框 -->
    <div class="modal fade" id="xxx" tabindex="-1">
        <!-- 窗口声明 -->
        <div class="modal-dialog modal-sm">
            <!-- 内容声明 -->
            <div class="modal-content">
                <div class="modal-header">
                    <button class="close" data-dismiss="modal"><span>&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel"></h4>
                </div>
                <div class="modal-body">
                    <div id="modal_con"></div>
                </div>
                <div class="modal-footer">
                    <button id="ok_btn" class="btn btn-sm btn-warning">确 定</button>
                </div>
            </div>
        </div>
    </div>
 *调用代码:
 * new show_modal({ modalId:"myModal",modalCon:'<p>这是提示的信息！</p>',bootstrapOptionObj:{show : true,backdrop : false}});
 *参数说明:
 *modalId:模态框控件的id，必需;
 *titleTxt:模态框控件的标题名称;
 *modalCon:模态框控件主体内容;
 *bootstrapOptionObj:bootstrap模态框控件的方法属性对象;
 *callback:处理完模态框后的回调方法;
 */

//显示弹窗函数
var show_modal = function(setting){
    var _self = this;

    //判断为null或者空值
    _self.IsNull = function(value) {
        if (typeof (value) == "function") { return false; }
        if (value == undefined || value == null || value == "" || value.length == 0) {
            return true;
        }
        return false;
    }
    //默认配置
    _self.DefautlSetting = {
        modalId:'',
        titleTxt: '温馨提示',
        modalCon: '这是提示的信息！',
        bootstrapOptionObj: {show : true},
        callback: function() { }
    };
    //读取配置
    _self.Setting = {
        modalId: _self.IsNull(setting.modalId) ? _self.DefautlSetting.modalId : setting.modalId,
        titleTxt: _self.IsNull(setting.titleTxt) ? _self.DefautlSetting.titleTxt : setting.titleTxt,
        modalCon: _self.IsNull(setting.modalCon) ? _self.DefautlSetting.modalCon : setting.modalCon,
        bootstrapOptionObj: _self.IsNull(setting.bootstrapOptionObj) ? _self.DefautlSetting.bootstrapOptionObj : setting.bootstrapOptionObj,
        callback: _self.IsNull(setting.callback) ? _self.DefautlSetting.callback : setting.callback
    };
    //定义函数操作
    _self.int = function(){
        if (_self.Setting.modalId == '') {
            return;
        }
        $("#myModalLabel").text(_self.Setting.titleTxt);//这里设置弹窗的标题
        $("#modal_con").append(_self.Setting.modalCon);//设置弹窗内容
        $("#"+_self.Setting.modalId).modal(_self.Setting.bootstrapOptionObj);//设置弹窗的bootstrap属性方法
        _self.Setting.callback();
    }
    //执行操作
    _self.int();
}
//show_modal回调函数，4s后隐藏弹窗
function timeClose(){
    setTimeout(function(){
        $('#alert_like').modal('hide');
    },4000);
        }