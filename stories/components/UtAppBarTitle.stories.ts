import { UtAppBarTitle } from '@/components/UtAppBar';

export default {
  title: 'Design System/Composants/UtAppBarTitle',
  component: UtAppBarTitle,
};

export const basique = () => ({
  components: { UtAppBarTitle },
  template: '<ut-app-bar-title website="Nom du site" page="Titre de page 3"/>',
});
