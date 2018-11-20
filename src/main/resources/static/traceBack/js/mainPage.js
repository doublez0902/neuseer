// 获取数据列表
function getDataSource() {
    $.ajax({
        type: "POST",
        url: "/getDataTable",
        dataType: "json",
        data: {
            failureType: $("#failureType").val(),
            analysisType: $("#analysisType").val()
        },
        success: function (data) {
            $("#dataSource").find("option:selected").text("");//清空选中文本
            $("#dataSource").empty();//清空option
            for (var key in data) {
                $("#dataSource").append("<option value=" + key + ">" + data[key] + "</option>")//添加新的option
            }
        }
    })
}

//设置参数可用性
function setParamAvail() {
    if ($("#analysisType").val() == 'qualitative') {
        setAvailable();
    } else {
        setDisAvailable();
    }
}

//设置input不可用
function setDisAvailable() {
    $('#supportForm').css("display", "none");
    $("#confirmationForm").css("display", "none");
    $("#minForm").css("display", "none");
    $("#maxForm").css("display", "none");
    $("#splitLine").css("display", "none");
}

//设置input可用
function setAvailable() {
    $('#supportForm').css("display", "block");
    $("#confirmationForm").css("display", "block");
    $('#minForm').css("display", "block");
    $('#maxForm').css("display", "block");
    $("#splitLine").css("display", "block");
}

//读取表格内容
function showTableDate() {
    $.ajax({
        async: false,
        cache: false,
        type: "POST",
        url: "/getTableContent",
        data: {
            dataSource: $("#dataSource").val(),
        },
        dataType: "html",
        success: function (response) {
            $('#contentViewer').html(response);
        }
    });
}

//提交表单
// $('#submit').click(function () {
//     $.ajax({
//         async: false,
//         cache: false,
//         type: "POST",
//         url: "/submintRun",
//         data: {
//             failureType: $("#failureType").val(),
//             analysisType: $("#analysisType").val(),
//             dataSource: $("#dataSource").val(),
//             support: $("#support").val(),
//             confidence: $("#confidence").val(),
//             minLength: $("#minLength").val(),
//             maxLength: $("#minLength").val()
//         },
//         dataType: "html",
//         success: function (response) {
//             $('#contentViewer').html(response);
//         }
//     });
//     return false;
// });

function getResult() {
    if ($("#dataSource").val() == null) {
        alert("未选择数据源");
        return;
    } else {
        alert("计算中");
        alert("计算完成");
        console.log("start");
        $.ajax({
            async: false,
            cache: false,
            type: "POST",
            url: "/getAnalysisResult",
            data: {
                failureType: $("#failureType").val(),
                analysisType: $("#analysisType").val()
            },
            dataType: "html",
            success: function (response) {
                $('#contentViewer').html(response);
            }
        });
    }
}

//算法运行
// function getResult() {
//     var failureType = $("#failureType").val();
//     var analysisType = $("#analysisType").val();
//     var FAtype = failureType + analysisType;
//     alert(FAtype);
//     alert("计算中");
//     $.ajax({
//         url : "getResult",
//         data : {"FAtype" : encodeURI(FAtype)},
//         async : false,
//         success : function(data) {
//             var list = data.replace("[", "").replace("]", "").replace(/\s+/g, "");
//             alert(list);
//         }
//     })
// }

