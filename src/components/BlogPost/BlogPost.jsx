import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const BlogPost = ({ article }) => {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={article.image || 'https://placehold.co/345x140'} 
        alt={article.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article.excerpt}
        </Typography>
        <Box sx={{ pt: 2 }}>
          <Typography variant="caption" display="block">
            {article.date}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BlogPost;
