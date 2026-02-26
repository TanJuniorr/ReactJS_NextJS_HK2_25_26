import "./Button_Component.css"

function Button_Component({type, name}) {
    return (
        <div className="ButtonComponent">
            <button className={`btn btn-${type}`}>{name}</button>
        </div>
    )
}

export default Button_Component