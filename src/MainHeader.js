import React, { Component } from 'react';
import './App.css';
import {Grid} from '@material-ui/core';
import headerData from './header_image.json';

class MainHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      header_data : headerData.length
    }
  }

  render() {
    return (
    <Grid xs={12} className="main_header_div">
      <Grid
        style={{ display : 'grid',
                 padding : '15px',
                 width: (headerData.length * 278) + 'px',
                 marginTop : '25px',
                 marginRight: '30px',
                 gridTemplateColumns : 'repeat(' + headerData.length + ', auto)',
                 gridGap : '10px'
        }}>
      {headerData.map( (el) => {
        return(
          <img className="main_header_image" src={el.url} />
        )
      })}
        {/* <img className="main_header_image" src="http://s3-ap-northeast-2.amazonaws.com/images-kr.girlstyle.com/wp-content/uploads/2019/01/Screen-Shot-0031-01-17-at-3.29.11-PM.png" />
        <img className="main_header_image" src="https://cdn.shopify.com/s/files/1/1374/2665/products/29214984688577736_1673859962.jpg?v=1547624402" /> */}
      </Grid>
    </Grid>
    );
  }
}

export default MainHeader
