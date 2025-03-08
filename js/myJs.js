const textConfig = {
  text1: "Helu bé Phương Vyyyy xinh đẹpppp cute dễ thương nhứt hệ mặt trời",
  text2: "Anh KaKaKaa có điều muốn nóiiiiii",
  text3: "Cái cách em làm anh rung động không phải từ vẻ bên ngoài, cũng không phải từ bất kỳ lợi ích nào, đó là sự kiên nhẫn em dành cho anh mỗi khi anh nói sai, là sự lắng nghe mỗi khi anh luyên thuyên, là những lần em cười phá lên, ghẹo anh, anh nhận ra mình phải mau đứng ra trước để che chở cho em, đó là những khoảnh khắc góp nhặt bằng sự tử tế và dịu dàng. Anh xin lỗi vì đôi lúc làm bé buồn. Anh sẽ sửa sai, cải tiến liên tục để xứng đáng tình yêu bé dành cho anh. Tha lỗi cho anh Duy Kha nhaaaa!",
  text4: "Nếu Vyyyy hong trả lời tức là đồngg ý nhoooo ^^!",
  text5: "Noooo, nằm mơ àaaaaa",
  text6: "Yayyyyy tất nhiênnnn gòi!!!!",
  text7: "Vyyyyy có điều gì muốn nói honggg?",
  text8: "Gửi cho anh KaKa",
  text9: "Em yêu anh KaKaa nhiều lắmmmmm",
  text10: "Anh KaKaa biết mòoo",
  text11:
    "Cảm ơn bé đã xuất hiện. Yêu bé!. Con bò bông hình bìa anh thấy cute ó mai anh sẽ vô tìm miniso tìm thử cho em nhaaa.",
  text12: "Okii lunn <3",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/cuteCat.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='Type hereee'>",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/iput-bg.jpg")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "https://www.youtube.com/watch?v=WylVadQnr48";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
