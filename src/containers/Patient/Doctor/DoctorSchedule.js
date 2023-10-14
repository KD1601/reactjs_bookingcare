import React, { Component } from 'react';
import { connect } from "react-redux";
import './DoctorSchedule.scss'
import Select from 'react-select';
import moment from 'moment';
import localization from 'moment/locale/vi'
import { LANGUAGES } from '../../../utils'
import { getScheduleDoctorByDate } from '../../../services/userService'



class DoctorSchedule extends Component {

    constructor(props) {
        super(props)
        this.state = {
            allDays: [],
        }
    }

    async componentDidMount() {
        let { language } = this.props
        this.setArrDays(language)
    }

    setArrDays = (language) => {
        let allDays = []
        for (let i = 0; i < 7; i++) {
            let obj = {}
            if (language === LANGUAGES.VI) {
                obj.label = moment(new Date()).add(i, 'days').format('dddd - DD/MM')
            } else {
                obj.label = moment(new Date()).add(i, 'days').locale('en').format('dddd - DD/MM')

            }
            obj.value = moment(new Date()).add(i, 'days').startOf('day').valueOf()
            allDays.push(obj)
        }


        this.setState({
            allDays: allDays,
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
            this.setArrDays(this.props.language)
        }
    }

    handleOnchangeSelect = async (e) => {
        if (this.props.doctorIdFromParent && this.props.doctorIdFromParent !== -1) {
            let doctorId = this.props.doctorIdFromParent
            let date = e.target.value
            let res = await getScheduleDoctorByDate(doctorId, date)
            console.log('check data doctor schedule: ', res)
        }
    }


    render() {
        let { allDays } = this.state
        return (
            <div className='doctor-schedule-container'>
                <div className='all-schedule'>
                    <select onChange={(e) => this.handleOnchangeSelect(e)}>
                        {allDays && allDays.length > 0 &&
                            allDays.map((item, index) => {
                                return (
                                    <option key={index} value={item.value}>{item.label}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='all-available-item'>

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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);
