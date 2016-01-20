# 中奖信息滚动展示模块
在做运营活动页面的过程中，特别是抽奖活动页面，通常会有中奖信息滚动通知的需求，本模块的出现就是为了方便实现该效果。

## 插件引用  
如果页面上已有jquery或者zepto(animate)，刚不用再引入jquery-1.7.1.min.js

    <script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>
    <script type="text/javascript" src="js/min/listScroller.min.js"></script>

## 用法例子
实例可参考test.html

    //第一步，初始化插件
    ListScroller.init($("#inport-box"), {
        duration:800,
        interval:3000,
        height: "24px",
        "font-size": "18px"
    });

    //第二步，设置展示数据（字符串数组形式）
    ListScroller.setData(['diamont1001 抽中iPhone 6 plus', '491441035 抽中iPad mini 2', 'chenjr 抽中1000元现金']);

    //第三步，开始滚动
    ListScroller.start();

## 接口介绍
### 初始化接口
    ListScroller.init(handler, options)
    @param handler: 滚动显示外框的id或者jquery句柄
    @param options: （可选）配置信息
        {
            "font-size": "12px",    //文字字体大小，默认12px
            height: "18px",         //滚动展示栏高度，默认18px
            color: "white",         //文字颜色，默认白色
            background: "black",    //滚动框背影颜色，默认黑色
            duration: 800,          //滚动时长，默认800ms
            interval: 3000          //滚动间隔，默认3000ms
        }

### 数据更新接口
    ListScroller.setData(arr)
    //支持热更新，数据自动平滑更新

### 开始滚动
    ListScroller.start()

### 停止滚动
    ListScroller.stop()
