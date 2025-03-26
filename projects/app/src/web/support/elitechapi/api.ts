import { GET } from '@/web/support/elitechapi/request';

export const getRobotAIRemainingTimes = (deviceId: object) =>
  GET('/device/Device/getRobotAIRemainingTimes', deviceId);
export const getDecrementTimes = (deviceId: object) =>
  GET('/device/Device/decrementTimes', deviceId);
