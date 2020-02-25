import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'bulma'
// fontawesome 読み込み
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/v4-shims'

import MyTab from './Components/MyTab'
import MyPanel from './Components/MyPanel'
import { Container } from 'bloomer/lib/layout/Container'
import { Delete } from 'bloomer/lib/elements/Delete'
import MyProgress from './Components/MyProgress'
import MyTable from './Components/MyTable'
import MyTag from './Components/MyTag'
import { Title } from 'bloomer/lib/elements/Title'
import MyTile from './Components/MyTile'

ReactDOM.render(
  <>
    <Title isSize={1}>Tab</Title>
    <MyTab />
    <Title isSize={1}>Panel</Title>
    <MyPanel />
    <Title isSize={1}>Progress</Title>
    <MyProgress />
    <Title isSize={1}>Table</Title>
    <MyTable />
    <Title isSize={1}>Tag</Title>
    <MyTag />
    <Title isSize={1}>Tile</Title>
    <MyTile />
  </>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
