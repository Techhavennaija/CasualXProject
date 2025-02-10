import React, { useState, useEffect } from "react";
import ProfileCarousel from "../Users/ProfileCarousel";
import EscortsList from "../Users/EscortsList";

function Main() {
  return (
    <div className="escort_wrapper">
      <ProfileCarousel />
      <EscortsList />
    </div>
  );
}

export default Main;
