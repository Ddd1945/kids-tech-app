import React from 'react';
import Card from '../Card/Card';
import { ReactTyped } from 'react-typed';
import getRandomEmoji from '../../util/getRandomEmoji';
import './CoursesBlock.scss';

const CoursesBlock: React.FC<{ courses: any[] }> = ({ courses }) => {
  return (
    <>
      {courses.length > 0 ? (
        <table className="grid-container">
          <tbody>
            {courses.map((row: any[], index: number) => {
              return (
                <tr key={index}>
                  {row.map((course: any, index: number) => {
                    return (
                      <td key={index}>
                        <Card
                          key={index}
                          imgSrc={course.image}
                          title={course.name}
                        />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="empty-course">
          <h1>
            Здесь пусто...{' '}
            <ReactTyped
              strings={[
                `Мы это исправим!&#x${getRandomEmoji()?.codePointAt(0)?.toString(16)};`,
              ]}
              typeSpeed={50}
              loop
            />
          </h1>
        </div>
      )}
    </>
  );
};

export default CoursesBlock;
