function getNum(inputStr) {
    var idNum;
    switch (inputStr) {
        case "SF6泄漏":
            idNum = 1;
            break;
        case "操作机构异常":
            idNum = 2;
            break;
        case "辅助部件损坏":
            idNum = 3;
            break;
        case "主要组件劣化":
            idNum = 4;
            break;
        case "二次监控保护异常":
            idNum = 5;
            break;
        default:
            idNum = 6;
    }
    return idNum;
}

$("#searchFault").click(function () {
        var chosenItem = getNum($("#searchContent").val());
        for (i = 1; i <= 5; i++) {
            $("#line" + i).css("display", "none");
        }
        $("#line" + chosenItem).css("display", "table-row");
    }
)

$("#clearSearch").click(function () {
        for (i = 1; i <= 5; i++) {
            $("#line" + i).css("display", "table-row");
        }
    }
)