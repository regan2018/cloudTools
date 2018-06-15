// pages/index/vipVideo/video-play.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:'http://m.kugou.com'
    , analysisUrl:'http://www.sjzvip.com/jiexi1.php?url='//视频解析地址
    , baseUrl:'https://agent.eyijiao.com'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var url=options.url;
    if(null==url||url.length==0){
      wx.showToast({
        title: 'VIP视频地址错误',
      });
      return;
    }
    url = encodeURI(url);
    url=this.data.analysisUrl+url;
    /*wx.request({
      url: url, //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })*/
    
    //var vipUrl =encodeURI(this.data.analysisUrl+url);
    //this.setData({ url: this.data.analysisUrl + url });
    this.setData({ url: 'http://www.sjzvip.com/jiexi1.php?url=http://www.iqiyi.com/v_19rrhysjzk.html?vfm=m_303_qqll' });
    //this.setData({ url: this.data.baseUrl +"/mobile/main/vipVideo?videoUrl="+vipUrl});
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