import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Card, DatePicker, Radio} from 'antd';

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};


const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
function Article() {
    return <div>

        <Card>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="文章标题"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="副标题"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label="发布时间"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item<FieldType>
                    label="可见范围"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Radio.Group >
                        <Radio value={1}>所有</Radio>
                        <Radio value={2}>物业</Radio>
                        <Radio value={3}>公司</Radio>

                    </Radio.Group>
                </Form.Item>
                <Form.Item<FieldType>
                    label="文章内容"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.TextArea rows={4} />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    </div>
}

export default Article