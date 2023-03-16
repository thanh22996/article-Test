import React from "react";
import ItemBasicForm from "../../components/BasicForm/ItemBasicForm";
import { itemBasics } from "../../constant/dataForm";
import MainLayout from "../../Layout/MainLayout";

function BasicElement() {
    return <MainLayout>
        <div className="basic-container">
            {itemBasics?.map((value, key) => {
                return <ItemBasicForm key={key} dataItems={value} />
            })}
        </div>
    </MainLayout>


}

export default BasicElement