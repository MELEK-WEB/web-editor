import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs style={{color:'white'}} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Milstone 1
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Lesson 1
        </Link>
        <Typography>Learn HTML CSS And Javascript </Typography>
      </Breadcrumbs>
    </div>
  );
}
