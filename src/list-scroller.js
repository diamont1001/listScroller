/**
 * 中奖信息滚动器
 * Created by Chenjr on 2015/4/26.
 * @dependence jquery/zepto.animate
 */

!(function () {
    var ListScroller = (function () {
        var $handler = null;    //滚动显示窗外层
        var $wrapper = null;    //滚动显示窗
        var $ul = null;         //滚动体<ul>句柄
        var _arr = [];
        var _opt = {
            "font-size": "12px",
            height: "18px",     //滚动展示栏高度
            color: "white",     //
            background: "black", //
            duration: 800,      //滚动时长
            interval: 3000      //滚动间隔
        };
        var _index = 0, _doing = false, _over = 0;

        function getOne() {
            if (_index >= _arr.length) {
                _index = 0;
            }
            return _arr[_index++];
        }

        function doIt() {
            if (!_doing) {
                //初始化数据
                _index = 0;
                _doing = true;
                $ul.children("li").eq(0).text("slide header");
                $ul.children("li").eq(1).text(getOne());
                $ul.children("li").eq(2).text(getOne());
            } else {
                //向上滚动，把第一个元素删除，再append一个
                $ul.children("li").eq(0).animate({height: "0px"}, _opt.duration);
                setTimeout(function () {
                    $ul.children("li").eq(0).remove();
                }, _opt.duration + 10);
                $ul.append('<li style="overflow:hidden;height:' + _opt.height + ';">' + getOne() + '</li>');
            }
        };

        /**
         * 初始化
         * @param handler - 滚动显示外框id或者jquery句柄
         * @param options
         */
        var init = function (handler, options) {
            $.extend(_opt, options);

            $handler = typeof handler == 'object' ? handler : $("#" + handler);
            $handler.html('<div style="position:relative;overflow:hidden;"></div>');
            $wrapper = $handler.children("div");

            $wrapper.css({
                background: _opt.background,
                color: _opt.color,
                height: _opt.height,
                "line-height": _opt.height,
                "font-size": _opt["font-size"]
            });

            $wrapper.html('<ul style="padding:0;margin:0;position:absolute;top:-' + _opt.height + ';">' +
            '<li style="overflow:hidden;height:' + _opt.height + ';"></li>' +
            '<li style="overflow:hidden;height:' + _opt.height + ';"></li>' +
            '<li style="overflow:hidden;height:' + _opt.height + ';"></li>' +
            '</ul>');
            $ul = $wrapper.children("ul");
        };

        /**
         * 设置滚动数据
         * - 可随时更新
         * @param arr
         */
        var setData = function (arr) {
            _arr = typeof arr === "object" ? arr : _arr;
        };

        var start = function () {
            if ($handler == null) {
                return;
            }
            doIt();
            clearInterval(_over);
            _over = setInterval(function () {
                doIt();
            }, _opt.interval);
        };

        var stop = function () {
            clearInterval(_over);
            _doing = false;
        }

        return {
            init: init,
            setData: setData,
            start: start,
            stop: stop
        }
    })();


    this.ListScroller = ListScroller;

    // NodeJS
    if (typeof exports !== 'undefined') {
        module.exports = ListScroller;
    }

    // RequireJS && SeaJS
    if (typeof define === 'function') {
        define(function() {
            return ListScroller;
        });
    }
})();