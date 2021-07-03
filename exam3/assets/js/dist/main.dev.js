"use strict";

$('.slider').slick({
  adaptiveHeight: false,
  slidesToShow: 3,
  speed: 800,
  slidesToScroll: 1,
  //autoplay: true,
  //adaptiveHeight:true,
  autoplaySpeed: 3000,
  loop: true,
  draggable: true,
  infinite: true,
  swipe: true,
  arrows: true,
  prevArrow: '<button type="button" class="btn_slick prev"><i class="icon icon-right"></i></button>',
  nextArrow: '<button type="button" class="btn_slick next"><i class="icon icon-left"></i></button>',
  responsive: [{
    breakpoint: 1000,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});
$('#slider_gallery').lightSlider({
  item: 1,
  pager: false,
  nextHtml: '<button type="button" class="btn_gallery prev"><i class="icon icon-right"></i></button>',
  prevHtml: '<button type="button" class="btn_gallery next"><i class="icon icon-left"></i></button>',
  enableDrag: true,
  loop: true,
  auto: true,
  slideMove: 2,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed: 1200,
  responsive: [{
    breakpoint: 800,
    settings: {
      item: 1,
      slideMove: 1,
      slideMargin: 6
    }
  }, {
    breakpoint: 480,
    settings: {
      item: 1,
      slideMove: 1
    }
  }]
});
$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });
  $(".hamburger, #menu_shadow").click(function () {
    $(".hamburger").toggleClass("is-active");
    $("body").toggleClass("open");
  });
});
var accItem = document.getElementsByClassName('accordion-item');
var accHD = document.getElementsByClassName('accordion-item-header');

for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener('click', toggleItem, false);
}

function toggleItem() {
  var itemClass = this.parentNode.className;

  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = 'accordion-item close';
  }

  if (itemClass == 'accordion-item close') {
    this.parentNode.className = 'accordion-item open';
  }
}

var tabs = document.querySelector(".tabs_li");
var tabButton = document.querySelectorAll(".tabs");
var contents = document.querySelectorAll(".content");

tabs.onclick = function (e) {
  var id = e.target.dataset.id;

  if (id) {
    tabButton.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    contents.forEach(function (content) {
      content.classList.remove("active");
    });
    var element = document.getElementById(id);
    element.classList.add("active");
  }
};

$("#searchbar .search-label").on("click", function (e) {
  e.preventDefault();
  $("#searchbar").toggleClass("collapsed");
});

function isValidEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

;
$(function () {
  $('#feedback_form').on('submit', function (e) {
    e.preventDefault();
    sendMessage($(this));
  });
  $("#email").on('focus', function () {
    if ($(this).parents(".form_row").hasClass("has_err")) {
      $(this).parents(".form_row").removeClass("has_err");
      $(this).next("div").text("");

      if ($(this).attr("name") !== "email") {
        $(this).parents(".form_row").removeClass("has_err");
        $("#email_err").text("");
      }
    }
  });
  $("input[name='email']").on('keyup', function () {
    if ($(this).val() === "") {
      valid = false;
      $(this).parents(".form_row").addClass("has_err");
      $("#email_err").text("Field is required");
    } else {
      if (!isValidEmail($(this).val())) {
        $(this).parents(".form_row").addClass("has_err");
        $("#email_err").text("Invalid email address");
      } else {
        $(this).parents(".form_row").removeClass("has_err");
        $("#email_err").text("");
      }
    }
  });
});
var topPanel = {
  success: function success() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Some text here";
    var autoclose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    this.showPanel(text, "success", autoclose);
  },
  danger: function danger() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Some text here";
    var autoclose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    this.showPanel(text, "danger", autoclose);
  },
  showPanel: function showPanel(text, type, autoclose) {
    var btn = autoclose ? "" : '<button onclick="topPanel.closePanel()>&times;</button>';
    var h = "<div id=\"top_panel\" class=\"panel_".concat(type, "\">\n        <p>").concat(text, "</p>").concat(btn, "<div></div>");

    if (document.getElementById("top_panel") !== null) {
      this.closePanel();
    }

    document.getElementsByTagName("body")[0].insertAdjacentHTML("afterbegin", h);

    if (autoclose) {
      var _this = this;

      setTimeout(function () {
        _this.closePanel();
      }, 3000);
    }
  },
  closePanel: function closePanel() {
    document.getElementById("top_panel").remove();
  }
};
var useremail = document.getElementById('email').value;
var BOT_TOKEN = '1818073939:AAGLY-cIgnSwJdG8hAQYLJfeHcD68S62erE';
var CHAT_ID = '-1001481769250';
var text = ' User is signed! Email is ' + useremail;

function sendMessage($form) {
  var valid = true;
  $form.find('*[data-required]').each(function () {
    if ($(this).val() === "") {
      valid = false;
      $(this).parents(".form_row").addClass("has_err");
      $("#email_err").text("Field is required");
    } else {
      if ($(this).attr("name") === "email") {
        if (!isValidEmail($(this).val())) {
          valid = false;
          $(this).parents(".form_row").addClass("has_err");
          $("#email_err").text("Invalid email address");
        }
      }
    }
  });

  if (valid) {
    $.ajax({
      url: "https://api.telegram.org/bot" + BOT_TOKEN + "/sendMessage?chat_id=" + CHAT_ID + "&text=" + text,
      type: "get",
      success: function success(resp) {
        if (1 == resp.ok) {
          topPanel.success("You are signed in!");
          $('#feedback_form').trigger('reset');
        } else {
          topPanel.danger("You are not signed in!");
        }
      }
    }); // .then((resp)=>{
    //     if(resp.code==200){
    //         topPanel.success("You are signed in!", true);
    //         $('#feedback_form').trigger('reset');
    //     }else{
    //         topPanel.danger("You are not signed in!");
    //     }
    // })
    // .catch((err)=>{
    //     topPanel.danger("You are not signed in!");
    // });
  }
}

;