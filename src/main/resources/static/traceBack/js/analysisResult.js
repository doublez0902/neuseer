var myChart = echarts.init(document.getElementById('resultView'));

option_leak = {
    title: {
        text: '定性分析结果视图',
        subtext: '上：support    下：confidence',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x: 'center',
        y: 'bottom',
        data: []
    },
    toolbox: {
        show: true,
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    calculable: true,
    series: [
        {
            name: 'support',
            type: 'pie',
            radius: [20, 110],
            center: ['50%', '32%'],
            roseType: 'radius',
            data: [
                {value: 0.2156863, name: '{envir_level=4} => {fault_cause=SF6XieLou}'},
                {value: 0.2156863, name: '{envir_temp=envir_temp1} => {fault_cause=SF6XieLou}'},
                {value: 0.2549020, name: '{oper_numabc=oper_numabc1} => {fault_cause=SF6XieLou}'},
                {value: 0.2941176, name: '{open_current=open_current1} => {fault_cause=SF6XieLou}'},
                {value: 0.3137255, name: '{envir_temp=envir_temp2} => {fault_cause=SF6XieLou}'},
                {value: 0.2745098, name: '{envir_level=5} => {fault_cause=SF6XieLou}'},
                {value: 0.4705882, name: '{use_date=use_date3} => {fault_cause=SF6XieLou}'},
                {value: 0.2549020, name: '{load_level=80%以上} => {fault_cause=SF6XieLou}'},
                {value: 0.2156863, name: '{envir_temp=envir_temp2,use_date=use_date3} => {fault_cause=SF6XieLou}'},
                {value: 0.2352941, name: '{envir_level=5,use_date=use_date3} => {fault_cause=SF6XieLou}'},
                {value: 0.2156863, name: '{load_level=80%以上,use_date=use_date3} => {fault_cause=SF6XieLou}'},
                {value: 0.2352941, name: '{open_current=open_current1,use_date=use_date3}'},
                {value: 0.2352941, name: '{oper_numabc=oper_numabc1,use_date=use_date3} => {fault_cause=SF6XieLou}'},
            ]
        },
        {
            name: 'confidence',
            type: 'pie',
            radius: [30, 110],
            center: ['50%', '78%'],
            roseType: 'radius',
            data: [
                {value: 0.5789474, name: '{envir_level=4} => {fault_cause=SF6XieLou}'},
                {value: 0.5789474, name: '{envir_temp=envir_temp1} => {fault_cause=SF6XieLou}'},
                {value: 0.5909091, name: '{oper_numabc=oper_numabc1} => {fault_cause=SF6XieLou}'},
                {value: 0.6250000, name: '{open_current=open_current1} => {fault_cause=SF6XieLou}'},
                {value: 0.6956522, name: '{envir_temp=envir_temp2} => {fault_cause=SF6XieLou}'},
                {value: 0.7000000, name: '{envir_level=5} => {fault_cause=SF6XieLou}'},
                {value: 0.7500000, name: '{use_date=use_date3} => {fault_cause=SF6XieLou}'},
                {value: 0.8125000, name: '{load_level=80%以上} => {fault_cause=SF6XieLou}'},
                {value: 0.8461538, name: '{envir_temp=envir_temp2,use_date=use_date3} => {fault_cause=SF6XieLou}'},
                {value: 0.8571429, name: '{envir_level=5,use_date=use_date3} => {fault_cause=SF6XieLou}'},
                {value: 0.9166667, name: '{load_level=80%以上,use_date=use_date3} => {fault_cause=SF6XieLou}'},
                {value: 0.9230769, name: '{open_current=open_current1,use_date=use_date3}'},
                {value: 0.9230769, name: '{oper_numabc=oper_numabc1,use_date=use_date3} => {fault_cause=SF6XieLou}'},
            ]
        }
    ]
};
option_deterioration = {
    title: {
        text: '定性分析结果视图',
        subtext: '上：support    下：confidence',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x: 'center',
        y: 'bottom',
        data: []
    },
    toolbox: {
        show: true,
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    calculable: true,
    series: [
        {
            name: 'support',
            type: 'pie',
            radius: [25, 110],
            center: ['50%', '32%'],
            roseType: 'radius',
            data: [
                {value: 0.28, name: '{oper_numabc=oper_numabc3} => {fault_cause=ZhuYao}'},
                {value: 0.26, name: '{envir_temp=envir_temp1} => {fault_cause=ZhuYao}'},
                {value: 0.30, name: '{envir_level=4} => {fault_cause=ZhuYao}'},
                {value: 0.28, name: '{load_level=40%-60%} => {fault_cause=ZhuYao}'},
                {value: 0.22, name: '{envir_level=4,open_current=open_current3} => {fault_cause=ZhuYao}'},
                {value: 0.24, name: '{load_level=40%-60%,open_current=open_current3} => {fault_cause=ZhuYao}'},
                {value: 0.38, name: '{use_date=use_date2} => {fault_cause=ZhuYao}'},
                {value: 0.40, name: '{open_current=open_current3} => {fault_cause=ZhuYao}'},
                {value: 0.24, name: '{envir_level=4,use_date=use_date2} => {fault_cause=ZhuYao}'},
                {value: 0.20, name: '{oper_numabc=oper_numabc3,use_date=use_date2} => {fault_cause=ZhuYao}'},
                {value: 0.28, name: '{open_current=open_current3,use_date=use_date2} => {fault_cause=ZhuYao}'},
            ]
        },
        {
            name: 'confidence',
            type: 'pie',
            radius: [30, 110],
            center: ['50%', '78%'],
            roseType: 'radius',
            data: [
                {value: 0.6086957, name: '{oper_numabc=oper_numabc3} => {fault_cause=ZhuYao}'},
                {value: 0.6190476, name: '{envir_temp=envir_temp1} => {fault_cause=ZhuYao}'},
                {value: 0.6521739, name: '{envir_level=4} => {fault_cause=ZhuYao}'},
                {value: 0.6666667, name: '{load_level=40%-60%} => {fault_cause=ZhuYao}'},
                {value: 0.7333333, name: '{envir_level=4,open_current=open_current3} => {fault_cause=ZhuYao}'},
                {value: 0.7500000, name: '{load_level=40%-60%,open_current=open_current3} => {fault_cause=ZhuYao}'},
                {value: 0.7916667, name: '{use_date=use_date2} => {fault_cause=ZhuYao}'},
                {value: 0.8000000, name: '{open_current=open_current3} => {fault_cause=ZhuYao}'},
                {value: 0.8571429, name: '{envir_level=4,use_date=use_date2} => {fault_cause=ZhuYao}'},
                {value: 0.9090909, name: '{oper_numabc=oper_numabc3,use_date=use_date2} => {fault_cause=ZhuYao}'},
                {value: 0.9333333, name: '{open_current=open_current3,use_date=use_date2} => {fault_cause=ZhuYao}'},
            ]
        }
    ]
};
option_abnormal = {
    title: {
        text: '定性分析结果视图',
        subtext: '左：support    右：confidence',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x: 'center',
        y: 'bottom',
        data: []
    },
    toolbox: {
        show: true,
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    calculable: true,
    series: [
        {
            name: 'support',
            type: 'pie',
            radius: [20, 110],
            center: ['50%', '32%'],
            roseType: 'radius',
            data: [
                {value: 0.2750000, name: '{load_level=40%以下} => {fault_cause=CaoZuo}'},
                {value: 0.2000000, name: '{envir_temp=envir_temp2} => {fault_cause=CaoZuo}'},
                {value: 0.2333333, name: '{envir_temp=envir_temp3} => {fault_cause=CaoZuo}'},
                {value: 0.2083333, name: '{load_level=40%-60%,envir_level=4} => {fault_cause=CaoZuo}'},
                {value: 0.2166667, name: '{load_level=40%-60%,use_date=use_date3} => {fault_cause=CaoZuo}'},
                {value: 0.2250000, name: '{envir_temp=envir_temp1,use_date=use_date3} => {fault_cause=CaoZuo}'},
                {value: 0.2416667, name: '{envir_temp=envir_temp1,oper_numabc=oper_numabc3} => {fault_cause=CaoZuo}'},
                {value: 0.3916667, name: '{envir_temp=envir_temp1} => {fault_cause=CaoZuo}'},
                {value: 0.4500000, name: '{oper_numabc=oper_numabc3} => {fault_cause=CaoZuo}'},
                {value: 0.4166667, name: '{envir_level=4} => {fault_cause=CaoZuo}'},
                {value: 0.3666667, name: '{load_level=40%-60%} => {fault_cause=CaoZuo}'},
                {value: 0.2833333, name: '{use_date=use_date2} => {fault_cause=CaoZuo}'},
                {value: 0.2916667, name: '{oper_numabc=oper_numabc3,use_date=use_date3} => {fault_cause=CaoZuo}'},
                {value: 0.2916667, name: '{envir_level=4,use_date=use_date3} => {fault_cause=CaoZuo}'},
                {value: 0.5000000, name: '{use_date=use_date3} => {fault_cause=CaoZuo}'},
                {
                    value: 0.2000000,
                    name: '{load_level=40%-60%,open_current=open_current3,use_date=use_date3} => {fault_cause=CaoZuo}'
                },
                {value: 0.2083333, name: '{load_level=40%-60%,oper_numabc=oper_numabc3} => {fault_cause=CaoZuo}'},
                {value: 0.2166667, name: '{oper_numabc=oper_numabc2} => {fault_cause=CaoZuo}'},
                {
                    value: 0.2250000,
                    name: '{envir_level=4,open_current=open_current3,use_date=use_date3} => {fault_cause=CaoZuo}'
                },
                {value: 0.2333333, name: '{envir_level=4,oper_numabc=oper_numabc3} => {fault_cause=CaoZuo}'},
                {value: 0.3166667, name: '{load_level=40%-60%,open_current=open_current3} => {fault_cause=CaoZuo}'},
                {value: 0.3333333, name: '{envir_level=4,open_current=open_current3} => {fault_cause=CaoZuo}'},
                {value: 0.2666667, name: '{envir_temp=envir_temp1,open_current=open_current3}'},
                {value: 0.3750000, name: '{open_current=open_current3,use_date=use_date3}'},
                {
                    value: 0.2333333,
                    name: '{oper_numabc=oper_numabc3,open_current=open_current3,use_date=use_date3} => {fault_cause=CaoZuo}'
                },
                {value: 0.6000000, name: '{open_current=open_current3} => {fault_cause=CaoZuo}'},
                {
                    value: 0.3583333,
                    name: '{oper_numabc=oper_numabc3,open_current=open_current3} => {fault_cause=CaoZuo}'
                },
                {
                    value: 0.2000000,
                    name: '{load_level=40%-60%,oper_numabc=oper_numabc3,open_current=open_current3} => {fault_cause=CaoZuo}'
                },
            ]
        },
        {
            name: 'confidence',
            type: 'pie',
            radius: [30, 110],
            center: ['50%', '78%'],
            roseType: 'radius',
            data: [
                {value: 0.7500000, name: '{load_level=40%以下} => {fault_cause=CaoZuo}'},
                {value: 0.7741935, name: '{envir_temp=envir_temp2} => {fault_cause=CaoZuo}'},
                {value: 0.8235294, name: '{envir_temp=envir_temp3} => {fault_cause=CaoZuo}'},
                {value: 0.8333333, name: '{load_level=40%-60%,envir_level=4} => {fault_cause=CaoZuo}'},
                {value: 0.8387097, name: '{load_level=40%-60%,use_date=use_date3} => {fault_cause=CaoZuo}'},
                {value: 0.8437500, name: '{envir_temp=envir_temp1,use_date=use_date3} => {fault_cause=CaoZuo}'},
                {value: 0.8529412, name: '{envir_temp=envir_temp1,oper_numabc=oper_numabc3} => {fault_cause=CaoZuo}'},
                {value: 0.8545455, name: '{envir_temp=envir_temp1} => {fault_cause=CaoZuo}'},
                {value: 0.8571429, name: '{oper_numabc=oper_numabc3} => {fault_cause=CaoZuo}'},
                {value: 0.8620690, name: '{envir_level=4} => {fault_cause=CaoZuo}'},
                {value: 0.8627451, name: '{load_level=40%-60%} => {fault_cause=CaoZuo}'},
                {value: 0.8717949, name: '{use_date=use_date2} => {fault_cause=CaoZuo}'},
                {value: 0.8750000, name: '{oper_numabc=oper_numabc3,use_date=use_date3} => {fault_cause=CaoZuo}'},
                {value: 0.8750000, name: '{envir_level=4,use_date=use_date3} => {fault_cause=CaoZuo}'},
                {value: 0.8823529, name: '{use_date=use_date3} => {fault_cause=CaoZuo}'},
                {
                    value: 0.8888889,
                    name: '{load_level=40%-60%,open_current=open_current3,use_date=use_date3} => {fault_cause=CaoZuo}'
                },
                {value: 0.8928571, name: '{load_level=40%-60%,oper_numabc=oper_numabc3} => {fault_cause=CaoZuo}'},
                {value: 0.8965517, name: '{oper_numabc=oper_numabc2} => {fault_cause=CaoZuo}'},
                {
                    value: 0.9000000,
                    name: '{envir_level=4,open_current=open_current3,use_date=use_date3} => {fault_cause=CaoZuo}'
                },
                {value: 0.9032258, name: '{envir_level=4,oper_numabc=oper_numabc3} => {fault_cause=CaoZuo}'},
                {value: 0.9047619, name: '{load_level=40%-60%,open_current=open_current3} => {fault_cause=CaoZuo}'},
                {value: 0.9090909, name: '{envir_level=4,open_current=open_current3} => {fault_cause=CaoZuo}'},
                {value: 0.9142857, name: '{envir_temp=envir_temp1,open_current=open_current3}'},
                {value: 0.9183673, name: '{open_current=open_current3,use_date=use_date3}'},
                {
                    value: 0.9333333,
                    name: '{oper_numabc=oper_numabc3,open_current=open_current3,use_date=use_date3} => {fault_cause=CaoZuo}'
                },
                {value: 0.9350649, name: '{open_current=open_current3} => {fault_cause=CaoZuo}'},
                {
                    value: 0.9555556,
                    name: '{oper_numabc=oper_numabc3,open_current=open_current3} => {fault_cause=CaoZuo}'
                },
                {
                    value: 0.9600000,
                    name: '{load_level=40%-60%,oper_numabc=oper_numabc3,open_current=open_current3} => {fault_cause=CaoZuo}'
                },
            ]
        }
    ]
};

option_damage = {
    title: {
        text: '定性分析结果视图',
        subtext: '上：support    下：confidence',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x: 'center',
        y: 'bottom',
        data: []
    },
    toolbox: {
        show: true,
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    calculable: true,
    series: [
        {
            name: 'support',
            type: 'pie',
            radius: [20, 110],
            center: ['50%', '32%'],
            roseType: 'radius',
            data: [
                {value: 0.2982456, name: '{load_level=40%-60%} => {fault_cause=FuZhu}'},
                {value: 0.2982456, name: '{envir_temp=envir_temp2} => {fault_cause=FuZhu}'},
                {value: 0.2280702, name: '{load_level=40%-60%,envir_level=4} => {fault_cause=FuZhu}'},
                {value: 0.2280702, name: '{load_level=40%-60%,use_date=use_date3} => {fault_cause=FuZhu}'},
                {value: 0.4035088, name: '{envir_level=4} => {fault_cause=FuZhu}'},
                {value: 0.2631579, name: '{envir_level=4,use_date=use_date3} => {fault_cause=FuZhu}'},
                {value: 0.4385965, name: '{use_date=use_date3} => {fault_cause=FuZhu}'},
                {
                    value: 0.2105263,
                    name: '{envir_level=4,open_current=open_current3,use_date=use_date3} => {fault_cause=FuZhu}'
                },
                {
                    value: 0.2105263,
                    name: '{load_level=40%-60%,open_current=open_current3,use_date=use_date3} => {fault_cause=FuZhu}'
                },
                {value: 0.2105263, name: '{envir_level=4,oper_numabc=oper_numabc2} => {fault_cause=FuZhu}'},
                {value: 0.2807018, name: '{load_level=40%-60%,open_current=open_current3} => {fault_cause=FuZhu}'},
                {
                    value: 0.2280702,
                    name: '{load_level=40%-60%,envir_level=4,open_current=open_current3} => {fault_cause=FuZhu}'
                },
                {value: 0.3333333, name: '{open_current=open_current3,use_date=use_date3} => {fault_cause=FuZhu}'},
                {value: 0.3333333, name: '{envir_level=4,open_current=open_current3} => {fault_cause=FuZhu}'},
                {
                    value: 0.2631579,
                    name: '{oper_numabc=oper_numabc2,open_current=open_current3} => {fault_cause=FuZhu}'
                },
                {value: 0.2982456, name: '{oper_numabc=oper_numabc2} => {fault_cause=FuZhu}'},
                {value: 0.2982456, name: '{load_level=80%以上} => {fault_cause=FuZhu}'},
                {value: 0.5087719, name: '{open_current=open_current3} => {fault_cause=FuZhu}'},
                {value: 0.2280702, name: '{envir_temp=envir_temp2,use_date=use_date3} => {fault_cause=FuZhu}'},
                {value: 0.2280702, name: '{oper_numabc=oper_numabc2,use_date=use_date3} => {fault_cause=FuZhu}'},
                {value: 0.2280702, name: '{load_level=80%以上,open_current=open_current3} => {fault_cause=FuZhu}'},
                {value: 0.2456140, name: '{envir_temp=envir_temp2,open_current=open_current3} => {fault_cause=FuZhu}'}
            ]
        },
        {
            name: 'confidence',
            type: 'pie',
            radius: [30, 110],
            center: ['50%', '78%'],
            roseType: 'radius',
            data: [
                {value: 0.7083333, name: '{load_level=40%-60%} => {fault_cause=FuZhu}'},
                {value: 0.7083333, name: '{envir_temp=envir_temp2} => {fault_cause=FuZhu}'},
                {value: 0.7222222, name: '{load_level=40%-60%,envir_level=4} => {fault_cause=FuZhu}'},
                {value: 0.7222222, name: '{load_level=40%-60%,use_date=use_date3} => {fault_cause=FuZhu}'},
                {value: 0.7419355, name: '{envir_level=4} => {fault_cause=FuZhu}'},
                {value: 0.7500000, name: '{envir_level=4,use_date=use_date3} => {fault_cause=FuZhu}'},
                {value: 0.7575758, name: '{use_date=use_date3} => {fault_cause=FuZhu}'},
                {
                    value: 0.8000000,
                    name: '{envir_level=4,open_current=open_current3,use_date=use_date3} => {fault_cause=FuZhu}'
                },
                {
                    value: 0.8000000,
                    name: '{load_level=40%-60%,open_current=open_current3,use_date=use_date3} => {fault_cause=FuZhu}'
                },
                {value: 0.8000000, name: '{envir_level=4,oper_numabc=oper_numabc2} => {fault_cause=FuZhu}'},
                {value: 0.8000000, name: '{load_level=40%-60%,open_current=open_current3} => {fault_cause=FuZhu}'},
                {
                    value: 0.8125000,
                    name: '{load_level=40%-60%,envir_level=4,open_current=open_current3} => {fault_cause=FuZhu}'
                },
                {value: 0.8260870, name: '{open_current=open_current3,use_date=use_date3} => {fault_cause=FuZhu}'},
                {value: 0.8260870, name: '{envir_level=4,open_current=open_current3} => {fault_cause=FuZhu}'},
                {
                    value: 0.8333333,
                    name: '{oper_numabc=oper_numabc2,open_current=open_current3} => {fault_cause=FuZhu}'
                },
                {value: 0.8500000, name: '{oper_numabc=oper_numabc2} => {fault_cause=FuZhu}'},
                {value: 0.8500000, name: '{load_level=80%以上} => {fault_cause=FuZhu}'},
                {value: 0.8529412, name: '{open_current=open_current3} => {fault_cause=FuZhu}'},
                {value: 0.8666667, name: '{envir_temp=envir_temp2,use_date=use_date3} => {fault_cause=FuZhu}'},
                {value: 0.8666667, name: '{oper_numabc=oper_numabc2,use_date=use_date3} => {fault_cause=FuZhu}'},
                {value: 0.9285714, name: '{load_level=80%以上,open_current=open_current3} => {fault_cause=FuZhu}'},
                {value: 0.9333333, name: '{envir_temp=envir_temp2,open_current=open_current3} => {fault_cause=FuZhu}'}
            ]
        }
    ]
};
