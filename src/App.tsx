import { Route, Routes } from "react-router-dom";
import { MobxProvider } from "./app/providers/MobxProvider";
import { HomePage } from "./pages/home/HomePage";
import { CaseStudyPage } from "./pages/case-study/CaseStudyPage";
import { ContactPage } from "./pages/contact/ContactPage";
import "./shared/styles/reset.scss";
import "./shared/styles/global.scss";

export const App = () => {
  return (
    <MobxProvider>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="case-study" element={<CaseStudyPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </MobxProvider>
  );
};
