import { observer } from 'mobx-react-lite';
import { MobxProvider, useStores } from './app/providers/MobxProvider';
import { HomePage } from './pages/home/HomePage';
import { CaseStudyPage } from './pages/case-study/CaseStudyPage';
import { ContactPage } from './pages/contact/ContactPage';
import './shared/styles/reset.scss';
import './shared/styles/global.scss';

const PageRouter = observer(() => {
  const { uiStore } = useStores();
  switch (uiStore.currentPage) {
    case 'case-study':
      return <CaseStudyPage />;
    case 'contact':
      return <ContactPage />;
    default:
      return <HomePage />;
  }
});

export const App = () => {
  return (
    <MobxProvider>
      <PageRouter />
    </MobxProvider>
  );
};
