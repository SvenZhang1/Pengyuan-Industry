import { Card,Button,Descriptions } from "antd"
import { useNavigate,useSearchParams} from "react-router-dom"
import type { DescriptionsProps } from "antd";
const items: DescriptionsProps['items'] = [
    {
        key: '1',
        label: '合同类别',
        children: '租赁合同',
    },
    {
        key: '2',
        label: '合同名称',
        children: '房屋租赁合同通用模版',
    },
    {
        key: '3',
        label: '合同开始日期',
        children: '2023-03-05',
    },
    {
        key: '4',
        label: '合同结束日期',
        children: '2024-03-05',
    },
    {
        key: '5',
        label: '甲方',
        children: '万物科技有限公司',
    },
    {
        key: '6',
        label: '乙方',
        children: "天明物业有限公司",
        span: 3,
    },
    {
        key: '7',
        label: '审批状态',
        children: '审批拒绝',
    },
    {
        key: '8',
        label: '拒绝原因',
        children: '缺少法人盖章',
    },
    {
        key: '9',
        label: '联系方式',
        children: '18888888888',
    },
    {
        key: '10',
        label: '附加条款',
        children: (
            <>
                1. 半年付，年租
                <br />
                2. 费用已包含空调费用 
                <br />
                3. 含两个车位使用权(不含充电桩)
                <br />
                4. 9：00-18：00禁止装修

            </>
        ),
    },
];

const items2: DescriptionsProps['items'] = [
    {
        key: '1',
        label: '所有楼宇',
        children: 'A1幢写字楼',
    },
    {
        key: '2',
        label: '房间号',
        children: '406',
    },
    {
        key: '3',
        label: '房屋面积',
        children: '96㎡',
    },
    {
        key: '4',
        label: '计价面积',
        children: '70㎡',
    },
    {
        key: '5',
        label: '物业费',
        children: '6800',
    },
    {
        key: '6',
        label: '房屋状态',
        children: "精装",
    },
    {
        key: '7',
        label: '物业管家',
        children: '蔡文萍',
    },
    {
        key: '8',
        label: '管家电话',
        children: '17777777777',
    },
];
function Surrender(){
    const navigate=useNavigate()
    const [searchParams]=useSearchParams()
    return <div>
        <Card>
            <Button type="primary" onClick={()=>navigate("/finance/contract?return=true")}>返回</Button>
        </Card>
        <Card className="mt">
            <Descriptions title={`合同编号：${searchParams.get("contractNo")}`} bordered items={items}/>
            <Descriptions title="租赁房间信息" bordered items={items2} className="mt"/>
        </Card>
    </div>
}

export default Surrender