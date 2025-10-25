import React from "react";
import { PROCEDURES } from "@constants";
import { VerticalUtinities } from "@components";

const data = PROCEDURES;

const Procedures = () => (
    <VerticalUtinities title="Thành tích" utinities={data} />
);

export default Procedures;
