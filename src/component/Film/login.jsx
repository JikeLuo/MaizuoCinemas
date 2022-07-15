import React,{} from "react";
import {Form, Input, Button} from "antd-mobile";

export default function App() {
    return (
        <div style={{marginTop: '10%'}}>
            <Form layout='horizontal'>
                <Form.Item label='帳號' name='username'>
                    <Input placeholder='請輸入帳號' clearable />
                </Form.Item>
                <Form.Item label='密碼' name='password'>
                    <Input placeholder='請輸入密碼' clearable type='password' />
                </Form.Item>
            </Form>
            <Button block color='primary' size='large' style={{marginTop: '10%'}}>登入</Button>
        </div>
    )
}