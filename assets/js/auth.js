function notnull() {
    var flag = true;
    $('.notnull').each(function() {
        if ($(this).val() == '') {
            title = $(this).attr('title');
            Swal.fire('操作失败', title + '不能为空', 'error');
            flag = false;
            return false;
        }
    });
    return flag;
}

// Login
$('.login-button').click(function() {
    if (notnull() == false) {
        return;
    }

	if(geetest == 1){
        validate = captcha.getValidate();
        if (typeof validate === 'undefined' || !validate) {
            swal.fire('请验证身份', '请滑动验证码来完成验证。', 'info');
            return;
        }
    }
	
	$(".login-button").text('正在登录').attr('disabled', true);
	
    $.ajax({
        type: "POST",
        url: "login",
        dataType: "json",
        data: new FormData($('#login_form')[0]),
        processData: false,
        contentType: false,
        success: (data) => {
            if (data.ret) {
                Swal.fire('登录成功', data.msg, 'success').then(function() {
                    window.location.reload();
                });
            } else {
                Swal.fire(data.msg, '', 'error')
                $(".login-button").text('登录').attr('disabled', false);
            }
        },
        error: (jqXHR) => {
            Swal.fire('发生错误', '点击确定后重试', 'error').then(function() {
                window.location.reload();
            });
        }
    })
})

// Tg Login
$("#telegram-login").click(
    function () {
        tgLogin();
    }
);

function tgLogin() {
    $.ajax({
        type: "POST",
        url: "qrcode_check",
        dataType: "json",
        data: {
          token: "{$login_token}",
          number: "{$login_number}"
        },
        success: (data) => {
        if (data.ret > 0) {
                clearTimeout(tid);
                $.ajax({
                    type: "POST",
                    url: "/auth/qrcode_login",
                    dataType: "json",
                    data: {
                      token: "{$login_token}",
                      number: "{$login_number}"
                    },
                    success: (data) => {
                        if (data.ret) {
                            swal.fire({
                                type: 'success',
                                title: '登录成功',
                                html: '正在转入用户中心',
                                showConfirmButton: false
                            });
                            window.location.reload();
                        }
                    },
                    error: (jqXHR) => {
                        swal.fire({
                            type: 'warning',
                            title: '登录失败',
                            html: '请使用账号密码登录',
                            showConfirmButton: false
                        });
                    }
                });
            } else {
                if (data.ret === -1) {
                    $('#code_number').replaceWith('<code id="code_number">此数字已经过期，请刷新页面后重试。</code>');
                }
            }
        },
        error: (jqXHR) => {
            if (jqXHR.status !== 200 && jqXHR.status !== 0) {
                swal.fire('TG登录失败','请使用账号密码登录', 'error');
            }
        }
    });
    tid = setTimeout(tgLogin, 2500); //循环调用触发setTimeout
}

// register
var wait = 60;

function time(o) {
    if (wait == 0) {
        o.removeAttr("disabled");
        o.text("获取验证码");
        wait = 60;
    } else {
        o.attr("disabled", "disabled");
        o.text("重新发送(" + wait + ")");
        wait--;
        setTimeout(function() {
            time(o)
        }, 1000)
    }
}

$("#email_verify").click(function() {
    $.ajax({
        type: "POST",
        url: "send",
        dataType: "json",
        data: {
            email: $('#email').val()
        },
        success: (data) => {
            if (data.ret) {
                Swal.fire('操作成功', data.msg, 'success');
                time($("#email_verify"));
            } else {
                Swal.fire('操作失败', data.msg, 'error');
            }
        },
        error: (jqXHR) => {
            Swal.fire('发生错误', '点击确定后刷新重试', 'error').then(function() {
                window.location.reload();
            });
        }
    })
})

function login(email,passwd) {
    $.ajax({
        type:"POST",
        url:"/auth/login",
        dataType:"json",
        data:{
            email: email,
            passwd: passwd,
            code: '',
            remember_me: 1
        },
    });
    window.location.reload();
}

function cant_tip() {
    Swal.fire('收不到验证码？', '建议检查邮箱垃圾箱，或更换其他邮箱重试', 'warning')
}

$('#register-button').click(function(e) {
    if (notnull() == false) {
        return;
    }
    
	if (geetest == 1){
	    validate = captcha.getValidate();
	    if (typeof validate === 'undefined' || !validate) {
	        swal.fire('请验证身份', '请滑动验证码来完成验证。', 'info');
	        return;
	    }
	}

    $(".register-button").text('注册中').attr('disabled', true);
    
    $.ajax({
        type: "POST",
        url: "register",
        dataType: "json",
        data: new FormData($('#register_form')[0]),
        processData: false,
        contentType: false,
        success: (data) => {
            if (data.ret) {
                Swal.fire('注册成功', data.msg, 'success').then(function() {
                    window.location.reload();
                });
            } else {
                Swal.fire(data.msg, '', 'error')
                $(".register-button").text('注册').attr('disabled', false);
            }
        },
        error: (jqXHR) => {
            Swal.fire('发生错误', '点击确定后重试', 'error').then(function() {
                window.location.reload();
            });
        }
    })
})

// Cookie invite_code
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

if (getQueryVariable('code') != '') {
    setCookie('code', getQueryVariable('code'), 30);
}

if (getCookie('code') != '') {
    $('#invite_code').val(getCookie('code'));
}

// reset
$('#reset-button').click(function(e) {
    if (notnull() == false) {
        return;
    }
    
    $("#reset-button").text('正在发送').attr('disabled', true);
    
    $.ajax({
        type: "POST",
        url: "reset",
        dataType: "json",
        data: new FormData($('#reset_form')[0]),
        processData: false,
        contentType: false,
        success: (data) => {
            if (data.ret) {
                Swal.fire(data.msg, '', 'success').then(function() {
                    window.location.href = '/auth/login';
                });
            } else {
                Swal.fire(data.msg, '', 'error')
                $("#reset-button").text('发送验证邮件').attr('disabled', false);
            }
        },
        error: (jqXHR) => {
            Swal.fire('发生错误', '点击确定后重试', 'error').then(function() {
                window.location.reload();
            });
        }
    })
});

$('#reset-update').click(function() {
    if (notnull() == false) {
        return;
    }
    
    if ($('#password').val() != $('#repasswd').val()) {
        Swal.fire('两次输入的密码不同', '', 'error');
        return;
    }
    
    $("#reset-update").text('正在重置').attr('disabled', true);
    
    $.ajax({
        type: "POST",
        url: location.pathname,
        dataType: "json",
        data: new FormData($('#reset_form')[0]),
        processData: false,
        contentType: false,
        success: (data) => {
            if (data.ret) {
                Swal.fire(data.msg, '', 'success').then(function() {
                    window.location.href = '/auth/login';
                });
            } else {
                Swal.fire(data.msg, '', 'error')
                $("#reset-update").text('立即重置').attr('disabled', false);
            }
        },
        error: (jqXHR) => {
            Swal.fire('发生错误', '点击确定后重试', 'error').then(function() {
                window.location.reload();
            });
        }
    })
    
});
