/*eslint-enable*/
import React, { Component } from 'react';

import { showHomeHeader, showHomeFooter } from '../components/Home/HomeShow';

export default class Contacts extends Component {
    render() {
        return (
            <>
                {showHomeHeader()}

                <div className="w-50 mx-auto text-center">
                    <p className="contats__title">
                        Ми впевнені, що ІТ-фахівцем може стати кожен. Щоб досягти мети, від вас потрібно бажання, старанність і дисципліна. Решту ми беремо на себе.
                    </p>

                    <p className="contats__suptitle">
                        Шахтарська вулиця, Нововолинськ, Волинська область, 45400 <br />
                        +380 (67) 39 75 331 <br />
                        час роботи: Пн-Пт 8:00-17:00 <br />
                    </p>
                </div>

                <div className="map__container">
                    <iframe
                        className="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.5653513619!2d24.152754951478165!3d50.728002375107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4724f3c79a0d71a3%3A0x7574dca39874603f!2z0J3QvtCy0L7QstC-0LvQuNC90YHRjNC60LjQuSDQtdC70LXQutGC0YDQvtC80LXRhdCw0L3RltGH0L3QuNC5INC60L7Qu9C10LTQtg!5e0!3m2!1suk!2sua!4v1621972792453!5m2!1suk!2sua"
                        frameborder="0"
                        allowfullscreen
                    >
                    </iframe>
                </div>

                {showHomeFooter()}
            </>
        );
    }
}
/*eslint-enable*/