import ModalRoot from '@shared/ui/Modal/model/provider';
import Container from '@shared/ui/Modal/ui/Container';
import Content from '@shared/ui/Modal/ui/Content';
import Open from '@shared/ui/Modal/ui/Open';
import Header from '@shared/ui/Modal/ui/Header';
import Close from '@shared/ui/Modal/ui/Close';
import ActionButton from '@shared/ui/Modal/ui/ActionButton';

export const Modal = Object.assign(ModalRoot, {
  Open,
  Close,
  Header,
  Content,
  Container,
  ActionButton,
});

export { useModalContext } from '@shared/ui/Modal/model/context';
