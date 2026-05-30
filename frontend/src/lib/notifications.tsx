/* eslint-disable react-refresh/only-export-components */
import { toast, Toaster } from 'sonner';
import { getErrorMessage } from './error-handler';

export const Notifications = () => (
  <Toaster
    closeButton
    position="top-right"
    richColors
    toastOptions={{
      classNames: {
        toast: 'rounded-xl border shadow-lg',
        title: 'font-semibold',
        description: 'text-sm',
      },
    }}
  />
);

export const notify = {
  success: (message: string) => toast.success(message),
  error: (error: unknown) => toast.error(getErrorMessage(error)),
  info: (message: string) => toast.info(message),
};
