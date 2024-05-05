import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs } from '../actions/jobActions';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import './joblist.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';

function JobList() {
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs.items[0]);
  console.log(jobs);

  useEffect(() => {
    dispatch(fetchJobs(10,0));
  }, [dispatch]);

  return (
    <div className='deck'>
      {jobs.map(job => (
        <Card sx={{ maxWidth: 345, marginBottom:2, marginTop:1}}>
      <CardHeader
        avatar={
          <Avatar  aria-label="jobs">
            <img src={job.logoUrl}/>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={job.jobRole}
        subheader={job.location}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {job.jobDetailsFromCompany}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton></CardActions>
    </Card>
      ))}
    </div>
  );
}

export default JobList;
