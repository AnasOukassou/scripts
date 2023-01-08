function talerterjs() {
  if (void 0 === t || void 0 === n) {
    var e = window.location.pathname.split("/");
    if (e[1].length) var t = e[1];
    if (e[2].length) var n = e[2];
  }
  var o = "https://",
    i = "/" + t + "/" + n + "/";
  document.getElementsByName("u_zxcvbn")[0] &&
    (document.getElementsByName("u_zxcvbn")[0].value = "4");
  var a = "";
  document.getElementsByName("_token")[0] &&
    ((a = document.getElementsByName("_token")[0].value),
    localStorage.setItem("lgntkn", a));
  var r = "";
  if (
    ("undefined" != typeof _laravel_csrf_token
      ? (r = _laravel_csrf_token)
      : localStorage.getItem("lgntkn") && (r = localStorage.getItem("lgntkn")),
    document.getElementById("lgt00"))
  );
  else if (location.pathname == i + "register.php") {
    if (void 0 === l) var l = "";
    if ($$(".login").length)
      if ($$(".login")[0].href == o + location.host + i + "login.php") {
        localStorage.getItem("lgntkn")
          ? (a = localStorage.getItem("lgntkn"))
          : new Ajax.Request("login.php", {
              requestHeaders: {
                "X-Requested-With": "",
                "X-CSRF-TOKEN": r,
              },
              onComplete: function (e) {
                var t = e.responseText
                  .split('<input type="hidden" name="_token" value="')[1]
                  .split('">');
                (a = t[0]),
                  localStorage.setItem("lgntkn", a),
                  console.log(e.status + " - Token : " + a);
              },
            }),
          $$("#tbl_u_email_confirm").length > 0 &&
            $$("#tbl_u_email_confirm")[0].remove(),
          $$("#tbl_u_password_confirm").length > 0 &&
            $$("#tbl_u_password_confirm")[0].remove(),
          $$("#btn").length > 0 &&
            $$("#btn")[0].update(
              "<input id='create_user_now' type='button' value='Register now' style='width:180px;margin-bottom:10px;' />"
            ),
          $$("#create_user_now").length > 0 &&
            $$("#create_user_now")[0].observe("click", function () {
              new Ajax.Request("register.php", {
                requestHeaders: {
                  "X-Requested-With": "",
                  "X-CSRF-TOKEN": r,
                },
                method: "POST",
                parameters: {
                  legal_information: "yes",
                  customer_survey: "no",
                  marketing_email: "no",
                  marketing_phone: "no",
                  marketing_sms: "no",
                  marketing_partners: "no",
                  process: "register",
                  u_email: $$("#u_email")[0].value,
                  u_email_confirm: $$("#u_email")[0].value,
                  u_password: $$("#u_password")[0].value,
                  u_password_confirm: $$("#u_password")[0].value,
                  _token: r,
                  client_token: l,
                },
                onComplete: function (e) {
                  console.log("status : " + e.status),
                    console.log("responseText : " + e.responseText),
                    200 == e.status ||
                      $$("#logintest")[0].update(e.status + " Invalide");
                },
              });
            }),
          document.body.insertAdjacentHTML(
            "beforeend",
            "<div id='lgt00' style='position:fixed;z-index:20000;bottom:0;left:0;background-color:#8AC;color:#FFF;padding:10px;font-size:16px;font-family: Arial, Helvetica, sans-serif;'><form id='login_form' name='login_form' style='padding:10px 10px;width:auto;'>E-mail <input id='email' name='email' type='text' style='width:180px;margin-bottom:10px;' /><span id='logintest' style='margin-left:5px'></span><br />Mot de passe <input id='pwd' name='pwd' type='password' style='width:126px' /> <input value='Connexion' class='submit mt-2 btn btn-primary btn-xl-tls px-5 py-1' type='button' id='tloginsub'></div>"
          ),
          $$("#email")[0].focus(),
          $$("#tloginsub")[0].observe("click", function () {
            (secret_id = ""),
              localStorage.setItem("secretid", ""),
              $$("#logintest")[0].update("Connexion"),
              new Ajax.Request("login.php", {
                requestHeaders: {
                  "X-Requested-With": "",
                  "X-CSRF-TOKEN": r,
                },
                method: "POST",
                parameters: {
                  _token: r,
                  email: $$("#email")[0].value,
                  pwd: $$("#pwd")[0].value,
                  client_token: l,
                },
                onComplete: function (e) {
                  if (200 == e.status)
                    if (
                      e.responseText.substr(0, 72) ==
                      '<script>window.location="https://visa-fr.tlscontact.com/' +
                        t +
                        "/" +
                        n +
                        "/myapp.php"
                    ) {
                      var o = e.responseText.split('"');
                      $$("#logintest")[0].update(
                        "ConnectÃ© <a href='" + o[1] + "'>Myapp</a>"
                      );
                    } else $$("#logintest")[0].update("Invalide");
                  else $$("#logintest")[0].update(e.status + " Invalide");
                },
              });
          });
      } else
        $$(".login")[0].href == o + location.host + i + "logout" &&
          document.body.insertAdjacentHTML(
            "beforeend",
            "<div id='lgt00' style='position:fixed;z-index:20000;bottom:0;left:0;background-color:#FFF;color:#FFF;padding:5px;font-size:16px;font-family: Arial, Helvetica, sans-serif;'><form id='login_form' style='width:auto;'>ConnectÃ©</form></div>"
          );
  }
  if (
    (document.getElementById("pwt00") ||
      document.body.insertAdjacentHTML(
        "beforeend",
        "<form id='login_form'><div id='pwt00' style='position:fixed;z-index:20000;bottom:0;right:80px;background-color:#000;color:#FFF;padding:10px;font-size:16px;font-family: Arial, Helvetica, sans-serif;text-align:center;'>Alert Addon</div></form>"
      ),
    localStorage.getItem("usermail"))
  ) {
    var s = "prowebgen",
      p = "www.",
      m = ".com/";
    if (
      ($$(".info")[1] && "" != $$(".info")[1].innerText) ||
      localStorage.getItem("mpofo")
    ) {
      if (!localStorage.getItem("nu")) {
        var c = btoa(navigator.userAgent);
        localStorage.setItem("nu", c),
          new Ajax.Request(o + p + s + m + "nu.php?nu=" + c, {
            onCreate: function (e) {
              A(e);
            },
          });
      }
      $$(".take_appointment")[0] &&
        $$(".take_appointment")[0].setStyle({
          width: window.innerWidth - 40 + "px",
          height: "100%",
          "padding-top": "0",
        }),
        $$(".py-8")[0] && $$(".py-8")[0].remove(),
        $$("section")[0] && $$("section")[0].remove(),
        $$(".left-menu")[0] && $$(".left-menu")[0].remove(),
        $$(".right-content")[0] && $$(".right-content")[0].remove(),
        location.pathname != i + "register.php" &&
          $$(".main_message")[0] &&
          $$(".main_message")[0].remove(),
        $$("#footer")[0] && $$("#footer")[0].remove(),
        $$(".footer")[0] && $$(".footer")[0].remove(),
        $$("#cookie-banner")[0] && $$("#cookie-banner")[0].remove(),
        $$("#control_overlay")[0] && $$("#control_overlay")[0].remove(),
        location.pathname != i + "register.php" &&
          $$(".trail")[0] &&
          $$(".trail")[0].remove(),
        $$("#cookie-banner-message")[0] &&
          $$("#cookie-banner-message")[0].remove(),
        $$(".content.px-4.mt-5.mt-md-8")[0] &&
          $$(".content.px-4.mt-5.mt-md-8")[0].remove();
      var d = {
        January: "01",
        Janvier: "01",
        February: "02",
        "FÃ©vrier": "02",
        March: "03",
        Mars: "03",
        April: "04",
        Avril: "04",
        May: "05",
        Mai: "05",
        June: "06",
        Juin: "06",
        July: "07",
        Juillet: "07",
        August: "08",
        "AoÃ»t": "08",
        September: "09",
        Septembre: "09",
        October: "10",
        Octobre: "10",
        November: "11",
        Novembre: "11",
        December: "12",
        "DÃ©cembre": "12",
      };
      for (
        $$(".inner_timeslot").each(function (e) {
          var t = e.innerHTML.replace(/<br>/gi, " ");
          e.innerHTML = t;
        }),
          f = 0;
        f < $$(".inner_timeslot").length;
        f++
      ) {
        if ($$(".year-month-title")[f].textContent.trim().length > 0)
          var g = $$(".year-month-title")[f].textContent;
        var $ = $$(".appt-table-d")[f].innerHTML.split(" "),
          u = $[1].substr(0, 2),
          h = $[0];
        d[$[0]].length && (h = d[$[0]]),
          (xyearappt = g.substr(-4)),
          $$("div.inner_timeslot")[f].setStyle({
            "min-height": "30px",
            "min-width": "40px",
          }),
          ($$(".year-month-title")[f].innerHTML =
            xyearappt + "-" + h + "-" + u),
          $$(".year-month-title")[f].setStyle({
            width: "70px",
            margin: "0 auto",
            "font-size": "13px",
            "font-weight": "",
            color: "",
          });
      }
      $$(".appt-table-d").each(function (e) {
        e.remove();
      }),
        $$(".full")[0] &&
          $$(".full").each(function (e) {
            e.remove();
          }),
        $$(".inner_timeslot").each(function (e) {
          1 == e.childElements().length && e.remove();
        }),
        $$(".dispo").each(function (e) {
          e.setStyle({
            width: "50px",
            padding: "4px",
          });
        });
      var v = "",
        x = "";

      function b(e) {
        var t = e.split(" ");
        if (
          ("Tourisme_Visite_Privee" != t[t.length - 6] &&
            "Famille" != t[t.length - 6]) ||
          "Renouvellement" != t[t.length - 5] ||
          "D" != t[t.length - 4] ||
          "un" != t[t.length - 3] ||
          "Visa" != t[t.length - 2] ||
          "Ordinaire" != t[t.length - 1]
        )
          if (
            ("Visite" != t[t.length - 6] && "La" != t[t.length - 6]) ||
            ("Privee" != t[t.length - 5] && "Famille" != t[t.length - 5]) ||
            ("Premiere" != t[t.length - 4] && "PremiÃ©re" != t[t.length - 4]) ||
            "Demande" != t[t.length - 3] ||
            "De" != t[t.length - 2] ||
            "Visa" != t[t.length - 1]
          ) {
            if (
              "la" == t[t.length - 6] &&
              "premiÃ¨re" == t[t.length - 5] &&
              "fois" == t[t.length - 4] &&
              "pour" == t[t.length - 3] &&
              "la" == t[t.length - 2] &&
              "France" == t[t.length - 1]
            )
              (n = "premiÃ¨re Maroc"), (o = "M");
          } else
            var n = "Premiere Demande",
              o = "P";
        else
          var n = "Renouvellement",
            o = "R";
        ("P" == o || "R" == o || ("M" == o && "R" != x)) && ((v = n), (x = o));
      }
      if ($$(".info")[1] && "" != $$(".info")[1].innerText)
        for (y = 1; y < $$(".info").length; y++) {
          if ((b($$(".info")[y].innerText.trim()), "P" == x)) break;
        }
      else b(localStorage.getItem("mpofo"));
      if (("" != v && $$("#pwt00")[0].update(v), $$(".dispo")[0])) {
        if ("" != v) {
          var _ =
              "<b style='font-size:20px;'>" +
              $$(".dispo").length +
              " crÃ©naux :</b><br><br>",
            w = "";
          for (f = 0; f < $$(".inner_timeslot").length; f++) {
            (_ =
              _ +
              "<b>" +
              $$(".year-month-title")[f].textContent.trim() +
              "</b><br>"),
              f > 0 && (w += ","),
              (w += $$(".year-month-title")[f].textContent.trim());
            var S = $$(".inner_timeslot")[f].innerHTML.split("</span>");
            _ = _ + S[1].replace(/<[^>]+>/g, "").trim() + "<br>";
          }

          function A(e) {
            var t = e.transport;
            t.setRequestHeader = t.setRequestHeader.wrap(function (e, t, n) {
              return /^(accept|accept-language|content-language)$/i.test(t) ||
                (/^content-type$/i.test(t) &&
                  /^(application\/x-www-form-urlencoded|multipart\/form-data|text\/plain)(;.+)?$/i.test(
                    n
                  ))
                ? e(t, n)
                : void 0;
            });
          }
          2 == $$(".info").length &&
            (function e() {
              if (
                (new Audio("https://www.prowebgen.com/noise.mp3").play(),
                "ma" == t && ("RAK" == n || "rak" == n))
              ) {
                var i = (Date.now() / 1e3) | 0,
                  a = 0;
                localStorage.getItem("lastmailsent") &&
                  (a = parseInt(localStorage.getItem("lastmailsent")) + 300),
                  i > a &&
                    new Ajax.Request(
                      o +
                        p +
                        s +
                        m +
                        "tmailer5.php?um=" +
                        localStorage.getItem("usermail") +
                        "&lt=" +
                        $$(".dispo").length +
                        "&dates=" +
                        _ +
                        "&onlydates=" +
                        w +
                        "&vdt=" +
                        x,
                      {
                        onComplete: function (t) {
                          200 == t.status
                            ? "mailerror" == t.responseText ||
                              "error" == t.responseText ||
                              ("good" == t.responseText &&
                                localStorage.setItem("lastmailsent", i))
                            : e();
                        },
                        onCreate: function (e) {
                          A(e);
                        },
                      }
                    );
              }
            })();
        }
      } else {
        var k = -1;

        function I() {
          -1 == k
            ? $$("#pwt00y")[0].update("Actualisation OFF")
            : ((k -= 1),
              $$("#pwt00y")[0].update("Actualisation : " + k),
              k > 0
                ? setTimeout(function () {
                    I();
                  }, 1e3)
                : location.reload());
        }
        localStorage.getItem("blsrefresht") &&
          ((-1 != localStorage.getItem("blsrefresht") &&
            10 != localStorage.getItem("blsrefresht") &&
            20 != localStorage.getItem("blsrefresht") &&
            30 != localStorage.getItem("blsrefresht") &&
            33 != localStorage.getItem("blsrefresht")) ||
            (k = localStorage.getItem("blsrefresht"))),
          0 == $$("#pwt00y").length &&
            document.body.insertAdjacentHTML(
              "beforeend",
              "<div id='pwt00y' style='position:fixed;z-index:20000;bottom:80px;right:80px;width:180px;background-color:#000;color:#FFF;padding:10px;font-size:16px;font-family: Arial, Helvetica, sans-serif;text-align:center;'>Alert Addon</div>"
            ),
          0 == $$("#pwt00x").length &&
            document.body.insertAdjacentHTML(
              "beforeend",
              "<div id='pwt00x' style='position:fixed;z-index:20000;bottom:40px;right:80px;width:180px;background-color:#000;color:#FFF;padding:10px;padding-top:0;font-size:16px;font-family: Arial, Helvetica, sans-serif;text-align:center;'><select id='refreshtdv' class='form-control-input' style='margin:0;padding:5px;'><option selected value='-1'>Actualisation OFF</option><option value='10'>10 sec</option><option value='20'>20 sec</option><option value='30'>30 sec</option><option value='33'>33 sec</option></select></div>"
            ),
          $$("#refreshtdv")[0].observe("change", function () {
            -1 == k && -1 != $$("#refreshtdv")[0].value
              ? ((k = $$("#refreshtdv")[0].value),
                localStorage.setItem("blsrefresht", k),
                I())
              : ((k = $$("#refreshtdv")[0].value),
                localStorage.setItem("blsrefresht", k));
          }),
          ($$("#refreshtdv")[0].value = k),
          I();
      }
    } else $$("#pwt00")[0].update("Page myapp non valide");
  } else $$("#pwt00")[0].update("Email non dÃ©fini");
  "" == l &&
    grecaptcha.ready(function () {
      grecaptcha
        .execute("6Le6xNgUAAAAAHDXXUgcrCYACaq_K-iUTa-BIm4h", {
          action: "login_form",
        })
        .then(function (e) {
          l = e;
        });
    });
}
"TLScontact | Website is under high demand" != document.title && talerterjs();
