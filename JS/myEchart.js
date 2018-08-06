var run = {
    /*初始化*/
    init: function () {
        run.echartiCiro();
        run.echartTopLleft();
        run.echartTopRinght();
        run.middleTechart();
        run.middleEcharR();
        run.bottomLechart();
        run.bottomRchart();
    },
    //最近10环切换
    addActive: function () {
        $(this).siblings('span').removeClass("active");
        $(this).addClass("active");
    },
    /*加载头部echart环形图*/
    echartiCiro: function () {
        var e = 80;
        var myChart = echarts.init(document.getElementById('ciroEchart'));
        var option = {
            title: {
                show: true,
                text: e + '%',
                x: 'center',
                y: 'center',
                textStyle: {
                    fontSize: '16',
                    color: '#666666',
                    fontWeight: 'normal'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{d}%",
                show: false
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                show: false
            },
            series:
            {
                name: '',
                type: 'pie',
                radius: ['55%', '75%'],
                avoidLabelOverlap: true,
                hoverAnimation: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    { value: e, name: '' },
                    { value: 100 - e, name: '' }
                ]
            },
            color: ["#416bce", "#7ab3fa"]

        };
        myChart.setOption(option)
    },
    //左顶部echart图
    echartTopLleft: function () {
        var ChartTOP = echarts.init(document.getElementById('topL'));
        var colors = ['#69d1ab', '#577bcf', '#95c3f5', '#ffc929'];
        var option = {
            width: "100%",
            title: {
                text: '项目总进度',
                // subtext: '副标题',
                top: '-3px',
                textStyle: {
                    //文字颜色
                    color: '#333',
                    //字体风格,'normal','italic','oblique'
                    fontStyle: 'normal',
                    //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                    fontWeight: 'normal',
                    //字体系列
                    fontFamily: 'sans-serif',
                    //字体大小
                    fontSize: 18
                }

            },
            color: colors,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            grid: {
                left: '2%',
                top: '40%',
                right: '0%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    // dataView: { show: true, readOnly: false },
                    // restore: { show: true },
                    // saveAsImage: { show: true }
                }
            },
            legend: {
                icon: 'circle',//图粒类型
                right: '0',
                itemWidth: 10,//宽
                itemHeight: 10,//高
                itemGap: 20,//间距
                data: ['质量巡检', '总包单位', '监理单位', '建设单位'],
                textStyle: {
                    //文字颜色
                    color: '#666',
                    //字体风格,'normal','italic','oblique'
                    fontStyle: 'normal',
                    //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                    fontWeight: 'normal',
                    //字体系列
                    fontFamily: 'MicrosoftYaHei',
                    //字体大小
                    fontSize: 14
                }
            },
            xAxis: [
                {
                    type: 'category',
                    //控制x轴线是否显示
                    axisLine: { show: false },
                    // 控制网格线是否显示
                    splitLine: {
                        show: false
                    },
                    // 去除x轴上的刻度线
                    axisTick: {
                        show: false
                    },
                    data: ['4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    // name: '蒸发量',
                    min: 0,
                    max: 250,
                    position: 'right',
                    axisLine: { show: false },
                    // 控制网格线是否显示
                    splitLine: {
                        show: true
                    },
                    // 去除y轴上的刻度线
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        formatter: '{value} ml',
                        show: false
                    }
                },
                {
                    type: 'value',
                    // name: '降水量',
                    min: 0,
                    max: 250,
                    position: 'right',
                    offset: 80,
                    axisLine: { show: false },
                    // 控制网格线是否显示
                    splitLine: {
                        show: true
                    },
                    // 去除y轴上的刻度线
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        formatter: '{value}',
                        show: true
                    }
                },
                {
                    type: 'value',
                    // name: '温度',
                    min: 0,
                    max: 25,
                    // show: false,
                    position: 'left',
                    axisLine: { show: false },
                    // 控制网格线是否显示
                    splitLine: {
                        show: true
                    },
                    // 去除y轴上的刻度线
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        formatter: '{value}',
                        show: true
                    }
                }
            ],
            series: [
                {
                    name: '质量巡检',
                    type: 'line',
                    yAxisIndex: 2,
                    data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3],
                    //symbol:'none',  //这句就是去掉点的  
                    symbolSize: 10, //尺寸
                    symbol: 'circle', //实心
                    smooth: false,  //true,false这句就是让曲线变平滑的 
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                width: 3// 0.1的线条是非常细的了
                            }
                        }
                    },

                },
                {
                    name: '总包单位',
                    type: 'bar',
                    barWidth: 10,
                    data: [30, 59, 90, 264, 28.7, 70.7, 175.6],
                    itemStyle: {
                        normal: {
                            barBorderRadius: [10, 10, 0, 0],//设置圆角
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#4f7adf'
                            }, {
                                offset: 1,
                                color: '#365fc1'
                            }])
                            // shadowColor: 'rgba(0, 0, 0, 0.4)',
                            // shadowBlur: 20
                        }
                    }
                },
                {
                    name: '监理单位',
                    type: 'bar',
                    barWidth: 10,
                    data: [20, 49, 70, 23.2, 25.6, 76.7, 135.6],
                    itemStyle: {
                        normal: {
                            barBorderRadius: [10, 10, 0, 0],//设置圆角
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#abd2f2'
                            }, {
                                offset: 1,
                                color: '#74affb'
                            }])
                            // shadowColor: 'rgba(0, 0, 0, 0.4)',
                            // shadowBlur: 20
                        }
                    }
                },
                {
                    name: '建设单位',
                    type: 'bar',
                    barWidth: 10,
                    data: [20, 49, 70, 23.2, 25.6, 76.7, 135.6],
                    itemStyle: {
                        normal: {
                            barBorderRadius: [10, 10, 0, 0],//设置圆角
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#ffd235'
                            }, {
                                offset: 1,
                                color: '#ffb729'
                            }])
                            // shadowColor: 'rgba(0, 0, 0, 0.4)',
                            // shadowBlur: 20
                        }
                    }
                }
            ]
        };
        ChartTOP.setOption(option);
        window.addEventListener("resize", function () {
            ChartTOP.resize();
        });
    },
    //右顶部echart图
    echartTopRinght: function () {
        var ChartTOPRinght = echarts.init(document.getElementById('topR'));
        var option = {
             width: '100%',
            tooltip: {
                trigger: 'axis',

                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            color: ['#ff6152', '#ffc929', '#4d78dc', '#69d1ab'],
            grid: {
                left: '-5%',
                top: '15%',
                right: '3%',
                bottom: '0%',
                containLabel: true
            },
            title: {
                text: '问题统计数量TOP10',
                // subtext: '问题数',    
                // subtextStyle:{
                //   position: 'right'    
                // },
                top: '-3px',
                textStyle: {
                    //文字颜色
                    color: '#333',
                    //字体风格,'normal','italic','oblique'
                    fontStyle: 'normal',
                    //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                    fontWeight: 'normal',
                    //字体系列
                    fontFamily: 'sans-serif',
                    //字体大小
                    fontSize: 18
                }

            },
            legend: {
                icon: 'circle',//图粒类型
                right: '0',
                itemWidth: 10,//宽
                itemHeight: 10,//高
                itemGap: 20,//间距
                data: ['已逾期', '待整改', '待验证', '已关闭'],
                textStyle: {
                    //文字颜色
                    color: '#666',
                    //字体风格,'normal','italic','oblique'
                    fontStyle: 'normal',
                    //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                    fontWeight: 'normal',
                    //字体系列
                    fontFamily: 'MicrosoftYaHei',
                    //字体大小
                    fontSize: 14
                }
            },
            xAxis: {
                type: 'value',
                // name: '问题数',
                nameLocation: 'end',
                nameTextStyle: {
                    color: '#666666',
                    align: 'right'
                },
                //控制x轴线是否显示
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#dddddd'
                    }
                },
                // 控制网格线是否显示
                splitLine: {
                    show: true
                },
                // 去除x轴上的刻度线
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#666',//数值的颜色样式
                        fontSize: '12px',
                        fontFamily: 'MicrosoftYaHei'
                    }
                }
            },
            yAxis: {
                type: 'category',
                //控制x轴线是否显示
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#dddddd'
                    }
                },
                // 控制网格线是否显示
                splitLine: {
                    show: false
                },
                // 去除y轴上的刻度线
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#666',//数值的颜色样式
                        fontSize: '12px',
                        fontFamily: 'MicrosoftYaHei',
                        interval: 0
                    }
                },
                data: ['盾构施工', '管片施工', '箱涵工程', '车道板工程', '内部结构', '洞门工程', '钢管结构', '地基结构', '主体结构', '防水工程']
            },
            series: [
                {
                    name: '已逾期',
                    type: 'bar',
                    barWidth: 14,
                    stack: '总量',
                    itemStyle: {
                        normal: {
                            barBorderRadius: [0, 10, 10, 0],
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#ff715b'
                            }, {
                                offset: 1,
                                color: '#ff8969'
                            }])
                            //  shadowColor: 'rgba(0, 0, 0, 0.4)',
                            //  shadowBlur: 20
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            color: '#fff',
                            align: 'center',
                            verticalAlign: 'middle'
                            // position: 'insideRight'
                        }
                    },
                    data: [320, 302, 301, 334, 390, 330, 320, 400, 500, 600]
                },
                {
                    name: '待整改',
                    type: 'bar',
                    barWidth: 14,
                    stack: '总量',
                    itemStyle: {
                        normal: {
                            barBorderRadius: [0, 10, 10, 0],
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#ffbe4f'
                            }, {
                                offset: 1,
                                color: '#ffd55a'
                            }])
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            color: '#fff',
                            align: 'center',
                            verticalAlign: 'middle'
                            // position: 'insideRight'
                        }
                    },
                    data: [120, 132, 101, 134, 90, 230, 210, 134, 90, 230]
                },
                {
                    name: '待验证',
                    type: 'bar',
                    barWidth: 14,
                    stack: '总量',
                    itemStyle: {
                        normal: {
                            barBorderRadius: [0, 10, 10, 0],
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#47a5f4'
                            }, {
                                offset: 1,
                                color: '#5883e9'
                            }])
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            color: '#fff',
                            align: 'center',
                            verticalAlign: 'middle'
                            // position: 'insideRight'
                        }
                    },
                    data: [220, 182, 191, 234, 290, 330, 310, 134, 90, 230]
                },
                {
                    name: '已关闭',
                    type: 'bar',
                    barWidth: 14,
                    stack: '总量',
                    itemStyle: {
                        normal: {
                            barBorderRadius: [0, 10, 10, 0],
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#6cc2d4'
                            }, {
                                offset: 1,
                                color: '#69d1ab'
                            }])
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            color: '#fff',
                            align: 'center',
                            verticalAlign: 'middle'
                            // position: 'insideRight'
                        }
                    },
                    data: [150, 212, 201, 154, 190, 330, 410, 134, 90, 230]
                },
            ]
        }
        ChartTOPRinght.setOption(option);
        window.addEventListener("resize", function () {
            ChartTOPRinght.resize();
        });
    },
    //中间左侧图
    middleTechart: function () {
        var middleEcharL = echarts.init(document.getElementById('middleL'));
        var option = {
            title: {
                text: '问题闭环情况',
                top: '-3px',
                textStyle: {
                    //文字颜色
                    color: '#333',
                    //字体风格,'normal','italic','oblique'
                    fontStyle: 'normal',
                    //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                    fontWeight: 'normal',
                    //字体系列
                    fontFamily: 'sans-serif',
                    //字体大小
                    fontSize: 21
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            color: ['#557bcf', '#95c3f5', '#ffc929'],
            legend: {
                icon: 'circle',//图粒类型
                right: '0',
                itemWidth: 10,//宽
                itemHeight: 10,//高
                itemGap: 20,//间距
                textStyle: {
                    //文字颜色
                    color: '#666',
                    //字体风格,'normal','italic','oblique'
                    fontStyle: 'normal',
                    //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                    fontWeight: 'normal',
                    //字体系列
                    fontFamily: 'MicrosoftYaHei',
                    //字体大小
                    fontSize: 14
                },
                data: ['西明挖段', '盾构段', '东明挖段']
            },
            grid: {
                left: '0%',
                top: '40%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7'],
                //控制y轴线是否显示
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#dddddd'
                    }
                },
                // 控制网格线是否显示
                splitLine: {
                    show: false
                },
                // 去除x轴上的刻度线
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#666',//数值的颜色样式
                        fontSize: '12px',
                        fontFamily: 'MicrosoftYaHei',
                        interval: 0
                    }
                },
            },
            yAxis: {
                type: 'value',
                //控制y轴线是否显示
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#dddddd'
                    }
                },
                // 控制网格线是否显示
                splitLine: {
                    show: true
                },
                // 去除y轴上的刻度线
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#666',//数值的颜色样式
                        fontSize: '12px',
                        fontFamily: 'MicrosoftYaHei',
                        interval: 0
                    }
                },
            },
            series: [
                {
                    name: '西明挖段',
                    symbolSize: 10, //尺寸
                    symbol: 'circle', //实心
                    smooth: false,  //true,false这句就是让曲线变平滑的 
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '盾构段',
                    type: 'line',
                    symbolSize: 10, //尺寸
                    symbol: 'circle', //实心
                    smooth: false,  //true,false这句就是让曲线变平滑的 
                    stack: '总量',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '东明挖段',
                    symbolSize: 10, //尺寸
                    symbol: 'circle', //实心
                    smooth: false,  //true,false这句就是让曲线变平滑的 
                    type: 'line',
                    stack: '总量',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },

            ]
        };
        middleEcharL.setOption(option);
        window.addEventListener("resize", function () {
            middleEcharL.resize();
        });//自适应
    },
    //中间右侧图
    middleEcharR: function () {
        var middleRChart = echarts.init(document.getElementById("middleR"));
        // 指定图表的配置项和数据
        var option = {
            title: {
                // text: '工序验收情况',
                // // subtext: '副标题',
                // top: '-3px',
                // textStyle: {
                //     //文字颜色
                //     color: '#333',
                //     //字体风格,'normal','italic','oblique'
                //     fontStyle: 'normal',
                //     //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                //     fontWeight: 'normal',
                //     //字体系列
                //     fontFamily: 'sans-serif',
                //     //字体大小
                //     fontSize: 21
                // }
            },
            //鼠标触发提示数量
            tooltip: {
                trigger: "axis"
            },
            grid: {//设置在容器的占比
                left: '2%',
                right: '3%',
                bottom: '10%',
                top: '8%',
                containLabel: true
            },
            legend: {
                data: ["", ""]
            },
            //x轴显示
            xAxis: {
                data: ['4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7'],
                //控制y轴线是否显示
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#dddddd'
                    }
                },
                // 控制网格线是否显示
                splitLine: {
                    show: false
                },
                // 去除y轴上的刻度线
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#666',//数值的颜色样式
                        fontSize: '12px',
                        fontFamily: 'MicrosoftYaHei',
                        interval: 0
                    }
                },
            },
            //y轴显示
            yAxis: {
                //控制y轴线是否显示
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#dddddd'
                    }
                },
                // 控制网格线是否显示
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#f1f1f1'
                    }
                },
                // 去除y轴上的刻度线
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#666',//数值的颜色样式
                        fontSize: '12px',
                        fontFamily: 'MicrosoftYaHei',
                        interval: 0
                    }
                },
            },
            series: [
                {
                    name: "",
                    type: "bar",
                    stack: "业务",//设置叠层的属性
                    data: [60, 52, 50, 64, 62, 83, 43],
                    barWidth: 20,
                    itemStyle: {
                        normal: {
                            barBorderRadius: [10, 10, 0, 0],
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#365fc1'
                            }, {
                                offset: 1,
                                color: '#4f7adf'
                            }])
                        }
                    }
                },
                {
                    name: "",
                    type: "bar",
                    stack: "业务",//折叠显示
                    barWidth: 20,
                    data: [100, 80, 90, 95, 120, 110, 85],
                    //显示颜色
                    itemStyle: {
                        normal: {
                            barBorderRadius: [10, 10, 0, 0],
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#ffb729'
                            }, {
                                offset: 1,
                                color: '#ffd235'
                            }])
                        }
                    }
                }
            ]
        };
        middleRChart.setOption(option);
        window.addEventListener("resize", function () {
            middleRChart.resize();
        });//自适应
    },
    //底部左侧图
    bottomLechart: function () {
        var bottomLChart = echarts.init(document.getElementById("bottomL"));
        var option = {
            title: {
                text: '盾构推进质量',
                // subtext: '轴线控制',
                // subtextStyle: {
                //        align: 'right',
                //        verticalAlign:'top'


                // },
                top: '-3px',
                textStyle: {
                    //文字颜色
                    color: '#333',
                    //字体风格,'normal','italic','oblique'
                    fontStyle: 'normal',
                    //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                    fontWeight: 'normal',
                    //字体系列
                    fontFamily: 'sans-serif',
                    //字体大小
                    fontSize: 18
                }
            },
            color: ['#577bcf', '#95c3f5'],
            grid: {//设置在容器的占比
                left: '-2%',
                right: '3%',
                bottom: '0%',
                top: '20%',
                containLabel: true
            },
            legend: {
                data: ["尾", "切"],
                icon: 'circle',//图粒类型
                right: '200',
                itemWidth: 10,//宽
                itemHeight: 10,//高
                itemGap: 20,//间距
                textStyle: {
                    //文字颜色
                    color: '#666',
                    //字体风格,'normal','italic','oblique'
                    fontStyle: 'normal',
                    //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                    fontWeight: 'normal',
                    //字体系列
                    fontFamily: 'MicrosoftYaHei',
                    //字体大小
                    fontSize: 14
                },
            },
            xAxis: {
                type: 'value',
                // name: '平面偏差',
                nameTextStyle: {
                    color: '#959595',
                    align: 'center',
                    fontSize: 12,
                    fontFamily: 'MicrosoftYaHei',
                    width: 12,
                    height: 30
                },
                min: -150,
                max: 150,
                //控制y轴线是否显示
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#f0f0f0'
                    }
                },
                // 控制网格线是否显示
                splitLine: {
                    show: true,
                    lineStyle: {//网格线样式
                        color: '#f0f0f0'
                    }
                },
                // 去除y轴上的刻度线
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#666',//数值的颜色样式
                        fontSize: '12px',
                        fontFamily: 'MicrosoftYaHei',
                        interval: 0
                    }
                },
            },
            yAxis: {
                type: 'value',
                name: '高程偏差',
                nameTextStyle: {
                    color: '#959595'
                },
                min: -150,
                max: 150,
                //控制y轴线是否显示
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#f0f0f0'
                    }
                },
                // 控制网格线是否显示
                splitLine: {
                    show: true,
                    lineStyle: {//网格线样式
                        color: '#f0f0f0'
                    }
                },
                // 去除y轴上的刻度线
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#666',//数值的颜色样式
                        fontSize: '12px',
                        fontFamily: 'MicrosoftYaHei',
                        interval: 0
                    }
                },
            },
            series: [
                { //画长方形
                    name: '',
                    symbolSize: 12,
                    data: [

                    ],
                    type: 'scatter',
                    markLine: {
                        data: [
                            // { type: 'average', name: '平均值' },
                            //  {name: '标线1起点', value: 3, x: 55, y:103},
                            // {name: '标线1终点', x: 585, y:103}
                            [
                                {
                                    // name: '标线1起点',
                                    symbol: 'none',
                                    lineStyle: {
                                        type: 'solid',
                                        color: "#e60012",
                                        width: 2,
                                    },
                                    xAxis: -100,
                                    yAxis: 100
                                },
                                {
                                    // name: '标线1终点',
                                    symbol: 'none',
                                    lineStyle: {
                                        type: 'solid',
                                        color: "#e60012",
                                        width: 2,
                                    },
                                    xAxis: 100,
                                    yAxis: 100
                                }
                            ],
                            [
                                {
                                    // name: '标线1起点',
                                    symbol: 'none',
                                    lineStyle: {
                                        type: 'solid',
                                        color: "#e60012",
                                        width: 2,
                                    },
                                    xAxis: -100,
                                    yAxis: -100
                                },
                                {
                                    // name: '标线1终点',
                                    symbol: 'none',
                                    lineStyle: {
                                        type: 'solid',
                                        color: "#e60012",
                                        width: 2,
                                    },
                                    xAxis: 100,
                                    yAxis: -100
                                }
                            ],
                            [
                                {
                                    // name: '标线1起点',
                                    symbol: 'none',
                                    lineStyle: {
                                        type: 'solid',
                                        color: "#ffc924",
                                        width: 2,
                                    },
                                    xAxis: -75,
                                    yAxis: 75
                                },
                                {
                                    // name: '标线1终点',
                                    symbol: 'none',
                                    lineStyle: {
                                        type: 'solid',
                                        color: "#ffc924",
                                        width: 2,
                                    },
                                    xAxis: 75,
                                    yAxis: 75
                                },

                            ],
                            [
                                {
                                    // name: '标线1起点',
                                    symbol: 'none',
                                    lineStyle: {
                                        type: 'solid',
                                        color: "#ffc924",
                                        width: 2,
                                    },
                                    xAxis: -75,
                                    yAxis: -75
                                },
                                {
                                    // name: '标线1终点',
                                    symbol: 'none',
                                    lineStyle: {
                                        type: 'solid',
                                        color: "#ffc924",
                                        width: 2,
                                    },
                                    xAxis: 75,
                                    yAxis: -75
                                },

                            ],
                            [
                                {
                                    // name: '标线1起点',
                                    symbol: 'none',
                                    lineStyle: {
                                        type: 'solid',
                                        color: "#577bcf",
                                        width: 2,
                                    },
                                    xAxis: -50,
                                    yAxis: 50
                                },
                                {
                                    // name: '标线1终点',
                                    symbol: 'none',
                                    lineStyle: {
                                        type: 'solid',
                                        color: "#577bcf",
                                        width: 2,
                                    },
                                    xAxis: 50,
                                    yAxis: 50
                                },

                            ],
                            [
                                {
                                    // name: '标线1起点',
                                    symbol: 'none',
                                    lineStyle: {
                                        type: 'solid',
                                        color: "#577bcf",
                                        width: 2,
                                    },
                                    xAxis: -50,
                                    yAxis: -50
                                },
                                {
                                    // name: '标线1终点',
                                    symbol: 'none',
                                    lineStyle: {
                                        type: 'solid',
                                        color: "#577bcf",
                                        width: 2,
                                    },
                                    xAxis: 50,
                                    yAxis: -50
                                },

                            ],
                            [
                                {
                                    // name: '标线1起点',
                                    symbol: 'none',
                                    lineStyle: {
                                        type: 'solid',
                                        color: "#e60012",
                                        width: 2,
                                    },
                                    xAxis: -100,
                                    yAxis: 100
                                },
                                {
                                    // name: '标线1终点',
                                    symbol: 'none',
                                    lineStyle: {
                                        type: 'solid',
                                        color: "#e60012",
                                        width: 2,
                                    },
                                    xAxis: -100,
                                    yAxis: -100

                                }
                            ],
                            [
                                {
                                    // name: '标线1起点',
                                    symbol: 'none',
                                    lineStyle: {
                                        type: 'solid',
                                        color: "#e60012",
                                        width: 2,
                                    },
                                    xAxis: 100,
                                    yAxis: 100

                                },
                                {
                                    // name: '标线1终点',
                                    symbol: 'none',
                                    lineStyle: {
                                        type: 'solid',
                                        color: "#e60012",
                                        width: 2,
                                    },
                                    xAxis: 100,
                                    yAxis: -100
                                }
                            ],
                            [
                                {
                                    // name: '标线1起点',
                                    symbol: 'none',
                                    lineStyle: {
                                        type: 'solid',
                                        color: "#ffc924",
                                        width: 2,
                                    },
                                    xAxis: -75,
                                    yAxis: 75
                                },
                                {
                                    // name: '标线1终点',
                                    symbol: 'none',
                                    lineStyle: {
                                        type: 'solid',
                                        color: "#ffc924",
                                        width: 2,
                                    },
                                    xAxis: -75,
                                    yAxis: -75
                                },

                            ],
                            [
                                {
                                    // name: '标线1起点',
                                    symbol: 'none',
                                    lineStyle: {
                                        type: 'solid',
                                        color: "#ffc924",
                                        width: 2,
                                    },
                                    xAxis: 75,
                                    yAxis: 75
                                },
                                {
                                    // name: '标线1终点',
                                    symbol: 'none',
                                    lineStyle: {
                                        type: 'solid',
                                        color: "#ffc924",
                                        width: 2,
                                    },
                                    xAxis: 75,
                                    yAxis: -75
                                },

                            ],
                            [
                                {
                                    // name: '标线1起点',
                                    symbol: 'none',
                                    lineStyle: {
                                        type: 'solid',
                                        color: "#577bcf",
                                        width: 2,
                                    },
                                    xAxis: -50,
                                    yAxis: 50
                                },
                                {
                                    // name: '标线1终点',
                                    symbol: 'none',
                                    lineStyle: {
                                        type: 'solid',
                                        color: "#577bcf",
                                        width: 2,
                                    },
                                    xAxis: -50,
                                    yAxis: -50
                                },

                            ],
                            [
                                {
                                    // name: '标线1起点',
                                    symbol: 'none',
                                    lineStyle: {
                                        type: 'solid',
                                        color: "#577bcf",
                                        width: 2,
                                    },
                                    xAxis: 50,
                                    yAxis: 50
                                },
                                {
                                    // name: '标线1终点',
                                    symbol: 'none',
                                    lineStyle: {
                                        type: 'solid',
                                        color: "#577bcf",
                                        width: 2,
                                    },
                                    xAxis: 50,
                                    yAxis: -50
                                },

                            ],
                        ]
                    }
                },
                {
                    name: '尾',
                    symbolSize: 12,
                    data: [
                        [-50, 30],
                        [-25, 25],
                        [-10, 10],
                        [-25, 30],
                        [-15, 40],
                        [-17, 30]
                    ],
                    type: 'scatter'

                },
                {
                    name: '切',
                    symbolSize: 12,
                    min: -150,
                    max: 150,
                    data: [
                        [50, 30],
                        [25, 25],
                        [10, 10],
                        [25, 30],
                        [15, 40],
                        [17, 30]
                    ],
                    type: 'scatter'

                }
            ]
        };
        bottomLChart.setOption(option);
        window.addEventListener("resize", function () {
            bottomLChart.resize();
        });//自适应
    },
    //底部右侧图
    bottomRchart: function () {
        var bottomR = echarts.init(document.getElementById("bottomR"));
        var option = {
            title: {
                // text: '盾构推进质量',
                subtext: '椭圆度(%)'
            },
            color: '#577bcf',
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['']//暂时不需要
            },
            grid: {//设置在容器的占比
                left: '0%',
                right: '3%',
                bottom: '0%',
                top: '20%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                //控制y轴线是否显示
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#577bcf',
                        width: '3'
                    }
                },
                // 控制网格线是否显示
                splitLine: {
                    show: false
                },
                // 去除y轴上的刻度线
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#666',//数值的颜色样式
                        fontSize: '12px',
                        fontFamily: 'MicrosoftYaHei',
                        interval: 0
                    }
                },
                data: ['X-1', 'X-2', 'X-3', 'X-4', 'X-5', 'X-6', 'X-7', 'X-8', 'X-9', 'X-10', 'X-11', 'X-12', 'X-13', 'X-14', 'X-15', 'X-16', 'X-17']
            },
            yAxis: {
                type: 'value',
                splitNumber: 8,
                min: -5,
                max: 5,
                //控制y轴线是否显示
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#f0f0f0'
                    }
                },
                // 控制网格线是否显示
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ["#ddd", "#fff"]
                    }
                },
                // 去除y轴上的刻度线
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    formatter: '{value}',
                    textStyle: {
                        color: '#666',//数值的颜色样式
                        fontSize: '12px',
                        fontFamily: 'MicrosoftYaHei',
                        interval: 0
                    }
                }
            },
            series: [
                {
                    name: '最低气温',
                    type: 'line',
                    symbolSize: 10, //尺寸
                    symbol: 'circle', //实心
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                width: 3// 0.1的线条是非常细的了
                            }
                        }
                    },
                    data: [1, -2, 2, 4, 3, 2, 0, 3, 4, 2, 2, -3, -2, 2, 1, 4, 3],
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' }
                        ]
                    },
                    markLine: {
                        data: [
                            // { type: 'average', name: '平均值' },
                            //  {name: '标线1起点', value: 3, x: 55, y:103},
                            // {name: '标线1终点', x: 585, y:103}

                            {
                                // name: 'Y 轴值为 100 的水平线',
                                symbol: 'none',
                                value: 3,
                                lineStyle: {
                                    type: 'solid',
                                    color: "#ffe494",
                                    width: 2,
                                },
                                yAxis: 3
                            },
                            {
                                // name: 'Y 轴值为 100 的水平线',
                                symbol: 'none',
                                value: -3,
                                lineStyle: {
                                    type: 'solid',
                                    width: 2,
                                    color: "#ffe494"
                                },
                                yAxis: -3
                            }

                        ]
                    }
                }
            ]
        };
        bottomR.setOption(option);
        window.addEventListener("resize", function () {
            bottomR.resize();
        });//自适应
    }
}
$(function () {
    run.init();
});