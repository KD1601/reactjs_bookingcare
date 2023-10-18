import axios from "../axios"
const handleLoginAPI = (email, password) => {
    return axios.post('/api/login', { email, password })
}

const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`)
}

const createNewUserService = (user) => {
    return axios.post('/api/create-new-user', user)
}

const deleteUserService = (id) => {
    return axios.delete('/api/delete-user', {
        data: { id: id }
    })
}

const editUserService = (inputData) => {
    return axios.put('/api/edit-user', inputData)
}

const getAllCodeService = (inputData) => {
    return axios.get(`/api/allcode?type=${inputData}`)
}

const getTopDoctorHomeService = (limit) => {
    return axios.get(`/api/top-doctor-home?limit=${limit}`)
}

const getAllDoctors = () => {
    return axios.get(`/api/get-all-doctors`)
}
const saveDetailDoctorService = (data) => {
    return axios.post('/api/save-info-doctors', data)
}

const getDetailInfoDoctor = (id) => {
    return axios.get(`/api/get-detail-doctor-by-id?id=${id}`)
}

const saveBulkScheduleDoctor = (data) => {
    return axios.post('/api/bulk-create-schedule', data)
}

const getScheduleDoctorByDate = (doctorId, date) => {
    return axios.get(`/api/get-schedule-doctor-by-date?doctorId=${doctorId}&date=${date}`)
}

const getExtraInfoDoctorById = (doctorId) => {
    return axios.get(`/api/get-extra-info-doctor-by-id?doctorId=${doctorId}`)
}


export {
    handleLoginAPI, getAllUsers, createNewUserService, deleteUserService, editUserService
    , getAllCodeService, getTopDoctorHomeService, getAllDoctors, saveDetailDoctorService,
    getDetailInfoDoctor, saveBulkScheduleDoctor, getScheduleDoctorByDate, getExtraInfoDoctorById
}