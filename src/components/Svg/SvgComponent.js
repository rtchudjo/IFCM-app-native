import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-0.25 -0.25 194.5 102.5"
    width={100}
    height={100 }
    {...props}
  >
    <Path
      fill="none"
      stroke="red"
      strokeWidth={0.25}
      d="M0 0h20c26 0 39.3 53.6 76.4 53.6C134 53.6 147.5 0 172 0h21.5m.5 0v102H0V0m.433.38c5.084 0 1.641.066 10.884.043 11.276-.029 7.52 0 9.487.042C50.797 1.105 59.8 53.6 96.9 53.6S147.534.564 172.534.564c16.7 0-4.341-.069 21.359-.069L194 102H0V0Z"
    />
  </Svg>
)
export default SvgComponent
