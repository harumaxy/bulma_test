import React, { useState } from 'react'
import { Column } from 'bloomer/lib/grid/Column'
import { Title } from 'bloomer/lib/elements/Title'
import { Tile, Box } from 'bloomer'
import { Tabs } from 'bloomer/lib/components/Tabs/Tabs'
import { TabList } from 'bloomer/lib/components/Tabs/TabList'
import { Tab } from 'bloomer/lib/components/Tabs/Tab'
import { TabLink } from 'bloomer/lib/components/Tabs/TabLink'

const MyTab: React.FC = (props: any) => {
  const [tabs, setTabs] = useState([
    { name: 'Pictures', href: '#', isActive: false },
    { name: 'Music', href: '#', isActive: true },
    { name: 'Video', href: '#', isActive: false },
    { name: 'Document', href: '#', isActive: false }
  ])

  const handleClick = (i: number) => {
    let newTabs = tabs.map(tab => ({
      ...tab,
      isActive: false
    }))
    newTabs[i].isActive = true
    setTabs(newTabs)
  }

  return (
    <Tabs isBoxed isToggle>
      <TabList>
        {tabs.map((tab, i) => (
          <Tab
            isActive={tab.isActive}
            onClick={() => {
              handleClick(i)
            }}
          >
            <TabLink>
              <span>{tab.name}</span>
            </TabLink>
          </Tab>
        ))}
      </TabList>
    </Tabs>
  )
}

export default MyTab
