import {
  Message,
  Notification
} from 'element-ui';

// 统一提示方式
const notify = {
  warn (msg, title = '错误') {
    Notification({
      title: title,
      message: msg,
      type: 'warning',
      position: 'bottom-right'
    });
  },
  success (msg, title = '成功') {
    Notification({
      title: title,
      message: msg,
      type: 'success',
      position: 'bottom-right'
    });
  },
  // 轻提醒
  msg (msg, type) {
    Message({
      message: msg,
      type: type || 'success'
    });
  }
};

export default notify;
