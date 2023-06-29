import Academic from "../components/Governance/Academic";
import FacultyCard from "../components/Governance/FacultyCard";
import Other_officers from "../components/Governance/Other_officers";
import Statutory from "../components/Governance/Statutory";
import University_auth from "../components/Governance/University_auth";
import { UniAuth } from "../components/Governance/facultyData";

const Governance = () => {
  return (
    <div className="space-y-4 mb-4 md:space-y-16 md:mb-8 p-10">
      {/*uni authority*/}
      <section>
        <University_auth />
      </section>

            {/*Academic Court */}
      <section>
            <Academic />
      </section>
      <Statutory />
      <Other_officers/>
    </div>
  );
};

export default Governance;
