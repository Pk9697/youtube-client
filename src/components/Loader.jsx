import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

function Loader({ children, inProgress = false }) {
  return inProgress ? (
    <ThreeDots
      visible
      height="80"
      width="80"
      color="#4fa94d"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass="flex justify-center items-center"
    />
  ) : (
    children
  )
}

export default Loader
