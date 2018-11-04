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

function setParamAvail() {
    if ($("#analysisType").val() == 'qualitative') {
        setAvailable();
    } else {
        setDisAvailable();
    }
}

//设置input不可用
function setDisAvailable() {
    $('#support').attr("disabled", true);
    $("#confidence").attr("disabled", true);
}

//设置input可用
function setAvailable() {
    $("#support").attr("disabled", false);
    $("#confidence").removeAttr("disabled");
}

$('#submit').click(function () {
    $.ajax({
        async: false,
        cache: false,
        type: "POST",
        url: "/getTableContent",
        data: {
            failureType: $("#failureType").val(),
            analysisType: $("#analysisType").val(),
            dataSource: $("#dataSource").val(),
            support: $("#support").val(),
            confidence: $("#confidence").val()
        },
        dataType: "html",
        success: function (response) {
            $('#contentViewer').html(response);
        }
    });
    return false;
});