import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure
} from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'next-i18next';

const alert = ({
  alertText,
  onClose,
  isOpen
}: {
  alertText: string;
  onClose: () => void;
  isOpen: boolean;
}) => {
  const cancelRef = React.useRef(null);
  const { t } = useTranslation();

  return (
    <>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent width={'80%'}>
          <AlertDialogHeader>{t('common:Warning')}</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>{alertText}</AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              {t('common:common.Close')}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default alert;
