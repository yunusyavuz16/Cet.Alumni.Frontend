import React, { useMemo } from "react";
import { useAlumni, useAlumniByTermId } from "./hooks";
import AlumniCard from "./components/AlumniCard";
import { useNavigate } from "react-router-dom";

const AlumniContainer: React.FC<{ termId?: number }> = ({ termId }) => {
  const { allAlumni, errorInitialAlumni, loadingInitialAlumni } = useAlumni();
  const { alumni, error, loading } = useAlumniByTermId(termId);
  // navigation
  const navigation = useNavigate();

  if (error || errorInitialAlumni) {
    return <div>Error: {error}</div>;
  }

  const data = (termId ? alumni : allAlumni) ?? [];
  const handleClick = (studentNo: number) => () => {
    navigation(`/profile/${studentNo}`);
  };

  const alumniData = useMemo(() => {
    return data.map((alumni) => (
      <AlumniCard
        onClick={handleClick(alumni.alumniStudentNo)}
        key={alumni.alumniStudentNo}
        firstName={alumni.firstName}
        lastName={alumni.lastName}
        profileDescription={alumni.profileDescription}
        sector={alumni.sector}
        company={alumni.company}
        jobTitle={alumni.jobTitle}
        termYear={alumni?.term?.termYear as number}
      />
    ));
  }, [data]);

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mt-3 w-full">
      {alumniData.length > 0 ? (
        alumniData
      ) : (
        <>
          <SkeletonAlumniCard />
          <SkeletonAlumniCard />
          <SkeletonAlumniCard />
          <SkeletonAlumniCard />
          <SkeletonAlumniCard />
          <SkeletonAlumniCard />
          <SkeletonAlumniCard />
          <SkeletonAlumniCard />
          <SkeletonAlumniCard />
          <SkeletonAlumniCard />
        </>
      )}
    </div>
  );
};

export default AlumniContainer;

const SkeletonAlumniCard = () => {
  return (
    <div className="animate-pulse bg-gray-500 rounded-lg shadow-md p-6 w-full">
      <div className="flex items-center">
        <div className="mr-4">
          <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-lg font-bold">
            L
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800"></h2>
          <p className="text-gray-600"></p>
          <p className="text-gray-600"></p>
          <p className="text-gray-600"></p>
        </div>
      </div>
      <p className="mt-4 text-gray-700"></p>
    </div>
  );
};
