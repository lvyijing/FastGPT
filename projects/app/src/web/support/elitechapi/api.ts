import { GET } from '@/web/support/elitechapi/request';

export const getRobotAIRemainingTimes = (deviceId: string | undefined) =>
  GET('/elitech/getRobotAIRemainingTimes', { deviceId });
export const getDecrementTimes = (deviceId: string | undefined) =>
  GET('/elitech/decrementTimes', { deviceId });
