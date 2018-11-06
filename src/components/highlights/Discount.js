import React, { Component } from 'react';
import { Fade, Slide } from 'react-reveal';

import MyButton from '../utils/MyButton';

export default class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  }
  porcentage = () => {
    if(this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      })
    }
  }

  componentDidUpdate() {
    setTimeout(()=> {
      this.porcentage();
    }, 50)
  }
  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.porcentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 20th JUNE</h3>
              <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
              <MyButton
                text="Purchase Tickets"
                bck="#ffa800"
                color= "#ffffff"
                link="ukr.net"
              />
            </div>
          </Slide>
        </div>
      </div>
    )
  }
}
