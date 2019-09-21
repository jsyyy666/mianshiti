import React, { Component } from 'react';
import css from './index.module.scss'
class Banner extends Component {
    state = {
        hots: ["JAVA", "IOS", "数据", "安全", "搜索", "算法", "运营", "视觉", "交互", "前端"]
    }
    render() {
        return (
            <div className={css.banner}>
                <img src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png" alt="" />
                <div className={css.after}>
                </div>
                <form>
                    <div className={css.center}>
                        <p>If not now, when?</p>
                        <p>If not me, who?</p>
                        <p>此时此刻，非我莫属！</p>
                        <div className={css.search}>
                            <div className={css.before}></div>
                            <input type="text" placeholder="请输入职位关键词" />
                            <button>搜索</button>
                        </div>
                        <div className={css.hot}>
                            热门搜索：
                            {
                                this.state.hots.map((item, index) =>
                                    <a key={index} href="">{item}</a>
                                )
                            }
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Banner