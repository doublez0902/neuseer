function clearMark(clickId) {
    var idGrade = parseInt(clickId.charAt(0));
    for (i = idGrade; i <= 5; i++) {
        var gradeLength = getGradeLength(i);
        for (j = 1; j <= gradeLength; j++) {
            if ($("#" + i + "_grade_" + j).hasClass("btn-danger")) {
                $("#" + i + "_grade_" + j).removeClass("btn-danger");
                $("#" + i + "_grade_" + j).addClass("btn-warning");
            }
        }
    }
}

// 获取列长
function getGradeLength(grade) {
    var j = 1;
    switch (grade) {
        case 1:
            j = 3;
            break;
        case 2:
            j = 11;
            break;
        case 3:
            j = 8;
            break;
        case 4:
            j = 3;
            break;
        default:
            j = 12;
    }
    return j;
}

function setMark(obj) {
    obj.removeClass(".btn-warning");
    obj.addClass("btn-danger");
}

// 第一列
$("#1_grade_1").click(function (e) {
    // 使用e.target获取对象，不要使用this
    var clickId = $(e.target).attr("id");
    clearMark(clickId);
    setMark($(e.target));
    setMark($("#2_grade_1"));
    setMark($("#2_grade_2"));
    setMark($("#2_grade_3"));
})

$("#1_grade_2").click(function (e) {
    var clickId = $(e.target).attr("id");
    clearMark(clickId);
    setMark($(e.target));
    setMark($("#2_grade_4"));
    setMark($("#2_grade_5"));
    setMark($("#2_grade_6"));
    setMark($("#2_grade_7"));
    setMark($("#2_grade_8"));
})
$("#1_grade_3").click(function (e) {
    var clickId = $(e.target).attr("id");
    clearMark(clickId);
    setMark($(e.target));
    setMark($("#2_grade_9"));
    setMark($("#2_grade_10"));
    setMark($("#2_grade_11"));
})
$("#2_grade_1").click(function (e) {
    var clickId = $(e.target).attr("id");
    clearMark(clickId);
    setMark($(e.target));
    setMark($("#3_grade_1"));
})
//第二列
$("#2_grade_2").click(function (e) {
    var clickId = $(e.target).attr("id");
    clearMark(clickId);
    setMark($(e.target));
    setMark($("#3_grade_2"));
})
$("#2_grade_3").click(function (e) {
    var clickId = $(e.target).attr("id");
    clearMark(clickId);
    setMark($(e.target));
    setMark($("#3_grade_3"));
    setMark($("#3_grade_4"));
})
$("#2_grade_4").click(function (e) {
    var clickId = $(e.target).attr("id");
    clearMark(clickId);
    setMark($(e.target));
    setMark($("#3_grade_5"));
})
$("#2_grade_5").click(function (e) {
    var clickId = $(e.target).attr("id");
    clearMark(clickId);
    setMark($(e.target));
    setMark($("#3_grade_5"));
    setMark($("#3_grade_6"));
})
$("#2_grade_6").click(function (e) {
    var clickId = $(e.target).attr("id");
    clearMark(clickId);
    setMark($(e.target));
    setMark($("#3_grade_6"));
})
$("#2_grade_7").click(function (e) {
    var clickId = $(e.target).attr("id");
    clearMark(clickId);
    setMark($(e.target));
    setMark($("#3_grade_6"));
})
$("#2_grade_8").click(function (e) {
    var clickId = $(e.target).attr("id");
    clearMark(clickId);
    setMark($(e.target));
    setMark($("#3_grade_3"));
    setMark($("#3_grade_4"));
})
$("#2_grade_9").click(function (e) {
    var clickId = $(e.target).attr("id");
    clearMark(clickId);
    setMark($(e.target));
    setMark($("#3_grade_7"));
})
$("#2_grade_10").click(function (e) {
    var clickId = $(e.target).attr("id");
    clearMark(clickId);
    setMark($(e.target));
    setMark($("#3_grade_7"));
})
$("#2_grade_11").click(function (e) {
    var clickId = $(e.target).attr("id");
    clearMark(clickId);
    setMark($(e.target));
    setMark($("#3_grade_8"));
})
// 第三列
$("#3_grade_1").click(function (e) {
    var clickId = $(e.target).attr("id");
    console.log(clickId);
    clearMark(clickId);
    setMark($(e.target));
    setMark($("#4_grade_1"));
})
$("#3_grade_2").click(function (e) {
    var clickId = $(e.target).attr("id");
    console.log(clickId);
    clearMark(clickId);
    setMark($(e.target));
    setMark($("#4_grade_1"));
})
$("#3_grade_3").click(function (e) {
    var clickId = $(e.target).attr("id");
    console.log(clickId);
    clearMark(clickId);
    setMark($(e.target));
    setMark($("#4_grade_1"));
})
$("#3_grade_4").click(function (e) {
    var clickId = $(e.target).attr("id");
    console.log(clickId);
    clearMark(clickId);
    setMark($(e.target));
    setMark($("#4_grade_1"));
})
$("#3_grade_5").click(function (e) {
    var clickId = $(e.target).attr("id");
    console.log(clickId);
    clearMark(clickId);
    setMark($(e.target));
    setMark($("#4_grade_1"));
})
$("#3_grade_6").click(function (e) {
    var clickId = $(e.target).attr("id");
    console.log(clickId);
    clearMark(clickId);
    setMark($(e.target));
    setMark($("#4_grade_1"));
})
$("#3_grade_7").click(function (e) {
    var clickId = $(e.target).attr("id");
    console.log(clickId);
    clearMark(clickId);
    setMark($(e.target));
    setMark($("#4_grade_2"));
})
$("#3_grade_8").click(function (e) {
    var clickId = $(e.target).attr("id");
    console.log(clickId);
    clearMark(clickId);
    setMark($(e.target));
    setMark($("#4_grade_3"));
})
// 第四列
$("#4_grade_1").click(function (e) {
    var clickId = $(e.target).attr("id");
    console.log(clickId);
    clearMark(clickId);
    setMark($(e.target));
    setMark($("#5_grade_1"));
    setMark($("#5_grade_2"));
    setMark($("#5_grade_3"));
    setMark($("#5_grade_4"));
    setMark($("#5_grade_5"));
    setMark($("#5_grade_6"));
    setMark($("#5_grade_7"));
    setMark($("#5_grade_8"));
    setMark($("#5_grade_9"));
    setMark($("#5_grade_10"));
    setMark($("#5_grade_11"));
    setMark($("#5_grade_12"));
})

$("#4_grade_2").click(function (e) {
    var clickId = $(e.target).attr("id");
    console.log(clickId);
    clearMark(clickId);
    setMark($(e.target));
    setMark($("#5_grade_4"));
})
$("#4_grade_3").click(function (e) {
    var clickId = $(e.target).attr("id");
    console.log(clickId);
    clearMark(clickId);
    setMark($(e.target));
    setMark($("#5_grade_4"));
})