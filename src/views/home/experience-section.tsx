import WorkCard from "@/components/cards/work-card";
import LabelSection from "@/components/sections/label-section";
import { fetchWorks } from "@/services/cms/work";

type Props = {};

const ExperienceSection = async (props: Props) => {
  const works = await fetchWorks();

  return (
    <LabelSection
      label="Experience"
      wrapperClassname="p-4"
      className="min-h-full"
    >
      <div className="relative pl-2">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
        <div className="space-y-0">
          {works.map((work, index) => (
            <WorkCard key={work.id} data={work} isLast={index === works.length - 1} />
          ))}
        </div>
      </div>
    </LabelSection>
  );
};

export default ExperienceSection;

