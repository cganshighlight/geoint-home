import React, { Component } from "react";
import { ScrollTo } from "react-scroll-to";
import Button from '@material-ui/core/Button';
import FloatingActionButtons from './ScrollTopButton';


export default class ScrollToTop extends Component {
  render() {
    return (
      <ScrollTo>
        {({ scrollTo }) => (
            <a className="scroll-style" onClick={() => scrollTo({ y: 0, smooth: true })}>
             {/* Oh yeah, we can scroll by x also! */}
             <FloatingActionButtons />
          </a>
        )}
      </ScrollTo>
    );
  }
}