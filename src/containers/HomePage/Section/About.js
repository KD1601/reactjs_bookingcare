import React, { Component } from 'react';
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl';
import { TikTok } from 'react-tiktok';

class About extends Component {

    render() {

        return (

            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Hành trình hoàn thành dự án này:
                </div>
                <p className='sub-title-about'>Video đầu tiên và cuối cùng đánh dấu hoàn thành dự án clone booking care của Felix dev!!!</p>

                <div className='section-about-content'>
                    <div className='content-left'>
                        <TikTok
                            url="https://www.tiktok.com/@anhsinhviennam4/video/7278092483974810881"
                            width={500} // Kích thước chiều rộng mong muốn
                            height={300} // Kích thước chiều cao mong muốn
                        />
                    </div>
                    <div className='content-right'>
                        <TikTok
                            url="https://www.tiktok.com/@anhsinhviennam4/video/7296073930786295042"
                            width={500} // Kích thước chiều rộng mong muốn
                            height={300} // Kích thước chiều cao mong muốn
                        />
                    </div>
                    <div className='content-right'>
                        <TikTok
                            url="https://www.tiktok.com/@anhsinhviennam4/video/7288368709859544322"
                            width={500} // Kích thước chiều rộng mong muốn
                            height={300} // Kích thước chiều cao mong muốn
                        />
                    </div>

                </div>
            </div >
        )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
