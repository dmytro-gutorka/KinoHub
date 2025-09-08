import ModalRoot from '@shared/ui/Modal/model/provider';
import Container from '@shared/ui/Modal/ui/container';
import Content from '@shared/ui/Modal/ui/content';
import Open from '@shared/ui/Modal/ui/open';
import Title from '@shared/ui/Modal/ui/title';
import Close from '@shared/ui/Modal/ui/close';

export const Modal = Object.assign(ModalRoot, { Open, Content, Title, Close, Container });

export { useModalContext } from '@shared/ui/Modal/model/context';
