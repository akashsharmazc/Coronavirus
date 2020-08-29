import React from 'react'
import {Confirmed} from './Confirmed'
import {Deaths} from './Deaths'
import {Recovered} from './Recovered'
export const Graph = () => {
    return (
        <div id="graph">
            <Confirmed/>
            <Deaths/>
            <Recovered/>
        </div>
    )
}
