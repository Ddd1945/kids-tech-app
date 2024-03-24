import React from 'react';

const configureCourses: React.FC<{
  choosenTag: number;
  courses: any[];
}> = ({ choosenTag, courses }) => {
  let extractedCourses: any[] = [];
  let rowCourses: any[] = [];
  let gridCourses: any[] = [];
  let tag = '';
  let counter = 0;

  if (choosenTag == 0) tag = 'Все темы';
  else if (choosenTag == 1) tag = 'Логика и мышление';
  else if (choosenTag == 2) tag = 'Загадки';
  else if (choosenTag == 3) tag = 'Головоломки';
  else if (choosenTag == 4) tag = 'Путешествия';
  else if (choosenTag == 5) tag = 'Окружающий мир';
  else if (choosenTag == 6) tag = 'Страны и столицы';
  else tag = 'Шахматы';

  if (choosenTag !== 0)
    courses.map((course) => {
      if (course.tags.includes(tag)) extractedCourses.push(course);
    });
  else extractedCourses = courses;

  extractedCourses.map((course) => {
    if (counter == 3) {
      gridCourses.push(rowCourses);
      rowCourses = [];
      counter = 0;
    }

    rowCourses.push(course);

    counter++;
  });

  if (counter != 0) gridCourses.push(rowCourses);

  return gridCourses;
};

export default configureCourses;
