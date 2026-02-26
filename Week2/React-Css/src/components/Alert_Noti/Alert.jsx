import "./Alert.css"
function Alert({status}) {
    let message = ""

    if (status === "success") {
            message = "Thành công"
        }
    else if (status === "warning") {
        message = "Cảnh báo"
    }
    else if (status === "error") {
        message = "Lỗi"
    }

    return  <div className={`alert ${status}`}>{message}</div>
   
}

export default Alert