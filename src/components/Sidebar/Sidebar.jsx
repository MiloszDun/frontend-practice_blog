import { useContext } from "react"
import { ArticlesContext } from "../../data/ArticlesContext"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CheckBox from "@mui/icons-material/CheckBox";

const Sidebar = () => {

  const {isMusicChecked, isBooksChecked, toggleBooks, toggleMusic, sortOrder, toggleSortOrder} = useContext(ArticlesContext);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Filter Posts
      </Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox checked={isMusicChecked} onClick={toggleMusic} />} label="Music" />
        <FormControlLabel control={<Checkbox checked={isBooksChecked} onClick={toggleBooks} />} label="Books" />
      </FormGroup>
      <Button
        sx={{ bgcolor: 'primary.main', ':hover': { bgcolor: 'primary.dark' }, marginTop: 4 }}
        variant="contained"
        color="primary"
        onClick={toggleSortOrder}
      >
        Sort by {sortOrder === 'newest' ? 'Oldest' : 'Newest'}
      </Button>
    </Box>
  )
}
export default Sidebar