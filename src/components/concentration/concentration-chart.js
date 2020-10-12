import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export const ConcentrationChart = ({ chartData }) => {
    return (
      <LineChart width={1500} height={300} data={chartData} margin={{ top: 5, right: 0, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="Benzene" stroke="#8884d8" activeDot={{ r: 8 }}/>
        <Line type="monotone" dataKey="Acetone" stroke="#3AA0F4" activeDot={{ r: 8 }}/>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="time" title="Time"/>
        <YAxis title="Benezene and Acetone"/>
        <Tooltip />
      </LineChart>
    )
  }