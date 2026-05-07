import { MobxProvider } from './app/providers/MobxProvider';
import { HomePage } from './pages/home/HomePage';
import './shared/styles/reset.scss';
import './shared/styles/global.scss';

export const App = () => {
  return (
    <MobxProvider>
      <HomePage />
    </MobxProvider>
  );
};
