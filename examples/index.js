// require('../node_modules/zepto/zepto.min');

var listScroller = require('list-scroller');

$(function() {
	var arr = ['diamont1001 抽中iPhone 6 plus', '491441035 抽中iPad mini 2', 'chenjr 抽中1000元现金'];

    ListScroller.init($("#inport-box"), {
        duration:800,
        interval:3000,
        height: "24px",
        "font-size": "18px"
    });

    ListScroller.setData(arr);
    ListScroller.start();
});
