import { useEffect, useState } from 'react';
import axiosInstance from '../../api/axios';
import CoursesBlock from '../../components/CoursesBlock/CoursesBlock';
import SideBar from '../../components/SideBar/SideBar';
import configureCourses from '../../util/configureCourses';
import { useSelector } from 'react-redux';
import { getChoosenTag } from '../../redux/slices/sideBarSlice';
import './HomePage.scss';

export default function HomePage() {
  const choosenTag = useSelector(getChoosenTag);
  const [courses, setCourses] = useState<any>([[{}]]);

  const init_data = async () => {
    const allCourses = (await axiosInstance.get('docs/courses.json')).data;

    const configuredCourses = configureCourses({
      choosenTag: choosenTag,
      courses: allCourses,
    });

    setCourses(configuredCourses);
  };

  useEffect(() => {
    init_data();
  }, [choosenTag]);

  return (
    <div className="main">
      <SideBar />
      <div className="course-block">
        <CoursesBlock courses={courses} />
      </div>
    </div>
  );
}
