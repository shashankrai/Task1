import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={11}
    width={900}
    height={193}
    viewBox="0 0 900 193"
    backgroundColor="#f3f3f3"
    foregroundColor="#EDEDED"
    {...props}
  >
   <rect x="300" y="77" rx="0" ry="0" width="150" height="17"></rect>
   <rect x="300" y="47" rx="0" ry="0" width="510" height="17"> </rect>
   <rect x="300" y="12" rx="0" ry="0" width="510" height="25"> </rect>
  <rect x="40" y="11" rx="0" ry="0" width="200" height="150"></rect>
  </ContentLoader>
)

export default MyLoader