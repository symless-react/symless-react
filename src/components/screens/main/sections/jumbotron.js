import React, { Component } from 'react'

import Jumbotron from 'react-bootstrap/lib/Jumbotron'
import Carousel from 'nuka-carousel'

import medicalHeaderImage from '../../../../assets/img/medical-header.png'
import slider2Image from '../../../../assets/img/slider2.png'
import slider3Image from '../../../../assets/img/slider3.png'

import { default as Decorator } from '../../../slider_decorator'

/*const decorator = props => {
  const getIndexes = (count, inc) => {
    var arr = [];
    for (var i = 0; i < count; i += inc) {
      arr.push(i);
    }
    return arr;
  }
  var self = this;
  var indexes = this.getIndexes(self.props.slideCount, self.props.slidesToScroll);
    return (
      <ul style={self.getListStyles()}>
        {
          indexes.map(function(index) {
            return (
              <li style={self.getListItemStyles()} key={index}>
                <button
                  style={self.getButtonStyles(self.props.currentSlide === index)}
                  onClick={self.props.goToSlide.bind(null, index)}>
                  &bull;
                </button>
              </li>
            )
          })
        }
      </ul>
    )
  }
  ,
    const getListStyles = () => {{
      position: 'relative',
      margin: 0,
      top: -10,
      padding: 0
    }}
    const getListItemStyles = () => {{
      listStyleType: 'none',
      display: 'inline-block'
    }}
    const getButtonStyles = active => {{
      border: 0,
      background: 'transparent',
      color: 'black',
      cursor: 'pointer',
      padding: 10,
      outline: 0,
      fontSize: 24,
      opacity: active ? 1 : 0.5
    }}
  }),
  position: 'BottomCenter'
}*/

export default class Jumbo extends Component {
  /*
   * workaround for carousel's remount bug
   * https://github.com/FormidableLabs/nuka-carousel/issues/103
   */
  componentDidMount() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 50);
  }

  render() {
    return (
      <Jumbotron>
        <div className="container">
          <Carousel
            autoplay
            autoplayInterval={3000}
            decorators={[Decorator]}
            framePadding="0px 0px 50px 0px"
            initialSlideHeight={800}
            slidesToShow={1}
            speed={500}
            wrapAround
            >
            <div><h1>Programmers love Synergy</h1><img className="img-responsive" src={slider2Image} alt=""/></div>
            <div><h1>MRI technicians love Synergy</h1><img className="img-responsive" src={medicalHeaderImage} alt="" /></div>
            <div><h1>Sysadmins love Synergy</h1><img className="img-responsive" src={slider3Image} alt="" /></div>
          </Carousel>
        </div>
      </Jumbotron>
    )
  }
}
