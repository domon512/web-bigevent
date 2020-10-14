$(function() {
    var form = layui.form
    var layer = layui.layer
    form.verify({
        nickname: function(balue) {
            if (value.length > 6) {
                return '昵称长度在1~6个字符之间'
            }
        }
    })
    initUserInfo()

    function initUserInfo() {
        $.ajax({
            nethod: 'GET',
            url: '/my/userinfo',
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg('获取用户信息失败！')
                }
                form.val('formUserInfo', res.data)
            }
        })
    }

})
$('.layui-form').on('submit', function(e) {
    e.preventDefault()
    $.ajax({
        mothod: 'POST',
        url: '/my/userinfo',
        data: $(this).serialize(),
        success: function(res) {
            if (res.status !== 0) {
                return layer.msg('更新用户失败!')
            }
            layer.msg('更新用户成功!')
            window.parent.getUserInfo()
        }
    })
})