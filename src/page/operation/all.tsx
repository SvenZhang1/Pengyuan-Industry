import { Row, Col, Card, Badge, Statistic } from "antd"
function All() {
    return <div>
        <Row gutter={16}>
            <Col span={18}>
                <Card>
                    <Row gutter={16}>
                        <Col span={6}>
                            <Statistic title="文章总数" value={1588} />
                        </Col>
                        <Col span={6}>
                            <Statistic title="意向客户(个)" value={235} />
                        </Col>
                        <Col span={6}>
                            <Statistic title="入驻企业(家)" value={766} />
                        </Col>
                        <Col span={6}>
                            <Statistic title="园区用户(人)" value={6988} />
                        </Col>
                    </Row>
                </Card>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card className="mt">
                            <Card title="待办事项" extra={<a href="#">更多&gt;</a>} >
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="blue" text="合同签订待处理" />
                                    <span style={{ color: "#666" }}>2024-01-02</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="blue" text="充电桩维修报修" />
                                    <span style={{ color: "#666" }}>2024-03-12</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="blue" text="空调使用费统一征收" />
                                    <span style={{ color: "#666" }}>2024-03-22</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="gray" text="租户物业费催缴" />
                                    <span style={{ color: "#666" }}>2024-04-01</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="gray" text="潜在意向客户跟访" />
                                    <span style={{ color: "#666" }}>2024-04-07</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="gray" text="园区保洁注意事项" />
                                    <span style={{ color: "#666" }}>2024-05-02</span>
                                </div>
                            </Card>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card className="mt">
                            <Card title="最新动态"
                                extra={<a href="#">更多&gt;</a>}>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="red" text="同心共建经济圈，更上层峰开新..." />
                                    <span style={{ color: "#666" }}>2024-01-02</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="red" text="我区十个重大工业投资项目集中..." />
                                    <span style={{ color: "#666" }}>2024-01-02</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="red" text="新能源新政策发布，究竟是好还..." />
                                    <span style={{ color: "#666" }}>2024-01-02</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="gray" text="园区内的事故究竟要如何定责任..." />
                                    <span style={{ color: "#666" }}>2024-04-01</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="gray" text="关于充电桩使用的重要通知，长..." />
                                    <span style={{ color: "#666" }}>2024-04-07</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "30px" }}>
                                    <Badge color="gray" text="关于充电桩使用的重要通知，长..." />
                                    <span style={{ color: "#666" }}>2024-05-02</span>
                                </div>
                            </Card>
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col span={6}>
                <Card title="优质企业排名">
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>1.万物科技有限公司</p>
                        <p>人数:87人</p>
                        <p>估值:8600(万元)</p>
                    </div>
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>2.万物科技有限公司</p>
                        <p>人数:87人</p>
                        <p>估值:8600(万元)</p>
                    </div>
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>3.万物科技有限公司</p>
                        <p>人数:87人</p>
                        <p>估值:8600(万元)</p>
                    </div>
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>4.万物科技有限公司</p>
                        <p>人数:87人</p>
                        <p>估值:8600(万元)</p>
                    </div>
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>5.万物科技有限公司</p>
                        <p>人数:87人</p>
                        <p>估值:8600(万元)</p>
                    </div>
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>6.万物科技有限公司</p>
                        <p>人数:87人</p>
                        <p>估值:8600(万元)</p>
                    </div>
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>7.万物科技有限公司</p>
                        <p>人数:87人</p>
                        <p>估值:8600(万元)</p>
                    </div>
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>8.万物科技有限公司</p>
                        <p>人数:87人</p>
                        <p>估值:8600(万元)</p>
                    </div>
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>9.万物科技有限公司</p>
                        <p>人数:87人</p>
                        <p>估值:8600(万元)</p>
                    </div>
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>10.万物科技有限公司</p>
                        <p>人数:87人</p>
                        <p>估值:8600(万元)</p>
                    </div>
                    <div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>11.万物科技有限公司</p>
                        <p>人数:87人</p>
                        <p>估值:8600(万元)</p>
                    </div><div style={{ lineHeight: "30px",display:"flex",justifyContent:"space-between" }}>
                        <p>12.万物科技有限公司</p>
                        <p>人数:87人</p>
                        <p>估值:8600(万元)</p>
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
}

export default All