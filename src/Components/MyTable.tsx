import React from 'react'
import { Table } from 'bloomer/lib/elements/Table'

const MyTable = () => {
  return (
    <Table isNarrow isBordered>
      <thead>
        <tr>
          <th>素の</th>
          <th>HTMLで</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>表を</td>
          <td>書くのは</td>
        </tr>
        <tr className="is-selected">
          <td>正直</td>
          <td>辛いと</td>
        </tr>
        <tr>
          <td>思い</td>
          <td>ます</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default MyTable
