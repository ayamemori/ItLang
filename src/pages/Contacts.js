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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.565534412416!2d24.15276031570809!3d50.72799897951465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4724f3c79a0d71a3%3A0x7574dca39874603f!2z0J3QvtCy0L7QstC-0LvRi9C90YHQutC40Lkg0Y3Qu9C10LrRgtGA0L7QvNC10YXQsNC90LjRh9C10YHQutC40Lkg0LrQvtC70LvQtdC00LY!5e0!3m2!1sru!2sua!4v1655731616377!5m2!1sru!2sua"
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