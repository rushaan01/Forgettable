import React from 'react';
import classes from './CreateEncounter.module.css';
import {Card} from '@mui/material';
import TextField from '@mui/material/TextField';
import CustomButton from '../../Components/CustomButton/CustomButton';
import {Autocomplete} from '@mui/material';


export default function Encounters(props) {
  const {person} = props;
  // dummydata
  const options = ['Flynn', 'Jared'];

  const [name, setName]=React.useState(' ');
  const [date, setDate]=React.useState(' ');
  const [where, setWhere]=React.useState(' ');
  const [details, setDetails]=React.useState(' ');
  const handleNameChange=(event)=>{
    setName(event.target.name);
  };
  const handleDateChange=(event)=>{
    setDate(event.target.date);
  };
  const handleWhereChange=(event)=>{
    setWhere(event.target.where);
  };
  const handleDetailsChange=(event)=>{
    setDetails(event.target.details);
  };

  const handleCancelClick = (event) => {
    alert('canceled');
  };
  const handleSaveClick = (event) => {
    alert('Saved');
  };
  return (
    <div className={classes.Card}>
      <Card sx={{Width: 910, Height: 875, bgcolor: 'var(--lcard)', borderRadius: 6, boxShadow: 0}}>
        <div className={classes.CardContent}>
          <div className={classes.Title}>Create Encounter</div>
          <div className={classes.SubTitle}>
            <div className={classes.SubHeader}>You Encountered:</div>
            <div className={classes.SearchBar}>
              <Autocomplete
                id="combo-box-demo"
                options={options}
                sx={{width: 250}}
                size='small'
                renderInput={(params) => <TextField {...params} label="" />}
                value={name}
                onChange={handleNameChange}
              />
            </div>
          </div>
          <div className={classes.TextField}>
            <div className={classes.Text}>Date we met:</div>
            <div><TextField
              size='small'
              id="fullWidth"
              color='info'
              sx={{width: 250, marginLeft: 3}}
              value={date}
              onChange={handleDateChange}
            >
            </TextField></div>
          </div>
          <div className={classes.TextField}>
            <div className={classes.Text}>Where we met:</div>
            <div><TextField
              size='small'
              id="fullWidth"
              color='info'
              sx={{width: 250, marginLeft: 1.5}}
              value={where}
              onChange={handleWhereChange}
            >
            </TextField></div>
          </div>
          <div className={classes.Details}>Details:</div>
          <div>
            <TextField
              fullWidth
              id="fullWidth"
              multiline
              color='info'
              rows={7}
              value={details}
              onChange={handleDetailsChange}
            >
            </TextField>
          </div>
          <div className={classes.Buttons}>
            <CustomButton btnText='Cancel' className='Button' onClick={handleCancelClick}></CustomButton>
            <CustomButton btnText='Save' className='Button' onClick={handleSaveClick}></CustomButton>
          </div>

        </div>

      </Card>

    </div>
  );
}
