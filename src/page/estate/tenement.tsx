import { Card,Row,Col,Table,Input, Button,Tag,Progress, Badge } from "antd"
import type { TableProps } from "antd"

interface DataType{
    key:string;
    name:string;
    person:string;
    tel:string;
    status:string;
    vacancyRate:number;
    propertyFee:string;
}

const columns:TableProps<DataType>['columns']=[
    {
        title:"No.",
        key:"index",
        render:(value,record,index)=>index+1
    },
    {
        title:"楼宇名称",
        dataIndex:"name",
        key:"name"
    },
    {
        title:"负责人",
        dataIndex:"person",
        key:"person"
    },
    {
        title:"负责人电话",
        dataIndex:"tel",
        key:"tel"
    },
    {
        title:"使用状态",
        dataIndex:"status",
        key:"status",
        render:(value)=>{
            if(value==1){
                return <Tag color="#f50">建设中</Tag>
            }else if(value==2){
                return <Tag color="#2db7f5">已竣工</Tag>
            }else{
                return <Tag color="#87d068">使用中</Tag>
            }
        }
    },
    {
        title:"空置率",
        dataIndex:"vacancyRate",
        key:"vacancyRate",
        render(value){
            return <Progress percent={value} status="active" />
        }
    },
    {
        title:"物业费率",
        dataIndex:"propertyFee",
        key:"propertyFee",
        render(value){
            return <Badge color="green" text={value}></Badge>
        }
    },
    {
        title:"操作",
        key:"operate",
        render(value){
            return <>
                <Button type="primary" className="mr">编辑</Button>
                <Button type="primary" danger>删除</Button>
            </>
        }
    },
]
const data: DataType[] = [
    {
        key: '1',
        name: 'A1幢写字楼',
        person: "王达",
        tel: '16654789654',
        status: "建设中",
        vacancyRate: 60,
        propertyFee:"3.5%",
    },
    {
        key: '2',
        name: 'A2幢写字楼',
        person: "苏乐凯",
        tel: '13698756669',
        status: "已竣工",
        vacancyRate: 40,
        propertyFee:"3.8%",
    },
    {
        key: '3',
        name: 'B1幢写字楼',
        person: "莉亚",
        tel: '15587966698',
        status: "使用中",
        vacancyRate: 20,
        propertyFee:"3.1%",
    },
    {
        key: '4',
        name: 'B2幢写字楼',
        person: "常可",
        tel: '13698756324',
        status: "使用中",
        vacancyRate: 30,
        propertyFee:"4.0%",
    },
    {
        key: '5',
        name: 'C1幢写字楼',
        person: "刘伟",
        tel: '19878965444',
        status: "使用中",
        vacancyRate: 50,
        propertyFee:"3.5%",
    },
    {
        key: '6',
        name: 'C2幢写字楼',
        person: "孙强浩",
        tel: '13369888562',
        status: "使用中",
        vacancyRate: 10,
        propertyFee:"2.9%",
    },
    {
        key: '7',
        name: '天汇国际大厦A座',
        person: "马浩瀚",
        tel: '13578549687',
        status: "使用中",
        vacancyRate: 25,
        propertyFee:"3.7%",
    },
    {
        key: '8',
        name: '时代金融广场',
        person: "杨柳",
        tel: '18745889874',
        status: "使用中",
        vacancyRate: 15,
        propertyFee:"3.3%",
    },
    
];
function Temement(){
    return <div>
        <Card className="search">
            <Row gutter={16}>
                <Col span={4}>
                    <p>楼宇名称：</p>
                    <Input></Input>
                </Col>
                <Col span={4}>
                    <p>负责人：</p>
                    <Input></Input>
                </Col>
                <Col span={4}>
                    <Button className="mr" type="primary">查询</Button>
                    <Button>重置</Button>
                </Col>
            </Row>
        </Card>
        <Card className="mt">
            <Table
                columns={columns}
                dataSource={data}
            />
        </Card>
    </div>
}

export default Temement