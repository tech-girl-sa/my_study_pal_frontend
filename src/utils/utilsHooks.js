import { useState } from "react";


export function useModalUtil(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [instanceId, setInstanceId] = useState(false);
    
    function openModal(event){
        const id = event.currentTarget.id;
        setInstanceId(id)
        setIsModalOpen((isOpen)=>true)
    }
  
    function closeModal(){
        setIsModalOpen((isOpen)=>false)
    }
  
      return {
        isModalOpen,
        instanceId,
        openModal,
        closeModal
      }
  }