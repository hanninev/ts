import Part from "./Part";

interface ContentProps {
  courseParts: CoursePartProps[];
}

interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartBasic extends CoursePartBasicWithDescription {
  kind: "basic"
}

interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group"
}

interface CoursePartBackground extends CoursePartBasicWithDescription {
  backgroundMaterial: string;
  kind: "background"
}

interface CoursePartBasicWithDescription extends CoursePartBase {
  description: string;
}

interface CoursePartSpecial extends CoursePartBasicWithDescription {
  requirements: string[];
  kind: "special";
}

export type CoursePartProps = 
| CoursePartBasic 
| CoursePartGroup 
| CoursePartBackground
| CoursePartSpecial;

const Content = ({ courseParts }: ContentProps) => {
  return courseParts.map((part, i) => (
    <p key={i}>
        <Part key={part.name} part={part} />
    </p>
  ));
};

export default Content;