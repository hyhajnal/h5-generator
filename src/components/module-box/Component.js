import React from 'react';
import { Row } from 'antd';
import styles from './Layout.css';
import BUTTON_IMG from '../../../image/button.png';
import TAB_IMG from '../../../image/tab.png';
import SWIPER_IMG from '../../../image/swiper.png';
import IMAGE_IMG from '../../../image/image.png';
import DIV_IMG from '../../../image/div.png';

const Component = () => (
  <div className={styles.wrap}>
    <Row className={styles.title}>布局容器</Row>
    <Row><img src={DIV_IMG} alt="flex" width="100%" /></Row>

    <Row className={styles.title}>按钮</Row>
    <Row><img src={BUTTON_IMG} alt="flex" width="100%" /></Row>

    <Row className={styles.title}>图片</Row>
    <Row><img src={IMAGE_IMG} alt="flex" width="100%" /></Row>

    <Row className={styles.title}>选项卡</Row>
    <Row><img src={TAB_IMG} alt="flex" width="100%" /></Row>

    <Row className={styles.title}>轮播图</Row>
    <Row><img src={SWIPER_IMG} alt="flex" width="100%" /></Row>
  </div>
);

export default Component;

