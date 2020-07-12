import React, { Component } from 'react'

import { connect } from 'react-refetch'

import DateStart from '../components/DateStart'

import fetch from 'isomorphic-fetch'
import sortBy from 'lodash/sortBy'
import isEmpty from 'lodash/isEmpty'

class Events extends Component {
  render() {
    const { eventsFetch } = this.props

    if (eventsFetch.pending || eventsFetch.rejected) {
      return null
    }

    // eventsFetch.fulfilled
    const events = eventsFetch.value

    if (isEmpty) {
      return (
        <div>
          Al momento non risultano eventi in programma, consulta i nostri canali
          tramite <a href="https://devday.it/#/">DevDay.it</a>
        </div>
      )
    }

    return (
      <div>
        {sortBy(events, ['time']).map((event, i) => {
          const { time, group, name, link, venue } = event
          const summary = `${group.name}: ${name}`

          return (
            <div key={i}>
              <hr />

              <p
                style={{
                  marginBottom: 0,
                }}
              >
                <DateStart start={time} />
              </p>
              <h1
                style={{
                  marginBottom: '0.825rem',
                }}
              >
                {(() => {
                  if (link) {
                    return (
                      <a href={link}>
                        <span className="highlight">{summary}</span>
                      </a>
                    )
                  }
                  return <span className="highlight">{summary}</span>
                })()}
              </h1>
              <p
                style={{
                  marginBottom: '0.825rem',
                }}
              >
                <a
                  target="_new"
                  href={`http://maps.google.com/maps?q=${venue.lat},${venue.lon}`}
                >
                  {venue.name} - {venue.address_1} - {venue.city}
                </a>
              </p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default connect.defaults({ fetch: fetch })((props) => {
  return {
    eventsFetch: {
      url: 'https://meetupapi.devday.it/.netlify/functions/proxy',
    },
  }
})(Events)
