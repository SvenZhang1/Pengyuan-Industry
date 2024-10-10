import { Card } from "antd"
import { Descriptions, Row, Col, Calendar, Avatar, List,Tag,Progress,Badge } from 'antd';
import type { DescriptionsProps } from 'antd';
const data = [
    {
        title: 'Ant Design Title 1',
    }
];


export default function Personal() {


    return <div>

        <Row gutter={16}>

            <Col span={6}>
                <Card>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item, index) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={`https://randomuser.me/api/portraits/thumb/men/52.jpg`} />}
                                    title={<a href="https://ant.design">赵铁柱 - 运营专员</a>}
                                    description="无论是打工还是生存，都要尽已所能全力以赴，优秀才是常态。"
                                />
                            </List.Item>
                        )}
                    />
                </Card>
                <Card className="mt">
                    <Calendar fullscreen={false} />
                </Card>
            </Col>

            <Col span={18}>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card>
                            待处理： <Badge count={4} showZero color="#faad14" />
                        </Card>
                        <Card title="新增账号申请" extra={<a href="#">详情</a>} className="mt">
                            <p>描述：新入职员工，需要新建user权限账号</p>
                            <p className="mt">创建人：人力资源部 - 刘婷</p>
                            <div className="mt">
                                日期：<Tag>2024-05-02</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="blue">常规</Tag>
                                <Tag color="blue">账号问题</Tag>
                            </div>
                            <div className="mt">
                                进度：
                                <Progress percent={1} />
                            </div>
                        </Card>
                        <Card title="物业费催缴" extra={<a href="#">详情</a>} className="mt">
                            <p>描述：催促企业尽快缴纳</p>
                            <p className="mt">创建人：总裁办 - 王久</p>
                            <div className="mt">
                                日期：<Tag>2024-05-01</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="orange">紧急</Tag>
                                <Tag color="blue">物业问题</Tag>
                            </div>
                            <div className="mt">
                                进度：
                                <Progress percent={1} />
                            </div>
                        </Card>
                        <Card title="充电桩报修" extra={<a href="#">详情</a>} className="mt">
                            <p>描述：C1楼下充电桩损坏，尽快派人维修</p>
                            <p className="mt">创建人：行政部-王伟</p>
                            <div className="mt">
                                日期：<Tag>2024-05-04</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="blue">常规</Tag>
                                <Tag color="blue">物业问题</Tag>
                            </div>
                            <div className="mt">
                                进度：
                                <Progress percent={1} />
                            </div>
                        </Card>
                        
                    </Col>
                    <Col span={8}>
                        <Card>
                            处理中：<Badge count={2} showZero color="blue" />
                        </Card>
                        <Card title="通知企业统一试供暖" extra={<a href="#">详情</a>} className="mt">
                            <p>描述：即将供暖，调试阀门</p>
                            <p className="mt">创建人：行政部-王伟</p>
                            <div className="mt">
                                日期：<Tag>2024-05-03</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="blue">常规</Tag>
                                <Tag color="blue">物业问题</Tag>
                            </div>
                            <div className="mt">
                                进度：
                                <Progress percent={34} />
                            </div>
                        </Card>
                        <Card title="账单没有审批" extra={<a href="#">详情</a>} className="mt">
                            <p>描述：新一季度财务账单抓紧审批完成</p>
                            <p className="mt">创建人：总裁办-张大</p>
                            <div className="mt">
                                日期：<Tag>2024-05-11</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="orange">紧急</Tag>
                                <Tag color="blue">财务问题</Tag>
                            </div>
                            <div className="mt">
                                进度：
                                <Progress percent={65} />
                            </div>
                        </Card>
                        <Card title="车位到期提醒" extra={<a href="#">详情</a>} className="mt">
                            <p>描述：车位续租改为按年收费</p>
                            <p className="mt">创建人：总裁办-刘婷</p>
                            <div className="mt">
                                日期：<Tag>2024-05-20</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="blue">常规</Tag>
                                <Tag color="blue">账号问题</Tag>
                            </div>
                            <div className="mt">
                                进度：
                                <Progress percent={47} />
                            </div>
                        </Card>
                        
                    </Col>
                    <Col span={8}>
                        <Card>
                            已完成：<Badge count={9} showZero color="green" />
                        </Card>
                        <Card title="文章发布" extra={<a href="#">详情</a>} className="mt">
                            <p>描述：发布招商文章</p>
                            <p className="mt">创建人：网推部-曼曼</p>
                            <div className="mt">
                                日期：<Tag>2024-04-02</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="blue">常规</Tag>
                                <Tag color="blue">运营问题</Tag>
                            </div>
                            <div className="mt">
                                进度：
                                <Progress percent={100} />
                            </div>
                        </Card>
                        <Card title="新增账号申请" extra={<a href="#">详情</a>} className="mt">
                            <p>描述：新入职员工，需要新建user权限账号</p>
                            <p className="mt">创建人：人力资源部-刘婷</p>
                            <div className="mt">
                                日期：<Tag>2024-04-11</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="blue">常规</Tag>
                                <Tag color="blue">账号问题</Tag>
                            </div>
                            <div className="mt">
                                进度：
                                <Progress percent={100} />
                            </div>
                        </Card>
                        <Card title="报修处理" extra={<a href="#">详情</a>} className="mt">
                            <p>描述：A1幢写字楼电梯维护</p>
                            <p className="mt">创建人：行政部 - 金强</p>
                            <div className="mt">
                                日期：<Tag>2024-04-17</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="orange">常规</Tag>
                                <Tag color="blue">物业问题</Tag>
                            </div>
                            <div className="mt">
                                进度：
                                <Progress percent={100} />
                            </div>
                        </Card>
                        
                    </Col>
                </Row>            
            </Col>

        </Row>


    </div>
}