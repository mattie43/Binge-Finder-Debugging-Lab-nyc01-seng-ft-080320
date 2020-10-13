import React from 'react';

const tvShow = (props) => {
  function selectShow() {
    props.selectShow(props.show)
  }
  return (
    <div>
      <br/>
      <img src={props.show.image.medium} onClick={selectShow} alt=""/>
    </div>
  );
}

export default tvShow;
