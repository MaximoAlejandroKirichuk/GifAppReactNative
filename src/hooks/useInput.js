import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCategories } from '../store/slices/categoriesGif';

export const useInput = () => {
    const dispatch = useDispatch();
    
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
        dispatch(setCategories(newCategory))
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


