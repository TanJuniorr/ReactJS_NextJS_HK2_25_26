import { useState } from "react";
import Alert from "../components/Alert_Noti/Alert";

function Bai3_Alert() {

    const [status, setStatus] = useState("success")

    return (
        <>
        <button onClick={() => setStatus("success")}>Success</button>
        <button onClick={() => setStatus("warning")}>Warning</button>
        <button onClick={() => setStatus("error")}>Error</button>
        <Alert status={status}/>
        </>
    )
    
}

export default Bai3_Alert