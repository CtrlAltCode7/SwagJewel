import { Box } from "@mui/material";
import ListedItems from "../../components/listItems/index";

const data = [
  {
    heading: "Flexible Collection",
    body1: "Engagement Rings",
    body2: "Gemstone Rings",
    body3: "Men`s",
  },
  {
    heading: "Bridal",
    body1: "ever&ever",
    body2: "New Products",
    body3: "Bridal Mountings",
  },
  {
    heading: "Mountings",
    body1: "Advanced Mountings Search",
    body2: "3C Designs",
    body3: "New Products",
  },
  {
    heading: "Findings",
    body1: "Die-Struck Jewelry ",
    body2: "Semi-Set Findings",
    body3: "New Products",
  },
];

function ListedText() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          margin: "0rem 0 1.5rem 0",
          flexWrap: "wrap",
          '@media (max-width:  768px)': { // Media query for smaller screens
            // width: '50%', // Adjust width for smaller screens
            flexDirection: "column",
          }
        }}
      >
        {data?.map((item, index) => (
          <ListedItems
            key={index}
            heading={item.heading}
            body1={item.body1}
            body2={item.body2}
            body3={item.body3}
            body4={item?.body4}
            body5={item?.body5}
            body6={item?.body6}
            body7={item?.body7}
            footer={true}
          />
        ))}
      </Box>
    </>
  );
}

export default ListedText;
