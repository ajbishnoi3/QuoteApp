import Quote from "./Quote";
import Grid from "@mui/material/Grid";
export default function Home() {
  
  const arr =[1,2,3,4,5,6,7,8,9]
  return (
      <Grid
        container
        rowSpacing={1}
        px={3}
        columnSpacing={{ xs: 2, sm: 2, md:3}}
      >
      {arr.map
        ((e)=>{
        return(
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Quote key={e} />
          </Grid>
          )})
      }
      </Grid>
  );
}
