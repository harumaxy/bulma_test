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
          <td>書きたいなんて</td>
        </tr>
        <tr className="is-selected">
          <td>お前は</td>
          <td>頭が</td>
        </tr>
        <tr>
          <td>どうか</td>
          <td>してるぜ！</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default MyTable
