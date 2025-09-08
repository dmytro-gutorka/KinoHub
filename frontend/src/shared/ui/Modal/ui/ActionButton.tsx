import { Button } from '@mui/material';
import { useModalContext } from '@shared/ui/Modal';

interface AgreeButtonProps {
  userOnClick?: () => void;
  label: string;
}

export default function ActionButton({ userOnClick, label }: AgreeButtonProps) {
  const { closeModal } = useModalContext();

  function handleClick() {
    userOnClick?.();
    closeModal();
  }

  return <Button onClick={handleClick}>{label}</Button>;
}
