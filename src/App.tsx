import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MobxProvider } from "./app/providers/MobxProvider";
import { HomePage } from "./pages/home/HomePage";
import { CaseStudyPage } from "./pages/case-study/CaseStudyPage";
import { ContactPage } from "./pages/contact/ContactPage";
import { ReviewsPage } from "./pages/reviews/ReviewsPage";
import { ServicesPage } from "./pages/services/ServicesPage";
import "./shared/styles/reset.scss";
import "./shared/styles/global.scss";

const PageTitleUpdater = () => {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.title = "R&B | Premium Digital Agency";
  }, [i18n.language, location]);

  return null;
};

export const App = () => {
  return (
    <MobxProvider>
      <PageTitleUpdater />
      {/* <VideoPromo /> */}
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="case-study" element={<CaseStudyPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="services" element={<ServicesPage />}
        />
      </Routes>
    </MobxProvider>
  );
};
