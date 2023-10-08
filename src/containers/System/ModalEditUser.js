
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from "../../utils/emitter"
import _ from 'lodash';

class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        }

    }

    componentDidMount() {
        let user = this.props.currentUser
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: 'hardcode',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address,
            })
        }
    }

    toggle = () => {
        this.props.toggleFromParent()
    }

    handleOnChangeInput = (e, id) => {
        let copyState = { ...this.state }
        copyState[id] = e.target.value

        this.setState({
            ...copyState,
        })
    }

    checkValidateInput = () => {
        let isValid = true
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false
                alert('Missing parameter ' + arrInput[i])
                break
            }
        }
        return isValid
    }

    handleSaveUser = () => {
        let isValid = this.checkValidateInput()
        if (isValid) {
            this.props.editUser(this.state)
        }
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => this.toggle()}
                className={'modal-user-container'}
                size="lg"
            >
                <ModalHeader toggle={() => this.toggle()}>Edit a user</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input disabled value={this.state.email} type='text' onChange={(e) => this.handleOnChangeInput(e, 'email')} />
                        </div>

                        <div className='input-container'>
                            <label>Password</label>
                            <input disabled value={this.state.password} type='password' onChange={(e) => this.handleOnChangeInput(e, 'password')} />
                        </div>

                        <div className='input-container'>
                            <label>First name</label>
                            <input value={this.state.firstName} type='text' onChange={(e) => this.handleOnChangeInput(e, 'firstName')} />
                        </div>

                        <div className='input-container'>
                            <label>Last name</label>
                            <input value={this.state.lastName} type='text' onChange={(e) => this.handleOnChangeInput(e, 'lastName')} />
                        </div>

                        <div className='input-container max-width-input'>
                            <label>Address</label>
                            <input value={this.state.address} type='text' onChange={(e) => this.handleOnChangeInput(e, 'address')} />
                        </div>
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className='px-3'
                        onClick={() => this.handleSaveUser()}
                    >Save changes</Button>{' '}
                    <Button color="secondary" className='px-3' onClick={() => this.toggle()}>Close</Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);


