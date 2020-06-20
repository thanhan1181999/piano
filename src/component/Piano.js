import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BtnBlack from './BtnBlack';
import BtnWhite from './BtnWhite';
import { whiteKeys, whiteKeysList, whiteKeysMapping, blackKeys, blackKeysMapping } from '../CONST/key';

let Piano = () => {
  //trạng thái quản lý nút nào đang được bấm
  //dùng để đổi màu nền của nút khi được bấm
  let [heighlightKey, setHeighlightKey] = useState(null);

  const play = config => window.piano.play(config[0], config[1], 2);

  let abc = (key, index) => <BtnWhite heighlightKey={heighlightKey} config={key} key={index} play={play}/>;
  let xyz = (key, index) => <BtnBlack heighlightKey={heighlightKey} config={key} key={index} play={play}/>;
  let whiteKeyComponent = whiteKeys.map(abc);
  let blackKeyComponent = blackKeys.map(xyz);

  let playPiano = event => {
    let { key } = event;
    //mỗi key sẽ có 1 config tương ứng, 
    //chính là các phần tử của whiteKeys hay blackKeys, 
    //chính là config được truyền vào phím piano
    const config = whiteKeysMapping[key] || blackKeysMapping[key];
    //chuyển đổi key ra theo định dạng config[0]+config[1] 
    //tiện cho việc test key mình đang bấm bằng key sẵn có của từng phím theo định dạng config[0]+config[1] 
    if (config) {
      key = {
        value : config[0] + config[1],
        uuid  : uuidv4()
      };
      console.log(key);
      //cập nhật nút đang được bấm trong state
      setHeighlightKey(key);
      play(config);
    }
  }

  //truyền [] để nói rằng chỉ chạy một lần, khi state thay đổi ko cần chạy lại
  useEffect(() => {
    //didMount
    window.document.body.addEventListener('keyup', playPiano);
    //willUnmunt
    return () => window.document.body.removeEventListener('keyup', playPiano);
  }, []);

  return (
    <div>
      <h2>Piano component</h2>
      <div className="page">
        <div className="piano">
          {blackKeyComponent}
          <div>
            {whiteKeyComponent}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Piano;