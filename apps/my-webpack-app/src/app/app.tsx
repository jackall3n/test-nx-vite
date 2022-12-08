// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';

import { UserType } from '@test-nx-vite/my-workspace-lib';

export function App() {
  return (
    <>
      {UserType.FUN}
      <NxWelcome title="my-webpack-app" />
      <div />
    </>
  );
}

export default App;
