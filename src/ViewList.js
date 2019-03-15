import React, { Component } from 'react';
import './App.css';
import {Grid} from '@material-ui/core';

class ViewList extends Component {
  render() {
    return (
      <Grid xs={12} className="recently_view_div">
          <Grid className="recently_view_text_div">
            <Grid xs={12} className="recently_viewed_products" style={{ textAlign:'left'}}> 최근 본 상품 </Grid>
            <Grid xs={11} className="recently_viewed_more_see" style={{ textAlign:'right'}}> <a> 더 보기 </a> </Grid>
          </Grid>
      </Grid>
    );
  }
}

export default ViewList
