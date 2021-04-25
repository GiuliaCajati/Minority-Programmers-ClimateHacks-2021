import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
  

const Barchart = ({data, type}) => {
    console.log(data)
    return (
        <BarChart
            width={350}
            height={250}
            data={data}
            // barSize={}
            interval={0}
            margin={{
                top: 50,
                right: 70,
                left: 0,
                bottom: 0
            }}
            >
            <CartesianGrid strokeDasharray={"3 3"} />
            <XAxis dataKey="PrimaryFuel" tickSize="3" interval={0} tick={{fontSize: "8px"}}/>
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={type} barSize={20} fill="#8884d8" />
        </BarChart>
    )
}

export default Barchart
