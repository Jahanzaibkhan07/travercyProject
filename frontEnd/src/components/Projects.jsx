import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import ProjectCard from "./ProjectCard";
import { GET_PROJECTS } from "../queries/projectQueries";
import AddProjectModal from "./AddProjectModal";

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <div className="m-3">
      <div className="d-flex">
        <h3 className='me-3'>Projects Details</h3>
        <AddProjectModal />
      </div>
      {data.projects.length > 0 ? (
        <div className="row mt-4">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </div>
  );
}
