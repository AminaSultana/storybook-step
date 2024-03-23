import {
  Stepper,
  Step as MUIStep,
  StepLabel,
  Box,
  StepContent,
  Typography,
} from "@mui/material";
import useStyles from "./Step.styles";

const Step = (props) => {
    const { orientation, label, position, status, description } = props;
    const classes = useStyles();
    
    return (
      <Box
        className={`${classes.root}`}
        sx={{ flexDirection: orientation === "vertical" ? "column" : "row" }}
      >
        {(position === "end" || position === "middle") && (
          orientation === "vertical" ? (
            <Box
              className={`${classes.lineVertical}`}
            />
          ) : (
            <Box
              className={`${classes.line} ${classes.lineHorizontal} ${position === "middle" && classes.lineHorizontal2}`}
            />
          )
        )}
        <Stepper
          orientation={orientation}
          label={label}
          alternativeLabel={orientation === "horizontal"}
        >
          <MUIStep key={label}>
            <StepLabel>{label}</StepLabel>
            {description && (
              <StepContent>
                <Typography>{description}</Typography>
              </StepContent>
            )}
          </MUIStep>
        </Stepper>
        {(position === "start" || position === "middle") && (
          <Box
            className={`${classes.line} 
            ${orientation === "vertical" && classes.lineVertical} 
            ${orientation === "horizontal" && classes.lineHorizontal} 
            ${orientation === "horizontal" && classes.lineHorizontal2}`}
          />
        )}
      </Box>
    );
  };
  

export default Step;
