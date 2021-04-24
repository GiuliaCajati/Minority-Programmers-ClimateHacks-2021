import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Cell } from "recharts";
import { getAverageAcres, getTotalFires, renderCustomizedLabel} from '../helpers/piedata'

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Piechart = (props) => {

  return (
    <PieChart width={400} height={400}>
        {props.data ?
        <Pie
            data={props.data}
            labelLine={true}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
        >
            {props.data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie> : null}
    </PieChart> 
    )
}

export default Piechart
