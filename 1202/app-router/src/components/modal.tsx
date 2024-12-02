"use client";
import React, { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import style from "@/styles/modal.module.css";
import { useRouter } from "next/navigation";

const Modal = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const modalRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
      modalRef.current?.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } 
  }, []);
  return createPortal(
    <dialog
      onClose={() => router.back()}
      onClick={(e) => {
        if ((e.target as HTMLDivElement).nodeName === "DIALOG") {
          router.back();
        }
      }}
      className={style.modal}
      ref={modalRef}
    >
      {children}
    </dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
