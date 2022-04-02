import * as AuthService from '../service';

import {
  Button,
  Checkbox,
  Form,
  FormInstance,
  Input,
  Link,
  Space,
} from '@arco-design/web-react';
import { IconLock, IconUser } from '@arco-design/web-react/icon';
import React, { useRef, useState } from 'react';

import { LoginRequest } from '../data.d';
import { setToken } from '@/utils/auth';
import styles from '../index.module.less';
import { useMutation } from 'react-query';

export const LoginForm = () => {
  const formRef = useRef<FormInstance>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);

  // const afterSuccess = (req) => {
  //   // 记住密码
  //   if (rememberPassword) {
  //     setLoginParams(JSON.stringify(params));
  //   } else {
  //     removeLoginParams();
  //   }
  //   // 记录登录状态
  //   localStorage.setItem('userStatus', 'login');
  //   // 跳转首页
  //   window.location.href = '/';
  // };

  const loginMutation = useMutation(
    (req: LoginRequest) => AuthService.login(req),
    {
      onSuccess: ({ token }) => {
        // 成功后，将token放入localStorage
        setToken(token);
        // 跳转到dashboard
      },
    }
  );
  const onSubmit = () => {
    formRef.current?.validate().then((values) => {
      loginMutation.mutate(values);
    });
  };

  return (
    <div className={styles['login-form-wrapper']}>
      <div className={styles['login-form-title']}>登录 Arco Design Pro</div>
      <div className={styles['login-form-sub-title']}>登录 Arco Design Pro</div>
      <div className={styles['login-form-error-msg']}>{errorMessage}</div>
      <Form
        className={styles['login-form']}
        layout="vertical"
        ref={formRef}
        initialValues={{ username: 'admin', password: '123456' }}
      >
        <Form.Item
          field="username"
          rules={[{ required: true, message: '用户名称不能为空' }]}
        >
          <Input
            prefix={<IconUser />}
            placeholder="请输入用户名称"
            onPressEnter={onSubmit}
          />
        </Form.Item>
        <Form.Item
          field="password"
          rules={[{ required: true, message: '密码不能为空' }]}
        >
          <Input.Password
            prefix={<IconLock />}
            placeholder="请输入密码"
            onPressEnter={onSubmit}
          />
        </Form.Item>
        <Space size={16} direction="vertical">
          <div className={styles['login-form-password-actions']}>
            <Checkbox checked={rememberPassword} onChange={setRememberPassword}>
              记住密码
            </Checkbox>
            <Link>忘记密码</Link>
          </div>
          <Button
            type="primary"
            long
            onClick={onSubmit}
            loading={loginMutation.isLoading}
          >
            登录
          </Button>
        </Space>
      </Form>
    </div>
  );
};
