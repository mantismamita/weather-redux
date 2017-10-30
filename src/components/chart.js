import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const average = (arr) => {
    return Math.round(arr.reduce((sum, value) => { return sum + value })/ arr.length)
}
const Chart  = (props) => {
    return (
        <Sparklines height={120} width={180} data={props.data}>
            <SparklinesLine color={props.color} />
            <SparklinesReferenceLine type="avg" />
            <div>{average(props.data)} {props.units}</div>
        </Sparklines>  
    );
}

export default Chart;