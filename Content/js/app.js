(function ($, window) {
    $.fn.getUrlParam = function (param) {
        return decodeURI(
            (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1]
        );
    };

    $.validator.messages = {
        required: "* 必填内容",
        remote: "* 请更正该内容",
        email: "* 必须是邮箱地址",
        url: "* 必须是URL地址",
        date: "* 必须是日期格式",
        dateISO: "* 必须是日期格式(ISO).",
        number: "* 必须是数字",
        digits: "* 必须是正整数",
        creditcard: "* 必须是信用卡卡号",
        equalTo: "* 两次输入的内容不同",
        maxlength: $.validator.format("* 内容长度不能大于{0}个字"),
        minlength: $.validator.format("* 内容长度不能少于{0}个字"),
        rangelength: $.validator.format("* 内容长度必须在{0}和{1}之间"),
        range: $.validator.format("* 内容的值必须在{0}和{1}之间"),
        max: $.validator.format("* 必须小于等于{0}"),
        min: $.validator.format("* 必须大于等于{0}")
    };
})(jQuery, window);
