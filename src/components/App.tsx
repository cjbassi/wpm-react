import * as React from 'react'
import keydown, { ALL_KEYS } from 'react-keydown'
import { connect } from 'react-redux'

import Buttons from '../components/Buttons'
import Stats from '../components/StatsBar'
import Typing from '../components/Typing'
import { GITHUB_URL } from '../constants'
import { IStoreState } from '../store'
import TextInfo from './TextInfo'

interface IAppProps {
  author?: string
  keydown?: any
}

@keydown(ALL_KEYS)
class App extends React.Component<IAppProps> {
  public render() {
    // tslint:disable-next-line:no-shadowed-variable
    const { author, keydown } = this.props
    return (
      <div>
        <h3>
          <a href={GITHUB_URL}>wpm-spa</a>
        </h3>
        <Buttons />
        <br />
        <Stats />
        <br />
        <Typing keydown={keydown} />
        {author !== undefined && (
          <div>
            <br />
            <TextInfo />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state: IStoreState) => {
  return {
    author: state.textData.author,
  }
}

export default connect(mapStateToProps)(App)
