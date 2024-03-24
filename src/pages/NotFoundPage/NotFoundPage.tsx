import { Link } from 'react-router-dom';
import svg from '../../../assets/svg/404.svg';
import './NotFoundPage.scss';

export default function NotFoundPage() {
  return (
    <div>
      <img src={svg} alt="svg" />
      <Link to="/" className="recover">
        <div className="back">Я ПОТЕРЯЛСЯ</div>
      </Link>
    </div>
  );
}
