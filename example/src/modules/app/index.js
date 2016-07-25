/**
 * Created by Chenjr on 2015/7/9.
 */

require('../base/reset.less');
require('./index.less');

require('lib1/zepto/fx_methods');

var $ = require('lib1/zepto/main'),
    header2 = require('./header2/header2'),
    ListScroller = require('../../../../src/list-scroller');

header2.render(document.getElementById('headerWrap'));
header2.setTitle('detail');


var arr = ['diamont1001 抽中iPhone 6 plus', '材主 抽中iPad mini 2', 'chenjr 抽中1000元现金'];

ListScroller.init('contentWrap', {
    duration:800,
    interval:3000,
    color: '#e09911',
    height: "24px",
    "font-size": "18px"
});

ListScroller.setData(arr);
ListScroller.start();