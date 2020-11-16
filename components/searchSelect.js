import React from "react";
import Select from "react-select";
import { officesDropdown } from "../data/join-now";

export const SearchSelect = (props) => <Select options={props.options} onChange={props.onChange} value={props.value} />;
