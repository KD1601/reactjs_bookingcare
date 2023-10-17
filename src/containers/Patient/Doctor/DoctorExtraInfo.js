import React, { Component } from 'react';
import { connect } from "react-redux";
import './DoctorExtraInfo.scss'
import Select from 'react-select';
import { LANGUAGES } from '../../../utils'
import { getScheduleDoctorByDate } from '../../../services/userService'
import { FormattedMessage } from 'react-intl';



class DoctorExtraInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isShowDetailInfo: false
        }
    }

    async componentDidMount() {

    }


    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }

    }

    showHideDetailInfo = (status) => {
        this.setState({
            isShowDetailInfo: status
        })
    }

    render() {
        let { isShowDetailInfo } = this.state
        return (
            <div className='doctor-extra-info-container'>
                <div className='content-up'>
                    <div className='text-address'>ĐỊA CHỈ KHÁM</div>
                    <div className='name-clinic'> Phòng khám chuyên khoa da liễu</div>
                    <div className='detail-address'>201 Phố Huế - Hai Bà Trưng - Hà Nội</div>
                </div>
                <div className='content-down'>
                    {isShowDetailInfo === false ?
                        <div className='short-info'>
                            GIÁ KHÁM: 500.000đ. <span
                                onClick={() => this.showHideDetailInfo(true)}
                            >
                                Xem chi tiết</span>
                        </div>
                        :
                        <>
                            <div className='title-price'>GIÁ KHÁM: </div>
                            <div>
                                <div className='detail-price'>
                                    <div className='price'>
                                        <span className='left'>
                                            Giá khám
                                        </span>
                                        <span className='right'>
                                            500.000đ
                                        </span>
                                    </div>

                                    <div className='note'>Giá khám chưa bao gồm chi phí siêu âm, xét nghiệm</div>
                                </div>

                                <div className='payment'>
                                    Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ
                                </div>
                            </div>
                            <div className='hide-price'>
                                <span
                                    onClick={() => this.showHideDetailInfo(false)}
                                >
                                    Ẩn bảng giá</span>
                            </div>

                        </>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfo);
