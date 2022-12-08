import styles from './my-vite-lib.module.css';

/* eslint-disable-next-line */
export interface MyViteLibProps {}

export function MyViteLib(props: MyViteLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyViteLib!</h1>
    </div>
  );
}

export default MyViteLib;
