import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Cell } from "recharts";


let data = [{ name: "Group A", value: 400 },
{ name: "Group B", value: 300 },
{ name: "Group C", value: 300 },
{ name: "Group D", value: 200 }]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const renderCustomizedLabel = ({
  x, y, name
}) => {
  return (
    <text x={x} y={y} fill="black" textAnchor="end" dominantBaseline="central">
      {name}
    </text>
  );
};

const Piechart = (props) => {
  
  const [fireData, setFireData] = useState([])
  const [colors, setColors] = useState([])

  const dataBreakdown = () => {
    let object = {}
    
    props.data.map(fire => {
      debugger
      if(object[`${fire.irwin_FireCause}`]){
        object[`${fire.irwin_FireCause}`][0] += 1
        object[`${fire.irwin_FireCause}`][1] += fire.poly_Acres_AutoCalc
      }
      else{
        object[`${fire.irwin_FireCause}`] = [1, fire.poly_Acres_AutoCalc]
      }
      // return { category: attributes.irwin_FireCause, acres: attributes.poly_Acres_AutoCalc }
    })
  }

  useEffect(() => {
    setFireData(data)
    setColors(COLORS)
    dataBreakdown()
  }, [])

  return (
    <PieChart width={400} height={400}>
        <Pie
            data={fireData}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
        >
            {fireData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
    </PieChart>
    )
}

export default Piechart
