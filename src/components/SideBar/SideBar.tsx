import { useDispatch, useSelector } from 'react-redux';
import { getChoosenTag, setChoosenTag } from '../../redux/slices/sideBarSlice';
import './SideBar.scss';

const SideBar = () => {
  const choosenTag = useSelector(getChoosenTag);
  const dispath = useDispatch();

  const tags = [
    'Все темы',
    'Логика и мышление',
    'Загадки',
    'Головоломки',
    'Путешествия',
    'Окружающий мир',
    'Страны и столицы',
    'Шахматы',
  ];

  return (
    <div className="sidebar">
      {tags.map((tag: any, index: number) => {
        return (
          <div
            className={choosenTag == index ? 'tag-choosen' : 'tag'}
            onClick={() => dispath(setChoosenTag(index))}
            key={index}
          >
            {tag}
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
