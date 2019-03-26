import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as DataActions from '../../actions/data.actions'
import { TIME_FRAMES, HRS } from '../../constants'

const TITLE = 'Tech & News'
const DISCUSS = 'discuss'

// const items = require('../../items.json')

const ClickableLink = ({ className, id, onClick, children }) => (
  <a
    className={className}
    href="#"
    onClick={(e) => {
      e.preventDefault()
      onClick(id)
    }}
  >{children}</a>
)

const ListItem = (item, index) => (
  <div className='list-item' key={item.id}>
    <a
      href={item.url}
      target="_blank"
    >
      {`${index + 1}. ${item.title}`}
    </a>
    <a
      className='domain-link'
      href={item.url}
      target="_blank"
    >
      {`(${item.domain})`}
    </a>
    <a
      className='discuss-link'
      href={item.discussLink}
      target='_blank'
      ping={`/l/${item.encryptedDiscussLink}`}
    >
      {DISCUSS}
    </a>
  </div>
)

class Home extends React.Component {

  componentDidMount() {
    this.props.getData()
  }

  handleTimeFrameClick = (timeFrame) => {
    this.props.getData(timeFrame)
  }

  handleReverseClick = (timeFrame) => {
    this.props.reverseData(timeFrame)
  }

  render() {
    const { items } = this.props
    return(
      <div>
        <h1>{TITLE}</h1>
        <div className='time-frames'>
          {
            TIME_FRAMES.map(timeFrame => (
              <ClickableLink
                className='time-frame-link'
                onClick={() => this.handleTimeFrameClick(timeFrame)}
              >
                {`${timeFrame}${HRS}`}
              </ClickableLink>
            ))
          }
        </div>
        <ClickableLink
          className='time-frame-link'
          onClick={() => this.handleReverseClick(timeFrame)}
        >
          {`${timeFrame}${HRS}`}
        </ClickableLink>
        {
          items.map(ListItem)
        }
      </div>
    )
  }
}

const mapStateToProps = ({ data }) => ({
  items: data.items,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(DataActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
