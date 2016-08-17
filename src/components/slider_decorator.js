import React from 'react'

/*
 * Page selector decorator for nuka-carousel.
 *
 * Some parameters modified to look like the original one on symless.com
 * It has rewritten to ES2015 to help with readability.
 * https://github.com/FormidableLabs/nuka-carousel/blob/master/src/decorators.js
 */

export default {
    component: props => {
      const getIndexes = (count, inc) => {
        let arr = []
        for (let i = 0; i < count; i += inc) {
          arr.push(i)
        }
        return arr
      }
      const getListStyles = () => ({
        position: 'relative',
        margin: 0,
        top: 50,
        padding: 0
      })
      const getListItemStyles = () => ({
        listStyleType: 'none',
        display: 'inline-block'
      })
      const getButtonStyles = (active) => ({
        border: 0,
        background: 'transparent',
        color: 'black',
        cursor: 'pointer',
        padding: 10,
        outline: 0,
        fontSize: 48,
        opacity: active ? 1 : 0.5
      })
      const indexes = getIndexes(props.slideCount, props.slidesToScroll)
      return (
        <ul style={getListStyles()}>
          {indexes.map(index => (
            <li style={getListItemStyles()} key={index}>
              <button
                style={getButtonStyles(props.currentSlide === index)}
                onClick={props.goToSlide.bind(null, index)}>
                &bull;
              </button>
            </li>
          ))}
        </ul>
      )
    },
    position: 'BottomCenter'
  }
