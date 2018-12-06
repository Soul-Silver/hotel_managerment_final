$(function() {
  var $login = $(".login-button");
  $login.on('click', function(event) {
    addClass(document.querySelector(".login"), "active");
    setTimeout(function() {
      addClass(document.querySelector(".sk-rotating-plane"), "active")
      document.querySelector(".login").style.display = "none";
    }, 800);
    login();
  });

  function login() {
    var $user = $("input[name=user]").val();
    var $pwd = $("input[name=pwd]").val();
    console.log($user + $pwd);
    $.ajax({
        url: 'loginServlet',
        type: 'post',
        dataType: 'text',
        data: {
          'user': $user,
          'pwd': $pwd
        }
      })
      .done(function(data) {
<<<<<<< HEAD
<<<<<<< HEAD
        console.log(data);
=======
=======
>>>>>>> dev
        if($.trim(data) == "false") {
          
          console.log('失败');
          return;
        }
<<<<<<< HEAD
>>>>>>> 7a41f314be0db9302a522d260c5ecf96d7310b2b
=======
        console.log(data);
>>>>>>> dev
        success();
      })
      .fail(function(e) {
        console.log(e.status);
      })
  }

  function success() {
    removeClass(document.querySelector(".login"), "active");
    removeClass(document.querySelector(".sk-rotating-plane"), "active");
    document.querySelector(".login").style.display = "block";
    console.log('成功');
  }

  function hasClass(elem, cls) {
    cls = cls || '';
    if (cls.replace(/\s/g, '').length == 0) return false; 
    return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
  }

  function addClass(ele, cls) {
    if (!hasClass(ele, cls)) {
      ele.className = ele.className == '' ? cls : ele.className + ' ' + cls;
    }
  }

  function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
      var newClass = ' ' + ele.className.replace(/[\t\r\n]/g, '') + ' ';
      while (newClass.indexOf(' ' + cls + ' ') >= 0) {
        newClass = newClass.replace(' ' + cls + ' ', ' ');
      }
      ele.className = newClass.replace(/^\s+|\s+$/g, '');
    }
  }
});