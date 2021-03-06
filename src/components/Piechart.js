import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer} from "recharts";
import { renderCustomizedLabel} from '../helpers/piedata'

const COLORS = ["#0088FE", "#FFBB28","#00C49F", "#FF8042", "#225577"];

const Piechart = (props) => {

  return (
   <ResponsiveContainer height={180} width="100%">
      <PieChart width={300} height={300}>
          {props.data ?
          <Pie
              data={props.data}
              labelLine={true}
              label={renderCustomizedLabel}
              outerRadius={60}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
              className="pie"
          >
              {props.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
          </Pie> : null}
      </PieChart> 
    </ResponsiveContainer>

    )
}

export default Piechart
