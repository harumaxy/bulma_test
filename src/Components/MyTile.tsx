import React from 'react'
import { Tile } from 'bloomer/lib/grid/Tile'
import { Box } from 'bloomer/lib/elements/Box'
import { Container } from 'bloomer/lib/layout/Container'
import { Notification } from 'bloomer/lib/elements/Notification'

const MyTile = () => {
  return (
    <Tile isAncestor>
      <Tile isParent isSize={4}>
        <Container>
          <Notification isColor="warning">warning</Notification>
        </Container>
      </Tile>
      <Tile isParent isVertical isChild isSize={8}>
        <Tile isChild>
          <Notification isColor="success">success</Notification>
        </Tile>
        <Tile isChild>
          <Notification isColor="danger">danger</Notification>
        </Tile>
      </Tile>
    </Tile>
  )
}

export default MyTile
