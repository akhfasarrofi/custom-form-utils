import { NotificationPlacement } from 'antd/es/notification/interface';
import triggerNotification from './notification-trigger';

/**
 * Function to trigger an success notification
 * @param {object} props - The properties for the notification
 * @param {string} props.description - The description of the notification
 * @param {string} props.message - The message of the notification
 * @param {number} props.duration - The duration of the notification
 * @param {NotificationPlacement} props.placement - The placement of the notification
 * @returns {void}
 */
const success = (props: {
  description?: string;
  message?: string;
  duration?: number;
  placement: NotificationPlacement;
}): void => {
  triggerNotification('success', props);
};

export default success;
