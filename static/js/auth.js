/**
 * Created by Administrator on 2018/9/11.
 */

// 点击刷新图形验证码
$(function () {
    var imgCaptcha = $('.img-captcha');
    imgCaptcha.click(function () {
        imgCaptcha.attr("src",'/account/img_captcha'+'?random='+Math.random());
    })
});

// 点击发送短信验证码
$(function () {
   var smsCaptcha = $('.sms-captcha-btn');
   smsCaptcha.click(function () {
        smsCaptcha.addClass('disabled');
        var telephone = $('input[name="telephone"]').val();
        $.get({
            'url': '/account/sms_captcha/',
            'data': {
                'telephone': telephone
            },
            'success': function (result) {
                var count = 60;
                var timer = setInterval(function () {
                    smsCaptcha.text(count);
                    count--;
                    if(count <= -1){
                        clearInterval(timer);
                        smsCaptcha.text('发送验证码');
                        smsCaptcha.removeClass('disabled');
                    }
                },1000);
                console.log('短信发送成功！');
            },
            'fail': function (error) {
                console.log('error');
            }
        });
   })
});

// 注册功能
$(function () {
    var telephoneInput = $("input[name='telephone']");
    var usernameInput = $("input[name='username']");
    var imgCaptchaInput = $("input[name='img-captcha']");
    var password1Input = $("input[name='password1']");
    var password2Input = $("input[name='password2']");
    var smsCaptchaInput = $("input[name='sms-captcha']");
    var submitBtn = $(".submit-btn");

    submitBtn.click(function (event) {
        // 禁止掉传统的表单发送数据的方式
       event.preventDefault();

       var telephone = telephoneInput.val();
       var username = usernameInput.val();
       var imgCaptcha = imgCaptchaInput.val();
       var password1 = password1Input.val();
       var password2 = password2Input.val();
       var smsCaptcha = smsCaptchaInput.val();


        duajax.post({
            'url': '/account/register/',
            'data': {
                'telephone': telephone,
                'username': username,
                'img_captcha': imgCaptcha,
                'password1': password1,
                'password2': password2,
                'sms_captcha': smsCaptcha
            },
            'success': function (result) {
                if(result['code'] === 200){
                    window.location = '/';
                }else{
                    layer.msg(result['message'])
                }
            },
            'fail': function (error) {
                console.log(error);
            }
        });

    });
});


// 登录功能
// $(function () {
//     var telephoneInput = $("input[name='telephone']");
//     var passwordInput = $("input[name='password']");
//     var submitBtn = $(".submit-btn");
//
//     submitBtn.click(function (event) {
//         // 禁止掉传统的表单发送数据的方式
//        event.preventDefault();
//
//        var telephone = telephoneInput.val();
//        var password = passwordInput.val();
//
//
//         duajax.post({
//             'url': '/account/login/',
//             'data': {
//                 'telephone': telephone,
//                 'password': password
//             },
//             'success': function (result) {
//                 if(result['code'] === 200){
//                     window.location = '/';
//                 }else{
//                     layer.msg(result['message'])
//                 }
//             },
//             'fail': function (error) {
//                 console.log(error);
//             }
//         });
//
//     });
// });