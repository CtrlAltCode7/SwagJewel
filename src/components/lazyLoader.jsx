import React from "react";
import { CircularProgress, Skeleton, Grid } from "@mui/material";
import Box from "@mui/material/Box";

const Loader = () => {
  return (
    <Box className="flex items-center justify-center body overflowY-hidden overflowX-hidden w-screen h-screen "
      style={{
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <CircularProgress size={70} />
    </Box>
  );
};

const ListingLoader = () => {
  return (
    <div className="bg-white">
      <Skeleton variant="rectangular" height={60} className=" w-full" />

      <div className="container my-3">
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Skeleton
              variant="rectangular"
              height={70}
              width={1275}
              className="mx-5 rounded-10"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Skeleton
              variant="rectangular"
              width={285}
              height={200}
              className="rounded-10 ml-5 overflowY-hidden"
            />
            <Skeleton
              variant="rectangular"
              width={285}
              height={300}
              className="mt-2 ml-5 rounded-10"
            />
          </Grid>
          <Grid item xs={12} md={9}>
            <Skeleton
              variant="rectangular"
              className="rounded-10 w-full"
              height={70}
            />
            <Skeleton
              variant="rectangular"
              className="rounded-10 w-full  mt-3"
              height={1500}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const DetailLoader = () => {
  return (
    <div className="bg-white">
      <Skeleton
        variant="rectangular"
        width={500}
        height={60}
        className=" w-full"
      />

      <div className="container my-7">
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Skeleton
              variant="rectangular"
              width={290}
              height={250}
              className="rounded-10 ml-5 overflowY-hidden"
            />
            <Skeleton
              variant="rectangular"
              width={290}
              height={1000}
              className="mt-2 ml-5 h-full rounded-10"
            />
          </Grid>
          <Grid item xs={12} md={9}>
            <Skeleton
              variant="rectangular"
              className="rounded-10 w-full"
              height={70}
            />
            <Skeleton
              variant="rectangular"
              className="rounded-10 w-full  mt-3"
              height={1500}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export { Loader, ListingLoader, DetailLoader };
