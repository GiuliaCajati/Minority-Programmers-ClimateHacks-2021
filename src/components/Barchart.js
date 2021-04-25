import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from "recharts";

const Barchart = ({data, type}) => {
    const COLORS = ["#0088FE", "#FFBB28","#00C49F", "#FF8042", "#225577"];

    return (
        <BarChart
            width={350}
            height={250}
            data={data}
            interval={0}
            margin={{
                top: 50,
                right: 70,
                left: 0,
                bottom: 0
            }}
            >
            <CartesianGrid strokeDasharray={"3 3"} />
            <XAxis dataKey="PrimaryFuel" tickSize="10" interval={0} tick={{fontSize: "10px"}}/>
            <YAxis />
            <Tooltip />
            <Bar dataKey={type} barSize={20}>
                {data.map((category, index) => {
                    return <Cell key={`cell-${index}`} fill={COLORS[index]}/>
                })}
            </Bar>
        </BarChart>
    )
}

export default Barchart
