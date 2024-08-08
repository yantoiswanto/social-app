import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg";

const Plus = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} color="#000000" fill="none" {...props}>
    <Path d="M12 4V20" stroke="currentColor" strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default Plus;
