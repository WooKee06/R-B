import { type ReactNode, type ElementType } from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export const Container = ({ children, className, as: Tag = 'div' }: ContainerProps) => {
  const classNames = [styles.container, className].filter(Boolean).join(' ');
  return <Tag className={classNames}>{children}</Tag>;
};
