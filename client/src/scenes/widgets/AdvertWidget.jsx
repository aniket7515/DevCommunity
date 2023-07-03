import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Advertisement
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        // src="http://localhost:3001/assets/info4.jpeg"
        src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Mercedes-Benz/GLC-2023/9132/1654238592605/front-left-side-47.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Mercedes Benz</Typography>
        <Typography color={medium}>https://www.mercedes-benz.co.in/passengercars.html</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      The Star Is Reborn. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cum neque vero.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
