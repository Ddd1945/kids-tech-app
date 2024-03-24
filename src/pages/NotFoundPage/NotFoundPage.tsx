import { Link } from 'react-router-dom';
import svg from '../../../assets/svg/404.svg';
import './NotFoundPage.scss';
import getEnvVars from '../../api/enviroment';

export default function NotFoundPage() {
  const { homeRoute } = getEnvVars();

  return (
    <div>
      <img src={svg} alt="svg" />
      <Link to={homeRoute} className="recover">
        <div className="back">Я ПОТЕРЯЛСЯ</div>
      </Link>
    </div>
  );
}
