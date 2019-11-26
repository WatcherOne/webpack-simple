/***********************************************
// author: zhubo
// email:  286154864@qq.com
// created_time: 2019-11-26
// function: 常用功能
************************************************/

// 获取row的key值
function getRowKeys(row) {
  return row.id
}

// 进制切换
function exchange(value, hex) {
  let result = ''
  switch(hex) {
    case 2: result = value.toString(hex); break;
    case 8: result = value.toString(hex); break;
    case 10: result = value.toString(hex); break;
    case 16: result = '0x' + value.toString(hex); break;
    default: result = value;
  }
  return result
}

export default { getRowKeys, exchange }
