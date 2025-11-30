import { TCMSPage } from "@/types/cms/page";
import { TCMSProfile } from "@/types/cms/profile";
import ExperienceSection from "./experience-section";
import FeaturedProjects from "./featured-projects";
// import GithubActivity from "./github-activity"; // Kept for future use
import HeroSection from "./hero-section";
import RecentActivity from "./recent-activity";
import TechStack from "./tech-stack";

export type Props = {
  page: TCMSPage;
  profile: TCMSProfile;
};

const HomeView = (props: Props) => {
  const { profile } = props;

  return (
    <>
      <HeroSection {...props} />

      <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* GitHub Activity - Removed but can be re-added by uncommenting below */}
        {/* <div className="md:col-span-2">
          <GithubActivity />
        </div> */}
        <div className="md:col-span-3">
          <ExperienceSection />
        </div>
        <div className="md:col-span-3">
          <FeaturedProjects />
        </div>
        <div className="md:col-span-2">
          <TechStack stackItems={profile.stackItems} />
        </div>
        <div>
          <RecentActivity product={profile.ongoingProduct} />
        </div>
      </section>
    </>
  );
};

export default HomeView;
