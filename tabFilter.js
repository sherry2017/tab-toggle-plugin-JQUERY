/**
 * Created by Yao on 2018/5/24.
 */
;(function ($, window, document, undefined) {

    $.fn.tab = function (options) {
        var defaults = { //默认参数
            btn: '.tab_name',//点击按钮
            active: 'active',//按钮增加的class
            content: '.tab_cont',//切换的主题
            event: 'click',//触发的事件
            effect: 'show',//效果
            backFn: function (param) {
            }//回调函数

        };

        var settings = $.extend({}, defaults, options);
        var _this = this,
            btn = _this.find(settings.btn),
            content = _this.find(settings.content),
            active = settings.active,
            index;
            content.hide();
           settings.backFn(btn.eq(0).attr('data'));
            content.eq(0).show();
            btn.on(settings.event, function () {
            index = $(this).index();
            btn.eq(index).addClass(settings.active).siblings().removeClass(settings.active);
            var param=btn.eq(index).attr('data');
            settings.backFn(param)
        })
    };

})(jQuery, window, document);