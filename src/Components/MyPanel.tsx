import React from 'react'
import { Panel } from 'bloomer/lib/components/Panel/Panel'
import { PanelHeading } from 'bloomer/lib/components/Panel/PanelHeading'
import { PanelBlock } from 'bloomer/lib/components/Panel/PanelBlock'
import { Control } from 'bloomer/lib/elements/Form/Control'
import { Input } from 'bloomer/lib/elements/Form/Input'
import { Icon } from 'bloomer/lib/elements/Icon'
import { PanelTabs } from 'bloomer/lib/components/Panel/PanelTabs'
import { PanelTab } from 'bloomer/lib/components/Panel/PanelTab'
import { PanelIcon } from 'bloomer/lib/components/Panel/PanelIcon'
import { Checkbox } from 'bloomer/lib/elements/Form/Checkbox'
import { Button } from 'bloomer/lib/elements/Button'

const MyPanel = () => {
  return (
    <Panel>
      <PanelHeading>Repositories</PanelHeading>
      <PanelBlock>
        <Control hasIcons="left">
          <Input isSize="small" placeholder="Search" />
          <Icon isSize="small" isAlign="left">
            <span className="fa fa-search" aria-hidden="true" />
          </Icon>
        </Control>
      </PanelBlock>
      <PanelTabs>
        <PanelTab isActive>All</PanelTab>
        <PanelTab>Public</PanelTab>
        <PanelTab>Private</PanelTab>
        <PanelTab>Sources</PanelTab>
        <PanelTab>Fork</PanelTab>
      </PanelTabs>
      <PanelBlock isActive>
        <PanelIcon className="fa fa-book" />
        Bloomer
      </PanelBlock>
      <PanelBlock>
        <PanelIcon className="fa fa-code-fork" />
        RxJS
      </PanelBlock>
      <PanelBlock>
        <PanelIcon className="fa fa-code-fork" />
        Webpack
      </PanelBlock>
      <PanelBlock>
        <PanelIcon className="fa fa-code-fork" />
        Typescript
      </PanelBlock>
      <PanelBlock tag="label">
        <Checkbox> Remember me</Checkbox>
      </PanelBlock>
      <PanelBlock>
        <Button isOutlined isColor="primary">
          Reset all filters
        </Button>
      </PanelBlock>
    </Panel>
  )
}

export default MyPanel
