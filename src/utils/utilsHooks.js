import { useState } from "react";


export function useModalUtil(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    function openModal(){
        setIsModalOpen((isOpen)=>true)
    }
  
    function closeModal(){
        setIsModalOpen((isOpen)=>false)
    }
  
      return {
        isModalOpen,
        openModal,
        closeModal
      }
  }