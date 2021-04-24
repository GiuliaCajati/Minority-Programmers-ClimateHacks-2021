import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Cell } from "recharts";


let defaultData = [{ name: "Group A", value: 400 },
{ name: "Group B", value: 300 },
{ name: "Group C", value: 300 },
{ name: "Group D", value: 200 }]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const renderCustomizedLabel = ({
  x, y, name, value
}) => {
  return (
    <text x={x} y={y} fill="black" textAnchor="start" dominantBaseline="central">
      {name}: {value.toFixed(2)}
    </text>
  );
};

const Piechart = (props) => {

  const [colors, setColors] = useState([])

  const dataBreakdown = () => {
    let object = {}
    
    for(let i = 0; i < props.data.length; i++){
      if(object[`${props.data[i].irwin_FireCause}`]){
        object[`${props.data[i].irwin_FireCause}`][0] += 1
        object[`${props.data[i].irwin_FireCause}`][1] += props.data[i].poly_Acres_AutoCalc
      }
      else{
        object[`${props.data[i].irwin_FireCause}`] = [1, props.data[i].poly_Acres_AutoCalc]
      }
    }


    let array = []
    for(const key in object){
      if(!(key === "Undetermined")){
        object[key] = object[key][1] / object[key][0]
        array.push({name: key, value: object[key]})
      }
    }

    return array
  }

  useEffect(() => {

  }, [])

  return (
    <PieChart width={400} height={400}>
        {props.data ?
        <Pie
            data={dataBreakdown()}
            labelLine={true}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
        >
            {dataBreakdown().map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie> : null}
    </PieChart> 
    )
}

export default Piechart
