import { makeAutoObservable } from 'mobx';

class UiStore {
  isMobileMenuOpen = false;
  isModalOpen = false;
  modalContent: React.ReactNode | null = null;
  scrolled = false;
  activeSection = '';

  constructor() {
    makeAutoObservable(this);
  }

  toggleMobileMenu = () => {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
  };

  closeMobileMenu = () => {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  };

  openModal = (content: React.ReactNode) => {
    this.modalContent = content;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  };

  closeModal = () => {
    this.isModalOpen = false;
    this.modalContent = null;
    document.body.style.overflow = '';
  };

  setScrolled = (value: boolean) => {
    this.scrolled = value;
  };

  setActiveSection = (section: string) => {
    this.activeSection = section;
  };
}

export const uiStore = new UiStore();
