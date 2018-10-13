import React, { PureComponent } from 'react'

import DateTime from 'luxon/src/datetime.js'

const FORMAT = 'cccc, dd LLLL @ HH:mm'

class DateStart extends PureComponent {
  render() {
    const { start } = this.props

    return (
      <span
        style={{
          color: 'gray',
          textTransform: 'capitalize',
        }}
      >
        {DateTime.fromMillis(start)
          .setLocale('it')
          .toFormat(FORMAT)}
      </span>
    )
  }
}

export default DateStart
