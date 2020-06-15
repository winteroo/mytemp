/**
 * @description 将base64转换为blob对象，用于下载或预览展示
 * @param {String} BASE64Data BASE64的文件数据
 * @param {String} MimeType MIME 类型
 */
const BASE64DataToBlob = (BASE64Data, MimeType) => {
  const MIME = MimeType || 'application/octet-stream';
  let bstr = atob(BASE64Data);
  let n = bstr.length;
  let u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], {
    type: MIME
  });
};
/**
 * @description 将blob数据对象下载为文件
 * @param {Blob} blobData 文件的blob对象数据
 * @param {String} filename 下载的文件名称
 */
const downLoadFile = (blobData, filename) => {
  if (typeof window.chrome !== 'undefined' || typeof window.safari !== 'undefined') {
    // Chrome version
    let link = document.createElement('a');
    let objUrl = window.URL.createObjectURL(blobData);
    link.href = objUrl;
    link.download = filename;
    link.click();
    // 释放内存
    window.URL.revokeObjectURL(objUrl);
  } else if (typeof window.navigator.msSaveBlob !== 'undefined') {
    // IE version
    // 直接保存
    // window.navigator.msSaveBlob(blobData, filename);
    // 保存或是打开文件
    window.navigator.msSaveOrOpenBlob(blobData, filename);
  } else {
    // Firefox version
    let file = new File([blobData], filename, {
      type: 'application/force-download'
    });
    let fileUrl = window.URL.createObjectURL(file);
    window.open(fileUrl);
    window.URL.revokeObjectURL(fileUrl);
  }
};
/**
 * @description 根据文件地址下载文件
 * @param {*} url 文件地址
 * @param {*} filename 文件名称 可选 不填会采用
 */
const downloadFileFromUrl = (url, filename) => {
  let link = document.createElement('a');
  link.href = url;
  // 加上会导致页面下载时闪烁
  // link.target = '_blank';
  if (filename) {
    link.download = filename;
  } else {
    let index = url.lastIndexOf('/') + 1;
    let selfFileName = url.substring(index);
    link.download = selfFileName;
  }
  if (IEVersion() === 'ie') {
    link.target = '_blank';
  }
  link.click();
  link.remove();
};
/**
 * @deprecated 复制函数
 * @example Clipboard().copy(val); 调用复制函数
 */
const Clipboard = function () {
  var textArea,
    copy;

  // 判断是不是ios端
  function isOS () {
    return navigator.userAgent.match(/ipad|iphone/i);
  }
  // 创建文本元素
  function createTextArea (text) {
    textArea = document.createElement('textArea');
    textArea.innerHTML = text;
    textArea.value = text;
    document.body.appendChild(textArea);
  }
  // 选择内容
  function selectText () {
    var range,
      selection;

    if (isOS()) {
      range = document.createRange();
      range.selectNodeContents(textArea);
      selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      textArea.setSelectionRange(0, 999999);
    } else {
      textArea.select();
    }
  }

  // 复制到剪贴板
  function copyToClipboard () {
    let flag = false;
    try {
      if (document.execCommand('Copy')) {
        // alert('复制成功！');
        flag = true;
      }
    } catch (err) {
      // alert('复制错误！请手动复制！');
      flag = false;
    }
    document.body.removeChild(textArea);
    return flag;
  }

  copy = function (text) {
    createTextArea(text);
    selectText();
    let flag = copyToClipboard();
    return flag;
  };

  return {
    copy: copy
  };
};

const IEVersion = () => {
  let userAgent = navigator.userAgent; // 取得浏览器的userAgent字符串
  let isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1; // 判断是否IE<11浏览器
  let isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;
  if (isIE || isIE11) {
    return 'ie';
  } else {
    return 'noie';// 不是ie浏览器
  }
};

const randomPWD = (digit) => {
  const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const word = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'g', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let half = Math.floor(digit / 2);
  let surplus = digit - half;
  let numList = [];
  let surplusList = [];
  let newPwd = '';
  for (let i = 0; i < half; i++) {
    numList.push(num[Math.floor(Math.random() * 10)]);
  }
  for (let j = 0; j < surplus; j++) {
    surplusList.push(word[Math.floor(Math.random() * 26)]);
  }
  newPwd = numList.concat(surplusList).sort(function (a, b) {
    return Math.random() > 0.5 ? -1 : 1;
  }).join('');
  return newPwd;
};

export {
  downloadFileFromUrl,
  BASE64DataToBlob,
  downLoadFile,
  Clipboard,
  IEVersion,
  randomPWD
};
