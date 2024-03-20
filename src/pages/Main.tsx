import { Link } from 'react-router-dom';
import { RoutesNames } from '../routes/routes_names';

export function Main() {
  return (
    <div className="flex flex-col">
      메인페이지
      <Link to={RoutesNames.sample}>샘플 페이지로 이동</Link>
    </div>
  );
}
