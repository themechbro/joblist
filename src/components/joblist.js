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
import Role from "./role";
import Location from "./location";
import "./joblist.css";
import Button from "@mui/material/Button";
import BoltIcon from "@mui/icons-material/Bolt";
import AvatarGroup from "@mui/material/AvatarGroup";

function JobCard({ job, index }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      className="card"
      key={index}
      sx={{
        maxWidth: 345,
        marginBottom: 5,
        marginTop: 1,
        flex: "0 1 calc(25%- 1em)",
      }}
      elevation={6}
      borderRadius={4}
      boxShadow={3}
    >
      <div className="card-header">
        <Avatar
          aria-label="jobs"
          src={job.logoUrl}
          sx={{ width: 56, height: 56, m: "auto" }}
        ></Avatar>
        <div className="card-header-text">
          <h1 className="h4"> {job.companyName}</h1>
          <h3 className="blockquote">{job.jobRole}</h3>
          <p className="lead">{job.location}</p>
          <p className="blockquote-footer">
            Minimum Experience:{job.minExp ? job.minExp : job.maxExp}
          </p>
        </div>
      </div>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <h1 className="h6 ">
            <b>
              <u>About Us:</u>
            </b>
          </h1>
          {expanded
            ? job.jobDetailsFromCompany
            : job.jobDetailsFromCompany.slice(0, 100) + "..."}{" "}
          {/* Limiting to first 100 characters */}
          {!expanded && (
            <Button size="small" onClick={toggleExpanded}>
              {job.jobDetailsFromCompany.length > 100 ? "Read More" : ""}
            </Button>
          )}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Expected Salary: {job.maxJdSalary} LPA
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          dispaly: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          component="a"
          variant="contained"
          tabIndex={-1}
          startIcon={<BoltIcon sx={{ color: "yellow" }} />}
          href={job.jdLink}
          sx={{
            width: "100%",
            padding: "5px",
            marginTop: "10px",
            backgroundColor: "cyan",
            color: "black",
          }}
        >
          EASY APPLY
        </Button>

        <Button
          component="a"
          variant="contained"
          tabIndex={-1}
          href={job.jdLink}
          sx={{
            width: "100%",
            padding: "5px",
            marginTop: "10px",
            backgroundColor: "purple",
          }}
        >
          <AvatarGroup max={2}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 20, height: 20 }}
            />
            <Avatar
              alt="Travis Howard"
              src="/static/images/avatar/2.jpg"
              sx={{ width: 20, height: 20 }}
            />
          </AvatarGroup>
          Unlock Referral Asks
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
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");

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
      <div className="filter-grp  m-auto">
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
        <Role selectedRole={selectedRole} setSelectedRole={setSelectedRole} />
        <Location
          selectedPlace={selectedPlace}
          setSelectedPlace={setSelectedPlace}
        />
      </div>

      <div
        className="deck pt-3 collapse navbar-collapse"
        id="navbarSupportedContent"
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
            const isExperienceMatch =
              selectedExperience === "All" ||
              selectedExperience === "" ||
              selectedExperience === "0" ||
              job.minExp === selectedExperience;
            const isCompanyMatch =
              selectedCompany === "" ||
              job.companyName.includes(selectedCompany);
            const isRemoteMatch =
              selectedRemote === "" ||
              (selectedRemote === "remote" && job.location === "remote") ||
              (selectedRemote === "OnSite" && job.location !== "remote");

            const isTechMatch =
              selectedRole === "" || job.jobRole.includes(selectedRole);

            const isLocationMatch =
              selectedPlace === "" || job.location === selectedPlace;

            return (
              isExperienceMatch &&
              isCompanyMatch &&
              isRemoteMatch &&
              isTechMatch &&
              isLocationMatch
            );
          })

          //if (selectedRemote === "remote") {
          //  return job.location === "remote";
          //} else if (selectedRemote === "OnSite") {
          // return job.location !== "remote";
          //}
          //return true; // Return true if no filter is applied
          //})

          //return (
          //(selectedExperience === "" ||
          // job.minExp === selectedExperience) &&
          //(selectedCompany === "" ||
          // job.companyName.includes(selectedCompany)) &&
          //(selectedRemote === "" || job.remote === selectedRemote)
          //);
          //})
          .map((job, index) => (
            <JobCard job={job} index={index} />
          ))}
      </div>
    </div>
  );
}

export default JobList;
