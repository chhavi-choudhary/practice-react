const Toggle=({active})=>{
    return(
        <div>
            <button className={active? "toggle-button":"normal-button"}>Toggle Button</button>
        </div>
    )
}
export default Toggle;