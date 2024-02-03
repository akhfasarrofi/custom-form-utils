/**
 * Triggers an Ant Design notification.
 *
 * @param {'info' | 'success' | 'warning' | 'error'} type - The type of the notification.
 * @param {Object} props - Notification properties.
 * @param {string} [description='[ no description ]'] - The description of the notification.
 * @param {string} [message='Info'] - The message of the notification.
 * @param {number} [duration=MESSAGE_DURATION] - The duration of the notification.
 */

import { notification } from 'antd';

const MESSAGE_DURATION = 3;

/**
 * Triggers an Ant Design notification.
 *
 * @param {'info' | 'success' | 'warning' | 'error'} type - The type of the notification.
 * @param {Object} props - Notification properties.
 * @param {string} [description='[ no description ]'] - The description of the notification.
 * @param {string} [message='Info'] - The message of the notification.
 * @param {number} [duration=MESSAGE_DURATION] - The duration of the notification.
 */

const triggerNotification = <T>(
  type: 'info' | 'success' | 'warning' | 'error',
  props: T,
  description: string = '[ no description ]',
  message: string = 'Info',
  duration: number = MESSAGE_DURATION
): void => {
  notification[type]({ description, message, duration, ...props });
};

export default triggerNotification;
