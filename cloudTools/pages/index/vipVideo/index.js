// pages/index/vipVideo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:'http://www.iqiyi.com/v_19rr0mx4z4.html'
    , analysisUrl: 'http://jx.sdjnd09.cn/jx.php/?url='//视频解析地址
    //, analysisUrl: 'http://www.sjzvip.com/jiexi1.php?url='//视频解析地址
    //, analysisUrl: 'http://api.baiyug.vip/index.php?url='//视频解析地址
    ,changeUrl:''
    , checkUrlSuccess:false//校验url地址是否成功
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: 'VIP视频免费看'
    });
  },
  bindChangeUrl:function(e){
    this.setData({ checkUrlSuccess: false });    
    this.setData({ url: e.detail.value});
  },
  goVideoPlay:function(e){
    var url=this.data.url.trim();
    if(url.length==0){
      wx.showToast({
        title: '请输入VIP视频播放地址',
        icon:'none'
      })
      return;
    }/*else{
      wx.showToast({
        title: '功能开发中……',
        icon: 'none'
      })
      return;
    }*/
    
    wx.navigateTo({
      url: 'video-play?url='+url,
    })
  },
  changeUrl:function(e){
    var url=this.data.url.trim();
    this.checkUrl(url);
    if (this.data.checkUrlSuccess){
      var changeUrl =this.data.analysisUrl+encodeURI(url);
      wx.setClipboardData({
        data: changeUrl,
        success: function (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showModal({
                title: '提示',
                content: '解析成功，请到系统浏览器地址栏中粘贴打开并播放',
                showCancel:false,
                success: function (res) {
                  /*if (res.confirm) {
                    console.log('用户点击确定')
                  } else if (res.cancel) {
                    console.log('用户点击取消')
                  }*/
                }
              });
            }
          });
        }
      });
      this.setData({changeUrl:changeUrl});
    }
  },
  checkUrl: function(url) {//校验网址
    if(url.length==0){
      this.setData({ checkUrlSuccess: false });
      wx.showToast({
        title: '请输入视频地址',
        icon:'none'
      })
      return;
    }
    if (url != "") {
      var reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
      if (!reg.test(url)) {
        this.setData({ checkUrlSuccess:false});
        wx.showModal({
          title: '提示',
          content: '小可爱，网址不正确哦',
          showCancel: false,
          success: function (res) {
            /*if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }*/
          }
        });
      }else{
        this.setData({ checkUrlSuccess: true });        
      }
    }
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