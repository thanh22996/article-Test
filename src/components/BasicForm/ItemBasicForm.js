import React from "react"

const ItemBasicForm = ({ dataItems }) => {

    return <div className="item-basic-control">

        <p> <b className="text-title">{dataItems.name}</b> </p>
        <h6> <b>Usage</b>
            <code> <b>type=" {dataItems.name}</b>  "</code>
        </h6>
        <input className="inputBasic-control" type={dataItems.typeInput} placeholder={dataItems.placeholder}></input>
    </div>
}

export default ItemBasicForm

