// pages/index/robot/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
    ,tuLingApiUrl:"http://openapi.tuling123.com/openapi/api/v2"//图灵API地址
    ,currentInputMode:"voice"//当前输入方式，取值有voice或text
    , changeIconImg:"../../../utils/content/voice_icon.png"//切换按钮的icon图片地址
    , display_text:"display:block;"
    , display_voiceBtn:"display:none;"
    , textContent:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '智能机器人'
    });
    this.setData({
      userInfo: getApp().globalData.userInfo
    });
    /*var wechatAIManager= getApp().getWechatAI();
    wechatAIManager.textToSpeech({
      lang: "zh_CN",
      tts: true,
      content: "一个常见的需求",
      success: function (res) {
        getApp().audioPlay(res.filename);
        console.log("succ tts", res.filename)
      },
      fail: function (res) {
        console.log("fail tts", res)
      }
    });*/
  },
  changeFunction:function(e){//输入方式切换功能
    var val=this.data.currentInputMode;
    if(val=="voice"){
      this.setData({ currentInputMode: "text", display_text: "display:none;", display_voiceBtn: "display:block;",changeIconImg:"../../../utils/content/insert-text.png"});
    }else{
      this.setData({ currentInputMode: "voice", display_text: "display:block;", display_voiceBtn: "display:none;", changeIconImg: "../../../utils/content/voice_icon.png" });
    }
    console.log(e);
  },
  changeTextAreaValue:function(e){//输入框内容改变事件
    this.setData({ textContent: e.detail.value});
  },
  sendText:function(e){//发送文本内容
    var content=this.data.textContent;
    this.setData({ textContent: "" });
    /*this.getTuLingBackInfo(0,content,function(res){
      console.log(res);
    });*/


    var wechatAIManager = getApp().getWechatAI();
    wechatAIManager.textToSpeech({
      lang: "zh_CN",
      tts: true,
      content: content,
      success: function (res) {
        getApp().audioPlay(res.filename);
        console.log("succ tts", res.filename)
      },
      fail: function (res) {
        console.log("fail tts", res)
      }
    });
  },
  getTuLingBackInfo: function (reqType, param,callback){//获取图灵机器人返回的信息
    var perception={
          "inputText":{
            "text":param
          }
        };
    switch(reqType){
      case 1:
        perception={
          "inputImage": {
            "url": param
          }
        };
        break;
      case 2:
        perception={
          "inputMedia":{
            "url":param
          }
        };
        break;
      case 0:
      default:
        perception = {
          "inputText": {
            "text": param
          }
        };
        break;
    }
    perception.selfInfo= {
      "location": {
        "city": "重庆",
          "province": "渝北",
            "street": "新牌坊"
      }
    };

    var d = {
      "reqType": reqType,
      "perception": perception,
      "userInfo": {
        "apiKey": "40d0293b879e4233b34e9c8d6676ebe2",
        "userId": (null == this.data.userInfo ? "robot" : this.data.userInfo.nickName)
      }
    };
    console.log(d);
    getApp().postUrl(this.data.tuLingApiUrl,d,function(res){
      callback(res);
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})