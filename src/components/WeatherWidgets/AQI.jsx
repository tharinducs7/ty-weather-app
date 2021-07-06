import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

const AQI = (props) => {
    return (
      <ReactSpeedometer
        width={300}
        height={200}
        needleHeightRatio={0.7}
        value={props.value}
        currentValueText="AIR QUALITY INDEX"
        segmentColors={[
          "#21ba45",
          "#21ba45",
          "#b5cc17",
          "#fbbd08",
          "#f2711d",
          "#f2711d",
          "#db2829",
          "#db2829",
          "#ab1011",
          "#6434c9",
        ]}
        segments={10}
        ringWidth={30}
        maxValue={10}
        needleTransitionDuration={3333}
        needleTransition="easeElastic"
        needleColor={"#00b5ad"}
        textColor={"#d8dee9"}
      />
    );
};

export default AQI;