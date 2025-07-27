"use client";

import { motion } from "framer-motion";
import { headerVariants } from "../../../constants/headerVariants";
import { Divider } from "@mui/material";

const HeaderDivider = ({ animate, width }) => {
  return (
    <motion.div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "flex-end"
      }}
      variants={headerVariants}
      initial={"hidden"}
      animate={animate}
    >
      <Divider
        className="headerDivider"
        variant="middle"
        color="white"
        sx={{ height: "4px", my: 1, width: width }}
        />

    </motion.div>
  )
}

export default HeaderDivider