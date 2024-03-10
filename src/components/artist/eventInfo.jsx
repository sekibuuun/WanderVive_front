import React from 'react';

const EventInfo = (props) => {
  return (
    <>
      <h2>イベント情報</h2>
      <ul>
        <li>イベント名:{props.event.eventName}</li>
        <li>ライブハウス名:{props.event.livehouseName}</li>
        <li>開店時間:{props.event.openTime}</li>
        <li>開演時間:{props.event.startTime}</li>
        <li>チケット料金:{props.event.fee}円</li>
        {props.event.homePage ? <li>ライブハウスHP:{props.event.homePage}</li> : null}
      </ul>
    </>
  );
};

export default EventInfo;
