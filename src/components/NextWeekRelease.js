import {motion} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import posters from "../posters/posters";
export const NextWeekRelease = () => {
return (
    <>
<div>
    <motion.div className="carousel">
        <motion.div className="inner-carousel">
            {/* <img src="" alt=""/> */}
            {posters.map(poster => {
                return(
                    <motion.div className="item">
                        <img src={poster} alt="" />
                        </motion.div>
                )
            })}
        </motion.div>
    </motion.div>
</div>
</>
);
};

