import { Row, Col, Card, Progress, Statistic, Timeline,Tag } from "antd"
import { RadarChartOutlined, SnippetsOutlined, DollarOutlined, LaptopOutlined } from "@ant-design/icons"
import ReactECharts from "echarts-for-react"
import { getEnergyData } from "../../api/dashboard"
import { useEffect, useState } from "react"
import "./index.scss"
const option2 = {
    title: {
        text: '企业资质情况(家)'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: [0, 0.01],
        data: ['2014', '2016', '2018', '2020', '2022', "2024"]
    },
    yAxis: {
        type: 'value',

    },
    series: [
        {
            name: '科技企业',
            type: 'bar',
            data: [40, 220, 378, 658, 1122, 1200]
        },
        {
            name: '高新企业',
            type: 'bar',
            data: [20, 39, 443, 490, 559, 762]
        },
        {
            name: '国营企业',
            type: 'bar',
            data: [78, 167, 229, 330, 380, 420]
        }
    ]
};
const option3 = {
    legend: {
        top: '10px'
    },
    series: [
        {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [30, 100],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 8
            },
            data: [
                { value: 40, name: '在营' },
                { value: 38, name: '已租' },
                { value: 32, name: '出租' },
                { value: 30, name: '续签' },
                { value: 28, name: '新签' },
                { value: 26, name: '待租' },
                { value: 22, name: '退租' },
            ]
        }
    ]
};
function Dashboard() {
    const initalOption = {
        title: {
            text: '当日能源消耗'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: []
        },
        grid: {
            left: '%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['0：00', '4：00', '8：00', '12：00', '16：00', '20：00', '24：00']
        },
        yAxis: {
            type: 'value'
        },
        series: []
    };
    const [data, setData] = useState(initalOption)
    useEffect(() => {
        const loadData = async () => {
            const { data: apiData } = await getEnergyData();
            const dataList = apiData.map((item: any) => ({
                name: item.name,
                data: item.data,
                type: "line",
                stack: "Total"
            }));
            const updataOption = {
                ...data,
                legend: {
                    data: dataList.map((item: any) => item.name),
                },
                series: dataList
            }
            setData(updataOption)
        }
        loadData()
    }, [])

    return <div className="dashboard">
        <Row gutter={16}>
            <Col span={6}>
                <Card className="clearfix">
                    <div className="fl area">
                        <h2>13479</h2>
                        <p>园区总面积(平方米)</p>
                    </div>
                    <div className="fr">
                        <RadarChartOutlined className="icon" />
                    </div>
                </Card>
            </Col>
            <Col span={6}>
                <Card className="clearfix">
                    <div className="fl area">
                        <h2>8635</h2>
                        <p>总租赁面积(平方米)</p>
                    </div>
                    <div className="fr">
                        <SnippetsOutlined className="icon" style={{ color: "#81c452" }} />
                    </div>
                </Card>
            </Col>
            <Col span={6}>
                <Card className="clearfix">
                    <div className="fl area">
                        <h2>38764</h2>
                        <p>园区总产值(万元)</p>
                    </div>
                    <div className="fr">
                        <DollarOutlined className="icon" style={{ color: "#62c9cb" }} />
                    </div>
                </Card>
            </Col>
            <Col span={6}>
                <Card className="clearfix">
                    <div className="fl area">
                        <h2>2874</h2>
                        <p>入驻企业总数(家)</p>
                    </div>
                    <div className="fr">
                        <LaptopOutlined className="icon" style={{ color: "#e49362" }} />
                    </div>
                </Card>
            </Col>
        </Row>
        <Row gutter={16} className="mt">
            <Col span={12}>
                <Card title="能源消耗情况">
                    <ReactECharts option={data}></ReactECharts>
                </Card>
            </Col>
            <Col span={12}>
                <Card title="企业资质情况">
                    <ReactECharts option={option2}></ReactECharts>
                </Card>
            </Col>
        </Row>
        <Row gutter={16} className="mt">
            <Col span={12}>
                <Card title="租赁情况">
                    <ReactECharts option={option3}></ReactECharts>
                </Card>
            </Col>
            <Col span={6}>
                <Card title="充电桩空闲统计">
                    <div className="wrap">
                        <Progress type="circle" percent={75} />
                        <Statistic title="总充电桩数" value={75} suffix="/ 100" className="mt"/>
                    </div>

                </Card>
            </Col>
            <Col span={6}>
                <Card title="实时车辆信息" style={{height:"406px"}}>
                    <Timeline items={[
                        {
                            children: <><Tag color="green">进场</Tag>08:24车辆 京A66666</>
                        },
                        {
                            children: <><Tag color="red">出场</Tag>09:15 车辆 京A66666  </>,
                            color: 'red',
                        },
                        {
                            children: <><Tag color="green">进场</Tag>09:22 车辆 京A23456  </>,
                        },
                        {
                            children: <><Tag color="red">出场</Tag>10:43 车辆 京A18763  </>,
                            color: 'red',
                        },
                        {
                            children: <><Tag color="green">进场</Tag>13:38 车辆 京A88888  </>,
                        },
                        {
                            children: <><Tag color="green">进场</Tag>14:46 车辆 京A23456  </>,

                        },
                    ]}/>
                        
                </Card>
            </Col>
        </Row>
    </div>
}

export default Dashboard