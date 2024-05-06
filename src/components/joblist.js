import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "../actions/jobActions";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import "./joblist.css";
import Button from "@mui/material/Button";
import BoltIcon from "@mui/icons-material/Bolt";

function JobList() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.items);
  const [offset, setOffset] = useState(0);
  console.log(jobs);

  useEffect(() => {
    dispatch(fetchJobs(11, offset));
  }, [dispatch, offset]);

  function handleScroll() {
    //if condition checks if the user has moved down or not.
    //window.innerHeight is the height of the viewport,
    //document.documentElement.scrollTop is how much the user has scrolled vertically, and
    //document.documentElement.offsetHeight is the total height of the content of the page.
    //If the user hasn’t scrolled to the bottom of the page, the function returns immediately and does nothing.
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setOffset((prevOffset) => prevOffset + 9);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); //removes the event listener when the component unmounts. This is important to prevent memory leaks.
  }, []);

  return (
    <div
      className="deck"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {jobs.map((job, index) => (
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
      ))}
    </div>
  );
}

export default JobList;
