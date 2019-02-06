// Copyright (c) Microsoft Corporation and others. Licensed under the MIT license.
// SPDX-License-Identifier: MIT

import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { LineChart, Line, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 }
]

export default class PageStatus extends Component {
  constructor(props) {
    super(props)

    const temp = {
      '2018-11-08T00:00:00Z': 512,
      '2018-11-09T00:00:00Z': 328,
      '2018-11-10T00:00:00Z': 299,
      '2018-11-11T00:00:00Z': 2123,
      '2018-11-12T00:00:00Z': 474,
      '2018-11-13T00:00:00Z': 719,
      '2018-11-14T00:00:00Z': 323,
      '2018-11-15T00:00:00Z': 302,
      '2018-11-16T00:00:00Z': 328,
      '2018-11-17T00:00:00Z': 532,
      '2018-11-18T00:00:00Z': 312,
      '2018-11-19T00:00:00Z': 6766,
      '2018-11-20T00:00:00Z': 386,
      '2018-11-21T00:00:00Z': 1084,
      '2018-11-22T00:00:00Z': 327,
      '2018-11-23T00:00:00Z': 707,
      '2018-11-24T00:00:00Z': 383,
      '2018-11-25T00:00:00Z': 304,
      '2018-11-26T00:00:00Z': 436,
      '2018-11-27T00:00:00Z': 610,
      '2018-11-28T00:00:00Z': 436,
      '2018-11-29T00:00:00Z': 757,
      '2018-11-30T00:00:00Z': 559,
      '2018-12-01T00:00:00Z': 310,
      '2018-12-02T00:00:00Z': 288,
      '2018-12-03T00:00:00Z': 935,
      '2018-12-04T00:00:00Z': 552,
      '2018-12-05T00:00:00Z': 451,
      '2018-12-06T00:00:00Z': 300,
      '2018-12-07T00:00:00Z': 321,
      '2018-12-08T00:00:00Z': 294,
      '2018-12-09T00:00:00Z': 287,
      '2018-12-10T00:00:00Z': 317,
      '2018-12-11T00:00:00Z': 323,
      '2018-12-12T00:00:00Z': 310,
      '2018-12-13T00:00:00Z': 348,
      '2018-12-14T00:00:00Z': 580,
      '2018-12-15T00:00:00Z': 2428,
      '2018-12-16T00:00:00Z': 298,
      '2018-12-17T00:00:00Z': 587,
      '2018-12-18T00:00:00Z': 1156,
      '2018-12-19T00:00:00Z': 930,
      '2018-12-20T00:00:00Z': 2931,
      '2018-12-21T00:00:00Z': 976,
      '2018-12-22T00:00:00Z': 288,
      '2018-12-23T00:00:00Z': 288,
      '2018-12-24T00:00:00Z': 290,
      '2018-12-25T00:00:00Z': 291,
      '2018-12-26T00:00:00Z': 288,
      '2018-12-27T00:00:00Z': 287,
      '2018-12-28T00:00:00Z': 288,
      '2018-12-29T00:00:00Z': 287,
      '2018-12-30T00:00:00Z': 288,
      '2018-12-31T00:00:00Z': 288,
      '2019-01-01T00:00:00Z': 290,
      '2019-01-02T00:00:00Z': 744,
      '2019-01-03T00:00:00Z': 287,
      '2019-01-04T00:00:00Z': 318,
      '2019-01-05T00:00:00Z': 288,
      '2019-01-06T00:00:00Z': 292,
      '2019-01-07T00:00:00Z': 717,
      '2019-01-08T00:00:00Z': 997,
      '2019-01-09T00:00:00Z': 1307,
      '2019-01-10T00:00:00Z': 512,
      '2019-01-11T00:00:00Z': 836,
      '2019-01-12T00:00:00Z': 336,
      '2019-01-13T00:00:00Z': 288,
      '2019-01-14T00:00:00Z': 546,
      '2019-01-15T00:00:00Z': 357,
      '2019-01-16T00:00:00Z': 328,
      '2019-01-17T00:00:00Z': 1284,
      '2019-01-18T00:00:00Z': 1309,
      '2019-01-19T00:00:00Z': 293,
      '2019-01-20T00:00:00Z': 391,
      '2019-01-21T00:00:00Z': 343,
      '2019-01-22T00:00:00Z': 766,
      '2019-01-23T00:00:00Z': 975,
      '2019-01-24T00:00:00Z': 795,
      '2019-01-25T00:00:00Z': 1729,
      '2019-01-26T00:00:00Z': 297,
      '2019-01-27T00:00:00Z': 295,
      '2019-01-28T00:00:00Z': 698,
      '2019-01-29T00:00:00Z': 1088,
      '2019-01-30T00:00:00Z': 1983,
      '2019-01-31T00:00:00Z': 1776,
      '2019-02-01T00:00:00Z': 707,
      '2019-02-02T00:00:00Z': 288,
      '2019-02-03T00:00:00Z': 289,
      '2019-02-04T00:00:00Z': 456,
      '2019-02-05T00:00:00Z': 865,
      '2019-02-06T00:00:00Z': 4
    }
    const dA = {
      'recomputed definition available': 1806,
      'computed definition available': 11568,
      'definition not available': 794
    }
    this.state = {
      requestsPerDay: Object.keys(temp).map(date => {
        return { date: new Date(date).toLocaleDateString(), count: temp[date] }
      }),
      definitionAvailability: Object.keys(dA).map(name => {
        return { name, value: dA[name] }
      })
    }
  }

  render() {
    return (
      <Grid className="main-container">
        <Row>
          <h2>Requests / day</h2>
          <LineChart width={1200} height={400} data={this.state.requestsPerDay}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="count" stroke="#8884d8" />
          </LineChart>
        </Row>
        <hr />
        <Row>
          <Col md={6}>
            <h2>Definition availability</h2>
            <table>
              <tbody>
                {this.state.definitionAvailability.map((entry, index) => {
                  return (
                    <tr>
                      <td>
                        <span
                          style={{
                            backgroundColor: COLORS[index % COLORS.length],
                            height: '20px',
                            width: '20px',
                            display: 'inline-block'
                          }}
                        />
                      </td>
                      <td>
                        <h3>{entry.name}</h3>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </Col>
          <Col md={6}>
            <ResponsiveContainer height={500}>
              <PieChart>
                <Pie
                  nameKey="name"
                  dataKey="value"
                  data={this.state.definitionAvailability}
                  labelLine={false}
                  label
                  label={this.renderPieLabel}
                  outerRadius={200}
                  fill="#8884d8"
                >
                  {this.state.definitionAvailability.map((entry, index) => (
                    <Cell fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Col>
        </Row>
      </Grid>
    )
  }

  renderPieLabel({ cx, cy, midAngle, innerRadius, outerRadius, percent }) {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180))
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180))

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }
}
