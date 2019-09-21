import React, { Component } from 'react';
import css from './index.module.scss'

class Footer extends Component {
    render() {
        return (
            <div className={css.footer}>
                <div className={css.w}>
                    阿里巴巴集团 Copyright ©1999-2019 版权所有
                </div>
            </div>
        );
    }
}

export default Footer;