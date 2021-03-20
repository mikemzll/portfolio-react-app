import React from 'react';
// import Loader from 'common/components/Loader/Loader';
import Router from '../../../../common/components/Routes/AppRouter';
import { useTranslation } from 'react-i18next';
import { useStoreon } from 'storeon/react';

const AppCore = () => {
  const { t } = useTranslation();
  // const { authIsReady } = useStoreon('authIsReady');

  // return authIsReady ? <Routes /> : <Loader>{t('COMMON.APP_IS_LOADING')}</Loader>;
  return <Router />;
};

export default AppCore;