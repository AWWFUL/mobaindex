import axios from "axios"

//后端数据请求接口
const http=axios.create({
    baseURL:'http://localhost:3000/admin/api'
})

export default http