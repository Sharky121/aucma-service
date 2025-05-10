import styles from './container.module.scss';

const Container = ({ children, customClassName }: { children: React.ReactNode, customClassName?: string }) => {
  return <div className={`${styles.container}  ${customClassName ? customClassName : ''}`}>{children}</div>;
};

export default Container;
