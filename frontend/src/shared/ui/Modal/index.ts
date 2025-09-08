import ModalRoot from '@shared/ui/Modal/model/provider';
import Container from '@shared/ui/Modal/ui/container';
import Content from '@shared/ui/Modal/ui/content';
import Open from '@shared/ui/Modal/ui/open';
import Title from '@shared/ui/Modal/ui/title';
import Close from '@shared/ui/Modal/ui/close';
import SubTitle from '@shared/ui/Modal/ui/subTitle';

export const Modal = Object.assign(ModalRoot, { Open, Close, Title, SubTitle, Content, Container });

export { useModalContext } from '@shared/ui/Modal/model/context';
