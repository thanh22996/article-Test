import React from "react";

const InputGroups = () => {
    return <div className="inputGroups-block" style={{ marginTop: 150 }}>
        <p> <b className="text-title"> Input Groups </b> </p>
        <h6>
            <b> Place one add-on or button on either side of an input.
                You may also place one on both sides of an input.
                Remember to place <code> {"<"}label{">"} </code>s outside the input group.
            </b>
        </h6>

        <div className="input-groups">
            <span className="span-left">@</span>
            <input className="input-groups-control" type={Text} placeholder="Username"></input>
        </div>

        <div className="input-groups">
            <input className="input-groups-control" type={Text} placeholder="Recipient's username"></input>
            <span className="span-right">@example.com</span>
        </div>



        <p>Your vanity URL</p>

        <div className="input-groups">
            <span className="span-left">https://example.com/users/</span>
            <input className="input-groups-control" type={Text} ></input>
        </div>

        <div className="input-groups">
            <span className="span-left">$</span>
            <input className="input-groups-control" type={Text} ></input>
            <span className="span-right">.00</span>
        </div>

        <div className="input-groups" >
            <span className="span-left">$0.00</span>
            <input className="input-groups-control" type={Text} ></input>
        </div>

        <div className="input-groups">
            <span className="span-left">$0.00</span>
            <input className="input-groups-control" type={Text} ></input>
        </div>

        <div className="input-groups">
            <span className="span-left">With textarea</span>
            <textarea></textarea>
        </div>

        <div className="input-groups">
            <span className="span-left">First and last name</span>

            <input className="input-groups-control" type={Text} ></input>
            <input className="input-groups-control" type={Text} ></input>

        </div>

        <div className="input-groups">
            <span className="span-left">
                <input type={"checkbox"}></input>
            </span>
            <input className="input-groups-control" type={Text} placeholder="Username"></input>
        </div>

        <div className="input-groups">
            <span className="span-left">
                <input type={"radio"}></input>
            </span>
            <input className="input-groups-control" type={Text} placeholder="Username"></input>
        </div>
    </div>

}

export default InputGroups