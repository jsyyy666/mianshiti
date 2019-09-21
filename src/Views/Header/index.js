import React, { Component } from 'react'
import css from './index.module.scss'
class Header extends Component {
    state = {
        headers: [`首   页`, '社会招聘', '校园招聘', '了解阿里', '个人中心']
    }
    render() {
        return (
            <div className={css.header}>
                <div className={css.w}>
                    <h1>
                        <img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" alt="" />
                    </h1>
                    <i>|</i>
                    <span>社招官网</span>
                    <ul>
                        {
                            this.state.headers.map((item,index) =>
                                <li key={index}>{item}</li>
                            )
                        }
                    </ul>
                    <div className={css.right}>
                        欢迎来到阿里巴巴集团招聘！
                        <a href="https://passport.alibaba.com/login.htm?appName=hrjob&params=https%3A%2F%2Fjob.alibaba.com%2F%2Fzhaopin%2Findex.htm%3Fspm%3Da2obv.11410899.0.0.48ef6c61Re260m">登录</a>
                         | 
                        <a href="http://member1.taobao.com/member/newbie.htm">注册</a>															
                    </div>
                </div>
            </div>
        )
    }
}
export default Header