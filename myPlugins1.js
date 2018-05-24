/**
 * Created by Yao on 2018/5/24.
 */
;(function ($, window, cocument, undefined) {
    var Beautifier = function (el, opts) {
        this.$element = $(el);
        this.defaults = {
            'bgc': 'red',
            'fontSize': '12px'
        };
        this.settings = $.extend({}, this.defaults, opts)
    };

    Beautifier.prototype = {
        'construct': Beautifier,
        'beautify': function (callback1) {
            this.$element.css({
                'background': this.settings.bgc,
                'fontSize': this.settings.fontSize
            });
            if(typeof callback1 === "function"){
                callback1() ;
            }

        }

    };

    $.fn.myPlugin1=function (opts,callback) {
        var  bt=new Beautifier(this,opts);
        return bt.beautify(callback);

    }


})(window.jQuery, window, document);