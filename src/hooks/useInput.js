import { useState } from 'react';
export const useInput = ({onAddCategory}) => {
    const [inputValue, setInputValue] = useState('')
    const [modalVisible, setModalVisible] = useState(false)

    const handleModal = () =>{
        setModalVisible(!modalVisible)
    }
    
    const onChange = (text) =>{
        setInputValue(text);
    }
    
    const onSubmit = () =>{
        const newCategory = inputValue.trim();
        if(newCategory.length <= 1) return setModalVisible(true);
        onAddCategory(newCategory);
        setInputValue('');
    }   

    return {
        inputValue,
        onChange,
        onSubmit,
        handleModal,
        modalVisible   
  }
}


