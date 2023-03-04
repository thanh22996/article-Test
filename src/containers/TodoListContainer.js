import React from 'react'
import { Place } from '../components/PurchaseComponent/Place'
import { Time } from '../components/PurchaseComponent/Time'
import { Payment } from '../components/PurchaseComponent/Payment'
import { Advertise } from '../components/TestComponent1/Advertise'
import { Voucher } from '../components/TestComponent1/Voucher'


export function TodoListContainer() {
    return <div className='formbhx-block'>
        <Place />
        <Time />
        <Payment />
    </div>
}