

import { useSelector } from 'react-redux';
import LessonCard from './components/lesson/LessonCard';

export default function Home() {
  const lessons = useSelector((state) => state.lessons);

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-6">Грамматический урок</h1>
      <div className="grid grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} level={lesson.level} />
        ))}
      </div>
    </div>
  );
}

