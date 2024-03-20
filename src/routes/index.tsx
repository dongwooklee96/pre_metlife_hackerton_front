import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { NotFound } from '../pages/NotFound';
import { Sample } from '../pages/Sample';
import { Layout } from '../layout/Layout';
import { Error } from '../pages/Error';
import { Main } from '../pages/Main';

export default function Router() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/sample" element={<Sample />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}
