import { CONTACTS } from "@constants";
import React from "react";
import { VerticalUtinities } from "@components";

const data = CONTACTS;
const Contacts = () => <VerticalUtinities title="Bài học gần đây" utinities={data} />;

export default Contacts;
