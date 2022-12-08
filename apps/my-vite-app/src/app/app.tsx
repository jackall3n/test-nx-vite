// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';

import { UserType } from '@test-nx-vite/my-vite-lib';

export function App() {
  return (
    <>
      {UserType.FUN}
      <NxWelcome title="my-vite-app" />
      <div />
    </>
  );
}

export default App;
