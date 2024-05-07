import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "../actions/jobActions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Experience from "./experience";
import CompanyName from "./company";
import Remote from "./remote";
import "./joblist.css";
import Button from "@mui/material/Button";
import BoltIcon from "@mui/icons-material/Bolt";

function JobCard({ job, index }) {
  return (
    <Card
      key={index}
      sx={{
        maxWidth: 345,
        marginBottom: 5,
        marginTop: 1,
        flex: "0 1 calc(25%- 1em)",
      }}
    >
      <div className="card-header">
        <Avatar
          aria-label="jobs"
          src={job.logoUrl}
          sx={{ width: 56, height: 56 }}
        ></Avatar>
        <div className="card-header-text">
          <h1>{job.companyName}</h1>
        </div>
      </div>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {job.jobDetailsFromCompany}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<BoltIcon />}
        >
          EASY APPLY
        </Button>
      </CardActions>
    </Card>
  );
}

function JobList() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.items);
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedRemote, setSelectedRemote] = useState("");

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    dispatch(fetchJobs(11, offset));
  }, [dispatch, offset]);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setOffset((prevOffset) => prevOffset + 9);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="filter-grp d-flex flex-row justify-content-center m-auto">
        <Experience
          selectedExperience={selectedExperience}
          setSelectedExperience={setSelectedExperience}
        />
        <CompanyName
          selectedCompany={selectedCompany}
          setSelectedCompany={setSelectedCompany}
        />
        <Remote
          selectedOption={selectedRemote}
          setSelectededOption={setSelectedRemote}
        />
      </div>

      <div
        className="deck pt-3"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {jobs
          .filter((job) => {
            if (typeof job !== "object") {
              return false;
            }
            return (
              (selectedExperience === "" ||
                job.minExp === selectedExperience) &&
              (selectedCompany === "" ||
                job.companyName.includes(selectedCompany)) &&
              (selectedRemote === "" || job.remote === selectedRemote)
            );
          })
          .map((job, index) => (
            <JobCard job={job} index={index} />
          ))}
      </div>
    </div>
  );
}

export default JobList;
