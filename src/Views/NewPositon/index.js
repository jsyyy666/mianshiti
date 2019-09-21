import React, { Component } from 'react';
import css from './index.module.scss';
import axios from 'axios'
class NewPositon extends Component {
    state = {
        datalist: [],
        ultop: 0,
    }

    render() {
        return (
            <div className={css.newpositon}>
                <div className={css.left_side}>
                    <div className={css.title}>
                        最新职位
                        <a>
                            更多
                        </a>
                    </div>
                    <ul style={{ top: this.state.ultop + "px" }}>
                        {
                            this.state.datalist.map((item, index) =>
                                <li key={index}>
                                    <a>{item.name}</a>
                                    <em className={css.place}>{item.place}</em>
                                    <em className={css.time}>{item.time}</em>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className={css.right_side}>
                    <a href="https://www.aliyun.com/careers">
                        <img alt="alibabab" src="https://img.alicdn.com/tfs/TB1Z7JvoxGYBuNjy0FnXXX5lpXa-358-136.png" />
                    </a>
                    <a href="https://job.alibaba.com/zhaopin/informationPlatformBu.htm?">
                        <img alt="alibabab" src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" />
                    </a>
                </div>
            </div >
        );
    }
    componentDidMount() {
        axios.get("./list.json").then(res => {
            console.log(res.data)
            this.setState({
                datalist: res.data.list
            })
        })

        this.state.timer = setInterval(() => {
            this.setState({
                ultop: this.state.ultop - 1
            })
            if (this.state.ultop < -3000) {
                this.setState({
                    ultop: 0
                })
            }
        }, 50);
    }
    componentWillUnmount() {
        clearInterval(this.state.timer)
    }
}

export default NewPositon;