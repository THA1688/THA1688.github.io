$(function () {
    /*璁剧疆閾炬帴銆佸浘鐗囥€佺綉鍧€*/
    $(".wangzhi").text(`永久網址${wangzhi}`);
    $(".link_jingxiaoshang").attr('href', link_jingxiaoshang);
	$(".line_link").attr('href', link_line);
    $(".jingxiaoshang_number").text(jingxiaoshang_number);
    $("#wx_img").attr('src', wx_img);
    $("#qq_img").attr('src', qq_img);
    $("#wx_number").text(wx_number);
    $("#qq_number").text(qq_number);
    $(".tc_wx span").text(wx_number);
    $(".tc_qq span").text(qq_number);
    $(".wx_number").text(wx_number);
    $(".link_guanwang").attr('href', link_guanwang);
    $(".old_vip_login").attr('href', old_vip_login);

    /*鑳屾櫙鍒囨崲*/
    (function () {
        $(".link_guanwang").on('click', function () {
            $("#link_guanwang_img1").hide();
            $("#link_guanwang_img1-1").show();
        });
        $(".old_vip_login").on('click', function () {
            $("#toggle-background5").hide();
            $("#toggle-background5-1").show();
        });
    })();

    /*鍒囨崲*/
    (function () {
        $(".contain6 .d2 .bt").each(function (i, e) {
            e.index = i;
        });

        $(".contain6 .d2 .bt").on('click', function (event) {
            let index = this.index;
            $(this).siblings().css("background-color", "#3D789A");
            $(this).css("background-color", "#E29441");

            $(".contain6 .d3 > *").hide();
            $(".contain6 .d3 > *").each(function (i, e) {
                if (i == index) {
                    $(this).show()
                }
            });
        });
    })();

    /*杞挱*/
    (function () {
        var lunbo_object = {
            num: 0,
            margin_left: function () {
                return (0 - this.num * 100);
            },
            active_lunbotu: function () {
                $(".contain2 > .d1 .lunbotu:first-child").css('margin-left', `${this.margin_left()}%`);
            },
            active_yuandian: function () {
                $(".contain2 > .d3 img").attr("src", "https://58tha.net/pc/img/not_choosed_round.png");
                $($(".contain2 > .d3 img")[this.num]).attr("src", "https://58tha.net/pc/img/choosed_round.png")
            },
            lunbo: function () {
                if (this.num == 3) {
                    this.num = 0;
                } else {
                    this.num++;
                }
                this.active_lunbotu();
                this.active_yuandian();
            },
            choose_lunbo: function (i) {
                this.num = i;
                this.active_lunbotu();
                this.active_yuandian();
            },
        };

        var lunbo_control = {
            lunbo_interval: null,
            start: function () {
                this.lunbo_interval = setInterval(function () {
                    lunbo_object.lunbo();
                }, 3000);
            },
            stop: function () {
                clearInterval(this.lunbo_interval);
            },
            jump_to: function (i) {
                this.stop();
                lunbo_object.choose_lunbo(i);
                this.start();
            },
            init: function () {
                $(".contain2 > .d3 img").each(function (i, e) {
                    e.index = i;
                });

                $(".contain2 .d1 .lunbotu").each(function (i, e) {
                    e.index = i;
                });

                $(".contain2 > .d3 img").on('click', function () {
                    lunbo_control.jump_to(this.index);
                });

                $(".contain2 .d1 .lunbotu").on('click', function () {
                    lunbo_control.jump_to(this.index);
                });
                return this;
            }
        };

        lunbo_control.init().start();
    })();


    /*寮圭獥*/
    var tc_control = {
        is_today_first_time_access: function () {
            var cookie_name = "fd_last_access_time";
            var now_date = new Date().getDate() + '';
            var time = Cookies.get(cookie_name);
            console.log(time);
            var is_first = false;
            if (time == undefined) {
                is_first = true
            } else {
                if (now_date != time) {
                    is_first = true
                }
            }
            Cookies.set(cookie_name, now_date);
            return is_first
        }
        , pushHistory: function () {
            var state = {
                title: "title",
                url: ""
            };
            window.history.pushState(state, "title", "");
        }
        , show_tc: function (name) {
            $(".tc-contain,.tc-contain >.contents > *").hide();
            $(".tc-contain").show();
            $(".tc-contain >.contents ." + name).show();
        }
        , hide_tc: function () {
            $(".tc-contain,.tc-contain >.contents > *").hide();
        }
        , init: function () {
            var tc_control = this;
            var is_today_first_time = tc_control.is_today_first_time_access();

            /*if (is_today_first_time) {
                tc_control.pushHistory();
                window.addEventListener("popstate", function (e) {
                    tc_control.show_tc('tc1');
                }, false);
            }

            setTimeout(function () {
                if (is_today_first_time) {
                    tc_control.show_tc('tc2')
                }
            }, 1000 * 60);*/

            $(".tc-contain .contents").on('click', function (event) {
                if (event.target == event.currentTarget) {
                    tc_control.hide_tc()
                }
            });

            $(".tc-contain .tc1 .likai").on('click', function (event) {
                tc_control.hide_tc();
                history.back();
            });
            $(".tc-contain .tc2 .likai").on('click', function (event) {
                tc_control.hide_tc();
            });
        }
    };
    tc_control.init();


    /*澶嶅埗QQ寰俊鍒板壀璐存澘*/
    (function () {
        function toogle_background(el) {
            var el = document.getElementById(el);
            var src2 = el.getAttribute('src2');
            el.setAttribute('https://58tha.net/', src2);
        }

        function bind_clipboard(e, data, callback) {
            new Clipboard(e, {
                text: function () {
                    return data;
                }
            }).on('success', function (e) {
                console.log(e.text);
                callback();
            });
        }

        bind_clipboard('#wx_number', wx_number, function () {
            toogle_background("toggle_wx");
            tc_control.show_tc('tc_wx');
        });

        bind_clipboard('#wx_number2', wx_number, function () {
            toogle_background("wx_number2");
            tc_control.show_tc('tc_wx');
        });

        bind_clipboard('#qq_number', qq_number, function () {
            $(".tc_qq a").attr('href', `http://wpa.qq.com/msgrd?v=3&uin=${qq_number}&site=qq&menu=yes`);
            toogle_background("toggle_qq");
            tc_control.show_tc('tc_qq');
        });

        /*澶嶅埗缁忛攢鍟嗗彿鍒板壀璐存澘*/
        bind_clipboard('#tc4_button', jingxiaoshang_number, function () {
            $(".tc4 .d3 img").attr('https://58tha.net/', $(".tc4 .d3 img").attr('src2'));
            window.location.href = link_jingxiaoshang;
        });
    })();
});
