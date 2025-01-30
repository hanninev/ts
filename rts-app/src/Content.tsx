interface ContentProps {
  courseParts: CoursePartsProps[];
}

interface CoursePartsProps {
  name: string;
  exerciseCount: number;
}

const Content = ({ courseParts }: ContentProps) => {
  return courseParts.map((part, i) => (
    <p key={i}>
      {part.name} {part.exerciseCount}
    </p>
  ));
};

export default Content;