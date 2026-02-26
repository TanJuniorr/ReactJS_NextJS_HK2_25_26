import Button_Component from "../components/Button_Component/Button_Component"

function Bai2_ButtonComponent() {
    return (
        <>
        <Button_Component
        type = "primary"
        name = "Primary"
        />
        <Button_Component
        type = "danger"
        name = "Danger"
        />
        <Button_Component
        type = "success"
        name = "Success"
        />
        </>
        
    )
}

export default Bai2_ButtonComponent