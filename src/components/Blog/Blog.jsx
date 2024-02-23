import BlogPost from "../BlogPost"
import { useContext } from "react"
import { ArticlesContext } from "../../data/ArticlesContext"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';

const Blog = () => {
  const { sortedArticles, isLoading, error } = useContext(ArticlesContext);

  return (
    <Box sx={{ flexGrow: 1}}>

      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Alert severity="error">
          <Typography variant="h6">
            Error: {error}. Please try refreshing the page.
          </Typography>
          <Typography variant="subtitle1">
            (Note: To test error handling, Mock API has a 10% chance of generating this error.)
          </Typography>
        </Alert>
      )}

      {!isLoading && !error && sortedArticles.length > 0 && (
        <Grid container spacing={2}>
          {sortedArticles.map(article => (
            <Grid item xs={6} key={article.id}>
              <BlogPost article={article} />
            </Grid>
          ))}
        </Grid>
      )}

      {!isLoading && !error && sortedArticles.length === 0 && (
        <Typography variant="subtitle1">
          No posts found.
        </Typography>
      )}
    </Box>
  )
}
export default Blog