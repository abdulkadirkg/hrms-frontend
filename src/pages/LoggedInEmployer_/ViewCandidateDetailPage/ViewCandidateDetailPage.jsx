import React, { useEffect, useState } from "react";
import "./ViewCandidateDetailPage.css";
import CandidateService from "../../../services/candidateService";
import { useParams } from "react-router-dom";
import CandidateLayout from "../../../layouts/CandidateLayout/CandidateLayout";
export default function ViewCandidateDetailPage() {
  let { id } = useParams();
  const [detailedCandidateDto, setDetailedCandidateDto] = useState({});
  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService.getCandidate(id).then((result) => setDetailedCandidateDto(result.data.data));
  }, []);
  return (
    <div>
      <CandidateLayout detailedCandidateDto={detailedCandidateDto} />
    </div>
  );
}
