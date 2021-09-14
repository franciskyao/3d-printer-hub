import React, { useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddIcon from '@material-ui/icons/Add';
import ShareIcon from '@material-ui/icons/Share';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';

const cardStyles = makeStyles(() => ({
  root: {
    borderRadius: 15,
    transition: '.8s',
    backgroundColor: '##fafafa',
    '&:hover': {
      boxShadow: '0 5px 5px 2px #c4302b',
      transform: 'scale(1.05)'
    }
  },
  media: {
    height: 250,
    width: 250,
    justifyContent: 'center',
    margin: 'auto',
    alignItems: 'center',
  },
}));

const SearchResultEntry = function (props) {
  const [ category, setCategory] = useState(null)
  const { name, public_url, preview_image, like_count, comment_count, creator } = props.entry;
  const { name: author, thumbnail: creatorThumbnail } = creator;
  const classes = cardStyles();

  function addToDb() {
    axios.post('/addproject', {
      name: name,
      public_url: public_url,
      preview_image: preview_image,
      category: category
    })
      .then(() => props.updateList())
      .catch(() => console.log('Failed to add in DB'));
  }

  return (
    <div className="searchCard">
      <Card>
        <CardHeader
          title={<b>{name}</b>}
          avatar={<Avatar src={creatorThumbnail}/>} />
        <CardMedia
          className={classes.media}
          image={preview_image}/>
        <CardActions>
          <IconButton onClick={addToDb}>
            <AddIcon/>
          </IconButton>
          <InputLabel id="project category">category</InputLabel>
          <Select
            labelId="project category"
            onChange={(e) => setCategory(e.target.value)}
            defaultValue=''>
            <MenuItem value="extruder">extruder</MenuItem>
            <MenuItem value="hotend">hotend</MenuItem>
            <MenuItem value="project">project</MenuItem>
          </Select>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
          {like_count}
          <IconButton>
            <ShareIcon />
          </IconButton>
          {comment_count}
        </CardActions>
      </Card>
    </div>
  );
};

export default SearchResultEntry;

SearchResultEntry.propTypes= {
  entry: PropTypes.func,
  updateList: PropTypes.func,
};