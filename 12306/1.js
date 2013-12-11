(function() {
    var a;
    var aE = null;
    var bb;
    var a0;
    var E;
    var S;
    var bD;
    var bq;
    var l = false;
    var bw = 0;
    var ah;
    var aO;
    var q;
    var Q;
    var bI;
    var aL = new Array();
    var bn = new Array();
    var bv = new Array();
    var L = new Array();
    var bi = new Array();
    var B;
    var am = new Array();
    tickets_info = new Array();
    var aF = true, bx = true, aA = true, ai = "starttime";
    var al = true;
    var a7 = [];
    var aR = [];
    var bp = [];
    var at;
    var y = [];
    var bo = "";
    var bB = "";
    var aJ = "";
    $(document).ready(function() {
        e();
        M();
        r();
        P();
        x();
        aj();
        aH();
        a5();
        clickCheckBoxName();
        ba();
        bs();
        ac();
        T();
        by();
        t();
        az();
        ay();
        be();
        $("#float").headerFloat();
        $(window).scroll(function() {
            if (aE != null && (!aE.isHidden())) {
                $("#floatTable").hide();
                $(window).scrollTop(a)
            }
        });
        $.stopStation({url: ctx + "czxx/queryByTrainNo",getSearchDate: function() {
                return train_tour_flag == "fc" ? $.trim($("#back_train_date").val()) : $.trim($("#train_date").val())
            }});
        aN();
        bM();
        bz();
        k();
        I();
        R();
        bo = $("#fromStationText").val();
        bB = $("#toStationText").val();
        $("#showOnlyTicA").bind("click", function() {
            $("#filterTic").attr("checked", "checked");
            aS();
            $jpopup.startOrHiden()
        });
        at = $.autoSubmit();
        var bP = $("#train_date").val();
        var bO = $("#back_train_date").val();
        if (bO == "") {
            $("#back_train_date").val(bP)
        } else {
            $("#back_train_date").val(bO)
        }
    });
    function R() {
        if (rqChecked.length == 0) {
            if (train_tour_flag == "fc") {
                rqChecked.push($("#back_train_date").val())
            } else {
                rqChecked.push($("#train_date").val())
            }
        }
    }
    function bz() {
        if (ClickWho == "0X00") {
            $("#sf1").attr("disabled", "true");
            $("#sf1_label").addClass("color999");
            $("#sf2").attr("checked", "true");
            $("#query_ticket").removeClass().addClass("btn92s")
        } else {
            if (ClickWho == "00" || ClickWho == "ADULT") {
                $("#sf2").attr("disabled", "true");
                $("#sf2_label").addClass("color999");
                $("#query_ticket").removeClass().addClass("btn92s")
            } else {
                $("#query_ticket").removeClass().addClass("btn92s")
            }
        }
        if (isstudentDate) {
            $("#sf2").attr("disabled", "true");
            $("#sf2_label").addClass("color999");
            $("#query_ticket").removeClass().addClass("btn92s")
        }
    }
    function U() {
        if (!isInitStationDiv) {
            c();
            isInitStationDiv = true
        }
        if (!isInitJsrenderTemplate) {
            ad();
            isInitJsrenderTemplate = true
        }
    }
    function aN() {
        $("#fromStationText").mouseover(U);
        $("#toStationText").mouseover(U);
        $("#dc").mouseover(U);
        $("#wf").mouseover(U);
        $("#dc_label").mouseover(U);
        $("#wf_label").mouseover(U);
        $("#train_date").mouseover(U);
        $("#back_train_date").mouseover(U);
        $("#date_range").mouseover(U)
    }
    function ak(bO) {
        ar();
        var bS = bi.length;
        if ($("#query_ticket").html() == "停止查询") {
            if (bS > 0 && au) {
                $("#auto_query").removeAttr("disabled");
                if ($("#dc").is(":checked")) {
                    $("#autoSubmit").removeAttr("disabled");
                    $("#partSubmit").removeAttr("disabled")
                }
                $("#query_ticket").html("查询");
                $("#query_ticket").unbind("click");
                bj();
                if (countDown) {
                    clearInterval(countDown)
                }
                $("#filterTicDiv").html("<strong><label for='filterTic' style='cursor: pointer;'>仅显示选定车次</label></strong>");
                if (!$("#autoSubmit").is(":checked")) {
                    clearInterval(aC);
                    if (ccSelected.length > 0 || rqChecked.length > 0 || xbChecked.length > 0) {
                        myJpopup.startOrHiden();
                        if (train_tour_flag == "fc") {
                            var bP = "成功查到" + $("#back_train_date").val() + "的" + bi[0]["queryLeftNewDTO"]["station_train_code"] + "次"
                        } else {
                            var bP = "成功查到" + $("#train_date").val() + "的" + bi[0]["queryLeftNewDTO"]["station_train_code"] + "次"
                        }
                        if (bS == 1) {
                            bP = bP + "车。"
                        } else {
                            bP = bP + "等" + bS + "趟车。"
                        }
                        $("#filterRes").html(bP)
                    }
                }
                jPlayer("play")
            } else {
                if (countDown) {
                    clearInterval(countDown)
                }
                var bT = autoSearchTime / 1000;
                $("#filterTicDiv").html("<strong>离下次刷新时间<font class='colorA' style='font-size: 16px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + bT + "</font>秒<strong>");
                countDown = window.setInterval(function() {
                    var bU = "<strong>离下次刷新时间<font class='colorA' style='font-size: 16px;'>";
                    if (bT == 0) {
                        bT = autoSearchTime / 1000
                    }
                    bT = bT - 1;
                    if (bT == 4) {
                        bU = bU + "&nbsp;&nbsp;&nbsp;&nbsp;"
                    }
                    if (bT == 3) {
                        bU = bU + "&nbsp;&nbsp;&nbsp;"
                    }
                    if (bT == 2) {
                        bU = bU + "&nbsp;&nbsp;"
                    }
                    if (bT == 1) {
                        bU = bU + "&nbsp;"
                    }
                    bU = bU + bT;
                    bU += "</font>秒<strong>";
                    $("#filterTicDiv").html(bU)
                }, 1000);
                $("#filterTic").hide()
            }
        }
        var bR = new Array();
        bR.push('<tbody id="queryLeftTable">');
        for (var bQ = 0; bQ < bO.length; bQ++) {
            bR.push('<tr id="ticket_');
            bR.push(bO[bQ].queryLeftNewDTO.train_no);
            bR.push('" class="');
            bR.push(bQ % 2 ? '">' : 'bgc">');
            bR.push('<td colspan="4" width="370">');
            bR.push('<div class="ticket-info clearfix" id="train_num_');
            bR.push(bQ);
            bR.push('">');
            bR.push('<div class="train" id="ticket_');
            bR.push(bO[bQ].queryLeftNewDTO.train_no);
            bR.push('_train">');
            bR.push('<div><a title="点击查看停靠站信息" href="javascript:" id="');
            bR.push(bO[bQ].queryLeftNewDTO.train_no);
            bR.push("_");
            bR.push(bO[bQ].queryLeftNewDTO.from_station_telecode);
            bR.push("_");
            bR.push(bO[bQ].queryLeftNewDTO.to_station_telecode);
            bR.push('" class="number"  onclick="myStopStation.open(\'');
            bR.push(bQ);
            bR.push("','");
            bR.push(bO[bQ].queryLeftNewDTO.train_no);
            bR.push("','");
            bR.push(bO[bQ].queryLeftNewDTO.from_station_telecode);
            bR.push("','");
            bR.push(bO[bQ].queryLeftNewDTO.to_station_telecode);
            bR.push("','");
            bR.push(bO[bQ].queryLeftNewDTO.start_train_date);
            bR.push("','");
            bR.push(bO[bQ].queryLeftNewDTO.train_seat_feature);
            bR.push("');\">");
            bR.push(bO[bQ].queryLeftNewDTO.station_train_code);
            bR.push("</a>");
            if (bO[bQ].queryLeftNewDTO.is_support_card != 0) {
                bR.push(' <span class="i-card" title="可凭二代身份证直接进出站"></span>')
            }
            bR.push("</div>");
            bR.push('<span id="');
            bR.push(bO[bQ].queryLeftNewDTO.train_no);
            bR.push("_");
            bR.push(bO[bQ].queryLeftNewDTO.from_station_no);
            bR.push("_");
            bR.push(bO[bQ].queryLeftNewDTO.to_station_no);
            bR.push("_");
            bR.push(bO[bQ].queryLeftNewDTO.yp_info);
            bR.push("_");
            bR.push(bO[bQ].queryLeftNewDTO.seat_types);
            bR.push('" class="lookup" onclick="showTicketPrice(this)"><span style="display:none;">查看票价</span><b title="查看票价"></b></span>');
            bR.push("</div>");
            bR.push('<div class="cdz">');
            if (bO[bQ].queryLeftNewDTO.from_station_telecode != null && bO[bQ].queryLeftNewDTO.from_station_telecode == bO[bQ].queryLeftNewDTO.start_station_telecode) {
                bR.push('<strong class="start-s">');
                bR.push(bO[bQ].queryLeftNewDTO.from_station_name);
                bR.push("</strong>")
            } else {
                bR.push("<strong>");
                bR.push(bO[bQ].queryLeftNewDTO.from_station_name);
                bR.push("</strong>")
            }
            if (bO[bQ].queryLeftNewDTO.to_station_telecode != null && bO[bQ].queryLeftNewDTO.to_station_telecode == bO[bQ].queryLeftNewDTO.end_station_telecode) {
                bR.push('<strong class="end-s">');
                bR.push(bO[bQ].queryLeftNewDTO.to_station_name);
                bR.push("</strong>")
            } else {
                bR.push("<strong>");
                bR.push(bO[bQ].queryLeftNewDTO.to_station_name);
                bR.push("</strong>")
            }
            bR.push("</div>");
            bR.push('<div class="cds">');
            bR.push('<strong class="start-t">');
            bR.push(bO[bQ].queryLeftNewDTO.start_time);
            bR.push("</strong>");
            bR.push('<strong class="color999">');
            bR.push(bO[bQ].queryLeftNewDTO.arrive_time);
            bR.push("</strong>");
            bR.push("</div>");
            bR.push('<div  class="ls" ');
            bR.push('id="');
            bR.push(bO[bQ].queryLeftNewDTO.train_no);
            bR.push('_ls">');
            bR.push("<strong>");
            bR.push(bO[bQ].queryLeftNewDTO.lishi);
            bR.push("</strong>");
            bR.push("<span>");
            bR.push(changeArriveDate(bO[bQ].queryLeftNewDTO.start_time, bO[bQ].queryLeftNewDTO.lishi));
            bR.push("到达</span>");
            bR.push("</div>");
            bR.push("</div>");
            bR.push("</td>");
            bA(bR, bO[bQ].queryLeftNewDTO.swz_num, "SWZ_", bO[bQ].queryLeftNewDTO.train_no, bO[bQ].queryLeftNewDTO.yp_ex, "91");
            bA(bR, bO[bQ].queryLeftNewDTO.tz_num, "TZ_", bO[bQ].queryLeftNewDTO.train_no, bO[bQ].queryLeftNewDTO.yp_ex, "P1");
            bA(bR, bO[bQ].queryLeftNewDTO.zy_num, "ZY_", bO[bQ].queryLeftNewDTO.train_no, bO[bQ].queryLeftNewDTO.yp_ex, "M1");
            bA(bR, bO[bQ].queryLeftNewDTO.ze_num, "ZE_", bO[bQ].queryLeftNewDTO.train_no, bO[bQ].queryLeftNewDTO.yp_ex, "O1");
            bA(bR, bO[bQ].queryLeftNewDTO.gr_num, "GR_", bO[bQ].queryLeftNewDTO.train_no, bO[bQ].queryLeftNewDTO.yp_ex, "61");
            bA(bR, bO[bQ].queryLeftNewDTO.rw_num, "RW_", bO[bQ].queryLeftNewDTO.train_no, bO[bQ].queryLeftNewDTO.yp_ex, "41");
            bA(bR, bO[bQ].queryLeftNewDTO.yw_num, "YW_", bO[bQ].queryLeftNewDTO.train_no, bO[bQ].queryLeftNewDTO.yp_ex, "31");
            bA(bR, bO[bQ].queryLeftNewDTO.rz_num, "RZ_", bO[bQ].queryLeftNewDTO.train_no, bO[bQ].queryLeftNewDTO.yp_ex, "21");
            bA(bR, bO[bQ].queryLeftNewDTO.yz_num, "YZ_", bO[bQ].queryLeftNewDTO.train_no, bO[bQ].queryLeftNewDTO.yp_ex, "11");
            bA(bR, bO[bQ].queryLeftNewDTO.wz_num, "WZ_", bO[bQ].queryLeftNewDTO.train_no, bO[bQ].queryLeftNewDTO.yp_ex, "W1");
            bA(bR, bO[bQ].queryLeftNewDTO.qt_num, "QT_", bO[bQ].queryLeftNewDTO.train_no, bO[bQ].queryLeftNewDTO.yp_ex, "");
            if ("Y" == bO[bQ].queryLeftNewDTO.canWebBuy) {
                bR.push(' <td align="center" width="80" class="no-br"><a href="javascript:" class="btn72" onclick="submitOrderRequest(\'');
                bR.push(bO[bQ].secretStr);
                bR.push("','");
                bR.push(bO[bQ].queryLeftNewDTO.start_time);
                bR.push("')\">");
                bR.push(buttonText());
                bR.push("</a>");
                bR.push("</td>")
            } else {
                bR.push('<td align="center" width="80" class="no-br">');
                bR.push(bO[bQ].buttonTextInfo);
                bR.push("</td>")
            }
            bR.push("</tr>");
            bR.push('<tr id="price_');
            bR.push(bO[bQ].queryLeftNewDTO.train_no);
            bR.push('" style="display:none;"></tr>')
        }
        bR.push("</tbody>");
        $("#queryLeftTable").replaceWith(bR.join(""))
    }
    function bA(bT, bS, bR, bQ, bU, bP) {
        var bV = bU ? bU.indexOf(bP) : -1;
        var bO = false;
        if (bV > -1 && (bV % 2) == 0) {
            bO = true
        }
        if ("有" == bS) {
            if (bR == "SWZ_" || bR == "TZ_") {
                bT.push('<td width="46" align="center" class="yes" onclick="showTicketPrice(this)"　style="cursor: pointer;" id="');
                bT.push(bR);
                bT.push(bQ);
                bT.push('">');
                if (bO) {
                    bT.push('<div class="sale" title="本席别票价打折">' + bS + '<span class="i-mark">折</span></div>')
                } else {
                    bT.push(bS)
                }
                bT.push("</td>")
            } else {
                if (bR == "ZY_" || bR == "ZE_") {
                    bT.push('<td width="46" align="center" class="yes" style="cursor: pointer;" onclick="showTicketPrice(this)" id="');
                    bT.push(bR);
                    bT.push(bQ);
                    bT.push('">');
                    if (bO) {
                        bT.push('<div class="sale" title="本席别票价打折">' + bS + '<span class="i-mark">折</span></div>')
                    } else {
                        bT.push(bS)
                    }
                    bT.push("</td>")
                } else {
                    bT.push('<td width="46" align="center" style="cursor: pointer;" class="yes" onclick="showTicketPrice(this)" id="');
                    bT.push(bR);
                    bT.push(bQ);
                    bT.push('">');
                    if (bO) {
                        bT.push('<div class="sale" title="本席别票价打折">' + bS + '<span class="i-mark">折</span></div>')
                    } else {
                        bT.push(bS)
                    }
                    bT.push("</td>")
                }
            }
        } else {
            if (isNum(bS) > 0) {
                if (bR == "SWZ_" || bR == "TZ_" || bR == "ZY_" || bR == "ZE_") {
                    bT.push('<td width="46" align="center" style="cursor: pointer;" class="t-num" onclick="showTicketPrice(this)" id="');
                    bT.push(bR);
                    bT.push(bQ);
                    bT.push('">');
                    bT.push("<div>");
                    if (bO) {
                        bT.push('<div class="sale" title="本席别票价打折">' + bS + '<span class="i-mark">折</span></div>')
                    } else {
                        bT.push(bS)
                    }
                    bT.push("</td>")
                } else {
                    bT.push('<td width="46" align="center" style="cursor: pointer;" class="t-num" onclick="showTicketPrice(this)" id="');
                    bT.push(bR);
                    bT.push(bQ);
                    bT.push('">');
                    if (bO) {
                        bT.push('<div class="sale" title="本席别票价打折">' + bS + '<span class="i-mark">折</span></div>')
                    } else {
                        bT.push(bS)
                    }
                    bT.push("</td>")
                }
            } else {
                bT.push(' <td width="46" align="center" style="cursor: pointer;" onclick="showTicketPrice(this)"  id="');
                bT.push(bR);
                bT.push(bQ);
                bT.push('">');
                bT.push(bS);
                bT.push("</td>")
            }
        }
    }
    function g(bP, bO) {
        ishaveCheckId = false;
        for (i = 0; i < bP.length; i++) {
            if (bP[i][0] == bO) {
                bP[i][1] = $("#".concat($("#".concat(bO)).attr("for"))).is(":checked");
                ishaveCheckId = true
            }
        }
        if (!ishaveCheckId) {
            bP[bP.length] = [bO, true]
        }
    }
    function bl() {
        d(bb);
        d(a0);
        d(E)
    }
    function d(bO) {
        for (i = 0; i < bO.length; i++) {
            if (bO[i][1]) {
                $("#".concat(bO[i][0]).concat("_check")).attr("checked", true)
            }
        }
    }
    function u(bP) {
        var bO = new Date();
        var bQ = bP.split("-");
        bO.setFullYear(parseInt(bQ[0]), parseInt(bQ[1] - 1, 10), parseInt(bQ[2], 10));
        if (bQ.length >= 6) {
            bO.setHours(bQ[3], bQ[4], bQ[5])
        }
        return bO
    }
    Date.prototype.format = function(bP) {
        var bQ = {"M+": this.getMonth() + 1,"d+": this.getDate(),"h+": this.getHours(),"m+": this.getMinutes(),"s+": this.getSeconds(),"q+": Math.floor((this.getMonth() + 3) / 3),S: this.getMilliseconds()};
        if (/(y+)/.test(bP)) {
            bP = bP.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
        }
        for (var bO in bQ) {
            if (new RegExp("(" + bO + ")").test(bP)) {
                bP = bP.replace(RegExp.$1, RegExp.$1.length == 1 ? bQ[bO] : ("00" + bQ[bO]).substr(("" + bQ[bO]).length))
            }
        }
        return bP
    };
    function aq(bQ, bP) {
        var bO = new Date(Date.parse(bQ.replace(/-/g, "/")));
        bO.setDate(bO.getDate() + bP);
        return G(bO)
    }
    function G(bP) {
        var bQ = bP.getFullYear();
        var bS = bP.getMonth() + 1;
        var bR = bP.getDate();
        var bO = bQ + "-" + bS + "-" + bR;
        return bO
    }
    function bd() {
        var bQ = $("#train_date").val();
        var bP = $("#back_train_date").val();
        var bO = false;
        if ($("#wf").is(":checked")) {
            if (u(bQ) <= u(bP)) {
                bO = true
            }
        } else {
            return true
        }
        return bO
    }
    function bG() {
        var bR = $.jc_getFromStation();
        if (bR) {
            var bQ = bR.split(",");
            if (bQ && bQ.length == 2) {
                $("#fromStationText").val(bQ[0]);
                $("#fromStation").val(bQ[1])
            }
        }
        var bP = $.jc_getToStation();
        if (bP) {
            var bQ = bP.split(",");
            if (bQ && bQ.length == 2) {
                $("#toStationText").val(bQ[0]);
                $("#toStation").val(bQ[1])
            }
        }
        var bS = [];
        bS = stu_buy_date.split("&");
        var bO = $.jc_getFromDate();
        if (bO) {
            if (bO >= bS[0] && bO <= bS[1]) {
                $("#train_date").val(bO)
            }
        }
        var bT = $.jc_getWfOrDc();
        if (bT && "wf" == bT) {
            $("#wf").click();
            var bU = $.jc_getToDate();
            if (bU) {
                if (bU >= bS[0] && bU <= bS[1]) {
                    $("#back_train_date").val(bU)
                }
            }
        } else {
            $("#dc").click()
        }
    }
    function aD() {
        $("#train_stop").on("mouseover", function(bO) {
            if (checkHover(bO, this)) {
                bw = 1
            }
        }).on("mouseleave", function() {
            bw = 0;
            $("#train_stop").hide();
            $("#train_table_").html("")
        })
    }
    function e() {
        fromStation = from_station;
        fromStationName = from_station_name;
        toStation = to_station;
        toStationName = to_station_name;
        trainDate = trainDate;
        backTrainDate = backTrainDate;
        bb = new Array();
        a0 = new Array();
        E = new Array()
    }
    function k() {
        $("#fromStation").val(fromStation);
        $("#fromStationText").val(fromStationName);
        $("#toStation").val(toStation);
        $("#toStationText").val(toStationName);
        $("#train_date").val(trainDate);
        if (isInMaintenanceHours) {
            $("#autoSubmit").prop("checked", false);
            $("#autoSubmit").attr("disabled", true);
            $("#autoSubmit").siblings("label").css("color", "#999");
            $("#autoSubmitTxt").attr("title", "系统维护时间下不允许自动提交");
            $("#partSubmit").prop("checked", false);
            $("#partSubmit").attr("disabled", true);
            $("#partSubmit").siblings("label").css("color", "#999");
            $("#partSubmitTxt").attr("title", "系统维护时间下不允许自动提交")
        }
        if (backTrainDate != null && backTrainDate != "") {
            $("#back_train_date").val(backTrainDate)
        }
        if ($("#fromStationText").val() == "") {
            $("#fromStationText").val("简拼/全拼/汉字")
        }
        if ($("#toStationText").val() == "") {
            $("#toStationText").val("简拼/全拼/汉字")
        }
        if (page_show_flag == null) {
            ay();
            bG()
        } else {
            if (page_show_flag == "index") {
                aZ()
            } else {
                if (page_show_flag == "preStep") {
                    bC()
                } else {
                    if (page_show_flag == "fcInit") {
                        o();
                        $("#autoSubmit").attr("disabled", true);
                        $("#autoSubmit").siblings("label").css("color", "#999");
                        $("#partSubmit").attr("disabled", true);
                        $("#partSubmit").siblings("label").css("color", "#999")
                    } else {
                        if (page_show_flag == "gcInit") {
                            a1();
                            $("#autoSubmit").attr("disabled", true);
                            $("#autoSubmit").siblings("label").css("color", "#999");
                            $("#partSubmit").attr("disabled", true);
                            $("#partSubmit").siblings("label").css("color", "#999")
                        }
                    }
                }
            }
        }
    }
    function aZ() {
        if (tour_flag == "wf") {
            $("#wf").click()
        } else {
            if (tour_flag == "dc") {
                $("#dc").click()
            }
        }
        if (purposeCodeFromIndex == "0X00") {
            $("#sf2").click()
        } else {
            if (purposeCodeFromIndex == "ADULT") {
                $("#sf1").click()
            }
        }
        var bO = [];
        $("#date_range>ul>li").each(function() {
            var bP = $(this).children("span:first-child").html();
            bO.push(bP)
        });
        $("#query_ticket").click()
    }
    function bC() {
        $("#fromStationText").removeClass().addClass("inp_selected");
        $("#toStationText").removeClass().addClass("inp_selected");
        if (train_tour_flag == "dc") {
            ab(trainDate);
            $("#dc").click()
        }
        if (train_tour_flag == "wc") {
            ab(trainDate);
            $("#wf").click()
        }
        if (train_tour_flag == "fc") {
            ab(backTrainDate);
            $("#wf").click();
            $("#wf").attr("disabled", "true");
            $("#dc").attr("disabled", "true");
            $("#change_station").removeClass().addClass("i-change i-change2");
            $("#change_station").attr("style", "");
            $("#fromStationText").attr("title", "返程时不得变更出发地或不能变更到达地");
            $("#toStationText").attr("title", "返程时不得变更出发地或不能变更到达地");
            $("#toStationText").unbind("focus").unbind("click").attr("readonly", "true");
            $("#fromStationText").unbind("focus").unbind("click").attr("readonly", "true");
            $("#dfc>ul>li:nth-child(2)").children("label:first").removeClass().addClass("color999");
            $("#dfc>ul>li:nth-child(1)").children("label:first").removeClass().addClass("color999");
            $("#place_area>ul>li:nth-child(1)").addClass("no-change");
            $("#place_area>ul>li:nth-child(3)").addClass("no-change");
            $("#place_area>ul>li:nth-child(4)").addClass("no-change");
            $("#fromStationText").removeClass().addClass("inp-txt");
            $("#toStationText").removeClass().addClass("inp-txt");
            $("#change_station").unbind();
            $("#train_date").val(trainDate);
            $("#train_date").attr("readonly", "true");
            $("#train_date").removeClass().addClass("inp-txt");
            $("#train_date").unbind("click");
            $("#date_icon_1").unbind("click");
            $("#date_area>ul>li:nth-child(1)>span>label").addClass("color999");
            $("#back_train_date").val(backTrainDate);
            $("#back_train_date").removeAttr("disabled");
            $("#date_area>ul>li:nth-child(2)>span>label").removeClass("color999");
            $("#back_train_date").removeClass().addClass("inp_selected");
            $("#autoSubmit").attr("disabled", true);
            $("#autoSubmit").siblings("label").css("color", "#999");
            $("#partSubmit").attr("disabled", true);
            $("#partSubmit").siblings("label").css("color", "#999")
        }
        if (train_tour_flag == "gc") {
            ab(trainDate);
            a1();
            $("#autoSubmit").attr("disabled", true);
            $("#autoSubmit").siblings("label").css("color", "#999");
            $("#partSubmit").attr("disabled", true);
            $("#partSubmit").siblings("label").css("color", "#999")
        }
    }
    function ab(bQ) {
        for (var bO = 1; bO <= 20; bO++) {
            var bP = $("#date_range>ul>li:nth-child(" + bO + ")").children("span:first-child").text();
            bP = "2013-" + bP;
            if (bQ == bP) {
                $("#date_range>ul>li").removeClass("sel");
                $("#date_range>ul>li").removeAttr("alt");
                $("#date_range>ul>li:nth-child(" + bO + ")").addClass("sel");
                $("#date_range>ul>li:nth-child(" + bO + ")").attr("alt", "show");
                $("#date_range>ul>li:nth-child(20)").addClass("end");
                $("#date_range>ul>li:nth-child(" + bO + ")").children("span:first-child").removeClass();
                $("#date_range>ul>li:nth-child(" + bO + ")").children("span:last-child").removeClass();
                $("#date_range>ul>li:nth-child(" + bO + ")").children("span:first-child").addClass("hide");
                $("#date_range>ul>li:nth-child(1)").children().addClass("first");
                bq = $("#date_range>ul>li:nth-child(" + bO + ")").children("span:first-child").text();
                break
            }
        }
    }
    function a1() {
        $("#fromStationText").attr("title", "改签时不得变更出发地或不能变更到达地");
        $("#toStationText").attr("title", "改签时不得变更出发地或不能变更到达地");
        $("#dc").click();
        $("#wf").attr("disabled", "true");
        $("#dc").attr("disabled", "true");
        $("#place_area>ul>li:nth-child(1)").addClass("no-change");
        $("#place_area>ul>li:nth-child(3)").addClass("no-change");
        $("#place_area>ul>li:nth-child(5)").addClass("no-change");
        $("#dfc>ul>li:nth-child(1)").children("label:first").removeClass().addClass("color999");
        $("#dfc>ul>li:nth-child(2)").children("label:first").removeClass().addClass("color999");
        $("#fromStationText").unbind("focus").unbind("click").attr("readonly", "true");
        $("#toStationText").unbind("focus").unbind("click").attr("readonly", "true");
        $("#fromStationText").removeClass().addClass("inp-txt");
        $("#toStationText").removeClass().addClass("inp-txt");
        $("#change_station").unbind();
        $("#change_station").removeClass().addClass("i-change i-change2");
        $("#change_station").attr("style", "");
        $("#fromStationText_label").addClass("color999");
        $("#toStationText_label").addClass("color999")
    }
    function o() {
        $("#fromStationText").attr("title", "订返程票时不得变更出发地或不能变更到达地");
        $("#toStationText").attr("title", "订返程票时不得变更出发地或不能变更到达地");
        ab(backTrainDate);
        $("#wf").click();
        $("#dc").attr("disabled", "true");
        $("#wf").attr("disabled", "true");
        $("#place_area>ul>li:nth-child(1)").addClass("no-change");
        $("#place_area>ul>li:nth-child(3)").addClass("no-change");
        $("#place_area>ul>li:nth-child(4)").addClass("no-change");
        $("#dfc>ul>li:nth-child(1)").children("label:first").removeClass().addClass("color999");
        $("#dfc>ul>li:nth-child(2)").children("label:first").removeClass().addClass("color999");
        $("#train_date").attr("readonly", "true");
        $("#train_date").addClass("color999");
        $("#train_date").attr("disabled", true);
        $("#train_date").unbind("click");
        $("#date_icon_1").unbind("click");
        $("#date_area>ul>li:nth-child(1)>span>label").addClass("color999");
        $("#back_train_date").removeAttr("disabled");
        $("#date_area>ul>li:nth-child(2)>span>label").removeClass("color999");
        $("#train_date").removeClass().addClass("inp-txt");
        $("#back_train_date").removeClass().addClass("inp_selected");
        $("#fromStationText").unbind("focus").unbind("unfocus").unbind("click").attr("readonly", "true");
        $("#toStationText").unbind("focus").unbind("unfocus").unbind("click").attr("readonly", "true");
        $("#fromStationText").removeClass().addClass("inp-txt");
        $("#toStationText").removeClass().addClass("inp-txt");
        $("#change_station").unbind();
        $("#change_station").removeClass().addClass("i-change i-change2");
        $("#change_station").attr("style", "")
    }
    function M() {
        initPageTitle(1);
        $("#train_type_btn_all").css("cursor", "pointer");
        $("#start_time_btn_all").css("cursor", "pointer");
        $("#arrive_time_btn_all").css("cursor", "pointer");
        $("#seat_type_btn_all").css("cursor", "pointer");
        $("#from_station_name_all").css("cursor", "pointer");
        $("#to_station_name_all").css("cursor", "pointer");
        $("#change_station").css("cursor", "pointer");
        $("#show_more").css("cursor", "pointer");
        $("#date_normal").css("cursor", "pointer");
        $("#lookup").css("cursor", "pointer");
        $("#s_time").css("cursor", "pointer");
        $("#r_time").css("cursor", "pointer");
        $("#l_s").css("cursor", "pointer");
        $("#other_span_starttime").css("cursor", "pointer");
        $("#other_span_endtime").css("cursor", "pointer");
        $("#other_span_lishi").css("cursor", "pointer");
        $("#date_range>ul>li").children("span:nth-child(1)").css("cursor", "pointer");
        $("#cc_seat_type_btn_all>ul>li").hide();
        $("#train_date").removeClass().addClass("inp_selected");
        if ($("#fromStationText").val() != "" && $("#fromStationText").val() != "简拼/全拼/汉字" || $("#toStationText").val() != "" && $("#toStationText").val() != "简拼/全拼/汉字") {
            $("#fromStationText").removeClass().addClass("inp_selected");
            $("#toStationText").removeClass().addClass("inp_selected")
        }
        var bO = stu_start_train_date.split("&");
        var bP = stu_end_tain_date.split("&")
    }
    function bE(bP) {
        var bO = ("00" + (bP.getMonth() + 1)).slice(-2) + "-";
        bO += ("00" + bP.getDate()).slice(-2) + " 00:00:00";
        return bO
    }
    function r() {
        $("#dc").click(function() {
            $("#wf").attr("checked", false);
            $("#dc").attr("checked", "true");
            $("#place_area>ul>li:nth-child(5)").addClass("no-change");
            $("#back_train_date").removeClass().addClass("inp-txt");
            $("#back_train_date").attr("disabled", true)
        });
        $("#wf").click(function() {
            $("#dc").attr("checked", false);
            $("#wf").attr("checked", true);
            $("#back_train_date").removeAttr("disabled");
            $("#place_area>ul>li:nth-child(5)").removeClass();
            $("#train_date").removeClass().addClass("inp_selected");
            $("#back_train_date").removeClass().addClass("inp_selected");
            isbigdate = bd();
            if (!isbigdate) {
                train = $("#train_date").val();
                $("#back_train_date").val(train)
            }
            var bO = $("#train_date").val()
        })
    }
    function aH() {
        $("#avail_ticket").click(function() {
            $("#filterTic").attr("checked", false);
            ao()
        });
        $("#train_type_btn_all").click(function() {
            var bO = true;
            $("#sear-sel-bd input[name='cc_type']").each(function() {
                if (!this.checked) {
                    bO = false
                }
            });
            if (bO) {
                $("#sear-sel-bd input[name='cc_type']").each(function() {
                    this.checked = false
                });
                $("#train_type_btn_all").removeClass().addClass("btn-all")
            } else {
                $("#sear-sel-bd input[name='cc_type']").each(function() {
                    if (!this.checked) {
                        this.checked = true
                    }
                });
                $("#train_type_btn_all").removeClass().addClass("btn-all")
            }
            ao()
        });
        $("#start_time_btn_all").click(function() {
            var bO = true;
            $("#sear-sel-bd input[name='cc_start_time']").each(function() {
                if (!this.checked) {
                    bO = false
                }
            });
            if (bO) {
                $("#sear-sel-bd input[name='cc_start_time']").each(function() {
                    this.checked = false
                });
                $("#start_time_btn_all").removeClass().addClass("btn-all")
            } else {
                $("#sear-sel-bd input[name='cc_start_time']").each(function() {
                    if (!this.checked) {
                        this.checked = true
                    }
                });
                $("#start_time_btn_all").removeClass().addClass("btn-all")
            }
            ao()
        });
        $("#from_station_name_all").click(function() {
            var bO = true;
            $("#sear-sel-bd input[name='cc_from_station']").each(function() {
                if (!this.checked) {
                    bO = false
                }
            });
            if (bO) {
                $("#sear-sel-bd input[name='cc_from_station']").each(function() {
                    this.checked = false;
                    g(bb, "cc_from_station_" + $(this).val())
                });
                $("#from_station_name_all").removeClass().addClass("btn-all")
            } else {
                $("#sear-sel-bd input[name='cc_from_station']").each(function() {
                    if (!this.checked) {
                        this.checked = true;
                        g(bb, "cc_from_station_" + $(this).val())
                    }
                });
                $("#from_station_name_all").removeClass().addClass("btn-all")
            }
            ao()
        });
        $("#to_station_name_all").click(function() {
            var bO = true;
            $("#sear-sel-bd input[name='cc_to_station']").each(function() {
                if (!this.checked) {
                    bO = false
                }
            });
            if (bO) {
                $("#sear-sel-bd input[name='cc_to_station']").each(function() {
                    this.checked = false;
                    g(a0, "cc_to_station_" + $(this).val())
                });
                $("#to_station_name_all").removeClass().addClass("btn-all")
            } else {
                $("#sear-sel-bd input[name='cc_to_station']").each(function() {
                    if (!this.checked) {
                        this.checked = true;
                        g(a0, "cc_to_station_" + $(this).val())
                    }
                });
                $("#to_station_name_all").removeClass().addClass("btn-all")
            }
            ao()
        })
    }
    function bs() {
        $("#change_station").bind("click", function() {
            var bS = $("#fromStationText").val();
            var bU = $("#fromStation").val();
            var bT = $("#toStationText").val();
            var bO = $("#toStation").val();
            if ((bS != "" && bS != "简拼/全拼/汉字") && (bT != "" && bT != "简拼/全拼/汉字")) {
                $("#fromStationText").val(bT);
                $("#toStationText").val(bS);
                $("#fromStation").val(bO);
                $("#toStation").val(bU);
                $("#fromStationText").removeClass().addClass("inp_selected");
                $("#toStationText").removeClass().addClass("inp_selected")
            } else {
                aO.checkForm();
                aO.hideErrors();
                var bR = aO.errorList;
                for (var bQ = 0; bQ < bR.length; bQ++) {
                    var bP = bR[bQ];
                    $(bP.element).next().addClass("error")
                }
                aO.checkForm()
            }
            bk()
        })
    }
    function bk() {
        if ($("#fromStationText").val() == "简拼/全拼/汉字") {
            $.stationFor12306.from_to_station_class_gray($("#fromStationText"))
        } else {
            $.stationFor12306.from_to_station_class_plain($("#fromStationText"))
        }
        if ($("#toStationText").val() == "简拼/全拼/汉字") {
            $.stationFor12306.from_to_station_class_gray($("#toStationText"))
        } else {
            $.stationFor12306.from_to_station_class_plain($("#toStationText"))
        }
    }
    function ba() {
        $("#show_more").click(function() {
            if ($("#sear-sel-bd").height() == 17) {
                ae();
                $("#show_more").attr("class", "up")
            } else {
                document.getElementById("sear-sel-bd").style.height = "17px";
                $("#show_more").attr("class", "down");
                $("#show_more").parent().css("top", "59px")
            }
        })
    }
    function j() {
        if ($("#sear-sel-bd").height() != 17) {
            ae()
        }
    }
    function ae() {
        var bQ = "17px";
        var bS = 179;
        var bR = 28;
        var bO = $("#sear-sel-bd input[name='cc_from_station']").length;
        var bT = $("#sear-sel-bd input[name='cc_to_station']").length;
        var bP = $("#sear-sel-bd input[name='cc_seat_type']").length;
        if (bO > 7 && bO <= 14) {
            bQ = (bS + bR) + "px"
        } else {
            if (bT > 7 && bO <= 14) {
                bQ = (bS + bR * 2) + "px"
            } else {
                if (bP > 7) {
                    bQ = (bS + bR) + "px"
                } else {
                    bQ = bS + "px"
                }
            }
        }
        document.getElementById("sear-sel-bd").style.height = bQ;
        $("#show_more").parent().css("top", "221px")
    }
    function c() {
        if (train_tour_flag == "fc" || train_tour_flag == "gc") {
            return
        }
        $.stationFor12306.init(["fromStation", "toStation"], {_init_input: "简拼/全拼/汉字",_top_4_initInput: "简拼/全拼/汉字或↑↓",_unselected_class: "inpt_unselected",_selected_class: "inp_selected",confirmCallBack: function(bO, bP) {
                bO.removeClass("error");
                if (bO.attr("id") == "fromStationText") {
                    if (ccSelected.length > 0) {
                        if (bO.val() != bo) {
                            $("#prior_train span:gt(0)").remove();
                            $("#inp-train").css("color", "#999");
                            $("#inp-train").val("  请输入");
                            ccSelected = [];
                            $("#prior_seat span:gt(0)").remove();
                            $("#seat-list input").prop("checked", false);
                            xbChecked = []
                        }
                    }
                    bo = bO.val()
                }
                if (bO.attr("id") == "toStationText") {
                    if (ccSelected.length > 0) {
                        if (bO.val() != bB) {
                            $("#prior_train span:gt(0)").remove();
                            $("#inp-train").css("color", "#999");
                            $("#inp-train").val("  请输入");
                            ccSelected = [];
                            $("#prior_seat span:gt(0)").remove();
                            $("#seat-list input").prop("checked", false);
                            xbChecked = []
                        }
                    }
                    bB = bO.val()
                }
            }});
        $("#fromStation_icon_image").css("cursor", "pointer");
        $("#toStation_icon_image").css("cursor", "pointer");
        $("#fromStationText_label").click(function() {
            $("#fromStationText").focus()
        });
        $("#toStationText_label").click(function() {
            $("#toStationText").focus()
        });
        $("#fromStation_icon_image").click(function() {
            $("#fromStationText").focus()
        });
        $("#toStation_icon_image").click(function() {
            $("#toStationText").focus()
        })
    }
    function bM() {
        aO = $("#queryLeftForm").validate({rules: {"leftTicketDTO.from_station": {required: true},"leftTicketDTO.to_station": {required: true},"leftTicketDTO.train_date": {required: true},back_train_date: {required: true}},ignore: "",onsubmit: false,onfocusout: function() {
            },onkeyup: function() {
            },onclick: function() {
            },highlight: function() {
            },unhighlight: function() {
            }});
        bj()
    }
    function b(bO) {
        dhtmlx.alert({title: "提示",ok: messages["button.ok"],text: bO,type: "alert-error",callback: function() {
            }})
    }
    function bh(bP, bV) {
        var bO = aO.checkForm();
        aO.hideErrors();
        if (bO) {
            var bU = "";
            if ($.trim($("#fromStation").val()) == $.trim($("#toStation").val()) || $.trim($("#fromStationText").val()) == $.trim($("#toStationText").val())) {
                bU = "出发地和目的地不能相同";
                b(bU);
                return false
            }
            if (!bd()) {
                bU = "返回日期不得早于出发日期";
                b(bU);
                return false
            }
            var bS = [];
            if (bV) {
                bS = stu_buy_date.split("&")
            } else {
                bS = other_buy_date.split("&")
            }
            if (bS.length > 0) {
                if (bP < bS[0] || bP > bS[1]) {
                    bU = "您选择的日期不在预售期范围内！";
                    b(bU);
                    return false
                }
            }
        } else {
            var bT = aO.errorList;
            for (var bR = 0; bR < bT.length; bR++) {
                var bQ = bT[bR];
                $(bQ.element).next().addClass("error")
            }
            return false
        }
        bF();
        return true
    }
    function bF() {
        $.jc_setFromStation($("#fromStationText").val(), $("#fromStation").val());
        $.jc_setToStation($("#toStationText").val(), $("#toStation").val());
        $.jc_setFromDate($("#train_date").val());
        $.jc_setToDate($("#back_train_date").val());
        $.jc_setWfOrDc($("#wf").is(":checked") ? "wf" : "dc")
    }
    function bj() {
        $("#query_ticket").click(function(bS) {
            if ($jpopup.isShow()) {
                $jpopup.quickHide()
            }
            if (myStopStation) {
                myStopStation.close()
            }
            if ($("#auto_query").is(":checked")) {
                var bR = $.trim($("#inp-train").val()).toUpperCase();
                if (bR.length != 0 && bR != "请输入") {
                    dhtmlx.alert({title: "输入车次",ok: "确定",text: "您输入的优先车次未添加，请点击车次输入框后的添加按钮，或者取消车次输入框中的内容！",type: "alert-error",callback: function() {
                            ccInputSelected = true;
                            $("#inp-train").select()
                        }});
                    return
                }
            }
            U();
            if (document.getElementById("autoSubmit").checked) {
                if (passengerChecked.length == 0) {
                    dhtmlx.alert({title: "选择乘车人",ok: "确定",text: "请选择乘车人",type: "alert-error",callback: function() {
                            return
                        }});
                    return
                }
            }
            q = bL();
            var bP = train_tour_flag == "fc" ? $.trim($("#back_train_date").val()) : $.trim($("#train_date").val());
            var bO = bh(bP, false);
            if (!bO) {
                return
            }
            var bQ = {"leftTicketDTO.train_date": bP,"leftTicketDTO.from_station": $("#fromStation").val(),"leftTicketDTO.to_station": $("#toStation").val(),purpose_codes: q};
            ay();
            V(bQ)
        })
    }
    var aS = function() {
        if ($("#filterTic").is(":checked")) {
            $("#avail_ticket").attr("checked", false);
            ar();
            if (bi.length != 0 && bi.length < aL.length) {
                $("#trainum").html(bi.length);
                ak(bi)
            }
        } else {
            bn = aP();
            if (bi.length != 0 && bi.length < bn.length) {
                $("#trainum").html(bn.length);
                ak(bn)
            }
        }
    };
    function V(bO) {
        $("#cc_seat_type_btn_all>ul>li").css("display", "none");
        if ($("#auto_query").is(":checked")) {
            $("#query_ticket").html("停止查询");
            $("#auto_query").attr("disabled", "true");
            $("#autoSubmit").attr("disabled", "true");
            $("#partSubmit").attr("disabled", "true");
            $("#query_ticket").unbind("click");
            $("#query_ticket").bind("click", function() {
                $("#filterTic").hide();
                clearInterval(aC);
                if (countDown) {
                    clearInterval(countDown)
                }
                $("#filterTicDiv").html("");
                $("#query_ticket").unbind("click");
                $("#query_ticket").html("查询");
                if ($("#dc").is(":checked")) {
                    $("#autoSubmit").removeAttr("disabled");
                    $("#partSubmit").removeAttr("disabled")
                }
                $("#auto_query").removeAttr("disabled");
                bj()
            })
        } else {
            if (countDown) {
                clearInterval(countDown)
            }
            $("#filterTicDiv").html("");
            bm()
        }
        var bP = dhtmlx.modalbox({targSrc: '<div><img src="' + ctx + 'resources/images/loading.gif"></img></div>',callback: function() {
            }});
        if ($jpopup.isShow()) {
            $jpopup.quickHide()
        }
        if (aC) {
            clearInterval(aC)
        }
        $.ajax({type: "get",isTakeParam: false,beforeSend: function(bQ) {
                bQ.setRequestHeader("If-Modified-Since", "0");
                bQ.setRequestHeader("Cache-Control", "no-cache")
            },url: ctx + "leftTicket/query",data: bO,timeout: 10000,error: function(bQ, bS, bR) {
                dhtmlx.modalbox.hide(bP)
            },success: function(bS) {
                dhtmlx.modalbox.hide(bP);
                if (bS.status) {
                    if (bS.data == null || bS.data.length == 0) {
                        $("#sear-sel").hide();
                        $("#sear-result").hide();
                        $("#t-list").hide();
                        $("#no_filter_ticket_fromstation").html($("#fromStationText").val());
                        $("#no_filter_ticket_tostation").html($("#toStationText").val());
                        $("#no_filter_ticket_2").show();
                        $(".content").css("min-height", "344px");
                        return
                    }
                    $("#sear-sel").show();
                    $("#sear-result").show();
                    $("#t-list").show();
                    $("#no_filter_ticket_2").hide();
                    if (train_tour_flag != null && train_tour_flag == "fc") {
                        var bR = "<strong>".concat($("#fromStationText").val()).concat(" --> ").concat($("#toStationText").val()).concat("（").concat(an($("#back_train_date").val())).concat('）</strong>共计<strong id="trainum">').concat(bS.data.length).concat("</strong>个车次");
                        if ($("#auto_query").is(":checked")) {
                            var bQ = "";
                            for (var bT = 0; bT < 55; bT++) {
                                bQ = bQ + "&nbsp;"
                            }
                            bR = bR.concat(bQ + "<input type='checkbox' class='check' id='filterTic' /><div id='filterTicDiv' style='display:inline'><strong><label for='filterTic' style='cursor: pointer;'>仅查看刷到车次</label></strong></div>")
                        }
                        $("#sear-result>p").html(bR);
                        if ($("#auto_query").is(":checked")) {
                            $("#filterTic").bind("click", aS)
                        }
                    } else {
                        var bR = "<strong>".concat($("#fromStationText").val()).concat(" --> ").concat($("#toStationText").val()).concat("（").concat(an($("#train_date").val())).concat('）</strong>共计<strong id="trainum">').concat(bS.data.length).concat("</strong>个车次");
                        if ($("#auto_query").is(":checked")) {
                            var bQ = "";
                            for (var bT = 0; bT < 55; bT++) {
                                bQ = bQ + "&nbsp;"
                            }
                            bR = bR.concat(bQ + "<input type='checkbox' class='check' id='filterTic' /><div id='filterTicDiv' style='display:inline'><strong><label for='filterTic' style='cursor: pointer;'>仅查看刷到车次</label></strong></div>")
                        }
                        $("#sear-result>p").html(bR);
                        if ($("#auto_query").is(":checked")) {
                            $("#filterTic").bind("click", aS)
                        }
                    }
                    aL = bS.data;
                    aY(aL);
                    j();
                    bf(aL);
                    bl();
                    C()
                }
            }});
        aB()
    }
    function P() {
        $("#date_range>ul>li").each(function(bS) {
            var bP = new Date();
            var bQ = bP.getFullYear() + "-" + $("#date_range>ul>li:nth-child(" + (bS + 1) + ")>span[class=hide]").text().substring(0, 5);
            var bO = new Date(Date.parse(bQ.replace(/-/g, "/")));
            var bR = $("#date_range>ul>li:nth-child(" + (bS + 1) + ")>span[class=hide]").text().substring(0, 5) + aW(bO);
            $("#date_range>ul>li:nth-child(" + (bS + 1) + ")>span[class=hide]").text(bR)
        });
        if (index_train_date == null) {
            $("#date_range>ul>li:nth-child(1)").addClass("sel");
            $("#date_range>ul>li:nth-child(1)").attr("alt", "show");
            $("#date_range>ul>li:nth-child(20)").addClass("end");
            $("#date_range>ul>li:nth-child(1)").children("span:first-child").removeClass();
            $("#date_range>ul>li:nth-child(1)").children("span:last-child").removeClass();
            $("#date_range>ul>li:nth-child(1)").children().addClass("first");
            $("#date_range>ul>li:nth-child(1)").children("span:first-child").addClass("hide");
            bq = $("#date_range>ul>li:nth-child(1)").children("span:first-child").text()
        }
        aU()
    }
    function aW(bP) {
        var bS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        var bR = 0;
        for (var bQ = 0; bQ < bS.length; bQ++) {
            if (bP.toString().indexOf(bS[bQ]) > -1) {
                bR = bQ + 1;
                break
            }
        }
        var bO = "";
        switch (bR) {
            case 1:
                bO = " 周一";
                break;
            case 2:
                bO = " 周二";
                break;
            case 3:
                bO = " 周三";
                break;
            case 4:
                bO = " 周四";
                break;
            case 5:
                bO = " 周五";
                break;
            case 6:
                bO = " 周六";
                break;
            case 7:
                bO = " 周日";
                break
        }
        return bO
    }
    function aX() {
        $("#date_range>ul>li").unbind("mouseover");
        $("#date_range>ul>li").unbind("mouseout");
        $("#date_range").unbind("mouseleave");
        $("#date_range>ul>li").unbind("click")
    }
    function aU() {
        $("#date_range>ul>li").bind("mouseover", function() {
            $("#date_range>ul>li").removeClass("sel");
            $("#date_range>ul>li").removeAttr("alt");
            $(this).addClass("sel");
            $(this).attr("alt", "show");
            $("#date_range>ul>li:nth-child(20)").addClass("end");
            $(this).children("span:first-child").removeClass();
            $(this).children("span:last-child").removeClass();
            $("#date_range>ul>li:nth-child(1)").children().addClass("first");
            $(this).children("span:first-child").addClass("hide")
        });
        $("#date_range>ul>li").bind("mouseout", function() {
            $("#date_range>ul>li").each(function(bO) {
                $(this).children("span:first").removeClass();
                $("#date_range>ul>li:nth-child(1)").children().addClass("first");
                $(this).children("span:last").addClass("hide")
            })
        });
        $("#date_range").bind("mouseleave", function() {
            for (var bO = 1; bO <= 20; bO++) {
                var bP = $("#date_range>ul>li:nth-child(" + bO + ")").children("span:first-child").text();
                if (bq == bP) {
                    $("#date_range>ul>li").removeClass("sel");
                    $("#date_range>ul>li").removeAttr("alt");
                    $("#date_range>ul>li:nth-child(" + bO + ")").addClass("sel");
                    $("#date_range>ul>li:nth-child(" + bO + ")").attr("alt", "show");
                    $("#date_range>ul>li:nth-child(20)").addClass("end");
                    $("#date_range>ul>li:nth-child(" + bO + ")").children("span:first-child").removeClass();
                    $("#date_range>ul>li:nth-child(" + bO + ")").children("span:last-child").removeClass();
                    $("#date_range>ul>li:nth-child(1)").children().addClass("first");
                    $("#date_range>ul>li:nth-child(" + bO + ")").children("span:first-child").addClass("hide");
                    break
                }
            }
        });
        $("#date_range>ul>li").bind("click", function() {
            var bQ = new Date();
            var bP = "";
            if (train_tour_flag != null && train_tour_flag == "fc") {
                nowDate = $("#back_train_date").val();
                $("#back_train_date").val(bQ.getFullYear() + "-" + $(this).children("span:first-child").text());
                backTrainDate = bQ.getFullYear() + "-" + $(this).children("span:first-child").text();
                bP = backTrainDate;
                if (!bd()) {
                    $("#back_train_date").val(nowDate);
                    b("返程日期不得小于出发日期.");
                    return
                }
            } else {
                nowDate = $("#train_date").val();
                $("#train_date").val(bQ.getFullYear() + "-" + $(this).children("span:first-child").text());
                trainDate = bQ.getFullYear() + "-" + $(this).children("span:first-child").text();
                bP = trainDate;
                if (!bd()) {
                    $("#back_train_date").val($("#train_date").val())
                }
            }
            var bO = bh(bP, false);
            if (!bO) {
                return
            }
            $("#date_range>ul>li").removeClass("sel");
            $("#date_range>ul>li").removeAttr("alt");
            $(this).addClass("sel");
            $(this).attr("alt", "show");
            $("#date_range>ul>li:nth-child(20)").addClass("end");
            $(this).children("span:first-child").removeClass();
            $(this).children("span:last-child").removeClass();
            $("#date_range>ul>li:nth-child(1)").children().addClass("first");
            $(this).children("span:first-child").addClass("hide");
            bq = $(this).children("span:first-child").text();
            var bR = {"leftTicketDTO.train_date": bP,"leftTicketDTO.from_station": $("#fromStation").val(),"leftTicketDTO.to_station": $("#toStation").val(),purpose_codes: bL()};
            V(bR)
        })
    }
    function a5() {
        $("#sear-sel-bd input[name='cc_type']").click(function() {
            var bO = $("input[name='cc_type']");
            var bP = $("input[name='cc_type']:checked");
            if ($(this).is(":checked")) {
                if (bO && bP && bP.length == bO.length) {
                    $("#train_type_btn_all").removeClass().addClass("btn-all")
                } else {
                    $("#train_type_btn_all").removeClass().addClass("btn-all btn-all-sel")
                }
            } else {
                if (bO && bP && bP.length == 0) {
                    $("#train_type_btn_all").removeClass().addClass("btn-all")
                } else {
                    $("#train_type_btn_all").removeClass().addClass("btn-all btn-all-sel")
                }
            }
            ao()
        });
        $("#sear-sel-bd input[name='cc_start_time']").click(function() {
            var bO = $("input[name='cc_start_time']");
            var bP = $("input[name='cc_start_time']:checked");
            if ($(this).is(":checked")) {
                if (bO && bP && bP.length == bO.length) {
                    $("#start_time_btn_all").removeClass().addClass("btn-all")
                } else {
                    $("#start_time_btn_all").removeClass().addClass("btn-all btn-all-sel")
                }
            } else {
                if (bO && bP && bP.length == 0) {
                    $("#start_time_btn_all").removeClass().addClass("btn-all")
                } else {
                    $("#start_time_btn_all").removeClass().addClass("btn-all btn-all-sel")
                }
            }
            ao()
        });
        $("#sear-sel-bd input[name='cc_arrive_time']").click(function() {
            var bO = $("input[name='cc_arrive_time']");
            var bP = $("input[name='cc_arrive_time']:checked");
            if ($(this).is(":checked")) {
                if (bO && bP && bP.length == bO.length) {
                    $("#arrive_time_btn_all").removeClass().addClass("btn-all")
                } else {
                    $("#arrive_time_btn_all").removeClass().addClass("btn-all btn-all-sel")
                }
            } else {
                if (bO && bP && bP.length == 0) {
                    $("#arrive_time_btn_all").removeClass().addClass("btn-all")
                } else {
                    $("#arrive_time_btn_all").removeClass().addClass("btn-all btn-all-sel")
                }
            }
            ao()
        });
        $("#cc_start_time").change(function() {
            ao()
        })
    }
    function H(bQ, bP) {
        if (bP.length == 0) {
            return true
        }
        for (var bO = 0; bO < bP.length; bO++) {
            if (bQ.queryLeftNewDTO.station_train_code.substring(0, 1) == bP[bO]) {
                return true
            }
            if (bP[bO] == "QT") {
                if (bQ.queryLeftNewDTO.station_train_code.substring(0, 1) != "G" && bQ.queryLeftNewDTO.station_train_code.substring(0, 1) != "D" && bQ.queryLeftNewDTO.station_train_code.substring(0, 1) != "C" && bQ.queryLeftNewDTO.station_train_code.substring(0, 1) != "T" && bQ.queryLeftNewDTO.station_train_code.substring(0, 1) != "K" && bQ.queryLeftNewDTO.station_train_code.substring(0, 1) != "Z") {
                    return true
                }
            }
            if (bP[bO] == "G") {
                if (bQ.queryLeftNewDTO.station_train_code.substring(0, 1) == "C" || bQ.queryLeftNewDTO.station_train_code.substring(0, 1) == "G") {
                    return true
                }
            }
        }
        return false
    }
    function ap(bR, bT) {
        if (bT.length == 0) {
            return true
        }
        for (var bO = 0; bO < bT.length; bO++) {
            var bS = (bR.queryLeftNewDTO.start_time.replace(":", ""));
            var bP = Number(bT[bO].substring(0, 4));
            var bQ = Number(bT[bO].substring(4, 8));
            if (bS >= bP && bS <= bQ) {
                return true
            }
        }
        return false
    }
    function aw(bQ, bO) {
        if (bO.length == 0) {
            return true
        }
        for (var bP = 0; bP < bO.length; bP++) {
            if (bO[bP] == "SWZ") {
                if (bQ.queryLeftNewDTO.swz_num != "--" && bQ.queryLeftNewDTO.swz_num != "无") {
                    am.push("SWZ");
                    return true
                }
            }
            if (bO[bP] == "TZ") {
                if (bQ.queryLeftNewDTO.tz_num != "--" && bQ.queryLeftNewDTO.tz_num != "无") {
                    am.push("TZ");
                    return true
                }
            }
            if (bO[bP] == "ZY") {
                if (bQ.queryLeftNewDTO.zy_num != "--" && bQ.queryLeftNewDTO.zy_num != "无") {
                    am.push("ZY");
                    return true
                }
            }
            if (bO[bP] == "ZE") {
                if (bQ.queryLeftNewDTO.ze_num != "--" && bQ.queryLeftNewDTO.ze_num != "无") {
                    am.push("ZE");
                    return true
                }
            }
            if (bO[bP] == "GR") {
                if (bQ.queryLeftNewDTO.gr_num != "--" && bQ.queryLeftNewDTO.gr_num != "无") {
                    am.push("GR");
                    return true
                }
            }
            if (bO[bP] == "RW") {
                if (bQ.queryLeftNewDTO.rw_num != "--" && bQ.queryLeftNewDTO.rw_num != "无") {
                    am.push("RW");
                    return true
                }
            }
            if (bO[bP] == "YW") {
                if (bQ.queryLeftNewDTO.yw_num != "--" && bQ.queryLeftNewDTO.yw_num != "无") {
                    am.push("YW");
                    return true
                }
            }
            if (bO[bP] == "RZ") {
                if (bQ.queryLeftNewDTO.rz_num != "--" && bQ.queryLeftNewDTO.rz_num != "无") {
                    am.push("RZ");
                    return true
                }
            }
            if (bO[bP] == "YZ") {
                if (bQ.queryLeftNewDTO.yz_num != "--" && bQ.queryLeftNewDTO.yz_num != "无") {
                    am.push("YZ");
                    return true
                }
            }
            if (bO[bP] == "WZ") {
                if (bQ.queryLeftNewDTO.wz_num != "--" && bQ.queryLeftNewDTO.wz_num != "无") {
                    am.push("WZ");
                    return true
                }
            }
        }
        return false
    }
    function aK(bP, bO) {
        if (bO.length == 0) {
            return true
        }
        for (var bQ = 0; bQ < bO.length; bQ++) {
            if (bO[bQ] == bP.queryLeftNewDTO.from_station_name) {
                return true
            }
        }
        return false
    }
    function K(bO, bP) {
        if (bP.length == 0) {
            return true
        }
        for (var bQ = 0; bQ < bP.length; bQ++) {
            if (bP[bQ] == bO.queryLeftNewDTO.to_station_name) {
                return true
            }
        }
        return false
    }
    function p(bP, bO) {
        if (bO.length == 0) {
            return true
        }
        for (var bQ = 0; bQ < bO.length; bQ++) {
            if (bO[bQ].toLowerCase() == bP.queryLeftNewDTO.station_train_code.toLowerCase()) {
                return true
            }
        }
        return false
    }
    function aP() {
        var bP = [];
        var bV = [];
        var bR = [];
        var bT = [];
        $("#sear-sel-bd input[name='cc_type']").each(function() {
            if (this.checked == true) {
                bP.push($(this).val())
            }
        });
        bV.push($("#cc_start_time option:selected").val());
        $("#sear-sel-bd input[name='cc_from_station']").each(function() {
            if (this.checked == true) {
                bR.push($(this).val())
            }
        });
        $("#sear-sel-bd input[name='cc_to_station']").each(function() {
            if (this.checked == true) {
                bT.push($(this).val())
            }
        });
        var bQ = aL;
        var bU = [];
        if (bP.length > 0 || bV.length > 0 || filteredTrainArriveTime.length > 0 || bp.length > 0 || bR.length > 0 || bT.length > 0 || ah.getComboText() != "" || $("#avail_ticket")[0].checked) {
            for (var bO = 0; bO < bQ.length; bO++) {
                var bS = bQ[bO];
                if (!H(bS, bP)) {
                    continue
                }
                if (!ap(bS, bV)) {
                    continue
                }
                if (!aK(bS, bR)) {
                    continue
                }
                if (!K(bS, bT)) {
                    continue
                }
                if ($("#avail_ticket")[0].checked) {
                    if (bS.queryLeftNewDTO.canWebBuy == "Y") {
                        bU.push(bS)
                    }
                } else {
                    bU.push(bS)
                }
            }
            bQ = bU
        }
        return bQ
    }
    function z(bO, bP) {
        if (bP == null || bP == "" || bO.length == 0 || bP.length > bO.length) {
            return false
        }
        if (bO.substr(0, bP.length) == bP) {
            return true
        } else {
            return false
        }
        return true
    }
    function aI(bO) {
        aR = ccSelected;
        bp = xbChecked;
        if (p(bO, aR) && aw(bO, bp)) {
            return true
        } else {
            return false
        }
    }
    function ar() {
        bi = [];
        bn = aP();
        bv = br(bn);
        for (var bO = 0; bO < bv.length; bO++) {
            var bP = bv[bO];
            if (!aI(bP)) {
                continue
            }
            if (bP.queryLeftNewDTO.canWebBuy == "Y") {
                bi.push(bP)
            }
        }
    }
    var a8;
    function be() {
        if (ischeckAutoSubmitCode) {
            $("#randCode2").on("keyup", function(bO) {
                if ($("#randCode2").val().length == 4 && a8 != $("#randCode2").val()) {
                    $.ajax({url: ctx + "passcodeNew/checkRandCodeAnsyn",type: "post",data: {randCode: $("#randCode2").val(),rand: "sjrand"},async: false,success: function(bP) {
                            if (bP.data == "N") {
                                $("#randCode2").removeClass("inptxt w100").addClass("inptxt w100 error");
                                $("#c_error2").html("验证码不合法");
                                $("#randCode2").val("");
                                $("#c_error2").addClass("error");
                                $("#i-ok2").css("display", "none");
                                $("#c_error2").css("margin-left", "15px")
                            } else {
                                $("#randCode2").removeClass("inptxt w100 error").addClass("inptxt w100");
                                $("#i-ok2").css("display", "block");
                                $("#c_error2").html("");
                                $("#c_error2").removeClass("error")
                            }
                        }})
                } else {
                    if ($("#randCode2").val().length != 4) {
                        $("#randCode2").removeClass("inptxt w100").addClass("inptxt w100 error");
                        $("#c_error2").html("请输入四位长度验证码");
                        $("#c_error2").addClass("error");
                        $("#i-ok2").css("display", "none");
                        $("#c_error2").css("margin-left", "15px")
                    }
                }
                a8 = $("#randCode2").val()
            })
        }
    }
    function W(bO) {
        return at.autoSubmit(bi, passengerChecked, xbChecked, ccSelected)
    }
    var au = false;
    function C() {
        $("#queryLeftTable").html("");
        $("#trainum").html("");
        ar();
        if ($("#auto_query").is(":checked")) {
            if (bv.length < 0) {
                $("#no_filter_ticket").show();
                $("#trainum").html("0");
                au = true
            } else {
                if (bi.length > 0) {
                    $("#no_filter_ticket").hide();
                    if (document.getElementById("autoSubmit").checked) {
                        var bS = [];
                        for (var bY = 0; bY < passengerChecked.length; bY++) {
                            var bR = false;
                            var bV = passengerChecked[bY];
                            for (var bZ = 0; bZ < bS.length; bZ++) {
                                var bP = bS[bZ];
                                if (bV.passenger_name == bP.passenger_name && bV.passenger_id_type_code == bP.passenger_id_type_code && bV.passenger_id_no == bP.passenger_id_no) {
                                    bR = true;
                                    break
                                }
                            }
                            if (!bR) {
                                bS.push(bV)
                            }
                        }
                        passengerChecked = bS;
                        var b4 = W(true);
                        if (b4[0] == 1 || b4[0] == 2) {
                            au = true;
                            B = b4[1];
                            var bX = bL();
                            var b1 = B.secretStr;
                            h(b4);
                            var b0 = checkusermdId != undefined ? "&_json_att=" + encodeURIComponent(checkusermdId) : "";
                            var bO = "";
                            if ($("#dc").is(":checked")) {
                                bO = "dc"
                            } else {
                                bO = "wc"
                            }
                            if ("undefined" == typeof (submitForm)) {
                                var b5 = "secretStr=" + b1 + "&train_date=" + $("#train_date").val() + "&tour_flag=" + bO + "&purpose_codes=" + bX + "&query_from_station_name=" + $("#fromStationText").val() + "&query_to_station_name=" + $("#toStationText").val() + "&" + b0 + "&cancel_flag=2&bed_level_order_num=000000000000000000000000000000&passengerTicketStr=" + getpassengerTicketsForAutoSubmit() + "&oldPassengerStr=" + getOldPassengersForAutoSubmit()
                            } else {
                                var bQ = submitForm();
                                var bW = bQ.split(":::");
                                var b3 = bW[0].split(",-,")[0];
                                var bU = bW[0].split(",-,")[1];
                                var b2 = bW[1].split(",-,")[0];
                                var bT = bW[1].split(",-,")[1];
                                var b5 = escape(b3) + "=" + escape(bU) + "&" + b2 + "=" + bT + "&secretStr=" + b1 + "&train_date=" + $("#train_date").val() + "&tour_flag=" + bO + "&purpose_codes=" + bX + "&query_from_station_name=" + $("#fromStationText").val() + "&query_to_station_name=" + $("#toStationText").val() + "&" + b0 + "&cancel_flag=2&bed_level_order_num=000000000000000000000000000000&passengerTicketStr=" + getpassengerTicketsForAutoSubmit() + "&oldPassengerStr=" + getOldPassengersForAutoSubmit()
                            }
                            $.ajax({type: "post",url: ctx + "confirmPassenger/autoSubmitOrderRequest",async: false,data: b5,success: function(b7) {
                                    if (b7.status) {
                                        if (!b7.data.submitStatus) {
                                            if (b7.data.isRelogin) {
                                                window.location.href = ctx + "login/init?random=" + new Date().getTime()
                                            } else {
                                                if (b7.data.isNoActive) {
                                                    Q(b7.data.errMsg, true, "", true, "warn")
                                                } else {
                                                    Q("车票信息不合法!", true, "原因： " + b7.data.errMsg, true, "warn")
                                                }
                                            }
                                            return
                                        }
                                        if (b7.data && undefined != b7.data.result && typeof (b7.data.result) != "undefined") {
                                            var b6 = b7.data.result;
                                            location_code = b6.split("#")[0];
                                            md5Str = b6.split("#")[1];
                                            leftTicketStr = b6.split("#")[2];
                                            isAsync = b6.split("#")[3];
                                            a2(bX, b7.data.isCheckOrderInfo, b7.data.doneHMD)
                                        }
                                    }
                                }})
                        } else {
                            au = false;
                            D()
                        }
                    } else {
                        au = true
                    }
                } else {
                    au = false;
                    D()
                }
                $("#trainum").html(bv.length);
                ak(bv)
            }
        } else {
            if (bv.length < 0) {
                au = true;
                $("#no_filter_ticket").show();
                $("#no_filter_ticket_msg_1").show();
                $("#no_filter_ticket_msg_2").hide();
                $("#trainum").html("0");
                return
            } else {
                au = true;
                $("#trainum").html(bv.length);
                ak(bv)
            }
        }
    }
    var F = 0;
    var aC;
    function D() {
        var bO;
        if (rqChecked.length > 1) {
            if (F >= rqChecked.length) {
                F = 0
            }
            bO = rqChecked[F++]
        } else {
            if (train_tour_flag == "fc") {
                bO = $.trim($("#back_train_date").val())
            } else {
                bO = $.trim($("#train_date").val())
            }
        }
        clearInterval(aC);
        aC = window.setInterval(function() {
            if (train_tour_flag == "fc") {
                $("#back_train_date").val(bO)
            } else {
                $("#train_date").val(bO)
            }
            var bP = {"leftTicketDTO.train_date": bO,"leftTicketDTO.from_station": $("#fromStation").val(),"leftTicketDTO.to_station": $("#toStation").val(),purpose_codes: bL()};
            ay();
            V(bP)
        }, autoSearchTime)
    }
    function bt() {
        ag();
        bJ(tickets_info);
        $("#i-ok2").hide();
        refreshImg("login", "sjrand", "img_rand_code2");
        $("#randCode2").val("");
        $("#c_error2").val("");
        $("#c_error2").removeClass("error");
        var bO = dhtmlx.createWin({winId: "autosubmitcheckticketinfo",closeWinId: ["back_edit"],callback: function() {
                jPlayer("stop")
            },okId: "qr_submit",okCallBack: function() {
                jPlayer("stop");
                $.ajax({url: ctx + "confirmPassenger/checkRandCode",type: "post",data: {randCode: $("#randCode2").val(),rand: "sjrand"},async: false,success: function(bP) {
                        if (bP.status) {
                            if (!bP.data.submitStatus) {
                                Q("提交失败!", true, "原因： " + bP.data.errMsg, true, "warn");
                                return
                            }
                            if (isAsync == ticket_submit_order.request_flag.isAsync) {
                                m()
                            } else {
                                bN()
                            }
                        }
                    }})
            },checkConfirm: function() {
                if (!ischeckAutoSubmitCode) {
                    return true
                }
                randCode = $("#randCode2").val();
                var bP = true;
                if ("" == randCode) {
                    bP = false;
                    $("#randCode2").removeClass("inptxt w100").addClass("inptxt w100 error");
                    $("#c_error2").html(login_messages.randCodeEmpty).attr("class", "error").css("margin-left", "60px");
                    $("#randCode2").focus()
                } else {
                    if (!/^[a-zA-Z0-9]+$/.test(randCode)) {
                        bP = false;
                        $("#randCode2").removeClass("inptxt w100").addClass("inptxt w100 error");
                        $("#c_error2").html(login_messages.randCodeFormat).attr("class", "error").css("margin-left", "60px");
                        $("#randCode2").focus()
                    } else {
                        if (randCode.length != 4) {
                            bP = false;
                            $("#randCode2").removeClass("inptxt w100").addClass("inptxt w100 error");
                            $("#c_error2").html(login_messages.randCodeLentgh).attr("class", "error").css("margin-left", "60px");
                            $("#randCode2").focus()
                        }
                    }
                }
                $.ajax({url: ctx + "passcodeNew/checkRandCodeAnsyn",type: "post",data: {randCode: randCode,rand: "sjrand"},async: false,success: function(bQ) {
                        if (bQ.data == "N") {
                            bP = false;
                            $("#randCode2").removeClass("inptxt w100").addClass("inptxt w100 error");
                            $("#c_error2").html("验证码不合法");
                            $("#randCode2").val("");
                            $("#c_error2").addClass("error");
                            $("#i-ok2").css("display", "none")
                        } else {
                            bP = true;
                            $("#randCode2").removeClass("inptxt w100 error").addClass("inptxt w100");
                            $("#i-ok2").css("display", "block");
                            $("#c_error2").html("");
                            $("#c_error2").removeClass("error")
                        }
                    }});
                if (!bP) {
                    refreshImg("login", "sjrand", "img_rand_code2");
                    $("#randCode2").focus();
                    $("#c_error2").css("margin-left", "15px")
                }
                return bP
            }});
        $("#autosubmitcheckticketinfo").css("top", "100px");
        $(".dhx_modal_cover").css("background-color", "#EEEEEE")
    }
    function ao() {
        if (aL.length == 0) {
            return
        }
        var bO = aP();
        var bP = br(bO);
        $("#train_stop").appendTo($("body")).hide();
        $("#queryLeftTable").html("");
        $("#trainum").html("");
        if (bP.length > 0) {
            $("#no_filter_ticket").hide();
            $("#trainum").html(bP.length)
        } else {
            $("#no_filter_ticket").show();
            $("#no_filter_ticket_msg_1").show();
            $("#no_filter_ticket_msg_2").hide();
            $("#trainum").html("0");
            return
        }
        ak(bP)
    }
    function a6(bP) {
        var bO = bD.createWindow(bP + "_", 0, 0, 660, 100);
        bO.attachObject(bP);
        bO.clearIcon();
        bO.denyResize();
        bO.setModal(true);
        bO.center();
        bO.button("park").hide();
        bO.button("minmax1").hide();
        bO.hideHeader();
        return bO
    }
    function ag() {
        var bT = new Array();
        $("#autosubmit_check_ticket_tit").html("");
        var bR = $("#train_date").val();
        var bO = aW(new Date(Date.parse(bR.replace(/-/g, "/"))));
        var bP = B.queryLeftNewDTO.station_train_code;
        var bY = null;
        var bZ = B.queryLeftNewDTO.from_station_name;
        var bS = B.queryLeftNewDTO.to_station_name;
        var bU = B.queryLeftNewDTO.start_time;
        var bX = B.queryLeftNewDTO.arrive_time;
        var bW = function(b1, b3, b0, b5, b2, b4, b7, b6) {
            this.date = b1;
            this.week = b3;
            this.station_train_code = b0;
            this.train_headers = b5;
            this.from_station = b2;
            this.start_time = b4;
            this.to_station = b7;
            this.arrive_time = b6
        };
        var bQ = new bW(bR, bO, bP, bY, bZ, bU, bS, bX);
        bT.push(bQ);
        var bV = $("#autoSubTicketTitTemplate").html();
        $.templates({leftTableTemplate: bV});
        $("#autosubmit_check_ticket_tit").html($.render.leftTableTemplate(bT))
    }
    function h(bZ) {
        if (aC) {
            clearInterval(aC)
        }
        var bO = "";
        var bP = "";
        var bU = "";
        var bQ = "";
        if ($("#sf2").is(":checked")) {
            bU = "3";
            bQ = "学生票"
        }
        tickets_info = new Array();
        var b0 = bZ[1];
        var bT = bZ[2];
        var bS = 0;
        var bR = passengerChecked.length;
        for (var bV = 0; bV < bT.length; bV++) {
            var bX = b0.queryLeftNewDTO[bT[bV].toLowerCase() + "_num"];
            if (bX == "--" || bX == "无") {
                bX = 0
            } else {
                if (bX == "有") {
                    bX = 20
                } else {
                    bX = Number(bX)
                }
            }
            if (bS >= bR) {
                break
            }
            var bY = bT[bV];
            bO = af(bY);
            bP = A(bY);
            for (var bW = 0; bW < bX; bW++) {
                if (bS >= bR) {
                    break
                }
                bU = passengerChecked[bW].passenger_type;
                if (!bU || "" == bU) {
                    bU = "1"
                }
                if (bU == "1") {
                    bQ = "成人票"
                } else {
                    if (bU == "2") {
                        bQ = "儿童票"
                    } else {
                        if (bU == "3") {
                            bQ = "学生票"
                        } else {
                            if (bU == "4") {
                                bQ = "残军票"
                            }
                        }
                    }
                }
                tickets_info.push(new aM("sdAdd_" + X(), bO, bP, bU, bQ, passengerChecked[bS].passenger_name, passengerChecked[bS].passenger_id_type_code, passengerChecked[bS].passenger_id_type_name, passengerChecked[bS].passenger_id_no, passengerChecked[bS].mobile_no));
                bS++
            }
        }
    }
    function bJ(bP) {
        var bO = $("#autoSubCheckTicketInfoTemplate").html();
        $.templates({leftTableTemplate: bO});
        $("#autosubmit_check_ticketInfo").html($.render.leftTableTemplate(bP))
    }
    function f() {
        var bR = B.queryLeftNewDTO.yz_num;
        var bO = B.queryLeftNewDTO.rz_num;
        var bV = B.queryLeftNewDTO.yw_num;
        var bT = B.queryLeftNewDTO.rw_num;
        var bU = B.queryLeftNewDTO.gr_num;
        var bS = B.queryLeftNewDTO.ze_num;
        var bX = B.queryLeftNewDTO.zy_num;
        var bY = B.queryLeftNewDTO.tz_num;
        var bP = B.queryLeftNewDTO.swz_num;
        var bW = B.queryLeftNewDTO.wz_num;
        var bQ = "";
        if (bR != "--") {
            bQ = "YZ";
            return bQ
        }
        if (bS != "--") {
            bQ = "ZE";
            return bQ
        }
        if (bV != "--") {
            bQ = "YW";
            return bQ
        }
        if (bX != "--") {
            bQ = "ZY";
            return bQ
        }
        if (bO != "--") {
            bQ = "RZ";
            return bQ
        }
        if (bT != "--") {
            bQ = "RW";
            return bQ
        }
        if (bY != "--") {
            bQ = "TZ";
            return bQ
        }
        if (bU != "--") {
            bQ = "GR";
            return bQ
        }
        if (bP != "--") {
            bQ = "SWZ";
            return bQ
        }
        if (bW != "--") {
            bQ = "WZ";
            return bQ
        }
    }
    function A(bP) {
        var bO = "";
        if (bP == "ZY") {
            bO = "一等座"
        }
        if (bP == "ZE") {
            bO = "二等座"
        }
        if (bP == "SWZ") {
            bO = "商务座"
        }
        if (bP == "TZ") {
            bO = "特等座"
        }
        if (bP == "YZ") {
            bO = "硬座"
        }
        if (bP == "RZ") {
            bO = "软座"
        }
        if (bP == "YW") {
            bO = "硬卧"
        }
        if (bP == "RW") {
            bO = "软卧"
        }
        if (bP == "GR") {
            bO = "高级软卧"
        }
        if (bP == "WZ") {
            bO = "无座"
        }
        return bO
    }
    function af(bP) {
        var bO = "";
        if (bP == "ZY") {
            bO = "M"
        }
        if (bP == "ZE") {
            bO = "O"
        }
        if (bP == "SWZ") {
            bO = "9"
        }
        if (bP == "TZ") {
            bO = "P"
        }
        if (bP == "YZ") {
            bO = "1"
        }
        if (bP == "RZ") {
            bO = "2"
        }
        if (bP == "YW") {
            bO = "3"
        }
        if (bP == "RW") {
            bO = "4"
        }
        if (bP == "GR") {
            bO = "6"
        }
        if (bP == "WZ") {
            bO = "WZ"
        }
        return bO
    }
    function aM(bV, bQ, bR, bT, bS, bP, bX, bW, bU, bO) {
        this.only_id = bV, this.seat_type = bQ;
        this.seat_type_name = bR;
        this.ticket_type = bT, this.ticket_type_name = bS;
        this.name = bP;
        this.id_type = bX;
        this.id_type_name = bW;
        this.id_no = bU;
        this.phone_no = bO;
        this.toString = function() {
            return this.name + "_" + this.id_type + "_" + this.id_no + "_" + this.phone_no
        }
    }
    function X() {
        if (tickets_info.length < 1) {
            return tickets_info.length
        } else {
            var bQ = 0;
            for (var bP = 0; bP < tickets_info.length; bP++) {
                var bO = Number(tickets_info[bP].only_id.split("_")[1]);
                if (bO > bQ) {
                    bQ = bO
                }
            }
            return bQ + 1
        }
    }
    function aB() {
        bi = [];
        L = [];
        am = [];
        tickets_info.length = [];
        bn = [];
        bv = [];
        B = "";
        isAsync = "";
        location_code = "";
        md5Str = "";
        leftTicketStr = ""
    }
    getpassengerTicketsForAutoSubmit = function() {
        var bO = "";
        for (var bP = 0; bP < tickets_info.length; bP++) {
            var bQ = "";
            if ("WZ" == tickets_info[bP].seat_type) {
                bQ = af(f())
            } else {
                bQ = tickets_info[bP].seat_type
            }
            var bR = bQ + ",0," + tickets_info[bP].ticket_type + "," + tickets_info[bP].name + "," + tickets_info[bP].id_type + "," + tickets_info[bP].id_no + "," + (tickets_info[bP].phone_no == null ? "" : tickets_info[bP].phone_no) + ",N";
            bO += bR + "_"
        }
        return bO.substring(0, bO.length - 1)
    };
    getOldPassengersForAutoSubmit = function() {
        var bQ = "";
        for (var bP = 0; bP < passengerChecked.length; bP++) {
            var bO = passengerChecked[bP].passenger_name + "," + passengerChecked[bP].passenger_id_type_code + "," + passengerChecked[bP].passenger_id_no + "," + passengerChecked[bP].passenger_type;
            bQ += bO + "_"
        }
        return bQ
    };
    function a2(bO, bP) {
        var bS = "";
        var bQ = $("#train_date").val().split("-");
        var bR = new Date();
        bR.setFullYear(bQ[0], bQ[1] - 1, bQ[2]);
        if (isAsync == ticket_submit_order.request_flag.isAsync && leftTicketStr != "") {
            $.ajax({url: ctx + "confirmPassenger/getQueueCount",type: "post",async: false,data: {train_date: bR.toString(),train_no: B.queryLeftNewDTO.train_no,stationTrainCode: B.queryLeftNewDTO.station_train_code,seatType: tickets_info[0].seat_type,fromStationTelecode: B.queryLeftNewDTO.from_station_telecode,toStationTelecode: B.queryLeftNewDTO.to_station_telecode,leftTicket: leftTicketStr,purpose_codes: bO,isCheckOrderInfo: bP},dataType: "json",success: function(bT) {
                    if (bT.status) {
                        if (bT.data.isRelogin == "Y") {
                            window.location.href = ctx + "login/init?random=" + new Date().getTime()
                        }
                        var bU = a3(bT.data.ticket, tickets_info[0].seat_type).split(",");
                        bS = "本次列车，剩余" + (tickets_info[0].seat_type_name).split("（")[0] + "<strong>" + bU[0] + "</strong>张";
                        if (bU.length > 1) {
                            bS += ",无座<strong>" + bU[1] + "</strong>张"
                        }
                        bS += "。";
                        if (bT.data.op_2 == "true") {
                            bS += "目前排队人数已经超过余票张数，请您选择其他席别或车次。"
                        } else {
                            if (bT.data.countT > 0) {
                                bS += '目前排队人数<font color="red">' + bT.data.countT + "</font>人，"
                            }
                        }
                        bS += "<br/>请确认以上信息是否正确，点击“确认”后，系统将为您分配席位。";
                        var bV = $("#sy_ticket_num_id");
                        if (bV != null) {
                            bV.html(bS)
                        }
                        bt()
                    }
                },error: function(bT, bV, bU) {
                    return
                }})
        } else {
            bt()
        }
    }
    function a3(bP, bO) {
        rt = "";
        seat_1 = -1;
        seat_2 = -1;
        i = 0;
        while (i < bP.length) {
            s = bP.substr(i, 10);
            c_seat = s.substr(0, 1);
            if (c_seat == bO) {
                count = s.substr(6, 4);
                while (count.length > 1 && count.substr(0, 1) == "0") {
                    count = count.substr(1, count.length)
                }
                count = parseInt(count);
                if (count < 3000) {
                    seat_1 = count
                } else {
                    seat_2 = (count - 3000)
                }
            }
            i = i + 10
        }
        if (seat_1 > -1) {
            rt += seat_1
        }
        if (seat_2 > -1) {
            rt += "," + seat_2
        }
        return rt
    }
    function bN() {
        $.ajax({url: ctx + "confirmPassenger/confirmSingle",type: "post",data: {passengerTicketStr: getpassengerTicketsForAutoSubmit(),oldPassengerStr: getOldPassengersForAutoSubmit(),tour_flag: "dc",randCode: $("#randCode").val(),purpose_codes: bL(),key_check_isChange: md5Str,train_location: location_code},dataType: "json",async: true,success: function(bO) {
                if (bO.status) {
                    if (bO.data.submitStatus) {
                        otsRedirect("post", ctx + "payOrder/init?random=" + new Date().getTime(), {})
                    } else {
                        Q("出票失败!", false, "原因： " + bO.data.errMsg + '<a  id="xg_close_win_id">点击修改</a>', false, "lose");
                        $("#xg_close_win_id").click(function() {
                            S("transforNotice_id", true);
                            $("#i-ok").css("display", "none")
                        })
                    }
                } else {
                    Q("订票失败!", true, "很抱歉！请关闭窗口重新预定车票", true, "lose")
                }
            },error: function(bO, bQ, bP) {
                Q("订票失败!", true, "很抱歉！网络忙，请关闭窗口稍后再试。", true, "lose");
                return
            }})
    }
    function m() {
        $.ajax({url: ctx + "confirmPassenger/confirmSingleForQueue",type: "post",data: {passengerTicketStr: getpassengerTicketsForAutoSubmit(),oldPassengerStr: getOldPassengersForAutoSubmit(),randCode: $("#randCode").val(),purpose_codes: bL(),key_check_isChange: md5Str,leftTicketStr: leftTicketStr,train_location: location_code},dataType: "json",async: true,success: function(bO) {
                if (bO.status) {
                    if (!bO.data.submitStatus) {
                        Q("出票失败!", false, "原因： " + bO.data.errMsg + '<a id="xg_close_win_id" >点击修改</a>', false, "lose");
                        $("#xg_close_win_id").click(function() {
                            S("transforNotice_id", true);
                            $("#i-ok").css("display", "none")
                        })
                    } else {
                        var bP = new OrderQueueWaitTime("dc", Y, n);
                        bP.start()
                    }
                } else {
                    Q("订票失败!", true, "很抱歉！请关闭窗口重新预定车票", true, "lose")
                }
            },error: function(bO, bQ, bP) {
                Q("订票失败!", true, "很抱歉！网络忙，请关闭窗口稍后再试。", true, "lose");
                return
            }})
    }
    function Y(bO, bQ, bP) {
        if (bQ <= 5) {
            Q("订单已经提交，系统正在处理中，请稍等。", false, "", false, "work")
        } else {
            if (bQ > 30 * 60) {
                Q("订单已经提交，预计等待时间超过30分钟，请耐心等待。", false, "", false, "queue")
            } else {
                Q("订单已经提交，最新预估等待时间" + bP + "，请耐心等待。", false, "", false, "queue")
            }
        }
    }
    function n(bO, bQ, bP) {
        if (bQ == -1) {
            $.ajax({url: ctx + "confirmPassenger/resultOrderForDcQueue",data: {orderSequence_no: bP.orderId},type: "POST",dataType: "json",success: function(bR) {
                    if (bR.status) {
                        if (bR.data.submitStatus) {
                            otsRedirect("post", ctx + "/payOrder/init?random=" + new Date().getTime(), {})
                        } else {
                            Q("下单成功", false, "", false, "win")
                        }
                    } else {
                        Q("下单成功。", false, "", false, "win")
                    }
                },error: function(bR, bT, bS) {
                    Q("下单成功。", false, "", false, "win")
                }})
        } else {
            bg(bQ, bP)
        }
    }
    function bg(bO, bP) {
        if (bO == -1) {
            return
        } else {
            if (bO == -2) {
                if (bP.errorcode == 0) {
                    Q("订票失败!", true, "原因： " + bP.msg, false, "lose")
                } else {
                    Q("订票失败!", true, "原因： " + bP.msg, false, "lose")
                }
            } else {
                if (bO == -3) {
                    Q("哎呀,订票失败!", true, "订单已撤销", false, "lose")
                } else {
                    window.location.href = ctx + "queryOrder/initNoComplete?random=" + new Date().getTime()
                }
            }
        }
    }
    function I() {
        bI = new dhtmlXWindows();
        bI.enableAutoViewport(true);
        bI.setSkin("dhx_terrace");
        bI.setImagePath(ctx + "resources/js/rich/windows/imgs/");
        S = function(bS, bR) {
            unLoadGrayBackground();
            if (bI.isWindow(bS + "_")) {
                bI.window(bS + "_").setModal(false);
                bI.window(bS + "_").hide()
            }
        };
        Q = function(bY, bV, bS, bR, bU) {
            var bX = '<div class="tit">' + (bV ? '<span class="colorC">' + bY + "</span>" : bY) + "</div>";
            var bT = "<P>" + bS + "</p>";
            var bW = bV ? '<p>请点击[<a href="' + ctx + 'queryOrder/init"><strong>我的12306</strong></a>]办理其他业务。您也可以点击[<a href="' + ctx + 'leftTicket/init"><strong>预订车票</strong></a>]，重新规划您的旅程。</p>' : '<P>查看订单处理情况，请点击“<a href="' + ctx + 'queryOrder/initNoComplete">未完成订单</a>”</P>';
            $("#iamge_status_id").removeClass().addClass("icon i-" + bU);
            if (bR) {
                $("#up-box-hd_id").html("提示<a id='closeTranforDialog_id' href='#nogo'>关闭</a>");
                bW = "";
                $("#lay-btn_id").html("<a href='#nogo' id='qr_closeTranforDialog_id'  class='btn92s'>确认</a>")
            } else {
                $("#up-box-hd_id").html("提示");
                $("#lay-btn_id").html("")
            }
            $("#orderResultInfo_id").html(bX + (bS == "" || bS == null || bS == "undefined" || bS == undefined ? "" : bT) + bW);
            bO("transforNotice_id");
            if (bR) {
                $("#closeTranforDialog_id").click(function() {
                    S("transforNotice_id", true)
                });
                $("#qr_closeTranforDialog_id").click(function() {
                    S("transforNotice_id", true);
                    $("#i-ok").css("display", "none")
                })
            }
        };
        function bO(bV) {
            S(bV, false);
            if ("checkticketinfo_id" == bV) {
                var bT = ticketInfoForPassengerForm.queryLeftNewDetailDTO;
                if (bT.to_station_telecode == ticket_submit_order.special_areas.lso || bT.to_station_telecode == ticket_submit_order.special_areas.dao || bT.to_station_telecode == ticket_submit_order.special_areas.ado || bT.to_station_telecode == ticket_submit_order.special_areas.nqo || bT.to_station_telecode == ticket_submit_order.special_areas.tho) {
                    if (bP()) {
                        $("#notice_1_id").html("1.系统将随机为您申请席位，暂不支持自选席位。");
                        $("#notice_2_id").html("2.根据现行规定，外国人在购买进西藏火车票时，须出示西藏自治区外事办公室或旅游局、商务厅的批准函（电），或者出示中国内地司局级接待单位出具的、已征得自治区上述部门同意的证明信函。台湾同胞赴藏从事旅游、商务活动，须事先向西藏自治区旅游局或商务厅提出申请，购买进藏火车票时须出示有关批准函。");
                        if (bQ()) {
                            $("#notice_3_id").html("3.按现行规定，学生票购票区间必须与学生证上的乘车区间一致，否则车站将不予换票。")
                        } else {
                            $("#notice_3_id").html("")
                        }
                    }
                } else {
                    $("#notice_1_id").html("1.系统将随机为您申请席位，暂不支持自选席位。");
                    if (bQ()) {
                        $("#notice_3_id").html("2.按现行规定，学生票购票区间必须与学生证上的乘车区间一致，否则车站将不予换票。")
                    } else {
                        $("#notice_3_id").html("")
                    }
                }
            }
            var bS = aG(bV);
            var bR = $(window).width() / 2 - 300;
            var bU = bH() + ($(window).height() / 2 - 200);
            bS.setDimension($("#content_" + bV).width(), $("#content_" + bV).height() + 10);
            $(".dhtmlx_window_active").height($("#content_" + bV).height());
            $(".dhtmlx_window_active").css({left: bR + "px",top: bU + "px"})
        }
        function bQ() {
            for (var bS = 0; bS < limit_tickets.length; bS++) {
                var bR = limit_tickets[bS];
                if (bR.ticket_type == ticket_submit_order.ticket_type.student) {
                    return true
                }
            }
            return false
        }
        function bP() {
            for (var bS = 0; bS < limit_tickets.length; bS++) {
                var bR = limit_tickets[bS];
                if ((ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.fc || ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.gc) && bR.save_status != "" && bR.id_type == ticket_submit_order.passenger_card_type.passport) {
                    return true
                } else {
                    if ((ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.wc || ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.dc) && bR.id_type == ticket_submit_order.passenger_card_type.passport) {
                        return true
                    }
                }
            }
            return false
        }
    }
    function aG(bP) {
        var bO = bI.createWindow(bP + "_", 0, 0, 660, 100);
        bO.attachObject(bP);
        bO.clearIcon();
        bO.denyResize();
        bO.setModal(true);
        bO.center();
        bO.button("park").hide();
        bO.button("minmax1").hide();
        bO.hideHeader();
        return bO
    }
    function u(bP) {
        var bO = new Date();
        var bQ = bP.split("-");
        bO.setFullYear(parseInt(bQ[0]), parseInt(bQ[1] - 1, 10), parseInt(bQ[2], 10));
        if (bQ.length >= 6) {
            bO.setHours(bQ[3], bQ[4], bQ[5])
        }
        return bO
    }
    function an(bO) {
        var bR = "", bQ = "";
        var bT = bO.replace(/-/g, "");
        if (bT.substring(4, 5) == "0") {
            bR = bT.substring(5, 6) + "月"
        } else {
            bR = bT.substring(4, 6) + "月"
        }
        if (bT.substring(6, 7) == "0") {
            bQ = bT.substring(7, 8) + "日"
        } else {
            bQ = bT.substring(6, 8) + "日"
        }
        var bP = new Date(Date.parse(bO.replace(/-/g, "/")));
        var bS = "日一二三四五六";
        return bR.concat(bQ).concat("&nbsp;&nbsp;").concat("周").concat(bS.charAt(bP.getDay()))
    }
    showTicketPrice = function(bS) {
        var bV = $(bS).parent("tr").children("td").children("div").children("div").children("span").attr("id");
        if (undefined == bV || bV == null || "undefined" == typeof (bV)) {
            bV = $(bS).attr("id")
        }
        $("#price_" + bT).hide();
        $("#tp-list-price").hide();
        $("#sleeper-price>span").css("cursor", "pointer");
        var bT = bV.split("_")[0];
        var bU = bV.split("_")[1];
        var bR = bV.split("_")[2];
        var bW = bV.split("_")[3];
        var bQ = bV.split("_")[4];
        var bO = $("#WZ_" + bT).html();
        var bP = $("#QT_" + bT).html();
        if ($("#ticket_" + bT + "_train>span>span").text() == "查看票价") {
            if ($("#ticket_" + bT).attr("class") == "bgc") {
                $("#price_" + bT).addClass("bgc")
            }
            $.ajax({type: "get",isTakeParam: false,url: ctx + "leftTicket/queryTicketPrice",data: {train_no: bT,from_station_no: bU,to_station_no: bR,seat_types: bQ,train_date: train_tour_flag == "fc" ? $.trim($("#back_train_date").val()) : $.trim($("#train_date").val())},success: function(bX) {
                    if (bX.status) {
                        $("#ticket_" + bT + "_train>span>span").html("收起票价");
                        $("#ticket_" + bT + "_train>span>b").addClass("open");
                        $("#ticket_" + bT + "_train>span>b").attr("title", "收起票价");
                        if (bP == "--") {
                            bX.data.MIN = ""
                        }
                        if (bO == "--") {
                            bX.data.WZ = ""
                        }
                        $("#price_" + bT).html($.render.priceTableTemplate(bX.data));
                        $("#price_" + bT).show();
                        if (bX.data.PM != "--") {
                            $("#sleeper-price_" + bT).mouseover(function() {
                                $("#tp-list-price_" + bT).show()
                            });
                            $("#sleeper-price_" + bT).mouseout(function() {
                                $("#tp-list-price_" + bT).hide()
                            })
                        }
                    }
                }})
        } else {
            $("#ticket_" + bT + "_train>span>span").html("查看票价");
            $("#ticket_" + bT + "_train>span>b").attr("title", "查看票价");
            $("#ticket_" + bT + "_train>span>b").removeClass();
            $("#price_" + bT).html("");
            $("#price_" + bT).hide()
        }
    };
    function br(bO) {
        if (ai == "starttime") {
            return bO.sort(function(bQ, bP) {
                var bS = Number(bQ.queryLeftNewDTO.start_time.replace(":", ""));
                var bR = Number(bP.queryLeftNewDTO.start_time.replace(":", ""));
                if (bS > bR) {
                    return aF ? 1 : -1
                } else {
                    return aF ? -1 : 1
                }
            })
        } else {
            if (ai == "arrivedtime") {
                return bO.sort(function(bQ, bP) {
                    var bS = Number(bQ.queryLeftNewDTO.arrive_time.replace(":", ""));
                    var bR = Number(bP.queryLeftNewDTO.arrive_time.replace(":", ""));
                    if (bS > bR) {
                        return bx ? 1 : -1
                    } else {
                        return bx ? -1 : 1
                    }
                })
            } else {
                if (ai == "lishi") {
                    return bO.sort(function(bQ, bP) {
                        var bS = Number(bQ.queryLeftNewDTO.lishi.replace(":", ""));
                        var bR = Number(bP.queryLeftNewDTO.lishi.replace(":", ""));
                        if (bS > bR) {
                            return aA ? 1 : -1
                        } else {
                            return aA ? -1 : 1
                        }
                    })
                }
            }
        }
        return bO
    }
    function aj() {
        $("#s_time").click(function() {
            if (aF) {
                $("#s_time").removeClass().addClass("b4");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                aF = false;
                $("#other_span_starttime").removeClass().addClass("b4");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            } else {
                $("#s_time").removeClass().addClass("b3");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                aF = true;
                $("#other_span_starttime").removeClass().addClass("b3");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            }
            ai = "starttime";
            ao()
        });
        $("#other_span_starttime").click(function() {
            if (aF) {
                $("#s_time").removeClass().addClass("b4");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                aF = false;
                $("#other_span_starttime").removeClass().addClass("b4");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            } else {
                $("#s_time").removeClass().addClass("b3");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                aF = true;
                $("#other_span_starttime").removeClass().addClass("b3");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            }
            ai = "starttime";
            ao()
        });
        $("#r_time").click(function() {
            if (bx) {
                $("#r_time").removeClass().addClass("b4");
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                bx = false;
                $("#other_span_starttime").removeClass().addClass("b4");
                $("#other_span_endtime").removeClass().addClass("b2");
                $("#other_span_lishi").removeClass().addClass("b2")
            } else {
                $("#r_time").removeClass().addClass("b3");
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                bx = true;
                $("#other_span_endtime").removeClass().addClass("b2");
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            }
            ai = "arrivedtime";
            ao()
        });
        $("#other_span_endtime").click(function() {
            if (bx) {
                $("#r_time").removeClass().addClass("b4");
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                bx = false;
                $("#other_span_endtime").removeClass().addClass("b4");
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            } else {
                $("#r_time").removeClass().addClass("b3");
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                bx = true;
                $("#other_span_endtime").removeClass().addClass("b3");
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            }
            ai = "arrivedtime";
            ao()
        });
        $("#l_s").click(function() {
            if (aA) {
                $("#l_s").removeClass().addClass("b4");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                aA = false;
                $("#other_span_lishi").removeClass().addClass("b4");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
            } else {
                $("#l_s").removeClass().addClass("b3");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                aA = true;
                $("#other_span_lishi").removeClass().addClass("b3");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
            }
            ai = "lishi";
            ao()
        });
        $("#other_span_lishi").click(function() {
            if (aA) {
                $("#l_s").removeClass().addClass("b4");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                aA = false;
                $("#other_span_lishi").removeClass().addClass("b4");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
            } else {
                $("#l_s").removeClass().addClass("b3");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                aA = true;
                $("#other_span_lishi").removeClass().addClass("b3");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
            }
            ai = "lishi";
            ao()
        })
    }
    closeTrainStop = function() {
        over_flag = false;
        bw = 0;
        $("#train_stop").hide();
        $("#train_table").html("")
    };
    hideTrainStop = function(bO) {
        over_flag = false;
        if (l) {
            clearTimeout(l)
        }
        l = window.setTimeout(function() {
            if (bw != 1) {
                bw = 0;
                $("#train_stop").hide();
                $("#train_table").html("")
            }
        }, 130)
    };
    checkHover = function(bP, bO) {
        if (getEvent(bP).type == "mouseover") {
            return !$.contains(bO, getEvent(bP).relatedTarget || getEvent(bP).fromElement) && !((getEvent(bP).relatedTarget || getEvent(bP).fromElement) === bO)
        } else {
            return !$.contains(bO, getEvent(bP).relatedTarget || getEvent(bP).toElement) && !((getEvent(bP).relatedTarget || getEvent(bP).toElement) === bO)
        }
    };
    getEvent = function(bO) {
        return bO || window.event
    };
    checkHover = function(bP, bO) {
        if (getEvent(bP).type == "mouseover") {
            return !$.contains(bO, getEvent(bP).relatedTarget || getEvent(bP).fromElement) && !((getEvent(bP).relatedTarget || getEvent(bP).fromElement) === bO)
        } else {
            return !$.contains(bO, getEvent(bP).relatedTarget || getEvent(bP).toElement) && !((getEvent(bP).relatedTarget || getEvent(bP).toElement) === bO)
        }
    };
    getEvent = function(bO) {
        return bO || window.event
    };
    function bc(bQ, bO) {
        for (var bP = 0; bP < bO.length; bP++) {
            if (bO[bP].key == bQ) {
                return true
            }
        }
        return false
    }
    function aY(bS) {
        var bX = function(bY) {
            this.value = bY
        };
        var bT = new Array();
        var bP = new Array();
        var bR = {};
        var bO = {};
        $("#cc_from_station_name_all>ul").html("");
        $("#cc_to_station_name_all>ul").html("");
        var bQ;
        var bW;
        var bV;
        for (var bU = 0; bU < bS.length; bU++) {
            bQ = bS[bU].queryLeftNewDTO.from_station_name;
            bW = bS[bU].queryLeftNewDTO.to_station_name;
            bV = bS[bU];
            if (!bR[bQ]) {
                bT.push(new bX(bQ));
                bR[bQ] = true
            }
            if (!bO[bW]) {
                bP.push(new bX(bW));
                bO[bW] = true
            }
        }
        $("#to_station_ul").html($.render.toStationNameTableTemplate(bP));
        $("#from_station_ul").html($.render.stationNameTableTemplate(bT));
        $("#sear-sel-bd input[name='cc_from_station']").click(function() {
            g(bb, "cc_from_station_" + $(this).val());
            var bY = $("input[name='cc_from_station']");
            var bZ = $("input[name='cc_from_station']:checked");
            if ($(this).is(":checked")) {
                if (bY && bZ && bZ.length == bY.length) {
                    $("#from_station_name_all").removeClass().addClass("btn-all")
                } else {
                    $("#from_station_name_all").removeClass().addClass("btn-all btn-all-sel")
                }
            } else {
                if (bY && bZ && bZ.length == 0) {
                    $("#from_station_name_all").removeClass().addClass("btn-all")
                } else {
                    $("#from_station_name_all").removeClass().addClass("btn-all btn-all-sel")
                }
            }
            ao()
        });
        $("#sear-sel-bd input[name='cc_to_station']").click(function() {
            g(a0, "cc_to_station_" + $(this).val());
            var bY = $("input[name='cc_to_station']");
            var bZ = $("input[name='cc_to_station']:checked");
            if ($(this).is(":checked")) {
                if (bY && bZ && bZ.length == bY.length) {
                    $("#to_station_name_all").removeClass().addClass("btn-all")
                } else {
                    $("#to_station_name_all").removeClass().addClass("btn-all btn-all-sel")
                }
            } else {
                if (bY && bZ && bZ.length == 0) {
                    $("#to_station_name_all").removeClass().addClass("btn-all")
                } else {
                    $("#to_station_name_all").removeClass().addClass("btn-all btn-all-sel")
                }
            }
            ao()
        })
    }
    submitOrderRequest = function(bP, bO) {
        $.ajax({type: "post",url: ctx + "login/checkUser",data: {},success: function(bQ) {
                var bS;
                checkusermdId = bQ.attributes;
                if (bQ.data.flag) {
                    if (train_tour_flag == "fc") {
                        bS = $("#back_train_date").val()
                    } else {
                        bS = $("#train_date").val()
                    }
                    if (q == "0X00") {
                        var bR = false;
                        for (i = (studentComPerArr.length - 1); i >= 0; i = i - 2) {
                            if (u(studentComPerArr[i - 1]) <= u(bS) && u(studentComPerArr[i]) >= u(bS)) {
                                bR = true;
                                break
                            }
                        }
                        if (!bR) {
                            b("学生票的乘车时间为每年的暑假6月1日至9月30日、寒假12月1日至3月31日，目前不办理学生票业务。");
                            return
                        }
                    }
                    J(bP, bO)
                } else {
                    a6();
                    $("#floatTable").hide();
                    a = $(window).scrollTop();
                    O(bP, bO)
                }
            }})
    };
    function J(b1, bU) {
        var bO = "";
        if ($("#dc").is(":checked")) {
            bO = "dc"
        } else {
            bO = "wc"
        }
        if (train_tour_flag == "fc") {
            bO = "fc";
            var bR = bU.split(":");
            var bQ = $("#back_train_date").val() + "-" + bR[0] + "-" + bR[1] + "-00";
            try {
                if (roundReferTime) {
                    if (u(roundReferTime) >= u(bQ)) {
                        b("您预订的往程车票到站时间为" + u(roundReferTime).format("yyyy年MM月dd日 hh时mm分") + "，返回日期不能早于此时间");
                        return
                    }
                }
            } catch (bW) {
            }
        }
        if (train_tour_flag == "gc") {
            bO = "gc"
        }
        if ("undefined" == typeof (submitForm)) {
            var bS = "secretStr=" + b1 + "&train_date=" + $("#train_date").val() + "&back_train_date=" + $("#back_train_date").val() + "&tour_flag=" + bO + "&purpose_codes=" + bL() + "&query_from_station_name=" + $("#fromStationText").val() + "&query_to_station_name=" + $("#toStationText").val() + "&" + bZ
        } else {
            var bP = submitForm();
            var b0 = bP.split(":::");
            var bV = b0[0].split(",-,")[0];
            var bY = b0[0].split(",-,")[1];
            var bT = b0[1].split(",-,")[0];
            var bX = b0[1].split(",-,")[1];
            var bS = escape(bV) + "=" + escape(bY) + "&" + bT + "=" + bX + "&secretStr=" + b1 + "&train_date=" + $("#train_date").val() + "&back_train_date=" + $("#back_train_date").val() + "&tour_flag=" + bO + "&purpose_codes=" + bL() + "&query_from_station_name=" + $("#fromStationText").val() + "&query_to_station_name=" + $("#toStationText").val() + "&" + bZ
        }
        var bZ = checkusermdId != undefined ? "&_json_att=" + encodeURIComponent(checkusermdId) : "";
        $.ajax({type: "post",url: ctx + "leftTicket/submitOrderRequest",data: bS,async: false,success: function(b2) {
                if (b2.status) {
                    if (train_tour_flag != null) {
                        if (train_tour_flag == "fc") {
                            otsRedirect("post", ctx + "confirmPassenger/initFc", {});
                            return
                        }
                        if (train_tour_flag == "gc") {
                            otsRedirect("post", ctx + "confirmPassenger/initGc", {});
                            return
                        }
                    }
                    if (bO == "dc") {
                        otsRedirect("post", ctx + "confirmPassenger/initDc", {});
                        return
                    } else {
                        otsRedirect("post", ctx + "confirmPassenger/initWc", {})
                    }
                }
            }})
    }
    var bK = $("#fromStation").val();
    var aQ = $("#toStation").val();
    var bu = $.trim($("#train_date").val());
    aJ = bK + aQ + bu;
    $("#add-train").click(function() {
        if ($("#fromStationText").val() == "简拼/全拼/汉字") {
            dhtmlx.alert({title: "输入车次",ok: "确定",text: "请填写出发地！",type: "alert-error"});
            return
        }
        if ($("#toStationText").val() == "简拼/全拼/汉字") {
            dhtmlx.alert({title: "输入车次",ok: "确定",text: "请填写目的地！",type: "alert-error"});
            return
        }
        var bQ = $("#prior_train span").length;
        var bX = $.trim($("#inp-train").val()).toUpperCase();
        if (bX.length == 0 || bX == "请输入") {
            dhtmlx.alert({title: "输入车次",ok: "确定",text: "请输入车次",type: "alert-error",callback: function() {
                    $("#inp-train").val("");
                    $("#inp-train").focus()
                }})
        } else {
            if (bQ < 6) {
                var bR = /^[a-zA-Z0-9]+$/;
                var bT = /^[0-9]+$/;
                if (!bR.test(bX)) {
                    dhtmlx.alert({title: "输入车次",ok: "确定",text: "车次格式输入错误！",type: "alert-error",callback: function() {
                            ccInputSelected = true;
                            $("#inp-train").select()
                        }})
                } else {
                    if (bT.test(bX) && bX.length > 4) {
                        dhtmlx.alert({title: "输入车次",ok: "确定",text: "车次格式输入错误！",type: "alert-error",callback: function() {
                                ccInputSelected = true;
                                $("#inp-train").select()
                            }})
                    } else {
                        if (bX.length < 2) {
                            dhtmlx.alert({title: "输入车次",ok: "确定",text: "车次格式输入错误！",type: "alert-error",callback: function() {
                                    ccInputSelected = true;
                                    $("#inp-train").select()
                                }})
                        } else {
                            var bS = $("#fromStation").val();
                            var bV = $("#toStation").val();
                            var b5 = $.trim($("#train_date").val());
                            var b1 = bS + bV + b5;
                            var b2 = b5.split("-");
                            var bY = new Date();
                            bY.setFullYear(b2[0], b2[1] - 1, b2[2]);
                            bY.setHours(8, 0, 0);
                            var bU = new Date();
                            var b4 = "";
                            if (bU.getDate() < 10) {
                                b4 = bU.getFullYear() + "-" + (bU.getMonth() + 1) + "-0" + bU.getDate()
                            } else {
                                b4 = bU.getFullYear() + "-" + (bU.getMonth() + 1) + "-" + bU.getDate()
                            }
                            var bO = "";
                            if (b4 == b5) {
                                var b3 = new Date(bY.getTime() + 1000 * 60 * 60 * 24);
                                if (b3.getDate() < 10) {
                                    bO = b3.getFullYear() + "-" + (b3.getMonth() + 1) + "-0" + b3.getDate()
                                } else {
                                    bO = b3.getFullYear() + "-" + (b3.getMonth() + 1) + "-" + b3.getDate()
                                }
                            } else {
                                bO = b5
                            }
                            var b6 = {"leftTicketDTO.train_date": bO,"leftTicketDTO.from_station": bS,"leftTicketDTO.to_station": bV,purpose_codes: bL()};
                            if (b1 != aJ) {
                                aJ = b1;
                                $("#prior_train span:gt(0)").remove();
                                ccSelected = [];
                                var bP = [];
                                $.ajax({type: "get",async: false,isTakeParam: false,url: ctx + "leftTicket/query",data: b6,timeout: 10000,success: function(b7) {
                                        if (b7.status) {
                                            if (b7.data == null || b7.data.length == 0) {
                                                dhtmlx.alert({title: "错误信息",ok: "确定",text: "您输入的车次与出发地目的地不符！",type: "alert-error",callback: function() {
                                                    }})
                                            } else {
                                                var b9 = b7.data;
                                                for (var b8 = 0; b8 < b9.length; b8++) {
                                                    bP.push(b9[b8].queryLeftNewDTO.station_train_code.toUpperCase())
                                                }
                                                y = bP
                                            }
                                        }
                                    }})
                            } else {
                                if (y.length == 0) {
                                    $.ajax({type: "get",async: false,isTakeParam: false,url: ctx + "leftTicket/query",data: b6,timeout: 10000,success: function(b7) {
                                            if (b7.status) {
                                                if (b7.data == null || b7.data.length == 0) {
                                                    dhtmlx.alert({title: "错误信息",ok: "确定",text: "您输入的车次与出发地目的地不符！",type: "alert-error",callback: function() {
                                                        }})
                                                } else {
                                                    var b9 = b7.data;
                                                    for (var b8 = 0; b8 < b9.length; b8++) {
                                                        y.push(b9[b8].queryLeftNewDTO.station_train_code.toUpperCase())
                                                    }
                                                }
                                            }
                                        }})
                                }
                            }
                            var bW = false;
                            for (var b0 = 0; b0 < y.length; b0++) {
                                if (bX == y[b0]) {
                                    bW = true;
                                    break
                                }
                            }
                            if (!bW) {
                                dhtmlx.alert({title: "错误信息",ok: "确定",text: "您输入的车次与出发地目的地不符！",type: "alert-error",callback: function() {
                                        $("#inp-train").val("")
                                    }})
                            } else {
                                if ($.inArray(bX, ccSelected) < 0) {
                                    var bZ = "<span class='sel-box w80'>" + bX + "<a class='close' href='javascript:' onclick='$.removeSel(this,\"" + bX + "\",4)'></a></span>";
                                    $("#prior_train").append(bZ);
                                    ccSelected.push(bX);
                                    $("#inp-train").val("")
                                } else {
                                    dhtmlx.alert({title: "输入车次",ok: "确定",text: "此车次已经添加过！",type: "alert-error",callback: function() {
                                            ccInputSelected = true;
                                            $("#inp-train").select()
                                        }})
                                }
                            }
                        }
                    }
                }
            } else {
                dhtmlx.alert({title: "输入车次",ok: "确定",text: "最多添加5个优先车次",type: "alert-error"});
                $("#inp-train").val("")
            }
        }
    });
    function bL() {
        if ($("#sf2").is(":checked")) {
            return "0X00"
        } else {
            return "ADULT"
        }
    }
    jQuery.extend({renderPassenger: function() {
            if (passengerAll) {
                var bZ = passengerAll.length;
                var bW = [];
                var bU = 0;
                var bP = $("#searchPassenger").val();
                for (var bS = 0; bS < bZ; bS++) {
                    var bQ = passengerAll[bS];
                    var bO = bQ.passenger_type_name;
                    if (!bO) {
                        bO = ""
                    }
                    var bT = "";
                    var bV = "";
                    if ($("#sf2").is(":checked")) {
                        if (bQ.passenger_type != "3") {
                            bT = " disabled='true' ";
                            bV = " class='color999' "
                        }
                    }
                    if (bP != "" && bP != "输入乘客姓名") {
                        if (bQ.passenger_name.indexOf(bP) > -1 || (bQ.first_letter && bQ.first_letter.toUpperCase().indexOf(bP.toUpperCase()) > -1)) {
                            bU++;
                            var bR = "";
                            if ($.pHasInSelected(bQ)) {
                                bR = " checked='checked' "
                            }
                            bW[bS] = "<li " + bV + "><input " + bR + " type='checkbox' " + bT + " name='" + bQ.passenger_type + "' class='check' />" + bQ.passenger_name + "(" + bO + ")(" + bQ.passenger_id_no + ")</li>"
                        }
                    } else {
                        bU++;
                        var bR = "";
                        if ($.pHasInSelected(bQ)) {
                            bR = " checked='checked' "
                        }
                        bW[bS] = "<li " + bV + "><input  " + bR + " type='checkbox' " + bT + " name='" + bQ.passenger_type + "' class='check' />" + bQ.passenger_name + "(" + bO + ")(" + bQ.passenger_id_no + ")</li>"
                    }
                }
                var bY = 100;
                var bX = 0;
                if (bU / 3 > 11) {
                    bY = 310;
                    bX = 258
                } else {
                    bY = 100 + parseInt((bU / 3) * 25);
                    bX = bY - 48
                }
                $("#sel-buyer").css("height", bY);
                $("#pContent").css("height", bX);
                $("#buyer-list").html(bW.join(""))
            }
            $("#buyer-list input").click(function() {
                var b1 = $("#setion_postion span").length;
                var b2 = this.nextSibling.nodeValue;
                if (this.checked) {
                    if (b1 < 6) {
                        var b0 = "<span name='" + b2 + "' class='sel-box w80'>" + b2 + "<a class='close' href='javascript:' onclick='$.removeSel(this,\"" + b2 + "\",1)'></a></span>";
                        $("#setion_postion").append(b0);
                        $.checkedPasseanger(b2)
                    } else {
                        dhtmlx.alert({title: "添加常用联系人",ok: "确定",text: "最多添加5位联系人",type: "alert-error"});
                        this.checked = false
                    }
                } else {
                    $.each($("#setion_postion span"), function(b3, b4) {
                        if (b2 == $(b4).attr("name")) {
                            $(b4).remove();
                            $.removePasseanger(b2);
                            return
                        }
                    })
                }
            })
        },reloadPassenger: function() {
            var bO = dhtmlx.modalbox({targSrc: '<div><img src="' + ctx + 'resources/images/loading.gif"></img></div>',callback: function() {
                }});
            $.ajax({type: "post",isTakeParam: false,cache: false,async: false,url: ctx + "confirmPassenger/getPassengerDTOs",timeout: 10000,error: function(bP, bR, bQ) {
                    dhtmlx.modalbox.hide(bO)
                },success: function(bP) {
                    dhtmlx.modalbox.hide(bO);
                    if (bP.status) {
                        if (bP.data.noLogin == "true") {
                            a6();
                            $("#floatTable").hide();
                            a = $(window).scrollTop();
                            N()
                        } else {
                            passengerAll = bP.data.normal_passengers;
                            $("#sel-buyer").css("left", $("#sear-sel").position().left + 80);
                            $("#sel-buyer").show();
                            $("#sel-seat").hide();
                            $("#sel-date").hide();
                            $("#sel-buyer").css("left", $("#sear-sel").position().left + 80);
                            $("#sel-buyer").css("top", $("#sear-sel").position().top + 4 * 28 + 16);
                            $.renderPassenger()
                        }
                    }
                }})
        },pHasInSelected: function(bR) {
            var bP = passengerChecked.length;
            if (bP > 0) {
                for (var bO = 0; bO < bP; bO++) {
                    var bQ = passengerChecked[bO];
                    if (bQ.passenger_name == bR.passenger_name && bQ.passenger_id_type_code == bR.passenger_id_type_code && bQ.passenger_id_no == bR.passenger_id_no) {
                        return true
                    }
                }
            }
            return false
        },showSelectBuyer: function() {
            if (!passengerAll) {
                $.reloadPassenger()
            } else {
                var bO = $("#buyer-list input");
                for (var bP = 0; bP < bO.length; bP++) {
                    var bQ = $(bO[bP]).attr("name");
                    if ($("#sf2").is(":checked")) {
                        if (bQ != "3") {
                            $(bO[bP]).attr("disabled", "true");
                            $(bO[bP]).parent().addClass("color999")
                        } else {
                            $(bO[bP]).removeAttr("disabled");
                            $(bO[bP]).parent().removeClass("color999")
                        }
                    } else {
                        $(bO[bP]).removeAttr("disabled");
                        $(bO[bP]).parent().removeClass("color999")
                    }
                }
                $("#sel-buyer").bgiframe();
                $("#sel-buyer").show();
                $("#sel-seat").hide();
                $("#sel-date").hide();
                $("#sel-buyer").css("left", $("#sear-sel").position().left + 80);
                $("#sel-buyer").css("top", $("#sear-sel").position().top + 4 * 28 + 16)
            }
        }});
    function x() {
        $("#show_all_query_result").click(function() {
            bb = new Array();
            a0 = new Array();
            E = new Array();
            $("#train_type_btn_all").removeClass().addClass("btn-all");
            $("#start_time_btn_all").removeClass().addClass("btn-all");
            $("#arrive_time_btn_all").removeClass().addClass("btn-all");
            $("#seat_type_btn_all").removeClass().addClass("btn-all");
            $("#from_station_name_all").removeClass().addClass("btn-all");
            $("#to_station_name_all").removeClass().addClass("btn-all");
            $("#sear-sel-bd input").each(function() {
                if (this.checked) {
                    this.checked = false
                }
            });
            if (ah) {
                ah.setComboText("")
            }
            $("#avail_ticket").attr("checked", false);
            ao()
        })
    }
    function ad() {
        var bO = $("#queryPriceTemplate").html().replace("<!--", "").replace("-->", "");
        $.templates({priceTableTemplate: bO});
        var bO = $("#fromStationNameTemplate").html().replace("<!--", "").replace("-->", "");
        $.templates({stationNameTableTemplate: bO});
        var bO = $("#toStationNameTemplate").html().replace("<!--", "").replace("-->", "");
        $.templates({toStationNameTableTemplate: bO});
        var bO = $("#seatTypeTemplate").html().replace("<!--", "").replace("-->", "");
        $.templates({seatTypeTemplate: bO});
        var bO = $("#stationinfoTemplate").html().replace("<!--", "").replace("-->", "");
        $.templates({stationinfoTemplate: bO})
    }
    function bf(bP) {
        dhtmlXCombo_defaultOption.prototype._DrawHeaderButton = function() {
        };
        $("#train_combo_box").hide();
        var bO = [];
        if (!ah) {
            ah = new dhtmlXCombo("train_combo_box_div", "cc", 90)
        } else {
            ah.setComboText("")
        }
        ah.clearAll();
        $(bP).each(function() {
            bO.push([this.queryLeftNewDTO.station_train_code, this.queryLeftNewDTO.station_train_code])
        });
        ah.addOption(bO);
        ah.enableFilteringMode(true);
        ah.attachEvent("onChange", function() {
            if (ah.getComboText() != "") {
                if ($("#iLcear").is(":hidden")) {
                    $("#iLcear").show()
                }
            }
            ao()
        });
        if (!$("#iLcear")[0]) {
            $(".dhx_combo_box ").append($('<span style="display: none;" class="i-clear dhx_combo_img_iClear" id="iLcear"></span>'));
            $("#iLcear").on("click", function() {
                if (ah) {
                    ah.setComboText("");
                    $(this).hide()
                }
            })
        }
        $(".dhx_combo_input").on("keyup", function() {
            if ($(this).val() == "") {
                $("#iLcear").hide()
            } else {
                if ($("#iLcear").is(":hidden")) {
                    $("#iLcear").show()
                }
            }
        })
    }
    function ac() {
        if (!bD) {
            bD = new dhtmlXWindows();
            bD.enableAutoViewport(true);
            bD.setSkin("dhx_terrace");
            bD.attachViewportTo("winVP");
            bD.setImagePath(ctx + "resources/js/rich/windows/imgs/")
        }
    }
    function a4() {
        bD.window("login").hide();
        bD.window("login").setModal(false)
    }
    function a6() {
        if (bD.window("login")) {
            bD.window("login").setModal(false);
            bD.window("login").hide()
        }
        aE = bD.createWindow("login", 0, 0, 400, 350);
        var bO = $(window).width() / 2 - 140;
        var bP = bH() + ($(window).height() / 2 - 205);
        aE.attachObject("relogin");
        aE.setDimension($("#content").width(), $("#content").height() + 10);
        $(".dhtmlx_window_active").height($("#content").height());
        $(".dhtmlx_window_active").css({left: bO,top: bP});
        aE.bringToTop();
        bD.window("login").clearIcon();
        bD.window("login").denyResize();
        aE.button("park").hide();
        aE.button("minmax1").hide();
        aE.hideHeader();
        refreshImg("login", "sjrand");
        aE.setModal(true);
        $("#relogin_close").click(function() {
            aV();
            var bQ = $(window).scrollTop();
            var bR = $("#float").position().top;
            if (bQ > bR + 30) {
                $("#floatTable").show()
            }
            a4()
        })
    }
    function aV() {
        av();
        $("#c_error").html("");
        $("#c_error").removeClass("error");
        $("#username").val("");
        $("#password").val("");
        $("#randCode").val("");
        $("#i-ok").hide();
        by()
    }
    function bH() {
        if ("pageYOffset" in window) {
            return window.pageYOffset
        } else {
            if (document.compatMode == "BackCompat") {
                return document.body.scrollTop
            } else {
                return document.documentElement.scrollTop
            }
        }
    }
    function av() {
        $("#username").removeClass("inptxt w200 error").addClass("inptxt w200");
        $("#password").removeClass("inptxt w200 error").addClass("inptxt w200");
        $("#randCode").removeClass("inptxt w100 error").addClass("inptxt w100");
        $("#randCode2").removeClass("inptxt w100 error").addClass("inptxt w100")
    }
    function v(bR) {
        var bO = true;
        var bP = /^[A-Za-z]{1}([A-Za-z0-9]|[_]){0,29}$/;
        var bQ = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
        if ("" == bR || bR == null || bR == "用户名／邮箱" || bR == "admin") {
            bO = false;
            av();
            $("#username").removeClass("inptxt w200").addClass("inptxt w200 error");
            $("#c_error").html(login_messages.userNameEmpty).attr("class", "error").css("margin-left", "60px")
        } else {
            if (!bP.test(bR) && !bQ.test(bR)) {
                bO = false;
                av();
                $("#username").removeClass("inptxt w200").addClass("inptxt w200 error");
                $("#c_error").html(login_messages.userNameFormat).attr("class", "error").css("margin-left", "60px")
            }
        }
        if (bO) {
            av();
            $("#c_error").html("");
            $("#c_error").removeClass("error")
        }
        return bO
    }
    function a9(bP) {
        var bO = true;
        if ("" == bP || bP == null) {
            bO = false;
            av();
            $("#password").removeClass("inptxt w200").addClass("inptxt w200 error");
            $("#c_error").html(login_messages.passwordEmpty).attr("class", "error").css("margin-left", "60px")
        } else {
            if (bP.length < 6) {
                bO = false;
                av();
                $("#password").removeClass("inptxt w200").addClass("inptxt w200 error");
                $("#c_error").html(login_messages.passwordLength).attr("class", "error").css("margin-left", "60px")
            }
        }
        if (bO) {
            av();
            $("#c_error").html("");
            $("#c_error").removeClass("error")
        }
        return bO
    }
    function aT(bP) {
        var bO = true;
        if ("" == bP) {
            bO = false;
            av();
            $("#randCode").removeClass("inptxt w100").addClass("inptxt w100 error");
            $("#c_error").html(login_messages.randCodeEmpty).attr("class", "error").css("margin-left", "60px")
        } else {
            if (!/^[a-zA-Z0-9]+$/.test(bP)) {
                bO = false;
                av();
                $("#randCode").removeClass("inptxt w100").addClass("inptxt w100 error");
                $("#c_error").html(login_messages.randCodeFormat).attr("class", "error").css("margin-left", "60px")
            } else {
                if (bP.length != 4) {
                    bO = false;
                    av();
                    $("#randCode").removeClass("inptxt w100").addClass("inptxt w100 error");
                    $("#c_error").html(login_messages.randCodeLentgh).attr("class", "error").css("margin-left", "60px")
                } else {
                    if (!w(bP)) {
                        bO = false;
                        av();
                        $("#randCode").removeClass("inptxt w100").addClass("inptxt w100 error");
                        $("#c_error").html(login_messages.randCodeError).attr("class", "error").css("margin-left", "60px")
                    }
                }
            }
        }
        if (bO) {
            av();
            $("#c_error").html("");
            $("#c_error").removeClass("error")
        }
        return bO
    }
    function ax() {
        var bQ = $.trim($("#username").val());
        var bP = $.trim($("#password").val());
        var bO = $.trim($("#randCode").val());
        if (!v(bQ)) {
            return false
        }
        if (!a9(bP)) {
            return false
        }
        if (!aT(bO)) {
            return false
        }
        return true
    }
    function w(bP) {
        var bO = true;
        if (bP != "" && bP.length == 4) {
            $.ajax({url: ctx + "passcodeNew/checkRandCodeAnsyn",type: "post",data: {randCode: bP,rand: "sjrand"},async: false,success: function(bQ) {
                    if (bQ.data == "N") {
                        bO = false;
                        $("#i-ok").css("display", "none")
                    } else {
                        bO = true;
                        $("#i-ok").css("display", "block");
                        $("#c_error").html("");
                        $("#c_error").removeClass("error");
                        av()
                    }
                }})
        } else {
            bO = false;
            $("#i-ok").css("display", "none")
        }
        return bO
    }
    function t() {
        var bP = false;
        var bO = false;
        $("#username").on("keyup", function() {
            al = true;
            var bQ = $.trim($("#username").val());
            bP = v(bQ)
        }).blur(function() {
            if (al) {
                var bQ = $.trim($("#username").val());
                bP = v(bQ)
            }
        });
        $("#password").blur(function() {
            if (al) {
                if (bP) {
                    var bQ = $.trim($("#password").val());
                    bO = a9(bQ)
                }
            }
        });
        $("#randCode").on("keyup", function() {
            if ($.trim($("#password").val()) != "" && $.trim($("#password").val()) != null) {
                if (bO) {
                    var bQ = $.trim($("#randCode").val());
                    w(bQ)
                }
            }
        }).blur(function() {
            if ($.trim($("#password").val()) != "" && $.trim($("#password").val()) != null) {
                if (bO) {
                    var bQ = $.trim($("#randCode").val());
                    aT(bQ)
                }
            }
        })
    }
    function O(bP, bO) {
        $("#loginSubAsyn").unbind("click");
        $("#loginSubAsyn").click(function() {
            var bQ = ax();
            if (bQ) {
                $("#loginForm").ajaxSubmit({url: ctx + "login/loginUserAsyn?random=" + new Date().getTime(),type: "post",dataType: "json",async: false,success: function(bR) {
                        if (bR.data.status) {
                            if (bR.data.username != null) {
                                a4();
                                loginAsyn(bR.data.username);
                                J(bP, bO)
                            }
                        } else {
                            $("#i-ok").hide();
                            refreshImg("login", "sjrand");
                            $("#password").val("");
                            $("#randCode").val("");
                            if (bR.data.loginFail != null) {
                                if (bR.data.loginFail == "登录名不存在!") {
                                    al = false;
                                    av();
                                    $("#username").removeClass("inptxt w200").addClass("inptxt w200 error");
                                    $("#c_error").html(bR.data.loginFail).attr("class", "error").css("margin-left", "60px")
                                } else {
                                    if (bR.data.loginFail == "验证码不正确！" && bR.data.loginFail != "登录名不存在!") {
                                        av();
                                        $("#randCode").removeClass("inptxt w100").addClass("inptxt w200 error");
                                        $("#c_error").html(bR.data.loginFail).attr("class", "error").css("margin-left", "60px");
                                        $("#randCode").focus()
                                    } else {
                                        if (bR.data.loginFail != "验证码不正确！" && bR.data.loginFail != "登录名不存在!") {
                                            av();
                                            $("#password").removeClass("inptxt w200").addClass("inptxt w200 error");
                                            $("#c_error").html(bR.data.loginFail).attr("class", "error").css("margin-left", "60px");
                                            $("#password").focus()
                                        }
                                    }
                                }
                            }
                        }
                    }})
            } else {
                a6()
            }
        })
    }
    function N() {
        var bO = false;
        $("#loginSubAsyn").unbind("click");
        $("#loginSubAsyn").click(function() {
            if (!bO) {
                var bP = ax();
                bO = true;
                if (bP) {
                    $("#loginForm").ajaxSubmit({url: ctx + "login/loginUserAsyn?random=" + new Date().getTime(),type: "post",dataType: "json",async: false,success: function(bQ) {
                            if (bQ.data.status) {
                                if (bQ.data.username != null) {
                                    a4();
                                    loginAsyn(bQ.data.username)
                                }
                            } else {
                                $("#i-ok").hide();
                                refreshImg("login", "sjrand");
                                $("#password").val("");
                                $("#randCode").val("");
                                if (bQ.data.loginFail != null) {
                                    if (bQ.data.loginFail == "登录名不存在!") {
                                        al = false;
                                        av();
                                        $("#username").removeClass("inptxt w200").addClass("inptxt w200 error");
                                        $("#c_error").html(bQ.data.loginFail).attr("class", "error").css("margin-left", "60px");
                                        $("#username").focus()
                                    } else {
                                        if (bQ.data.loginFail == "验证码不正确！" && bQ.data.loginFail != "登录名不存在!") {
                                            av();
                                            $("#randCode").removeClass("inptxt w100").addClass("inptxt w200 error");
                                            $("#c_error").html(bQ.data.loginFail).attr("class", "error").css("margin-left", "60px");
                                            $("#randCode").focus()
                                        } else {
                                            if (bQ.data.loginFail != "验证码不正确！" && bQ.data.loginFail != "登录名不存在!") {
                                                av();
                                                $("#password").removeClass("inptxt w200").addClass("inptxt w200 error");
                                                $("#c_error").html(bQ.data.loginFail).attr("class", "error").css("margin-left", "60px");
                                                $("#password").focus()
                                            }
                                        }
                                    }
                                }
                            }
                        },complete: function() {
                            bO = false
                        }})
                } else {
                    bO = false;
                    a6()
                }
            }
        })
    }
    function az() {
        $("#randCode").keydown(function(bO) {
            bO = bO || window.event;
            if (bO.keyCode == 13 || bO.keyCode == 9) {
                $("#loginSubAsyn").click()
            }
        })
    }
    function by() {
        $("#username").css("color", "#333");
        $("#password").css("color", "#333");
        $("#randCode").css("color", "#333");
        if ($("#username").val() == "" || $("#username").val() == "用户名／邮箱" || $("#username").val() == null || $("#username").val() == "admin") {
            $("#username").css("color", "#999");
            $("#username").val("用户名／邮箱");
            $("#password").val("")
        }
        $("#username").focus(function() {
            var bO = $("#username").val();
            if (bO == "用户名／邮箱") {
                $("#username").css("color", "#333");
                $("#username").val("");
                $("#password").val("")
            }
        }).blur(function() {
            var bO = $("#username").val();
            if (bO == "") {
                $("#username").css("color", "#999");
                $("#username").val("用户名／邮箱")
            }
        })
    }
    function T() {
        $("#forget_my_password_id").on("click", function(bO) {
            otsRedirect("post", ctx + "forgetPassword/initforgetMyPassword")
        })
    }
    function ay() {
        var bO = [];
        $("#date_range>ul>li").each(function() {
            var bQ = $(this).children("span:first-child").html();
            bO.push(bQ)
        });
        var bP;
        if (train_tour_flag != null && train_tour_flag != "" && train_tour_flag == "fc") {
            bP = jQuery.inArray($("#back_train_date").val().substring(5, 10), bO)
        } else {
            bP = jQuery.inArray($("#train_date").val().substring(5, 10), bO)
        }
        if (bP != "-1") {
            bP = bP + 1;
            $("#date_range>ul>li").removeClass("sel");
            $("#date_range>ul>li:nth-child(1)").children("span:first").addClass("first");
            $("#date_range>ul>li:nth-child(1)").children("span:last").addClass("first");
            $("#date_range>ul>li:nth-child(" + bP + ")").addClass("sel");
            $("#date_range>ul>li:nth-child(" + bP + ")").children("span:last-child").removeClass();
            $("#date_range>ul>li:nth-child(1)").children().addClass("first");
            $("#date_range>ul>li:nth-child(" + bP + ")").children("span:first-child").addClass("hide");
            $("#date_range>ul>li:nth-child(20)").addClass("end");
            bq = $("#date_range>ul>li:nth-child(" + bP + ")").children("span:first-child").text()
        }
    }
    function bm() {
        $("#query_ticket").unbind("click");
        $("#query_ticket_stu").unbind("click");
        $("#query_ticket").removeClass().addClass("btn92s btn-disabled");
        $("#query_ticket_stu").removeClass().addClass("btn92s btn-disabled");
        aX();
        setTimeout(function() {
            bM();
            aU();
            $("#query_ticket").removeClass().addClass("btn92s");
            $("#query_ticket_stu").removeClass().addClass("btn92s");
            if (train_tour_flag != "gc" && train_tour_flag != "fc") {
                if (ClickWho == "0X00") {
                    $("#query_ticket").unbind();
                    $("#query_ticket").removeClass().addClass("btn92s btn-disabled");
                    $("#query_ticket_stu").removeClass().addClass("btn92s")
                }
                if (ClickWho == "00") {
                    $("#query_ticket_stu").unbind();
                    $("#query_ticket_stu").removeClass().addClass("btn92s btn-disabled");
                    $("#query_ticket").removeClass().addClass("btn92s")
                }
            }
            if (isstudentDate) {
                $("#query_ticket_stu").unbind();
                $("#query_ticket_stu").removeClass().addClass("btn92s btn-disabled");
                $("#query_ticket").removeClass().addClass("btn92s")
            }
            Z()
        }, 1000)
    }
    changeArriveDate = function(bP, bO) {
        bP = bP.replace(":", "");
        bO = bO.replace(":", "");
        hour_value = Number(bP.substring(0, 2)) + Number(bO.substring(0, 2));
        min_value = Number(bP.substring(2, 4)) + Number(bO.substring(2, 4));
        if (min_value >= 60) {
            hour_value = hour_value + 1
        }
        if (hour_value >= 24 && hour_value < 48) {
            return "次日"
        } else {
            if (hour_value >= 48 && hour_value < 72) {
                return "两日"
            } else {
                if (hour_value >= 72) {
                    return "三日"
                } else {
                    return "当日"
                }
            }
        }
    };
    changeLiShi = function(bO) {
        if (bO.substring(0, 1) == "0") {
            if (bO.substring(1, 2) == "0") {
                if (bO.substring(3, 4) == "0") {
                    bO = bO.substring(4, 5) + "分"
                } else {
                    bO = bO.substring(3, 5) + "分"
                }
            } else {
                bO = bO.substring(1, 2) + "小时" + bO.substring(3, 5) + "分"
            }
        } else {
            if (bO.substring(3, 5) == "00") {
                bO = bO.substring(0, 2) + "小时"
            } else {
                bO = bO.substring(0, 2) + "小时" + bO.substring(3, 5) + "分"
            }
        }
        return bO
    };
    isNum = function(bO) {
        return parseInt(bO)
    };
    buttonText = function() {
        return "预订"
    };
    function Z() {
        if ($("#sf2").is(":checked")) {
            if (u($("#train_date").val()) > u(init_maxPeriod) - 24 * 60 * 60 * 1000) {
                aX()
            } else {
                aU()
            }
        }
    }
    function aa() {
        if (train_tour_flag == "fc") {
            var bO = $("#back_train_date").val()
        } else {
            var bO = $("#train_date").val()
        }
        if (rqChecked.length == 0) {
            rqChecked.push(bO)
        }
        var bP = false;
        if (bO != rqChecked[0]) {
            for (var bQ = 0; bQ < rqChecked.length; bQ++) {
                if (bO == rqChecked[bQ]) {
                    bP = true;
                    rqChecked.splice(bQ, 1);
                    $("#date-list input[value=" + rqChecked[0] + "]").prop("checked", false);
                    rqChecked.splice(0, 1, bO);
                    $("#prior_date span[name=" + bO + "]").remove();
                    break
                }
            }
            if (!bP) {
                $("#date-list input[value=" + rqChecked[0] + "]").prop("checked", false);
                rqChecked.splice(0, 1, bO);
                $("#date-list input[value=" + rqChecked[0] + "]").prop("checked", true)
            }
        }
    }
    $("#train_date").focus(function() {
        WdatePicker({doubleCalendar: true,minDate: init_minPeriod,maxDate: init_maxPeriod,isShowClear: false,readOnly: true,qsEnabled: false,onpicked: function() {
                aa();
                $("#train_date").blur();
                var bO = $("#train_date").val();
                var bP = $("#back_train_date").val();
                if ($("#wf").is(":checked")) {
                    if (!bP | u(bO) > u(bP)) {
                        $("#back_train_date").val(bO)
                    }
                }
            }})
    });
    $("#date_icon_1").click(function() {
        $("#train_date").focus()
    });
    $("#back_train_date").focus(function() {
        WdatePicker({doubleCalendar: true,minDate: $("#train_date").val(),maxDate: init_maxPeriod,isShowClear: false,readOnly: true,qsEnabled: false,onpicked: function() {
                aa();
                $("#back_train_date").blur()
            }})
    });
    $("#date_icon_2").click(function() {
        $("#back_train_date").focus()
    })
})();