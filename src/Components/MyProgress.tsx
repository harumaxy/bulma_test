import React, { useState } from 'react'
import { Progress } from 'bloomer/lib/elements/Progress'
import { Content } from 'bloomer/lib/elements/Content'

const MyProgress = () => {
  const [time, setTime] = useState(0)
  setTimeout(() => {
    setTime(time + 10)
  }, 10)
  return (
    <Content>
      <Progress isColor="info" />
      <Progress isColor="primary" />
      <Progress isColor="secondary" />
      <span>Small : Success</span>
      <Progress
        isSize="small"
        isColor="success"
        max={1000}
        value={time % 1000}
      />
      <span>Medium : Warning</span>
      <Progress
        isSize="medium"
        isColor="warning"
        max={10000}
        value={time % 10000}
      />
      <span>Large : Danger</span>
      <Progress
        isSize="large"
        isColor="danger"
        max={100000}
        value={time % 100000}
      />
    </Content>
  )
}

export default MyProgress
