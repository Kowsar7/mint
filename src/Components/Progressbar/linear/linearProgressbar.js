import * as React from "react";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { goNext } from "../../../redux/actions";
import { connect } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const CustomizedLinearProgress = styled(Box)`
  color: #20b2aa;

  :hover {
    color: #2e8b57;
  }
`;

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <CustomizedLinearProgress
        sx={{
          width: "100%",
          color: props.color,
        }}
      >
        <LinearProgress
          variant="determinate"
          {...props}
          sx={{
            height: "35px",
            borderRadius: ".375rem",
          }}
        />
      </CustomizedLinearProgress>
      <Box sx={{ minWidth: 35, marginLeft: 1 }}>
        <Typography
          variant="body2"
          sx={{ fontFamily: "inherit" }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

function LinearProgressbar(props) {
  const [progress, setProgress] = React.useState(0);
  const time = parseInt(props.loadingtime, 10) * 10;
  const maxValue = parseInt(props.maxValue, 10);

  React.useEffect(() => {
    setTimeout(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress >= maxValue ? maxValue : prevProgress + 1
        );
      }, time);

      return () => {
        clearInterval(timer);
      };
    }, parseInt(props.delayTime, 10) * 1000);

    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    if (progress === maxValue) {
      if (props.hasButton !== "true") {
        props.goNext(props.aid, props.code);
      }
    }
  });

  const theme = createTheme({
    palette: {
      primary: { main: props.color },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", direction: "ltr" }}>
        <LinearProgressWithLabel color="primary" value={progress} />
      </Box>
    </ThemeProvider>
  );
}

const mapStateToprops = (state) => ({
  code: state.quiz.code,
});

const mapDispatchToprops = (dispatch) => ({
  goNext: (aid, code) => dispatch(goNext(aid, code)),
});

export default connect(mapStateToprops, mapDispatchToprops)(LinearProgressbar);
