import "./style.scss"
import ReactECharts from "echarts-for-react"
import { Card, Col, Row, Progress, Timeline, Tag, Statistic, Table } from 'antd';
import { RadarChartOutlined, SnippetsOutlined, DollarOutlined, LaptopOutlined } from "@ant-design/icons"
const columns:any=[
    {
        title:"No.",
        key:"index",
        render:(text:any, record:any, index:any) => index + 1,  
    },
    {
        title:"企业名称",
        dataIndex:"name",
        key:"name",
    },
    {
        title:"企业楼宇",
        dataIndex:"building",
        key:"building",
    },
    {
        title:"电力消耗",
        dataIndex:"elec",
        key:"elec",
    },
    {
        title:"热力消耗",
        dataIndex:"hot",
        key:"hot",
    },
    {
        title:"碳排放",
        dataIndex:"c",
        key:"c",
    }
]

const data=[
    {
        name:"北京唧唧科技有限公司",
        building:"B2幢楼-801室",
        elec:70,
        hot:45,
        c:22
    },
    {
        name:"上海一二三网络有限公司",
        building:"A2幢楼-902室",
        elec:70,
        hot:37,
        c:21
    },
    {
        name:"有条数据信息有限公司",
        building:"时代金融广场-803室",
        elec:60,
        hot:25,
        c:17
    },
    {
        name:"筋斗云网络有限公司",
        building:"天汇国际大厦A座-1902室",
        elec:33,
        hot:21,
        c:6
    },
    {
        name:"北京盎司科技有限公司",
        building:"A2幢楼-401室",
        elec:44,
        hot:22,
        c:8
    },
    {
        name:"平平技术科技有限公司",
        building:"B2幢楼-1401室",
        elec:70,
        hot:45,
        c:22
    }
]
function Energy() {
    const option = {
        title: {
            text: '当日能源消耗'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['煤', '气', '油', '电', '热']
        },
        grid: {
            left: '3%',
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
            data: ['0：00', '4:00', '8:00', '12:00', '16:00', '20:00', '24:00']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '煤',
                type: 'line',
                stack: 'Total',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '气',
                type: 'line',
                stack: 'Total',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '油',
                type: 'line',
                stack: 'Total',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '电',
                type: 'line',
                stack: 'Total',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '热',
                type: 'line',
                stack: 'Total',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };

    const option2 = {
        title: {
            text: '资源消耗总览'
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
            data: ['2024-01', '2024-02', '2024-03', '2024-04', '2024-05', "2024-06"]
        },
        yAxis: {
            type: 'value',
            data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
        },
        series: [
            {
                name: '水',
                type: 'bar',
                data: [40, 220, 378, 658, 1122, 1200]
            },
            {
                name: '电',
                type: 'bar',
                data: [20, 39, 443, 490, 559, 762]
            },
            {
                name: '热',
                type: 'bar',
                data: [78, 167, 229, 330, 380, 420]
            }
        ]
    };
    const option3 = {
        legend: {
            top: 'left'
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
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
                    { value: 40, name: '工厂用电' },
                    { value: 38, name: '工厂用煤' },
                    { value: 32, name: '员工充电' },
                    { value: 30, name: '日常照明' },
                    { value: 28, name: '设备未关' },
                    { value: 26, name: '光伏发电' },
                ]
            }
        ]
    };
    return <div className="dashboard">
        <Row gutter={16} className="mt">
            <Col span={12}>
                <Card title="能源消耗情况" >
                    <ReactECharts option={option} />
                </Card>
            </Col>
            <Col span={12}>
                <Card title="消耗总览" >
                    <ReactECharts option={option2} />
                </Card>
            </Col>
        </Row>
        <Row gutter={16} className="mt" >
            <Col span={12} >
                <Card title="能源消耗占比" style={{ height: "400px" }}>
                    <ReactECharts option={option3} />
                </Card>
            </Col>
            <Col span={12}>
                <Card>
                    <Table columns={columns} dataSource={data} pagination={false}/>
                </Card>

            </Col>
        </Row>
    </div>
}
export default Energy