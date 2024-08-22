"use client";

import Modal from "@/components/elements/Modal/Modal";
import { ModalProvider } from "@/store/modal-context";
import React from "react";

const Providers = ({ children }) => {
  return (
    <ModalProvider>
      {children}
      <Modal />
    </ModalProvider>
  );
};

export default Providers;
