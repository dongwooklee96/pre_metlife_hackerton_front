import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { NotFound } from '../pages/NotFound';
import { Layout } from '../layout/Layout';
import { Error } from '../pages/Error';
import { Main } from '../pages/Main';
import { Sample } from '../pages/Sample';
import { RoutesNames } from './routes_names';

export default function Router() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Routes>
        <Route element={<Layout />}>
          <Route path={RoutesNames.home} element={<Main />} />
          <Route path={RoutesNames.sample} element={<Sample />} />
        </Route>
        <Route path={RoutesNames.wildcards} element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
}
